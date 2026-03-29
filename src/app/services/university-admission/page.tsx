import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  FaGraduationCap, FaCalendarCheck, FaFileLines, FaCircleCheck,
  FaPhone, FaStar, FaArrowRight, FaBuildingColumns,
} from "react-icons/fa6";
import { services } from "../page";

export const metadata: Metadata = {
  title: "University Admission | BIIC Global",
  description: "Get into your dream university with expert guidance from BIIC Global. 5,000+ students placed, 95% success rate.",
};

const svc = services.find((s) => s.slug === "university-admission")!;

const destinations = [
  { country: "United Kingdom", universities: "150+", flag: "🇬🇧", accepted: "95% accepted" },
  { country: "United States", universities: "200+", flag: "🇺🇸", accepted: "90% accepted" },
  { country: "Canada", universities: "80+", flag: "🇨🇦", accepted: "93% accepted" },
  { country: "Australia", universities: "45+", flag: "🇦🇺", accepted: "97% accepted" },
  { country: "Germany", universities: "60+", flag: "🇩🇪", accepted: "88% accepted" },
  { country: "Malaysia", universities: "30+", flag: "🇲🇾", accepted: "99% accepted" },
];

const documents = [
  "Academic transcripts (SSC, HSC, Bachelor's)",
  "IELTS/TOEFL certificate (band 6.0+)",
  "Statement of Purpose (SOP)",
  "Two letters of recommendation",
  "CV / Resume",
  "Passport (valid for 2+ years)",
  "Financial solvency certificate",
  "Research proposal (for Masters/PhD)",
];

const testimonials = [
  { name: "Rifat Hossain", university: "University of Leeds, UK", program: "MSc Computer Science", score: "IELTS 7.0", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", scholarship: "£8,000 GBP" },
  { name: "Sadia Islam", university: "University of Toronto, Canada", program: "MBA", score: "IELTS 7.5", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", scholarship: "40% Scholarship" },
  { name: "Tanvir Ahmed", university: "Monash University, Australia", program: "Bachelor of Engineering", score: "IELTS 6.5", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80", scholarship: "25% Scholarship" },
];

const otherServices = services.filter((s) => s.slug !== "university-admission").slice(0, 3);

export default function UniversityAdmissionPage() {
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
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">University Admission</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg" style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}>
              <FaGraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-red-900 mb-4 leading-tight">
              Get Into Your<br />
              <span className="text-red-600">Dream University</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mb-8 leading-relaxed">
              From profile assessment to offer letter — our expert counselors guide you every step of the way. 5,000+ students placed at top universities worldwide.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {[{ value: "5,000+", label: "Students Placed" }, { value: "95%", label: "Success Rate" }, { value: "50+", label: "Partner Universities" }].map((s, i) => (
                <div key={s.label} className={`${i < 2 ? "border-r border-red-100 pr-6" : ""}`}>
                  <div className="text-2xl font-black text-red-700">{s.value}</div>
                  <div className="text-gray-400 text-xs font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-200 text-sm">
                <FaCalendarCheck className="w-4 h-4" />
                Book Free Consultation
              </Link>
              <a href="#destinations" className="inline-flex items-center gap-2 border-2 border-red-200 text-red-700 font-black px-7 py-3.5 rounded-xl hover:bg-red-50 hover:border-red-400 transition-all text-sm">
                View Destinations <FaArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-red-200">
              <Image src={svc.image} alt="University Admission" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-red-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <FaGraduationCap className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-black text-gray-900 text-sm">University Admission</div>
                      <div className="text-gray-500 text-xs">Expert Counseling Service</div>
                    </div>
                    <div className="ml-auto bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-full">95% Success</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                    <span className="text-xs text-gray-500 ml-1">5.0 (1,200+ reviews)</span>
                  </div>
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
          <span className="text-red-700 font-black">University Admission</span>
        </div>
      </div>

      {/* Study Destinations */}
      <section id="destinations" className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff9f9 0%,#ffffff 60%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Where We Send Students</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Top Study Destinations</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We have established partnerships with 300+ universities across 6 popular study destinations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.map((d) => (
              <div key={d.country} className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 rounded-2xl p-6 text-white hover:scale-[1.02] transition-all cursor-pointer">
                <div className="text-4xl mb-3">{d.flag}</div>
                <div className="font-black text-lg mb-1">{d.country}</div>
                <div className="text-white/70 text-sm mb-3">{d.universities} Universities</div>
                <div className="inline-block bg-white/20 border border-white/30 rounded-full px-3 py-1 text-xs font-black">{d.accepted}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">What You Get</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900 mb-5 leading-tight">
              Complete Admission<br />
              <span className="text-red-600">Support Package</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">{svc.description}</p>
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
            <div className="bg-white rounded-3xl shadow-xl border border-red-100 overflow-hidden">
              <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 p-6">
                <h3 className="text-white font-black text-xl mb-1">Documents Checklist</h3>
                <p className="text-red-200 text-sm">Everything you need to apply</p>
              </div>
              <div className="p-5 space-y-3">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <FaFileLines className="w-3 h-3 text-red-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">How It Works</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Our 5-Step Admission Process</h2>
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
                    <h3 className="font-black text-red-900 text-lg mb-1 group-hover:text-red-600 transition-colors">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-300 font-black text-xs uppercase tracking-[0.2em]">Success Stories</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-white">Students We Helped</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur hover:bg-white/15 transition">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={t.photo} alt={t.name} width={48} height={48} className="rounded-full object-cover" />
                  <div>
                    <div className="font-black text-white">{t.name}</div>
                    <div className="text-red-300 text-xs">{t.score}</div>
                  </div>
                </div>
                <div className="text-red-100 font-black text-sm mb-1">{t.university}</div>
                <div className="text-red-200 text-xs mb-3">{t.program}</div>
                <div className="inline-block bg-white/20 border border-white/30 text-white text-xs font-black px-3 py-1.5 rounded-full">
                  🎓 {t.scholarship}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fafafa 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-red-100 overflow-hidden">
            <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 px-8 py-10 text-white text-center relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
              <FaBuildingColumns className="w-14 h-14 mx-auto mb-5 text-red-300 relative z-10" />
              <h2 className="text-3xl font-black mb-2 relative z-10">Ready to Apply to Your Dream University?</h2>
              <p className="text-red-100 text-lg relative z-10">Book a free consultation — our experts will review your profile.</p>
            </div>
            <div className="p-8 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-red-200 text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+8809613820821" className="flex items-center justify-center gap-2 border-2 border-red-200 text-red-700 font-black px-8 py-4 rounded-2xl hover:bg-red-50 hover:border-red-400 transition-all">
                <FaPhone className="w-4 h-4" /> Call Now
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
                <FaArrowRight className="w-4 h-4 text-red-300 group-hover:text-red-600 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
