import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { blogPosts } from "../page";
import ReadingProgress from "./ReadingProgress";
import {
  FaArrowLeft, FaArrowRight,
  FaFacebookF, FaXTwitter, FaLinkedinIn,
  FaWhatsapp, FaTelegram, FaPinterest,
  FaChartBar,
} from "react-icons/fa6";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post ? post.title : "Blog Post",
    description: post ? post.excerpt : "Read our latest study abroad insights.",
  };
}

const articleSections = [
  {
    heading: "Why This Matters for Bangladeshi Students",
    body: "Bangladesh has a rapidly growing pool of talented students increasingly looking beyond borders for quality education. With over 5,000 students placed by BIIC alone, the trend is clear: studying abroad is no longer a privilege reserved for the elite. With proper guidance, scholarships, and preparation, international education is within reach for dedicated students from all backgrounds.",
    subSections: [
      {
        sub: "The Harsh Reality Most Students Face",
        body: "Many students begin the process without fully understanding the requirements. They apply to too few universities, underestimate English language requirements, or miss key deadlines. The good news is — these mistakes are completely avoidable with the right guidance.",
      },
    ],
  },
  {
    heading: "Step-by-Step Application Process",
    body: "The first step is to determine which country and program aligns best with your academic background and career goals. Research university rankings, course content, tuition fees, and post-study work options.",
    subSections: [
      {
        sub: "1. Choose Your Destination & Program",
        body: "Compare countries based on tuition costs, work opportunities, PR pathways, and living standards. UK, Canada, and Australia are top choices for Bangladeshi students.",
      },
      {
        sub: "2. Prepare Your Documents",
        body: "Gather academic transcripts, IELTS/TOEFL scores, letters of recommendation, and a strong Statement of Purpose (SOP). Start at least 12 months before your target intake.",
      },
      {
        sub: "3. Apply and Follow Up",
        body: "Submit applications through official university portals or UCAS for UK. Track your applications regularly and respond quickly to any conditional offers.",
      },
    ],
  },
  {
    heading: "Common Mistakes to Avoid",
    body: "Many students make costly errors that delay or derail their applications. Here are the most critical ones to watch out for.",
    subSections: [
      {
        sub: "Applying Too Late",
        body: "Most intakes require applications 6–12 months in advance. Starting late means missing early-bird scholarships and limited seat availability at top universities.",
      },
      {
        sub: "Weak Statement of Purpose",
        body: "Your SOP is your voice in the application. A generic, copy-pasted SOP gets rejected. Be specific about why you chose the program and what you plan to achieve.",
      },
      {
        sub: "Insufficient Financial Proof",
        body: "Visa applications require proof of funds covering tuition AND living expenses. Prepare your bank statements carefully and ensure they reflect genuine savings.",
      },
    ],
  },
  {
    heading: "Tips from Our Expert Counselors",
    body: "Our counselors have reviewed thousands of applications over 15+ years. The single most important factor in a successful application is authenticity.",
    subSections: [
      {
        sub: "Be Specific, Not Generic",
        body: "Mention specific professors, research groups, or modules at the university. Show you've done your research. Generic applications rarely succeed.",
      },
      {
        sub: "Start IELTS Preparation Early",
        body: "Most universities require IELTS 6.0–7.0. Begin preparation at least 6 months before your test date. Practice all four modules consistently.",
      },
    ],
  },
  {
    heading: "Final Thoughts",
    body: "The journey to studying abroad is long but deeply rewarding. Every step — from taking IELTS to receiving your visa — is part of a process that will define your future. BIIC is here to support you at every stage. Book a free consultation with our experts today and take the first step towards your international education journey.",
    subSections: [],
  },
];

// Visa success card data
const visaSuccessCards = [
  {
    country: "USA",
    countryColor: "bg-red-600",
    label: "USA Student Visa Success",
    university: "Troy University",
    name: "Sayem Sarwar",
    program: "Master's in Artificial Intelligence",
    intake: "January 2025 Intake",
    scholarship: "50%",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    country: "Canada",
    countryColor: "bg-red-700",
    label: "Canada Student Visa Success",
    university: "Memorial University of Newfoundland",
    name: "Montasir Muhammad Alvee",
    program: "Bachelor of Business Administration",
    intake: "January 2025 Intake",
    scholarship: "35%",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
  },
  {
    country: "UK",
    countryColor: "bg-blue-700",
    label: "UK Student Visa Success",
    university: "Ravensbourne University London",
    name: "Md Shihab",
    program: "MSc in Business Management",
    intake: "January 2025 Intake",
    scholarship: "£12,000 GBP",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    country: "Australia",
    countryColor: "bg-amber-600",
    label: "Australia Student Visa Success",
    university: "University of Melbourne",
    name: "Tanvir Ahmed",
    program: "Bachelor of Engineering",
    intake: "February 2025 Intake",
    scholarship: "25%",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    country: "Canada",
    countryColor: "bg-red-700",
    label: "Canada Student Visa Success",
    university: "University of Toronto",
    name: "Nusrat Jahan",
    program: "MSc in Computer Science",
    intake: "September 2025 Intake",
    scholarship: "40%",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    country: "UK",
    countryColor: "bg-blue-700",
    label: "UK Student Visa Success",
    university: "University of Birmingham",
    name: "Farhan Kabir",
    program: "MSc in Data Science",
    intake: "September 2025 Intake",
    scholarship: "£8,000 GBP",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
  },
];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = postIndex >= 0 ? blogPosts[postIndex] : blogPosts[0];
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <div className="bg-white min-h-screen">
      <ReadingProgress />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Article (2/3) ── */}
          <article className="lg:col-span-2 min-w-0">

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-black text-red-600 leading-tight mb-3">
              {post.title}
            </h1>

            {/* Meta bar */}
            <div className="flex items-center gap-4 text-sm mb-5 flex-wrap">
              <span className="text-red-500 font-semibold">{post.date}</span>
              <span className="text-gray-700 font-semibold">{post.author}</span>
              <span className="flex items-center gap-1.5 text-gray-500">
                <FaChartBar className="w-3.5 h-3.5 text-red-500" />
                Views: 4,587
              </span>
            </div>

            {/* Featured Image with overlay */}
            <div className="relative rounded-xl overflow-hidden mb-7 shadow-md" style={{ height: "380px" }}>
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <div className="text-white/80 text-sm font-semibold mb-1">{post.date}</div>
                <div className="text-white font-black text-xl">Breaking News!</div>
                <div className="text-white/90 text-base">Historic moment for Bangladesh:</div>
              </div>
            </div>

            {/* Lead text */}
            <p className="text-gray-700 leading-relaxed text-[15px] mb-6">{post.excerpt}</p>

            {/* Article body */}
            <div className="space-y-7">
              {articleSections.map((section, si) => (
                <div key={si} id={`section-${si}`} className="scroll-mt-20">
                  <h2 className="text-lg font-black text-gray-900 mb-3">{section.heading}</h2>
                  <p className="text-gray-600 leading-relaxed text-[15px] mb-3">{section.body}</p>

                  {section.subSections.map((sub, ssi) => (
                    <div key={ssi} className="mb-3">
                      <h3 className="font-black text-gray-800 text-base mb-1.5">{sub.sub}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{sub.body}</p>
                    </div>
                  ))}

                  {/* Inline CTA after section 2 */}
                  {si === 2 && (
                    <div className="my-7 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)" }}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                        <div className="p-6">
                          <span className="inline-block bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3">Free Service</span>
                          <h3 className="text-white font-black text-lg leading-tight mb-2">
                            Complete Study Abroad<br />
                            <span className="text-red-400">Counseling — Batch Open</span>
                          </h3>
                          <ul className="text-white/60 text-xs space-y-1 mb-4">
                            <li>✓ University Selection</li>
                            <li>✓ Visa Assistance</li>
                            <li>✓ Scholarship Support</li>
                          </ul>
                          <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-black text-sm px-5 py-2.5 rounded-xl transition">
                            Enroll Now →
                          </Link>
                        </div>
                        <div className="relative h-44 hidden sm:block">
                          <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" alt="" fill className="object-cover" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* End banner */}
            <div className="mt-8 bg-red-50 border border-red-100 rounded-2xl p-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-red-600 font-black uppercase tracking-widest mb-1">Latest Updates</div>
                <p className="text-gray-700 text-sm font-semibold">
                  Stay updated with all the latest study abroad news and opportunities.
                </p>
              </div>
              <Link href="/blog" className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white font-black text-xs px-5 py-2.5 rounded-xl transition whitespace-nowrap">
                Read More
              </Link>
            </div>

            {/* Share This Post */}
            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="font-black text-gray-800 text-sm mb-3">Share This Post</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { Icon: FaFacebookF,  bg: "bg-[#1877F2]",  label: "Facebook" },
                  { Icon: FaXTwitter,   bg: "bg-gray-900",   label: "Twitter" },
                  { Icon: FaWhatsapp,   bg: "bg-[#25D366]",  label: "WhatsApp" },
                  { Icon: FaLinkedinIn, bg: "bg-[#0A66C2]",  label: "LinkedIn" },
                  { Icon: FaTelegram,   bg: "bg-[#26A5E4]",  label: "Telegram" },
                  { Icon: FaPinterest,  bg: "bg-[#E60023]",  label: "Pinterest" },
                ].map(({ Icon, bg, label }) => (
                  <button key={label} title={label} className={`${bg} text-white w-10 h-10 rounded-xl flex items-center justify-center hover:opacity-80 transition`}>
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="group bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:border-red-200 hover:bg-red-50 transition">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2"><FaArrowLeft className="w-3 h-3" /> Prev</div>
                  <p className="font-bold text-gray-700 text-sm line-clamp-2 group-hover:text-red-600 transition">{prevPost.title}</p>
                </Link>
              ) : <div />}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="group bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:border-red-200 hover:bg-red-50 transition text-right">
                  <div className="flex items-center justify-end gap-1.5 text-xs text-gray-400 mb-2">Next <FaArrowRight className="w-3 h-3" /></div>
                  <p className="font-bold text-gray-700 text-sm line-clamp-2 group-hover:text-red-600 transition">{nextPost.title}</p>
                </Link>
              )}
            </div>
          </article>

          {/* ── Sidebar (1/3) ── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-5">

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <h3 className="font-black text-gray-900 text-sm">Table Of Contents</h3>
                </div>
                <ol className="p-4 space-y-2">
                  {articleSections.map((s, i) => (
                    <li key={i}>
                      <a href={`#section-${i}`} className="flex items-start gap-2 text-xs text-gray-500 hover:text-red-600 transition group">
                        <span className="w-4 h-4 bg-red-50 text-red-600 rounded flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="leading-snug group-hover:underline">{s.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Our Visa Success — 1 photo per row, many cards */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1 h-5 bg-red-600 rounded-full" />
                  <h3 className="font-black text-gray-900 text-base">Our Visa Success</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {visaSuccessCards.map((card, i) => (
                    <div key={i} className="relative w-full rounded-xl overflow-hidden group cursor-pointer shadow-sm" style={{ height: "280px" }}>
                      <Image
                        src={card.photo}
                        alt={card.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>


              {/* CTA */}
              <div className="rounded-2xl overflow-hidden shadow-sm" style={{ background: "linear-gradient(135deg,#0f172a,#1e3a5f)" }}>
                <div className="p-5">
                  <span className="inline-block bg-red-600 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest mb-3">Free Service</span>
                  <h3 className="text-white font-black text-sm leading-tight mb-1">Complete Study Abroad Counseling</h3>
                  <ul className="text-white/60 text-[11px] space-y-1 my-3">
                    <li>✓ University Selection</li>
                    <li>✓ Visa Assistance</li>
                    <li>✓ IELTS Support</li>
                    <li>✓ Scholarship Support</li>
                  </ul>
                  <Link href="/contact" className="block text-center bg-red-600 hover:bg-red-700 text-white font-black text-xs py-2.5 rounded-xl transition mt-3">
                    Enroll Now →
                  </Link>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100 py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-black text-gray-900 mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full inline-block mb-2 ${"categoryColor" in p ? (p as {categoryColor:string}).categoryColor : "bg-gray-100 text-gray-600"}`}>
                      {p.category}
                    </span>
                    <h3 className="font-black text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-red-600 transition mb-2">{p.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src={p.authorImage} alt={p.author} fill className="object-cover rounded-full" />
                      </div>
                      <span className="text-xs text-gray-400 flex-1">{p.author}</span>
                      <span className="text-red-600 text-xs font-black">Read More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
