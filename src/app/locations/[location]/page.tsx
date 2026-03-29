import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Flag from "@/components/Flag";

type Props = { params: Promise<{ location: string }> };

const locationData: Record<string, any> = {
  london: {
    name: "London",
    country: "United Kingdom",
    countryFlag: "GB",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80",
    tagline: "The world's greatest student city",
    overview:
      "London is consistently ranked among the best student cities in the world. As one of the most diverse and vibrant cities on the planet, it offers students an unparalleled mix of world-class education, cultural richness, and career opportunities. With 40+ universities, London is a true hub for international students.",
    highlights: [
      "Home to UCL, Imperial, LSE and King's College London",
      "Over 120,000 international students",
      "World's leading financial and tech hub",
      "Incredible multicultural environment",
      "Excellent public transport network",
    ],
    universities: [
      { name: "University College London (UCL)", ranking: "#8 World", image: "https://images.unsplash.com/photo-1584475784921-d9dbfd9d17ca?w=400&q=80", slug: "ucl" },
      { name: "Imperial College London", ranking: "#3 UK", image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&q=80", slug: "imperial-college-london" },
      { name: "King's College London", ranking: "#40 World", image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=400&q=80", slug: "kings-college-london" },
    ],
    costOfLiving: [
      { category: "Accommodation (student halls)", cost: "£800 – £1,400/month", icon: "🏠" },
      { category: "Food & Groceries", cost: "£200 – £350/month", icon: "🛒" },
      { category: "Transport (Oyster Card)", cost: "£100 – £150/month", icon: "🚇" },
      { category: "Entertainment & Social", cost: "£100 – £200/month", icon: "🎭" },
      { category: "Phone & Internet", cost: "£30 – £50/month", icon: "📱" },
      { category: "Total Estimate", cost: "£1,230 – £2,150/month", icon: "💷", highlight: true },
    ],
    thingsToKnow: [
      { icon: "🚇", title: "The Tube", desc: "London's Underground (the Tube) is the fastest way to get around. Get an 18+ Oyster card for student discounts." },
      { icon: "🏥", title: "NHS Healthcare", desc: "Register with a local GP as soon as you arrive. As a student, you are entitled to free NHS healthcare in the UK." },
      { icon: "🏦", title: "Bank Account", desc: "Open a UK bank account (Monzo, Starling, or HSBC) immediately — you'll need it for rent and daily expenses." },
      { icon: "🛡️", title: "Safety", desc: "London is generally very safe. Stay aware in crowded tourist areas and keep belongings secure on the Tube." },
      { icon: "☀️", title: "Weather", desc: "Expect rain year-round! Pack layers and a good waterproof jacket. Summers are mild, winters are cold but rarely freezing." },
      { icon: "🌍", title: "Diversity", desc: "London is one of the most diverse cities on Earth. You'll find food, culture, and communities from every country." },
    ],
    mapEmbed: "London, United Kingdom",
  },
  manchester: {
    name: "Manchester",
    country: "United Kingdom",
    countryFlag: "GB",
    heroImage: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=1600&q=80",
    tagline: "A vibrant city with world-class universities",
    overview:
      "Manchester is one of the UK's most popular student cities, offering a perfect blend of academic excellence, affordable living, and a thriving social scene. Home to the University of Manchester and Manchester Metropolitan University, it attracts students from across the globe.",
    highlights: [
      "University of Manchester ranked #32 globally",
      "More affordable than London",
      "Legendary music and arts scene",
      "Strong graduate job market",
      "Excellent transport connections",
    ],
    universities: [
      { name: "University of Manchester", ranking: "#32 World", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400&q=80", slug: "university-of-manchester" },
      { name: "Manchester Metropolitan University", ranking: "Top 5 Modern UK", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&q=80", slug: "mmu" },
    ],
    costOfLiving: [
      { category: "Accommodation (student halls)", cost: "£500 – £900/month", icon: "🏠" },
      { category: "Food & Groceries", cost: "£150 – £280/month", icon: "🛒" },
      { category: "Transport", cost: "£60 – £100/month", icon: "🚌" },
      { category: "Entertainment & Social", cost: "£80 – £150/month", icon: "🎸" },
      { category: "Phone & Internet", cost: "£25 – £45/month", icon: "📱" },
      { category: "Total Estimate", cost: "£815 – £1,475/month", icon: "💷", highlight: true },
    ],
    thingsToKnow: [
      { icon: "🎵", title: "Music Capital", desc: "Manchester is the birthplace of some of the world's greatest bands. The live music scene is incredible." },
      { icon: "⚽", title: "Football City", desc: "Home to Man United and Man City — if you love football, you're in the right city." },
      { icon: "🚆", title: "Transport", desc: "Trams (Metrolink) and buses make it easy to get around the city without a car." },
      { icon: "🏦", title: "Affordable City", desc: "Significantly more affordable than London — perfect for students on a budget." },
      { icon: "🌧️", title: "Weather", desc: "Manchester is famously rainy — pack a good umbrella and waterproof clothing!" },
      { icon: "🏥", title: "NHS Healthcare", desc: "Register with a GP close to your university or accommodation as soon as you arrive." },
    ],
    mapEmbed: "Manchester, United Kingdom",
  },
  toronto: {
    name: "Toronto",
    country: "Canada",
    countryFlag: "CA",
    heroImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=80",
    tagline: "Canada's largest city and top student hub",
    overview:
      "Toronto is Canada's largest city and one of the most multicultural cities in the world. Home to the University of Toronto (ranked #21 globally), it offers students a world-class education alongside an incredibly vibrant urban lifestyle and clear pathways to permanent residency.",
    highlights: [
      "University of Toronto ranked #21 globally",
      "40% of Toronto residents born outside Canada",
      "Canada's economic and financial center",
      "Clear PR pathways through Ontario PNP",
      "Safe, clean, and welcoming city",
    ],
    universities: [
      { name: "University of Toronto", ranking: "#21 World", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&q=80", slug: "university-of-toronto" },
      { name: "Toronto Metropolitan University", ranking: "Top 20 Canada", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80", slug: "tmu" },
    ],
    costOfLiving: [
      { category: "Accommodation (student housing)", cost: "CAD 900 – 1,800/month", icon: "🏠" },
      { category: "Food & Groceries", cost: "CAD 300 – 500/month", icon: "🛒" },
      { category: "Transport (TTC Pass)", cost: "CAD 115/month", icon: "🚇" },
      { category: "Entertainment & Social", cost: "CAD 100 – 200/month", icon: "🎭" },
      { category: "Phone & Internet", cost: "CAD 50 – 80/month", icon: "📱" },
      { category: "Total Estimate", cost: "CAD 1,465 – 2,695/month", icon: "🍁", highlight: true },
    ],
    thingsToKnow: [
      { icon: "🚇", title: "TTC Subway", desc: "The TTC subway and streetcar system covers most of the city. Monthly passes offer student discounts." },
      { icon: "❄️", title: "Cold Winters", desc: "Toronto winters are very cold (as low as -20°C). Invest in proper winter clothing before arriving." },
      { icon: "💼", title: "Work Rights", desc: "Student visa holders can work up to 20 hours per week during semester and full-time during breaks." },
      { icon: "🌍", title: "Multicultural", desc: "Toronto has one of the world's largest Bangladeshi communities — you'll feel at home immediately." },
      { icon: "🏥", title: "OHIP Health Card", desc: "After 3 months, Ontario residents become eligible for OHIP (free healthcare). Ensure you have private insurance until then." },
      { icon: "🛂", title: "PR Pathways", desc: "Graduating from a Toronto university opens strong pathways to Canadian PR through Express Entry and Ontario PNP." },
    ],
    mapEmbed: "Toronto, Canada",
  },
  sydney: {
    name: "Sydney",
    country: "Australia",
    countryFlag: "AU",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80",
    tagline: "Sunshine, harbour, and world-class education",
    overview:
      "Sydney is Australia's iconic harbour city and home to the University of Sydney and UNSW — both globally ranked. With its beautiful beaches, vibrant culture, and strong economy, Sydney is consistently ranked among the world's most livable cities.",
    highlights: [
      "University of Sydney ranked #41 globally",
      "UNSW ranked #19 in engineering globally",
      "Stunning beaches and outdoor lifestyle",
      "Strong graduate job market in tech and finance",
      "Warm climate year-round",
    ],
    universities: [
      { name: "University of Sydney", ranking: "#41 World", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80", slug: "university-of-sydney" },
      { name: "UNSW Sydney", ranking: "#19 Engineering", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&q=80", slug: "unsw" },
    ],
    costOfLiving: [
      { category: "Accommodation (student housing)", cost: "AUD 900 – 1,800/month", icon: "🏠" },
      { category: "Food & Groceries", cost: "AUD 300 – 500/month", icon: "🛒" },
      { category: "Transport (Opal Card)", cost: "AUD 80 – 150/month", icon: "🚌" },
      { category: "Entertainment & Social", cost: "AUD 100 – 200/month", icon: "🏖️" },
      { category: "Phone & Internet", cost: "AUD 40 – 70/month", icon: "📱" },
      { category: "Total Estimate", cost: "AUD 1,420 – 2,720/month", icon: "🦘", highlight: true },
    ],
    thingsToKnow: [
      { icon: "☀️", title: "Beautiful Weather", desc: "Sydney has warm, sunny weather most of the year. Summers (Dec–Feb) can be very hot — up to 40°C." },
      { icon: "🏖️", title: "Beach Culture", desc: "Bondi Beach and Manly Beach are just a short bus or ferry ride from the city. Swimming is a way of life here." },
      { icon: "💼", title: "Work Rights", desc: "Student visa holders can work up to 48 hours per fortnight during semester — great for living costs." },
      { icon: "🚌", title: "Opal Card", desc: "Get an Opal card for buses, trains, and ferries. Student concession fares are available." },
      { icon: "🐍", title: "Wildlife Awareness", desc: "Be cautious of spiders and snakes in bushland areas. In the city, you'll only encounter wildlife in parks." },
      { icon: "🛂", title: "Post-Study Visa", desc: "After graduation, you can apply for a Temporary Graduate Visa — 2 to 4 years depending on your qualifications and study location." },
    ],
    mapEmbed: "Sydney, Australia",
  },
};

const defaultLocation = {
  name: "This City",
  country: "Unknown",
  countryFlag: "UN",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80",
  tagline: "Explore student life in this city",
  overview: "Discover what it's like to study and live in this exciting destination.",
  highlights: [],
  universities: [],
  costOfLiving: [],
  thingsToKnow: [],
  mapEmbed: "Unknown",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const data = locationData[location] || defaultLocation;
  return {
    title: `Study in ${data.name}`,
    description: data.tagline,
  };
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const data = locationData[location] || { ...defaultLocation, name: location.charAt(0).toUpperCase() + location.slice(1) };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[520px] flex items-center">
        <Image
          src={data.heroImage}
          alt={data.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Flag code={data.countryFlag} size="2.5rem" />
              <span className="bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                {data.country}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              {data.name}
            </h1>
            <p className="text-white/80 text-xl mb-8 leading-relaxed">{data.tagline}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg"
              >
                Study in {data.name}
              </Link>
              <Link
                href="/universities"
                className="bg-white/15 hover:bg-white/25 backdrop-blur border border-white/40 text-white font-bold px-8 py-4 rounded-xl transition"
              >
                Find Universities
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce text-2xl">↓</div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <span>Locations</span>
          <span>/</span>
          <span className="text-gray-800 font-medium">{data.name}</span>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">City Overview</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-5">
              Life as a Student in {data.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{data.overview}</p>

            {/* Highlights */}
            {data.highlights.length > 0 && (
              <div>
                <h3 className="font-bold text-gray-800 text-xl mb-4">Why Choose {data.name}?</h3>
                <div className="space-y-3">
                  {data.highlights.map((h: string) => (
                    <div key={h} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                      <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Info Sidebar */}
          <div>
            <div className="bg-gray-900 text-white rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-5">Quick Info</h3>
              <div className="space-y-4">
                {[
                  { label: "City", value: data.name, icon: "🏙️" },
                  { label: "Country", value: data.country, icon: "🌍" },
                  { label: "Universities", value: `${data.universities.length}+ nearby`, icon: "🎓" },
                  { label: "Language", value: "English", icon: "🗣️" },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <div className="text-gray-400 text-xs">{info.label}</div>
                      <div className="font-semibold">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="block mt-6 text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition"
              >
                Get Free Guidance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Universities in This City */}
      {data.universities.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Top Institutions</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Universities in {data.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.universities.map((uni: any) => (
                <Link
                  key={uni.slug}
                  href={`/universities/${uni.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={uni.image}
                      alt={uni.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {uni.ranking}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition">{uni.name}</h3>
                    <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                      <span>📍</span> {data.name}, {data.country}
                    </p>
                    <div className="mt-3 text-red-600 text-sm font-semibold group-hover:underline">View Details →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cost of Living */}
      {data.costOfLiving.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Budget Planning</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Cost of Living in {data.name}</h2>
              <p className="text-gray-500 mt-2">Typical monthly costs for international students</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
              {data.costOfLiving.map((item: any, i: number) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-8 py-5 ${
                    item.highlight
                      ? "bg-red-600 text-white"
                      : i % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                  } ${i !== data.costOfLiving.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`font-medium ${item.highlight ? "text-white font-bold text-lg" : "text-gray-700"}`}>
                      {item.category}
                    </span>
                  </div>
                  <span className={`font-bold ${item.highlight ? "text-white text-xl" : "text-gray-800"}`}>
                    {item.cost}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Things to Know */}
      {data.thingsToKnow.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Survival Guide</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Things to Know About {data.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.thingsToKnow.map((tip: any) => (
                <div key={tip.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition">
                  <div className="text-4xl mb-3">{tip.icon}</div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 px-4 overflow-hidden">
        <Image src={data.heroImage} alt={data.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-red-700/92" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Study in {data.name}?</h2>
          <p className="text-red-100 text-xl mb-8">
            Our counselors will help you with admissions, visa, and everything else — completely free.
          </p>
          <Link
            href="/contact"
            className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition text-lg inline-block"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
