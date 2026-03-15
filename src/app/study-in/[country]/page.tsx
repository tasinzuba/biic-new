import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { fetchGraphQL } from "@/lib/graphql/fetcher";
import { GET_COUNTRY_BY_SLUG, GET_ALL_COUNTRIES } from "@/lib/graphql/queries/country";

type Props = { params: Promise<{ country: string }> };

export async function generateStaticParams() {
  try {
    const data = await fetchGraphQL(GET_ALL_COUNTRIES);
    return (data?.allDestination?.nodes ?? []).map((c: any) => ({ country: c.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  try {
    const data = await fetchGraphQL(GET_COUNTRY_BY_SLUG, { slug: country });
    const c = data?.destinationBy;
    return {
      title: `Study in ${c?.title ?? country}`,
      description: c?.destinationData?.heroSubtitle ?? "",
    };
  } catch {
    return { title: `Study in ${country}` };
  }
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;

  let raw: any = null;
  try {
    const res = await fetchGraphQL(GET_COUNTRY_BY_SLUG, { slug: country });
    raw = res?.destinationBy;
  } catch {
    // fallback to empty below
  }

  if (!raw) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-900 mb-4">Country Not Found</h1>
          <p className="text-gray-500 mb-6">We don&apos;t have information for this destination yet.</p>
          <Link href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition">
            Contact Us
          </Link>
        </div>
      </div>
    );
  }

  const cd = raw.destinationData ?? {};

  const data = {
    name: raw.title ?? country,
    flag: cd.flag ?? "🌍",
    heroImage: raw.featuredImage?.node?.sourceUrl ?? "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80",
    subtitle: cd.heroSubtitle ?? "",
    description: cd.description ?? "",
    tuitionRange: cd.tuitionRange ?? "Contact us for details",
    stats: (cd.stats ?? []).map((s: any) => ({
      number: s.statNumber,
      label: s.statLabel,
      icon: s.statIcon ?? "📊",
    })),
    whyStudy: (cd.whyStudy ?? []).map((w: any) => ({
      icon: w.icon ?? "✅",
      title: w.title,
      desc: w.description,
    })),
    gallery: (cd.gallery ?? []).map((g: any) => ({
      image: g.image?.node?.sourceUrl ?? "",
      label: g.label,
    })),
    topUniversities: (cd.topUniversities ?? []).map((u: any) => ({
      name: u.name,
      ranking: u.ranking,
      location: u.location,
      image: u.image?.node?.sourceUrl ?? "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80",
    })),
    requirements: {
      ielts: cd.requirements?.ieltsScore ?? "-",
      gpa: cd.requirements?.minGpa ?? "-",
      documents: typeof cd.requirements?.documents === 'string'
        ? cd.requirements.documents.split('\n').filter(Boolean)
        : (cd.requirements?.documents ?? []),
    },
    costOfLiving: {
      accommodation: cd.costOfLiving?.accommodation ?? "-",
      food: cd.costOfLiving?.food ?? "-",
      transport: cd.costOfLiving?.transport ?? "-",
      total: cd.costOfLiving?.total ?? "-",
    },
    intakes: (cd.intakes ?? []).map((i: any) => ({
      name: i.name,
      badge: i.badge,
      badgeColor: i.badgeColor ?? "bg-red-600",
      icon: i.icon ?? "📅",
      startDate: i.startDate,
      applicationDeadline: i.applicationDeadline,
      visaDeadline: i.visaDeadline,
      status: i.status ?? "upcoming",
      statusLabel: i.statusLabel ?? "Coming Soon",
      note: i.note ?? "",
      courses: typeof i.courses === 'string'
        ? i.courses.split('\n').filter(Boolean)
        : (i.courses ?? []),
    })),
    successStories: (cd.successStories ?? []).map((s: any) => ({
      name: s.studentName,
      photo: s.photo?.node?.sourceUrl ?? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
      university: s.university,
      course: s.course,
      year: s.year,
      flag: s.studentFlag ?? "🌍",
      story: s.story,
      rating: s.rating ?? 5,
    })),
    faq: (cd.faq ?? []).map((f: any) => ({ q: f.question, a: f.answer })),
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[85vh] min-h-[560px] flex items-center">
        <Image
          src={data.heroImage}
          alt={`Study in ${data.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{data.flag}</span>
              <span className="bg-white/20 backdrop-blur text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/30">
                Study Destination
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 leading-tight">
              Study in<br />{data.name}
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">{data.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg"
              >
                Free Consultation
              </Link>
              <Link
                href="/universities"
                className="bg-white/15 hover:bg-white/25 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                View Universities
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-center">
          <div className="animate-bounce text-2xl">↓</div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      {data.stats.length > 0 && (
        <section className="bg-red-600 text-white py-6">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.stats.map((s: any) => (
              <div key={s.label} className="text-center py-2">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-3xl font-bold">{s.number}</div>
                <div className="text-red-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── OVERVIEW ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Overview</span>
            <h2 className="text-4xl font-bold text-red-900 mt-2 mb-5">
              Why Study in {data.name}?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{data.description}</p>
            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="text-3xl">💰</div>
              <div>
                <div className="text-sm text-gray-500">Tuition Fee Range</div>
                <div className="font-bold text-red-800 text-lg">{data.tuitionRange}</div>
              </div>
            </div>
          </div>
          {data.whyStudy.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {data.whyStudy.map((item: any) => (
                <div key={item.title} className="bg-white border border-red-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-red-800 mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      {data.gallery.length > 0 && (
        <section className="py-8 px-4 bg-red-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data.gallery.map((g: any, i: number) => (
                <div key={i} className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 row-span-2 h-72 md:h-80" : "h-36 md:h-[calc(160px)]"}`}>
                  <Image
                    src={g.image}
                    alt={g.label}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-red-900/20 group-hover:bg-red-900/10 transition" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-red-900/60 px-3 py-1 rounded-full backdrop-blur-sm">
                    {g.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TOP UNIVERSITIES ── */}
      {data.topUniversities.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Top Picks</span>
              <h2 className="text-4xl font-bold text-red-900 mt-2">
                Top Universities in {data.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.topUniversities.map((uni: any) => (
                <Link
                  key={uni.name}
                  href={`/universities/${uni.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-red-100"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={uni.image}
                      alt={uni.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950/70 to-transparent" />
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {uni.ranking}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-red-900 text-lg group-hover:text-red-600 transition">
                      {uni.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                      <span>📍</span> {uni.location}
                    </p>
                    <div className="mt-3 text-red-600 text-sm font-semibold group-hover:underline">
                      View Details →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── REQUIREMENTS + COST ── */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">What You Need</span>
            <h2 className="text-4xl font-bold text-red-900 mt-2">Requirements & Costs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">📋</div>
                <h3 className="text-2xl font-bold text-red-800">Admission Requirements</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="text-gray-600 font-medium">IELTS Score</span>
                  <span className="font-bold text-red-700 text-lg">{data.requirements.ielts}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="text-gray-600 font-medium">Minimum GPA</span>
                  <span className="font-bold text-red-700 text-lg">{data.requirements.gpa}</span>
                </div>
                {data.requirements.documents.length > 0 && (
                  <div>
                    <p className="text-gray-700 font-semibold mb-3">Required Documents:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {data.requirements.documents.map((doc: string) => (
                        <div key={doc} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
                          <span className="text-gray-700 text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Cost of Living */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">💸</div>
                <h3 className="text-2xl font-bold text-red-800">Cost of Living</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "🏠 Accommodation", value: data.costOfLiving.accommodation },
                  { label: "🍔 Food", value: data.costOfLiving.food },
                  { label: "🚌 Transport", value: data.costOfLiving.transport },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="font-bold text-red-800">{item.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center p-4 bg-red-600 rounded-xl mt-4">
                  <span className="text-white font-bold text-lg">Total Estimate</span>
                  <span className="text-white font-bold text-lg">{data.costOfLiving.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTAKE SECTION ── */}
      {data.intakes.length > 0 && (
        <section className="py-16 px-4 bg-red-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Application Timeline</span>
              <h2 className="text-4xl font-bold text-red-900 mt-2">Intakes for {data.name}</h2>
              <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                Choose the right intake for your study plan. Apply early to secure your seat.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.intakes.map((intake: any, i: number) => (
                <div
                  key={i}
                  className={`bg-white rounded-3xl overflow-hidden shadow-sm border-2 transition hover:shadow-xl ${
                    intake.status === "open" ? "border-red-500" : "border-red-100"
                  }`}
                >
                  <div className={`${intake.badgeColor} px-6 py-4 flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{intake.icon}</span>
                      <span className="text-white font-bold text-lg">{intake.name}</span>
                    </div>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {intake.badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${intake.status === "open" ? "bg-red-500 animate-pulse" : "bg-gray-400"}`} />
                      <span className={`text-sm font-semibold ${intake.status === "open" ? "text-red-600" : "text-gray-500"}`}>
                        {intake.statusLabel}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                        <span className="text-gray-500 text-sm">🗓️ Start Date</span>
                        <span className="font-bold text-red-800 text-sm">{intake.startDate}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                        <span className="text-gray-500 text-sm">📝 Apply By</span>
                        <span className="font-bold text-red-600 text-sm">{intake.applicationDeadline}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                        <span className="text-gray-500 text-sm">🛂 Visa By</span>
                        <span className="font-bold text-red-600 text-sm">{intake.visaDeadline}</span>
                      </div>
                    </div>

                    {intake.courses.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">Available Programs</p>
                        <div className="flex flex-wrap gap-2">
                          {intake.courses.map((c: string) => (
                            <span key={c} className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-gray-500 text-sm border-t border-red-100 pt-4 leading-relaxed">{intake.note}</p>

                    <Link
                      href="/contact"
                      className={`block text-center py-3 rounded-xl font-bold text-sm transition ${
                        intake.status === "open"
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "bg-red-50 text-red-700 hover:bg-red-100"
                      }`}
                    >
                      {intake.status === "open" ? "Apply for This Intake →" : "Get Notified →"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-bold text-red-800">Apply Early!</p>
                <p className="text-red-700 text-sm mt-1">
                  University seats fill up fast. We recommend applying at least 4-6 months before the intake deadline. Contact us today to start your application.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SUCCESS STORIES ── */}
      {data.successStories.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Real Students, Real Results</span>
              <h2 className="text-4xl font-bold text-red-900 mt-2">Our Success Stories</h2>
              <p className="text-gray-500 mt-2">Students we helped get into {data.name}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { number: "500+", label: `Students in ${data.name}`, icon: "🎓" },
                { number: "98%", label: "Visa Success Rate", icon: "✈️" },
                { number: "4.9★", label: "Average Rating", icon: "⭐" },
              ].map((s) => (
                <div key={s.label} className="text-center bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-5 border border-red-100">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="text-3xl font-bold text-red-600">{s.number}</div>
                  <div className="text-gray-600 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.successStories.map((story: any, i: number) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-md border border-red-100 hover:shadow-xl transition relative overflow-hidden">
                  <div className="absolute top-4 right-5 text-7xl text-red-100 font-serif leading-none select-none">&ldquo;</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: story.rating }).map((_: unknown, j: number) => (
                      <span key={j} className="text-red-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6 relative z-10">
                    &ldquo;{story.story}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-red-100">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image src={story.photo} alt={story.name} fill className="object-cover rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-red-800 text-sm">{story.name}</div>
                      <div className="text-red-600 text-xs font-semibold truncate">{story.university}</div>
                      <div className="text-gray-400 text-xs">{story.course} · {story.year}</div>
                    </div>
                    <span className="text-2xl">{story.flag}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/success-stories"
                className="inline-flex items-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-xl font-bold transition"
              >
                View All Success Stories →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {data.faq.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
              <h2 className="text-4xl font-bold text-red-900 mt-2">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {data.faq.map((item: any, i: number) => (
                <div key={i} className="bg-white border border-red-100 rounded-2xl overflow-hidden shadow-sm">
                  <div className="flex items-start gap-4 p-6">
                    <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    <div>
                      <h3 className="font-bold text-red-800 mb-2">{item.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <Image src={data.heroImage} alt="CTA Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-red-700/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Study in {data.name}?
          </h2>
          <p className="text-red-100 text-xl mb-8">
            Talk to our expert counselors — 100% free consultation, no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition text-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/universities"
              className="border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition text-lg"
            >
              Browse Universities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
