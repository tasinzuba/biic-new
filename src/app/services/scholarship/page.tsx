import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  FaAward, FaCalendarCheck, FaCircleCheck, FaPhone,
  FaArrowRight, FaStar, FaGlobe, FaScroll,
  FaBuildingColumns, FaHandHoldingDollar,
} from "react-icons/fa6";
import { services } from "../page";

export const metadata: Metadata = {
  title: "Scholarship Guidance | BIIC Global",
  description: "Find and win scholarships for studying abroad. 800+ students funded. Government, university, and merit scholarships.",
};

const svc = services.find((s) => s.slug === "scholarship")!;
const otherServices = services.filter((s) => s.slug !== "scholarship").slice(0, 3);

const scholarshipTypes = [
  {
    type: "Merit-Based",
    icon: FaStar,
    desc: "Awarded based on academic excellence, IELTS score, and extracurricular achievements.",
    examples: ["Chevening Scholarship (UK)", "Commonwealth Scholarship", "University Excellence Awards"],
    amount: "Up to 100%",
  },
  {
    type: "Need-Based",
    icon: FaHandHoldingDollar,
    desc: "Designed for students with financial constraints but strong academic potential.",
    examples: ["Gates Millennium Scholars", "University Bursaries", "Government Grants"],
    amount: "Up to 80%",
  },
  {
    type: "Government",
    icon: FaBuildingColumns,
    desc: "Fully funded scholarships sponsored by governments for international students.",
    examples: ["GREAT Scholarship (UK)", "Fulbright (USA)", "Canada Study Grant"],
    amount: "Fully Funded",
  },
  {
    type: "University",
    icon: FaScroll,
    desc: "Partial to full scholarships offered directly by partner universities.",
    examples: ["International Excellence Award", "Dean's Scholarship", "Early Applicant Discount"],
    amount: "10% – 50%",
  },
];

const countryScholarships = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    scholarships: [
      { name: "Chevening Scholarship", amount: "Fully Funded" },
      { name: "Commonwealth Scholarship", amount: "Fully Funded" },
      { name: "GREAT Scholarship", amount: "£10,000" },
      { name: "University Bursaries", amount: "£2,000–£8,000" },
    ],
  },
  {
    country: "United States",
    flag: "🇺🇸",
    scholarships: [
      { name: "Fulbright Scholarship", amount: "Fully Funded" },
      { name: "Hubert Humphrey Fellowship", amount: "Fully Funded" },
      { name: "University Merit Awards", amount: "Up to 50%" },
      { name: "OEA Scholarships", amount: "Varies" },
    ],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    scholarships: [
      { name: "Vanier Canada Graduate Scholarships", amount: "CAD 50,000/yr" },
      { name: "Banting Postdoctoral Fellowships", amount: "CAD 70,000/yr" },
      { name: "University of Toronto Award", amount: "Up to 40%" },
      { name: "Provincial Scholarships", amount: "Varies" },
    ],
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    scholarships: [
      { name: "Australia Awards", amount: "Fully Funded" },
      { name: "Endeavour Scholarship", amount: "AUD 272,500" },
      { name: "University Excellence Awards", amount: "25%–50%" },
      { name: "International Merit Scholarships", amount: "AUD 5,000–15,000" },
    ],
  },
];

const successStories = [
  { name: "Tasnim Akter", university: "University of Leeds, UK", scholarship: "Chevening Scholar", amount: "Fully Funded", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { name: "Asif Rahman", university: "University of Toronto, Canada", scholarship: "University Merit", amount: "40% Scholarship", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { name: "Mim Sultana", university: "Monash University, Australia", scholarship: "Excellence Award", amount: "AUD 12,000", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
];

export default function ScholarshipPage() {
  return (
    <>
      <div className="h-px bg-gradient-to-r from-red-700 via-red-500 to-red-700 w-full" />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 px-4"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}
      >
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-red-50/70 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Scholarship Guidance</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg" style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}>
              <FaAward className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-red-900 mb-4 leading-tight">
              Fund Your<br />
              <span className="text-red-600">Dream Education</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mb-8 leading-relaxed">
              Don&apos;t let finances be a barrier. We identify scholarships, grants, and funding opportunities that match your profile — from partial to fully funded options.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {[{ value: "800+", label: "Students Funded" }, { value: "70%", label: "Success Rate" }, { value: "30+", label: "Partners" }].map((s, i) => (
                <div key={s.label} className={`${i < 2 ? "border-r border-red-100 pr-6" : ""}`}>
                  <div className="text-2xl font-black text-red-700">{s.value}</div>
                  <div className="text-gray-400 text-xs font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-200 text-sm">
                <FaCalendarCheck className="w-4 h-4" />
                Check My Eligibility
              </Link>
              <a href="#scholarships" className="inline-flex items-center gap-2 border-2 border-red-200 text-red-700 font-black px-7 py-3.5 rounded-xl hover:bg-red-50 hover:border-red-400 transition-all text-sm">
                View Scholarships <FaArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-red-200">
              <Image src={svc.image} alt="Scholarship Guidance" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl border border-red-100">
                  <p className="font-black text-gray-700 text-xs mb-3 uppercase tracking-wider">🏆 Recent Scholarship Winners</p>
                  {successStories.map((s) => (
                    <div key={s.name} className="flex items-center gap-3 py-2.5 border-t border-gray-50 first:border-0">
                      <Image src={s.photo} alt={s.name} width={36} height={36} className="rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="font-black text-gray-800 text-xs">{s.name}</div>
                        <div className="text-gray-400 text-xs">{s.university}</div>
                      </div>
                      <div className="bg-red-100 text-red-700 font-black text-xs px-2.5 py-1 rounded-full ml-2 flex-shrink-0">{s.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-red-100 py-3 px-4" style={{ background: "linear-gradient(180deg,#fff9f9 0%,#ffffff 100%)" }}>
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <span className="text-red-200">/</span>
          <Link href="/services" className="hover:text-red-600 transition">Services</Link>
          <span className="text-red-200">/</span>
          <span className="text-red-700 font-black">Scholarship Guidance</span>
        </div>
      </div>

      {/* Scholarship Types */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff9f9 0%,#ffffff 60%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Types We Cover</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Scholarship Categories</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We help you identify and apply for all types of scholarships, from merit-based to government-funded programs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {scholarshipTypes.map((t) => (
              <div key={t.type} className="bg-white border border-red-100 rounded-2xl p-6 hover:border-red-300 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                    <t.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-black text-red-900 text-lg">{t.type}</h3>
                      <span className="bg-red-100 text-red-700 text-xs font-black px-2.5 py-1 rounded-full">{t.amount}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 leading-snug">{t.desc}</p>
                  </div>
                </div>
                <div className="space-y-1.5 ml-16">
                  {t.examples.map((ex, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCircleCheck className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Scholarships */}
      <section id="scholarships" className="py-20 px-4" style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">By Country</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Scholarships by Destination</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {countryScholarships.map((c) => (
              <div key={c.country} className="bg-white border border-red-100 rounded-2xl overflow-hidden hover:border-red-300 hover:shadow-xl transition-all">
                <div className="bg-red-50 px-5 py-4 border-b border-red-100 flex items-center gap-3">
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <h3 className="font-black text-red-900 text-lg">{c.country}</h3>
                    <p className="text-gray-500 text-xs">{c.scholarships.length} scholarships available</p>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  {c.scholarships.map((s, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-red-50 last:border-0">
                      <div className="font-black text-gray-800 text-sm">{s.name}</div>
                      <div className="bg-red-100 text-red-700 font-black text-xs px-3 py-1.5 rounded-full ml-3 flex-shrink-0">{s.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer + Process */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fafafa 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Our Service</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900 mb-5">What We Do for You</h2>
            <div className="space-y-3">
              {svc.features.map((f) => (
                <div key={f} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-red-100 hover:border-red-300 hover:shadow-md transition-all">
                  <span className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 mt-0.5 shadow-sm">✓</span>
                  <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Step by Step</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900 mb-5">Our Process</h2>
            <div className="relative">
              <div className="absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-red-600 via-red-400 to-red-100 hidden md:block" />
              <div className="space-y-4">
                {svc.steps.map((step, i) => (
                  <div key={i} className="relative flex gap-4 items-start md:pl-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-2xl flex items-center justify-center font-black text-sm flex-shrink-0 z-10 shadow-lg shadow-red-200">
                      {step.num}
                    </div>
                    <div className="bg-white border border-red-100 rounded-2xl p-4 flex-1 hover:border-red-300 hover:shadow-md transition group">
                      <div className="font-black text-red-900 group-hover:text-red-600 transition">{step.title}</div>
                      <div className="text-gray-500 text-sm leading-snug mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-red-100 overflow-hidden">
            <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 px-8 py-10 text-white text-center relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
              <FaGlobe className="w-14 h-14 mx-auto mb-5 text-red-300 relative z-10" />
              <h2 className="text-3xl font-black mb-2 relative z-10">You May Qualify for a Scholarship</h2>
              <p className="text-red-100 text-lg relative z-10">Free profile assessment — no commitment. Let us match you with scholarships you can win.</p>
            </div>
            <div className="p-8 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-red-200 text-lg">
                Check My Eligibility — Free
              </Link>
              <a href="tel:+8809613820821" className="flex items-center justify-center gap-2 border-2 border-red-200 text-red-700 font-black px-8 py-4 rounded-2xl hover:bg-red-50 hover:border-red-400 transition-all">
                <FaPhone className="w-4 h-4" /> Talk to Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(180deg,#ffffff 0%,#fffbfb 60%,#fff7f7 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-red-400" />
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Explore More</span>
            <div className="h-px w-10 bg-red-400" />
          </div>
          <h2 className="text-3xl font-black text-red-900 mb-6">Our Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center gap-4 bg-white border border-red-100 rounded-2xl p-5 hover:border-red-300 hover:shadow-xl hover:scale-[1.01] transition-all">
                <span className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <s.Icon className={`w-6 h-6 ${s.iconColor}`} />
                </span>
                <div className="flex-1">
                  <div className="font-black text-red-900 group-hover:text-red-600 transition">{s.title}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{s.tagline}</div>
                </div>
                <span className="text-red-300 group-hover:text-red-600 transition font-black">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
