import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  FaPassport, FaCalendarCheck, FaPhone,
  FaArrowRight, FaShield, FaCircleXmark, FaCircleCheck,
} from "react-icons/fa6";
import { services } from "../page";

export const metadata: Metadata = {
  title: "Visa Assistance | BIIC Global",
  description: "98% student visa approval rate. Expert visa assistance for UK, USA, Canada & Australia.",
};

const svc = services.find((s) => s.slug === "visa-assistance")!;
const otherServices = services.filter((s) => s.slug !== "visa-assistance").slice(0, 3);

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    visaType: "Student Visa (Tier 4)",
    processingTime: "3–8 weeks",
    successRate: "98%",
    requirements: ["CAS from university", "IELTS 5.5+", "Financial proof (£1,015/month)", "TB test result", "Valid passport", "Biometrics"],
  },
  {
    name: "United States",
    flag: "🇺🇸",
    visaType: "F-1 Student Visa",
    processingTime: "4–12 weeks",
    successRate: "95%",
    requirements: ["I-20 form from university", "DS-160 application", "SEVIS fee payment", "Visa interview at embassy", "Financial documents", "Proof of ties to home"],
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    visaType: "Study Permit",
    processingTime: "4–16 weeks",
    successRate: "97%",
    requirements: ["Letter of acceptance", "Proof of funds (CAD 10,000+)", "PAL/CAQ (Quebec)", "Medical exam", "Biometrics", "Police certificate"],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    visaType: "Student Visa (Subclass 500)",
    processingTime: "4–6 weeks",
    successRate: "99%",
    requirements: ["CoE from university", "IELTS 5.5+", "Genuine Temporary Entrant statement", "Financial documents", "Health insurance (OSHC)", "Health examination"],
  },
];

const rejectionReasons = [
  "Insufficient financial documents",
  "Weak study gap explanation",
  "Incomplete application form",
  "Lack of genuine study intent",
  "Poor visa interview performance",
  "Missing biometrics",
];

const successCards = [
  { name: "Farhan Kabir", country: "UK", visa: "UK Student Visa", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80", time: "3 weeks" },
  { name: "Nusrat Jahan", country: "Canada", visa: "Study Permit", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", time: "6 weeks" },
  { name: "Tanvir Ahmed", country: "Australia", visa: "Student Visa 500", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", time: "4 weeks" },
];

export default function VisaAssistancePage() {
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
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Visa Assistance</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg" style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}>
              <FaPassport className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-red-900 mb-4 leading-tight">
              Never Worry About<br />
              <span className="text-red-600">Visa Rejection</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mb-8 leading-relaxed">
              Our visa experts have processed 3,000+ student visa applications with an industry-leading <strong className="text-red-700">98% success rate</strong> for UK, USA, Canada, and Australia.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {[{ value: "98%", label: "Visa Approval Rate" }, { value: "3,000+", label: "Visas Processed" }, { value: "4", label: "Countries Covered" }].map((s, i) => (
                <div key={s.label} className={`${i < 2 ? "border-r border-red-100 pr-6" : ""}`}>
                  <div className="text-2xl font-black text-red-700">{s.value}</div>
                  <div className="text-gray-400 text-xs font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-200 text-sm">
                <FaCalendarCheck className="w-4 h-4" />
                Get Visa Help Now
              </Link>
              <a href="#countries" className="inline-flex items-center gap-2 border-2 border-red-200 text-red-700 font-black px-7 py-3.5 rounded-xl hover:bg-red-50 hover:border-red-400 transition-all text-sm">
                View Countries <FaArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-red-200">
              <Image src={svc.image} alt="Visa Assistance" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                {successCards.map((c) => (
                  <div key={c.name} className="bg-white/95 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg border border-red-50">
                    <Image src={c.photo} alt={c.name} width={36} height={36} className="rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="font-black text-gray-900 text-xs">{c.name}</div>
                      <div className="text-gray-500 text-xs">{c.visa} approved</div>
                    </div>
                    <div className="text-red-600 font-black text-xs flex items-center gap-1">
                      <FaCircleCheck className="w-3.5 h-3.5" /> {c.time}
                    </div>
                  </div>
                ))}
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
          <span className="text-red-700 font-black">Visa Assistance</span>
        </div>
      </div>

      {/* Country-wise Visa Requirements */}
      <section id="countries" className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff9f9 0%,#ffffff 60%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Country Specific</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Visa Requirements by Country</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We specialize in student visas for these 4 countries. Each has different requirements — we handle all of it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {countries.map((c) => (
              <div key={c.name} className="bg-white border-2 border-red-100 rounded-2xl overflow-hidden hover:border-red-300 hover:shadow-xl transition-all">
                <div className="p-5 border-b border-red-50 bg-red-50/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{c.flag}</span>
                      <div>
                        <div className="font-black text-red-900 text-lg">{c.name}</div>
                        <div className="text-gray-500 text-xs">{c.visaType}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-full">{c.successRate}</div>
                      <div className="text-gray-400 text-xs mt-1">⏱ {c.processingTime}</div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-red-600 font-black uppercase tracking-wider mb-3">Key Requirements:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {c.requirements.map((r, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <FaCircleCheck className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-600 leading-snug">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rejection Reasons + What We Do */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-300 font-black text-xs uppercase tracking-[0.2em]">Common Pitfalls</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-3xl font-black text-white mb-6">Why Visas Get Rejected</h2>
            <div className="space-y-3">
              {rejectionReasons.map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/10 border border-white/20 rounded-xl">
                  <FaCircleXmark className="w-5 h-5 text-red-300 flex-shrink-0" />
                  <span className="text-red-100 text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-300 font-black text-xs uppercase tracking-[0.2em]">Our Solution</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-3xl font-black text-white mb-6">What We Do Differently</h2>
            <div className="space-y-3">
              {svc.features.map((f) => (
                <div key={f} className="flex items-center gap-3 p-3 bg-white/10 border border-white/20 rounded-xl">
                  <FaCircleCheck className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Step by Step</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Our Visa Process</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-red-600 via-red-400 to-red-100 hidden md:block" />
            <div className="space-y-5">
              {svc.steps.map((step, i) => (
                <div key={i} className="relative flex gap-6 items-start md:pl-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-2xl flex items-center justify-center font-black text-lg flex-shrink-0 z-10 shadow-lg shadow-red-200">
                    {step.num}
                  </div>
                  <div className="bg-white border border-red-100 rounded-2xl p-6 flex-1 hover:border-red-300 hover:shadow-xl transition-all group">
                    <h3 className="font-black text-red-900 text-lg mb-1 group-hover:text-red-600 transition">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shield CTA */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-red-100 overflow-hidden">
            <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 px-8 py-10 text-white text-center relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
              <FaShield className="w-14 h-14 mx-auto mb-5 text-red-300 relative z-10" />
              <h2 className="text-3xl font-black mb-2 relative z-10">Your Visa is Our Responsibility</h2>
              <p className="text-red-100 text-lg relative z-10">If we accept your case, we are confident you will get the visa.</p>
            </div>
            <div className="p-8 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-red-200 text-lg">
                Start Your Application
              </Link>
              <a href="tel:+8809613820821" className="flex items-center justify-center gap-2 border-2 border-red-200 text-red-700 font-black px-8 py-4 rounded-2xl hover:bg-red-50 hover:border-red-400 transition-all">
                <FaPhone className="w-4 h-4" /> Emergency Visa Help
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
