import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  FaPenToSquare, FaCalendarCheck, FaCircleCheck, FaPhone,
  FaArrowRight, FaHeadphones, FaBook, FaMicrophone, FaKeyboard,
  FaClock, FaUsers,
} from "react-icons/fa6";
import { services } from "../page";

export const metadata: Metadata = {
  title: "IELTS Preparation | BIIC Global",
  description: "Expert IELTS coaching for Band 7+. Small batches, mock tests, all 4 modules covered.",
};

const svc = services.find((s) => s.slug === "ielts-preparation")!;
const otherServices = services.filter((s) => s.slug !== "ielts-preparation").slice(0, 3);

const modules = [
  { Icon: FaHeadphones, name: "Listening", duration: "30 min", questions: "40 questions", tip: "4 sections, recordings played once" },
  { Icon: FaBook, name: "Reading", duration: "60 min", questions: "40 questions", tip: "3 passages, academic/general texts" },
  { Icon: FaKeyboard, name: "Writing", duration: "60 min", questions: "2 tasks", tip: "Graph/letter + essay writing" },
  { Icon: FaMicrophone, name: "Speaking", duration: "11–14 min", questions: "3 parts", tip: "Face-to-face interview with examiner" },
];

const batches = [
  { name: "Weekend Batch", schedule: "Fri & Sat", time: "2:00 PM – 5:00 PM", duration: "2 months", fee: "৳ 8,000", seats: "8 seats left", type: "Popular" },
  { name: "Evening Batch", schedule: "Sun–Thu", time: "6:00 PM – 8:00 PM", duration: "3 months", fee: "৳ 6,000", seats: "5 seats left", type: "Regular" },
  { name: "Crash Course", schedule: "Daily", time: "10:00 AM – 1:00 PM", duration: "3 weeks", fee: "৳ 5,000", seats: "12 seats left", type: "Fast Track" },
  { name: "Online Batch", schedule: "Flexible", time: "Self-paced + Live", duration: "2 months", fee: "৳ 4,500", seats: "Open", type: "Online" },
];

const bandScores = [
  { band: "5.0", width: "55%" },
  { band: "6.0", width: "66%" },
  { band: "6.5", width: "72%" },
  { band: "7.0", width: "78%" },
  { band: "7.5", width: "83%" },
  { band: "8.0+", width: "90%" },
];

const results = [
  { name: "Mehedi Hassan", score: "Band 8.0", subject: "Listening 9.0 / Reading 8.5", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { name: "Fatema Akter", score: "Band 7.5", subject: "Writing 7.0 / Speaking 8.0", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { name: "Sakib Al Hasan", score: "Band 7.0", subject: "All modules 7.0+", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
];

export default function IELTSPreparationPage() {
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
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">IELTS Preparation</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg" style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}>
              <FaPenToSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-red-900 mb-4 leading-tight">
              Score <span className="text-red-600">Band 7+</span><br />
              with Confidence
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mb-8 leading-relaxed">
              Expert IELTS coaching with small batches, weekly mock tests, and proven study methods. 2,000+ students have achieved their target band score.
            </p>

            {/* Band score visual */}
            <div className="bg-white border border-red-100 rounded-2xl p-5 mb-8 shadow-sm">
              <p className="text-red-600 text-xs font-black uppercase tracking-widest mb-4">Band Score Scale</p>
              <div className="space-y-2">
                {bandScores.map((b) => (
                  <div key={b.band} className="flex items-center gap-3">
                    <span className="text-xs font-black text-gray-600 w-10 flex-shrink-0">{b.band}</span>
                    <div className="flex-1 h-3 bg-red-50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-400 to-red-700 rounded-full" style={{ width: b.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-3 text-center">Our students target Band 7.0 and above</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-200 text-sm">
                <FaCalendarCheck className="w-4 h-4" />
                Enroll Free Trial Class
              </Link>
              <a href="#batches" className="inline-flex items-center gap-2 border-2 border-red-200 text-red-700 font-black px-7 py-3.5 rounded-xl hover:bg-red-50 hover:border-red-400 transition-all text-sm">
                View Batches <FaArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-red-200">
              <Image src={svc.image} alt="IELTS Preparation" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-red-100">
                  <p className="font-black text-gray-700 text-xs mb-3 uppercase tracking-wide">Recent Student Results</p>
                  {results.map((r) => (
                    <div key={r.name} className="flex items-center gap-3 py-2 border-t border-gray-50 first:border-0">
                      <Image src={r.photo} alt={r.name} width={32} height={32} className="rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="font-black text-gray-800 text-xs">{r.name}</div>
                        <div className="text-gray-400 text-xs">{r.subject}</div>
                      </div>
                      <div className="bg-red-100 text-red-700 font-black text-xs px-2.5 py-1 rounded-full">{r.score}</div>
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
          <span className="text-red-700 font-black">IELTS Preparation</span>
        </div>
      </div>

      {/* 4 Modules */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff9f9 0%,#ffffff 60%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Full Coverage</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">All 4 IELTS Modules</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We cover every section in depth. No module is left behind — we ensure balanced preparation across all 4.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map((m) => (
              <div key={m.name} className="bg-white border border-red-100 rounded-2xl p-6 hover:border-red-300 hover:shadow-xl transition-all group text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-red-200">
                  <m.Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-black text-red-900 text-lg mb-2">{m.name}</h3>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <FaClock className="w-3.5 h-3.5" /> {m.duration}
                  </div>
                  <div className="text-gray-400 text-xs">{m.questions}</div>
                </div>
                <div className="mt-4 pt-4 border-t border-red-50 text-xs text-gray-400 leading-snug">{m.tip}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batches */}
      <section id="batches" className="py-20 px-4" style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Enroll Now</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Available Batches</h2>
            <p className="text-gray-500 mt-3">Choose the batch that fits your schedule. All batches include mock tests and personal feedback.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {batches.map((b) => (
              <div key={b.name} className="bg-white border border-red-100 rounded-2xl p-6 hover:border-red-300 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-black text-red-900 text-lg">{b.name}</h3>
                  <span className="bg-red-100 text-red-700 text-xs font-black px-2.5 py-1 rounded-full">{b.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div><span className="text-gray-400 text-xs">Schedule</span><div className="font-black text-gray-800">{b.schedule}</div></div>
                  <div><span className="text-gray-400 text-xs">Time</span><div className="font-black text-gray-800">{b.time}</div></div>
                  <div><span className="text-gray-400 text-xs">Duration</span><div className="font-black text-gray-800">{b.duration}</div></div>
                  <div><span className="text-gray-400 text-xs">Fee</span><div className="font-black text-red-700 text-lg">{b.fee}</div></div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-red-50">
                  <div className="flex items-center gap-1.5 text-orange-600 text-xs font-black">
                    <FaUsers className="w-3.5 h-3.5" /> {b.seats}
                  </div>
                  <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-black px-5 py-2 rounded-xl text-sm transition hover:scale-105 shadow-sm shadow-red-200">
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer + Process */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fafafa 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">What You Get</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900 mb-5 leading-tight">
              Everything Included in<br />
              <span className="text-red-600">Our IELTS Program</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">{svc.description}</p>
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
            <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-red-400" />
                <h3 className="font-black text-xl">Our Coaching Process</h3>
              </div>
              <div className="space-y-4">
                {svc.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white/20 border border-white/30 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0">{step.num}</div>
                    <div>
                      <div className="font-black text-white mb-0.5">{step.title}</div>
                      <div className="text-red-200 text-sm leading-snug">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Mock Test CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaPenToSquare className="w-10 h-10 text-red-300" />
          </div>
          <h2 className="text-4xl font-black mb-4">Start with a Free Diagnostic Test</h2>
          <p className="text-red-200 mb-8 text-lg">Know your current band score before enrolling. Our free diagnostic test identifies your weak areas so we can create a custom plan.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-red-700 font-black px-8 py-4 rounded-xl hover:bg-red-50 transition text-lg shadow-xl">
              Book Free Diagnostic Test
            </Link>
            <a href="tel:+8809613820821" className="flex items-center gap-2 border-2 border-white/40 text-white font-black px-8 py-4 rounded-xl hover:bg-white/10 transition">
              <FaPhone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(180deg,#ffffff 0%,#fffbfb 50%,#fff7f7 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {[
              { value: "2,000+", label: "Students Trained", icon: "👩‍🎓" },
              { value: "90%", label: "Target Score Achieved", icon: "🎯" },
              { value: "Band 7+", label: "Average Score", icon: "📊" },
              { value: "4.9★", label: "Student Rating", icon: "⭐" },
            ].map((s) => (
              <div key={s.label} className="border border-red-100 rounded-2xl p-5 hover:border-red-200 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl font-black text-red-700">{s.value}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
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
