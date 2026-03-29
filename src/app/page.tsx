import DestinationCarousel from "@/components/ui/DestinationCarousel";
import StoryCarousel from "@/components/ui/StoryCarousel";
import Image from "next/image";
import Link from "next/link";
import Flag from "@/components/Flag";

const services = [
  {
    icon: "🎓",
    title: "University Admission",
    desc: "Personalised counselling for top university applications worldwide.",
  },
  {
    icon: "✈️",
    title: "Visa Assistance",
    desc: "Step-by-step visa support with a 98% approval success rate.",
  },
  {
    icon: "📝",
    title: "IELTS Preparation",
    desc: "Expert coaching to hit your target band score fast.",
  },
  {
    icon: "💰",
    title: "Scholarship Guidance",
    desc: "Discover and win scholarships that match your profile.",
  },
  {
    icon: "🏠",
    title: "Accommodation Help",
    desc: "Find safe, affordable housing before you even land.",
  },
  {
    icon: "📋",
    title: "Document Preparation",
    desc: "Every document prepared, verified and organised for you.",
  },
];

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "Book a session with our expert counselors to map out your goals.",
    icon: "💬",
  },
  {
    num: "02",
    title: "Profile Evaluation",
    desc: "We assess your academics and shortlist the best universities.",
    icon: "📊",
  },
  {
    num: "03",
    title: "Application & Docs",
    desc: "Our team prepares and submits everything — perfectly.",
    icon: "📁",
  },
  {
    num: "04",
    title: "Visa & Departure",
    desc: "We handle your visa and guide you until you land safely.",
    icon: "🛫",
  },
];

const testimonials = [
  {
    name: "Tanvir Ahmed",
    uni: "Univ. of Manchester",
    flag: "GB",
    course: "MSc Data Science",
    text: "BIIC made my UK dream a reality. From IELTS to visa — everything handled perfectly. I can't thank them enough!",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    uni: "University of Toronto",
    flag: "CA",
    course: "MBA",
    text: "Got a 70% scholarship thanks to BIIC. The counselors are so knowledgeable and always available to help.",
    rating: 5,
  },
  {
    name: "Rakib Hossain",
    uni: "Monash University",
    flag: "AU",
    course: "Masters in Engineering",
    text: "The whole process was smooth and stress-free. Incredibly professional team with real expertise.",
    rating: 5,
  },
  {
    name: "Fatema Begum",
    uni: "TU Berlin",
    flag: "DE",
    course: "MSc Computer Science",
    text: "Studying in Germany was my dream. BIIC guided me through every step — visa, admission, accommodation.",
    rating: 5,
  },
  {
    name: "Shahidul Islam",
    uni: "Birmingham City Univ.",
    flag: "GB",
    course: "BSc Business",
    text: "From zero knowledge to landing at UK university — BIIC handled everything. 100% recommended!",
    rating: 5,
  },
  {
    name: "Rima Akter",
    uni: "Curtin University",
    flag: "AU",
    course: "Masters in Accounting",
    text: "BIIC's scholarship guidance was exceptional. I got a partial scholarship I didn't even know I was eligible for.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes floatUp { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-18px);opacity:.9} }
        @keyframes floatX  { 0%,100%{transform:translate(0,0);opacity:.3} 50%{transform:translate(14px,-12px);opacity:.7} }
        .b{border-radius:9999px;position:absolute;pointer-events:none;}
        .fa{animation:floatUp 6s ease-in-out infinite;}
        .fb{animation:floatUp 8s ease-in-out infinite 2s;}
        .fc{animation:floatX 7s ease-in-out infinite 1s;}
        .fd{animation:floatX 9s ease-in-out infinite 3s;}
        .fe{animation:floatUp 5s ease-in-out infinite 1.5s;}
        .ch{transition:all .3s cubic-bezier(.4,0,.2,1);}
        .ch:hover{transform:translateY(-6px);box-shadow:0 20px 40px -12px rgba(185,28,28,.2);}
        .di img{transition:transform .6s cubic-bezier(.4,0,.2,1);}
        .di:hover img{transform:scale(1.07);}
        @keyframes reviewScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .review-track { animation: reviewScroll 32s linear infinite; display:flex; gap:20px; width:max-content; }
        .review-wrap:hover .review-track { animation-play-state:paused; }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{background:"linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)"}}>
        {/* Subtle hex/line pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23b91c1c' stroke-width='1'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Red accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left — copy */}
          <div className="pr-0 lg:pr-8">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-5">
              Banglay <span className="text-red-600">IELTS</span> &amp;
              <br />
              <span className="text-red-600">Immigration</span> Center
            </h1>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Get expert guidance from the best study abroad consultancy in
              Bangladesh for students planning to study in the UK, USA, Canada,
              Australia, and beyond. BIIC offers professional support with
              university admissions, scholarships, and visa applications.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-7 py-3.5 rounded-lg transition-all text-sm shadow-lg shadow-red-200 hover:scale-105"
              >
                📅 Book a Consultation
              </Link>
              <Link
                href="/success-stories"
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-bold px-7 py-3.5 rounded-lg hover:border-red-400 hover:text-red-600 transition-all text-sm"
              >
                🎓 Success Stories
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { num: "5,000+", label: "Students Placed" },
                { num: "98%", label: "Visa Success" },
                { num: "50+", label: "University Partners" },
                { num: "10+", label: "Years Experience" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-2 ${i < 3 ? "border-r border-gray-200 pr-8" : ""}`}
                >
                  <div>
                    <div className="text-xl font-black text-red-600">
                      {s.num}
                    </div>
                    <div className="text-gray-400 text-xs font-medium">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration image */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-xl h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=85"
                alt="BIIC Students"
                fill
                className="object-cover object-center rounded-2xl"
                priority
              />
              {/* Subtle bottom fade to white */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent rounded-b-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT US ══ */}
      <section className="py-20 px-4 overflow-hidden" style={{background:"linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)"}}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div className="flex-1">
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-red-400" />
                <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
                  About us
                </span>
                <div className="h-px w-10 bg-red-400" />
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                Hello, We are <span className="text-red-600">BIIC</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
                Since 2024, we guide Bangladeshi students through every step —
                from program selection to visa approval — helping them achieve
                their study abroad dreams in the UK, Canada, Australia, USA
                &amp; beyond.
              </p>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-black text-red-400 tracking-widest">
                      001
                    </span>
                    <span className="text-gray-300 text-lg">📅</span>
                  </div>
                  <div className="text-3xl font-black text-gray-900">10+</div>
                  <div className="text-gray-500 text-sm mt-1 font-medium">
                    Years of Experience
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-black text-red-400 tracking-widest">
                      002
                    </span>
                    <span className="text-gray-300 text-lg">🏛️</span>
                  </div>
                  <div className="text-3xl font-black text-gray-900">50+</div>
                  <div className="text-gray-500 text-sm mt-1 font-medium">
                    University Partners
                  </div>
                </div>

                <div className="col-span-2 bg-red-600 rounded-2xl p-5 relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-black text-red-200 tracking-widest">
                      003
                    </span>
                    <span className="text-red-300 text-lg">👥</span>
                  </div>
                  <div className="text-3xl font-black text-white">5,000+</div>
                  <div className="text-red-200 text-sm mt-1 font-medium">
                    Students Successfully Placed
                  </div>
                </div>
              </div>
            </div>

            {/* Right — image */}
            <div className="flex-1 relative flex items-center justify-center min-h-[420px]">
              {/* Background blob */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-50 via-red-100/60 to-white" />
              {/* Decorative plane SVG */}
              <svg
                className="absolute top-6 right-6 w-24 h-24 text-red-200 opacity-60"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 50 L90 10 L70 50 L90 90 Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M70 50 L30 60"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              {/* City/building line art */}
              <svg
                className="absolute bottom-4 left-0 right-0 w-full h-24 text-red-100 opacity-70"
                viewBox="0 0 400 100"
                fill="none"
              >
                <rect
                  x="10"
                  y="40"
                  width="30"
                  height="60"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="15"
                  y="50"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="27"
                  y="50"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="50"
                  y="20"
                  width="50"
                  height="80"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="58"
                  y="30"
                  width="10"
                  height="10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="72"
                  y="30"
                  width="10"
                  height="10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="58"
                  y="50"
                  width="10"
                  height="10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="72"
                  y="50"
                  width="10"
                  height="10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="110"
                  y="35"
                  width="40"
                  height="65"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="118"
                  y="45"
                  width="9"
                  height="9"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="131"
                  y="45"
                  width="9"
                  height="9"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="260"
                  y="25"
                  width="55"
                  height="75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="268"
                  y="35"
                  width="10"
                  height="10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="283"
                  y="35"
                  width="10"
                  height="10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="268"
                  y="55"
                  width="10"
                  height="10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="283"
                  y="55"
                  width="10"
                  height="10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="325"
                  y="45"
                  width="35"
                  height="55"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="333"
                  y="55"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="345"
                  y="55"
                  width="8"
                  height="8"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
              <div className="relative z-10 w-64 h-80 md:w-72 md:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
                  alt="BIIC Student"
                  fill
                  className="object-cover object-top rounded-3xl shadow-2xl shadow-red-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROMO BANNER ══ */}
      <section className="py-6 px-4" style={{background:"linear-gradient(180deg,#ffffff 0%,#fafafa 100%)"}}>
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden h-48 md:h-56 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
              alt="UK"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/85 to-slate-700/40" />
            <div className="relative z-10 h-full flex items-center justify-between px-8 gap-4">
              <div className="flex-1">
                <div className="inline-block bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded mb-2 uppercase tracking-wide">
                  Study at the UK&apos;s Top Universities
                </div>
                <h3 className="text-white font-black text-xl md:text-2xl leading-tight mb-1">
                  June/September 2026 Intake — Applications Now Open!
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  Secure your spot and start your journey to a world-class
                  education
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs px-5 py-2 rounded-lg transition-all hover:scale-105"
                >
                  Apply Now →
                </Link>
              </div>
              <div className="hidden md:block w-48 relative h-full flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80"
                  alt="Student"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PARTNERS ══ */}
      <section className="py-14 overflow-hidden" style={{background:"linear-gradient(160deg,#fafafa 0%,#f9f1f1 50%,#fdf4f4 100%)"}}>
        <style>{`
          @keyframes scrollLeft  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
          @keyframes scrollRight { from{transform:translateX(-50%)} to{transform:translateX(0)} }
          .track-l { animation: scrollLeft  30s linear infinite; display:flex; width:max-content; }
          .track-r { animation: scrollRight 30s linear infinite; display:flex; width:max-content; }
          .logo-card { flex-shrink:0; width:160px; height:68px; background:white; border:1.5px solid #fecaca; border-radius:8px; display:flex; align-items:center; gap:8px; padding:0 14px; transition:transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
          .logo-card:hover { transform:scale(1.07); box-shadow:0 8px 24px -4px rgba(239,68,68,.25); border-color:#ef4444; }
          .logo-card .lbadge { width:32px; height:32px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:13px; color:white; flex-shrink:0; }
          .logo-card .lname { font-size:11px; font-weight:700; color:#1f2937; line-height:1.3; }
        `}</style>

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
              Trusted By
            </span>
            <h2 className="text-3xl font-black text-red-900 mt-1">
              Our Valued{" "}
              <span className="text-red-600">Partners & Universities</span>
            </h2>
          </div>

          <div className="partner-wrap space-y-4">
            {/* Row 1 — scrolls left */}
            <div
              className="overflow-hidden py-2"
              style={{
                maskImage:
                  "linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)",
              }}
            >
              <div className="track-l gap-4">
                {[
                  { name: "University of Bolton", color: "#b91c1c" },
                  { name: "Coventry University", color: "#1d4ed8" },
                  { name: "Middlesex University", color: "#065f46" },
                  { name: "Birmingham City Univ", color: "#7c3aed" },
                  { name: "Heriot-Watt University", color: "#b45309" },
                  { name: "Northumbria University", color: "#0f766e" },
                  { name: "Ulster University", color: "#be185d" },
                  { name: "University of Bolton", color: "#b91c1c" },
                  { name: "Coventry University", color: "#1d4ed8" },
                  { name: "Middlesex University", color: "#065f46" },
                  { name: "Birmingham City Univ", color: "#7c3aed" },
                  { name: "Heriot-Watt University", color: "#b45309" },
                  { name: "Northumbria University", color: "#0f766e" },
                  { name: "Ulster University", color: "#be185d" },
                ].map((p, i) => (
                  <div key={i} className="logo-card">
                    <div className="lbadge" style={{ background: p.color }}>
                      {p.name
                        .split(" ")
                        .map((w: string) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <span className="lname">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div
              className="overflow-hidden py-2"
              style={{
                maskImage:
                  "linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)",
              }}
            >
              <div className="track-r gap-4">
                {[
                  { name: "Murdoch University", color: "#b91c1c" },
                  { name: "Curtin University", color: "#1d4ed8" },
                  { name: "Cardiff Met Univ", color: "#065f46" },
                  { name: "De Montfort Univ", color: "#7c3aed" },
                  { name: "Anglia Ruskin Univ", color: "#b45309" },
                  { name: "Robert Gordon Univ", color: "#0f766e" },
                  { name: "Griffith University", color: "#be185d" },
                  { name: "Murdoch University", color: "#b91c1c" },
                  { name: "Curtin University", color: "#1d4ed8" },
                  { name: "Cardiff Met Univ", color: "#065f46" },
                  { name: "De Montfort Univ", color: "#7c3aed" },
                  { name: "Anglia Ruskin Univ", color: "#b45309" },
                  { name: "Robert Gordon Univ", color: "#0f766e" },
                  { name: "Griffith University", color: "#be185d" },
                ].map((p, i) => (
                  <div key={i} className="logo-card">
                    <div className="lbadge" style={{ background: p.color }}>
                      {p.name
                        .split(" ")
                        .map((w: string) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <span className="lname">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DESTINATIONS ══ */}
      <section
        id="destinations"
        className="relative overflow-hidden py-20 px-4"
        style={{background:"linear-gradient(180deg,#ffffff 0%,#fff8f8 60%,#fff5f5 100%)"}}
      >

        <div
          className="b fa bg-red-200/30"
          style={{ width: 10, height: 10, top: "5%", left: "2%" }}
        />
        <div
          className="b fc bg-red-300/20"
          style={{ width: 14, height: 14, bottom: "8%", right: "3%" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
                Where Will You Go?
              </span>
              <h2 className="text-5xl font-black text-red-900 mt-2 leading-tight">
                Top Study
                <br />
                <span className="text-red-600">Destinations</span>
              </h2>
            </div>
            <Link
              href="/study-in/uk"
              className="text-red-600 font-bold text-sm border-b-2 border-red-600 pb-0.5 hover:text-red-700 whitespace-nowrap self-end"
            >
              View All →
            </Link>
          </div>
          <DestinationCarousel />
        </div>
      </section>

      {/* ══ WHY BIIC ══ */}
      <section className="relative overflow-hidden py-24 px-4" style={{background:"linear-gradient(135deg,#fef2f2 0%,#fdf0ef 30%,#fafafa 70%,#f5f5f5 100%)"}}>
        <div
          className="b fa bg-red-100/60"
          style={{ width: 12, height: 12, top: "6%", left: "3%" }}
        />
        <div
          className="b fc bg-red-200/50"
          style={{ width: 10, height: 10, bottom: "8%", right: "4%" }}
        />
        <div
          className="b fb bg-red-100/40"
          style={{ width: 8, height: 8, top: "45%", right: "8%" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
              Why Choose BIIC
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-red-900 mt-3 leading-tight">
              We Don&apos;t Just Guide.
              <br />
              <span className="text-red-600">We Deliver.</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
              For over 10 years, BIIC has been the most trusted name in study
              abroad consulting for Bangladeshi students.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                num: "10+",
                title: "Years of Excellence",
                desc: "A decade of placing students in world-class universities across 15+ countries.",
                color: "from-amber-500 to-orange-600",
              },
              {
                icon: "🛡️",
                num: "98%",
                title: "Visa Success Rate",
                desc: "Industry-leading approval rate thanks to meticulous preparation and expertise.",
                color: "from-red-600 to-red-800",
              },
              {
                icon: "💸",
                num: "৳Cr+",
                title: "Scholarships Won",
                desc: "Our students collectively win crores in scholarships every single year.",
                color: "from-emerald-500 to-teal-600",
              },
              {
                icon: "🤝",
                num: "50+",
                title: "University Partners",
                desc: "Direct tie-ups mean faster processing and exclusive admission benefits.",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: "🌐",
                num: "15+",
                title: "Destinations",
                desc: "From UK to Malaysia — wherever you want to go, we have the network.",
                color: "from-purple-500 to-purple-700",
              },
              {
                icon: "📞",
                num: "24/7",
                title: "Always Available",
                desc: "Your dedicated counselor is reachable even after you land abroad.",
                color: "from-red-500 to-red-700",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="ch group bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-red-200 overflow-hidden relative"
              >
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300" />
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-5`}
                >
                  {item.icon}
                </div>
                <div className="text-4xl font-black text-red-900 leading-none mb-1">
                  {item.num}
                </div>
                <div className="font-black text-gray-800 text-base mb-3">
                  {item.title}
                </div>
                <div className="text-gray-500 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </div>
                <div className="mt-5 w-10 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-14 bg-gradient-to-r from-red-700 via-red-600 to-red-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-red-200">
            <div>
              <div className="text-white font-black text-2xl md:text-3xl leading-tight">
                Ready to start your journey?
              </div>
              <div className="text-red-200 text-sm mt-1">
                Join 5,000+ students who chose BIIC — Bangladesh&apos;s most
                trusted consultancy.
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-white text-red-700 font-black px-8 py-3.5 rounded-2xl hover:bg-red-50 transition-all shadow-lg whitespace-nowrap hover:scale-105 flex-shrink-0"
            >
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="relative overflow-hidden py-24 px-4" style={{background:"linear-gradient(180deg,#ffffff 0%,#fffbfb 50%,#fff7f7 100%)"}}>
        <div
          className="b fa bg-red-300/25"
          style={{ width: 12, height: 12, top: "5%", right: "5%" }}
        />
        <div
          className="b fc bg-red-400/20"
          style={{ width: 10, height: 10, bottom: "10%", left: "6%" }}
        />
        <div
          className="b fb bg-red-200/25"
          style={{ width: 8, height: 8, top: "50%", left: "40%" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
              What We Do
            </span>
            <h2 className="text-5xl font-black text-red-900 mt-2">
              Everything You Need,
              <br />
              <span className="text-red-600">Under One Roof</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="ch group relative bg-white rounded-2xl p-7 border border-red-100 shadow-sm overflow-hidden cursor-pointer hover:border-red-300"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -right-4 -bottom-4 text-7xl opacity-5 group-hover:opacity-10 transition-opacity duration-300 select-none">
                  {s.icon}
                </div>
                <div className="w-13 h-13 w-12 h-12 bg-red-100 group-hover:bg-red-600 rounded-xl flex items-center justify-center text-xl mb-5 transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="font-black text-red-900 text-lg mb-2 group-hover:text-red-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4 text-red-600 text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3.5 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-red-200"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="relative overflow-hidden py-24 px-4" style={{background:"linear-gradient(160deg,#f5f5f5 0%,#fdf0f0 50%,#fef2f2 100%)"}}>
        <div
          className="b fa bg-red-200/30"
          style={{ width: 12, height: 12, top: "5%", right: "4%" }}
        />
        <div
          className="b fc bg-red-300/20"
          style={{ width: 10, height: 10, bottom: "8%", left: "3%" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
              Simple Process
            </span>
            <h2 className="text-5xl font-black text-red-900 mt-2">
              How It <span className="text-red-600">Works</span>
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              4 simple steps to your dream university
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="ch bg-white border-2 border-red-100 hover:border-red-300 rounded-3xl p-7 text-center h-full flex flex-col items-center">
                  <div className="relative mb-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-red-200">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-900 text-white text-[10px] font-black rounded-full flex items-center justify-center">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="font-black text-red-900 text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/3 -right-3 z-10 w-6 h-6 bg-red-100 rounded-full items-center justify-center text-red-600 text-xs font-black">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 rounded-2xl transition-all shadow-xl shadow-red-100 text-lg hover:scale-105 inline-block"
            >
              Start Your Journey →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ UPCOMING EVENTS ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-red-800 via-red-700 to-red-600">
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px,rgba(255,255,255,.08) 1px,transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="b fa bg-white/8"
          style={{ width: 160, height: 160, top: "-5%", right: "5%" }}
        />
        <div
          className="b fb bg-white/5"
          style={{ width: 120, height: 120, bottom: "-5%", left: "3%" }}
        />
        <div
          className="b fc bg-white/5"
          style={{ width: 10, height: 10, top: "30%", left: "8%" }}
        />
        <div
          className="b fd bg-white/5"
          style={{ width: 12, height: 12, bottom: "25%", right: "12%" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-red-200 font-black text-xs uppercase tracking-[0.2em]">
                Don&apos;t Miss Out
              </span>
              <h2 className="text-5xl font-black text-white mt-2">
                Upcoming <span className="text-red-200">Events</span>
              </h2>
            </div>
            <Link
              href="/events"
              className="text-white font-bold text-sm border-b-2 border-white/40 pb-0.5 hover:border-white whitespace-nowrap self-end"
            >
              All Events →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                slug: "uk-university-fair-2026",
                date: "25 Mar",
                month: "2026",
                title: "UK University Fair 2026",
                type: "Free Event",
                location: "Dhaka, Bangladesh",
                desc: "Meet representatives from 30+ UK universities. Get direct admission offers on the spot.",
                badge: "UK", flagCode: "GB",
              },
              {
                slug: "canada-study-seminar-2026",
                date: "10 Apr",
                month: "2026",
                title: "Canada Study Seminar",
                type: "Free Seminar",
                location: "Online (Zoom)",
                desc: "Learn about Canadian student visa, scholarships and top universities with our experts.",
                badge: "Canada", flagCode: "CA",
              },
              {
                slug: "ielts-strategy-workshop-2026",
                date: "20 Apr",
                month: "2026",
                title: "IELTS Strategy Workshop",
                type: "Paid Workshop",
                location: "BIIC Office, Dhaka",
                desc: "Intensive 1-day IELTS preparation workshop. Target band 7+ with proven strategies.",
                badge: "📝 IELTS",
              },
            ].map((ev) => (
              <div
                key={ev.title}
                className="ch group bg-white rounded-3xl overflow-hidden shadow-xl shadow-red-900/20 hover:shadow-2xl hover:shadow-red-900/30"
              >
                <div className="flex items-stretch">
                  <div className="bg-red-600 px-5 py-6 flex flex-col items-center justify-center min-w-[80px] text-center">
                    <div className="text-white font-black text-3xl leading-none">
                      {ev.date.split(" ")[0]}
                    </div>
                    <div className="text-red-200 text-xs font-bold mt-1">
                      {ev.date.split(" ")[1]}
                    </div>
                    <div className="text-red-300 text-[10px] mt-0.5">
                      {ev.month}
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-red-50 text-red-600 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
                        {"flagCode" in ev && <Flag code={(ev as {flagCode:string}).flagCode} size="0.9em" />}
                        {ev.badge}
                      </span>
                      <span className="text-gray-400 text-[10px] font-bold uppercase">
                        {ev.type}
                      </span>
                    </div>
                    <h3 className="font-black text-red-900 text-base mb-1 group-hover:text-red-600 transition-colors">
                      {ev.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2 flex items-center gap-1">
                      📍 {ev.location}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {ev.desc}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4 pt-3 border-t border-red-50 flex items-center justify-between">
                  <Link
                    href={`/events/${ev.slug}`}
                    className="text-red-600 text-xs font-black hover:text-red-700 transition-colors"
                  >
                    View Details →
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-red-600 hover:bg-red-700 text-white text-xs font-black px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Register Free
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BLOG ══ */}
      <section className="relative overflow-hidden py-24 px-4" style={{background:"linear-gradient(180deg,#ffffff 0%,#fffbfb 60%,#fff8f8 100%)"}}>
        <div
          className="b fb bg-red-200/25"
          style={{ width: 12, height: 12, top: "5%", left: "3%" }}
        />
        <div
          className="b fd bg-red-300/20"
          style={{ width: 10, height: 10, bottom: "10%", right: "4%" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
                Latest Updates
              </span>
              <h2 className="text-5xl font-black text-red-900 mt-2">
                From Our <span className="text-red-600">Blog</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-red-600 font-bold text-sm border-b-2 border-red-600 pb-0.5 hover:text-red-700 whitespace-nowrap self-end"
            >
              All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                cat: "Visa Guide",
                title: "UK Student Visa 2025: Complete Step-by-Step Guide",
                date: "March 10, 2026",
                read: "8 min read",
                img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
                excerpt:
                  "Everything you need to know about applying for a UK student visa — documents, fees, timeline and tips.",
              },
              {
                cat: "Scholarship",
                title:
                  "Top 10 Fully Funded Scholarships for Bangladeshi Students",
                date: "March 5, 2026",
                read: "12 min read",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
                excerpt:
                  "From Chevening to Commonwealth — here are the best scholarships you can apply for right now.",
              },
              {
                cat: "Study Abroad",
                title:
                  "Canada vs Australia: Which is Better for Bangladeshi Students?",
                date: "Feb 28, 2026",
                read: "10 min read",
                img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80",
                excerpt:
                  "A detailed comparison of costs, visa success rates, job prospects and lifestyle for Bangladeshi students.",
              },
            ].map((post) => (
              <Link
                key={post.title}
                href="/blog"
                className="ch group block bg-white rounded-3xl overflow-hidden border border-red-100 shadow-sm hover:shadow-xl hover:border-red-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                    {post.cat}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.read}</span>
                  </div>
                  <h3 className="font-black text-red-900 text-lg leading-snug mb-3 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-red-600 text-xs font-black flex items-center gap-1">
                    Read More <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SUCCESS STORIES ══ */}
      <section className="relative overflow-hidden py-24 px-4" style={{background:"linear-gradient(135deg,#fef2f2 0%,#fdf1ef 40%,#fafafa 80%,#f5f5f5 100%)"}}>
        <div
          className="b fa bg-red-400/20"
          style={{ width: 10, height: 10, top: "4%", left: "6%" }}
        />
        <div
          className="b fb bg-red-500/15"
          style={{ width: 14, height: 14, top: "15%", right: "5%" }}
        />
        <div
          className="b fc bg-red-300/25"
          style={{ width: 8, height: 8, top: "40%", left: "2%" }}
        />
        <div
          className="b fd bg-red-400/20"
          style={{ width: 12, height: 12, bottom: "20%", right: "8%" }}
        />
        <div
          className="b fe bg-red-500/15"
          style={{ width: 10, height: 10, bottom: "8%", left: "35%" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
                Real Students · Real Results
              </span>
              <h2 className="text-5xl font-black text-red-900 mt-2">
                Success <span className="text-red-600">Stories</span>
              </h2>
              <p className="text-gray-500 mt-2 text-base">
                Hear directly from students who changed their lives with BIIC
              </p>
            </div>
            <Link
              href="/success-stories"
              className="text-red-600 font-bold text-sm border-b-2 border-red-600 pb-0.5 hover:text-red-700 whitespace-nowrap self-end"
            >
              All Stories →
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 mb-12 justify-start">
            {[
              {
                title: "How I Got Into University of Manchester",
                student: "Tanvir Ahmed · MSc Data Science", flagCode: "GB", dest: "UK",
                id: "dQw4w9WgXcQ",
              },
              {
                title: "My Scholarship Journey to Canada",
                student: "Nusrat Jahan · MBA", flagCode: "CA", dest: "Canada",
                id: "dQw4w9WgXcQ",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="ch rounded-2xl overflow-hidden border border-red-200 bg-white shadow-sm"
                style={{ width: 360 }}
              >
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-3 border-t border-red-100">
                  <h3 className="font-black text-red-900 text-xs leading-snug mb-0.5 line-clamp-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] flex items-center gap-1">
                    {v.student} {"flagCode" in v && <Flag code={(v as {flagCode:string}).flagCode} size="0.9em" />} {"dest" in v && (v as {dest:string}).dest}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <StoryCarousel />
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="relative overflow-hidden py-24 px-4" style={{background:"linear-gradient(180deg,#ffffff 0%,#fffbfb 50%,#fff5f5 100%)"}}>
        <div
          className="b fb bg-red-200/25"
          style={{ width: 12, height: 12, top: "6%", right: "4%" }}
        />
        <div
          className="b fd bg-red-300/20"
          style={{ width: 10, height: 10, bottom: "12%", left: "5%" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
                Student Reviews
              </span>
              <h2 className="text-5xl font-black text-red-900 mt-2">
                What Our <span className="text-red-600">Students Say</span>
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-red-600 font-bold text-sm border-b-2 border-red-600 pb-0.5 hover:text-red-700 whitespace-nowrap self-end"
            >
              All Reviews →
            </Link>
          </div>
          <div
            className="overflow-hidden review-wrap py-3"
            style={{
              maskImage:
                "linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right,transparent 0%,black 10%,black 90%,transparent 100%)",
            }}
          >
            <div className="review-track">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className={`ch flex-shrink-0 relative rounded-3xl p-7 overflow-hidden w-80 ${i % 3 === 1 ? "bg-gradient-to-br from-red-600 to-red-800" : "bg-white border border-red-100 shadow-sm"}`}
                >
                  <div
                    className={`absolute top-4 right-5 text-8xl font-serif leading-none select-none ${i % 3 === 1 ? "text-white/10" : "text-red-50"}`}
                  >
                    &ldquo;
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span
                        key={j}
                        className={`text-lg ${i % 3 === 1 ? "text-red-200" : "text-red-400"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    className={`text-sm leading-relaxed mb-6 relative z-10 ${i % 3 === 1 ? "text-red-100" : "text-gray-600"}`}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div
                    className={`flex items-center gap-3 pt-4 border-t ${i % 3 === 1 ? "border-red-500" : "border-red-100"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 ${i % 3 === 1 ? "bg-white/20 text-white" : "bg-red-600 text-white"}`}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div
                        className={`font-black text-sm ${i % 3 === 1 ? "text-white" : "text-red-900"}`}
                      >
                        {t.name} <Flag code={t.flag} size="1em" />
                      </div>
                      <div
                        className={`text-xs ${i % 3 === 1 ? "text-red-200" : "text-gray-400"}`}
                      >
                        {t.course} · {t.uni}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="relative overflow-hidden py-24 px-4" style={{background:"linear-gradient(160deg,#f5f5f5 0%,#fef0ef 40%,#fdf2f2 80%,#f9f9f9 100%)"}}>
        <div
          className="b fa bg-red-300/25"
          style={{ width: 12, height: 12, top: "5%", right: "5%" }}
        />
        <div
          className="b fc bg-red-400/20"
          style={{ width: 10, height: 10, bottom: "8%", left: "4%" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">
              Got Questions?
            </span>
            <h2 className="text-5xl font-black text-red-900 mt-2">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How much does BIIC's consultation cost?",
                a: "Our initial consultation is completely free. We believe every student deserves expert guidance regardless of their budget. Contact us today to book your free session.",
              },
              {
                q: "What documents do I need to study abroad?",
                a: "Generally you'll need academic transcripts, English test scores (IELTS/TOEFL), passport, recommendation letters, SOP/personal statement, and financial documents. Our team will guide you through exactly what's required for your specific destination.",
              },
              {
                q: "How long does the visa process take?",
                a: "Visa processing times vary by country — UK typically takes 3-6 weeks, Canada 4-8 weeks, Australia 4-6 weeks. We recommend applying at least 3 months before your intake to be safe.",
              },
              {
                q: "Can BIIC help me get a scholarship?",
                a: "Absolutely! We have helped hundreds of students secure full and partial scholarships. Our team knows exactly which scholarships are available for Bangladeshi students and how to write winning applications.",
              },
              {
                q: "Do I need IELTS to study abroad?",
                a: "Most universities require IELTS (or TOEFL/PTE). The minimum score varies by university and course — usually 6.0 to 7.0 overall for IELTS. We offer IELTS preparation coaching to help you hit your target score.",
              },
              {
                q: "What if my visa gets rejected?",
                a: "In the rare case of a visa rejection, our team immediately analyses the reason and helps you prepare a strong reapplication. Our 98% success rate means this rarely happens, but we're always here to support you.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden hover:border-red-300 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-red-900 group-open:text-red-600 transition-colors pr-4">
                    {item.q}
                  </span>
                  <span className="w-8 h-8 bg-red-50 group-open:bg-red-600 rounded-xl flex items-center justify-center text-red-600 group-open:text-white font-black text-lg transition-all flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <div className="h-px bg-red-100 mb-4" />
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3.5 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-red-200"
            >
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA + CONTACT FORM ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px,white 1px,transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div
          className="b fa bg-white/5"
          style={{ width: 300, height: 300, top: "-10%", left: "5%" }}
        />
        <div
          className="b fb bg-red-400/20"
          style={{ width: 400, height: 400, bottom: "-20%", right: "5%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left — CTA copy */}
            <div className="flex-1 lg:pt-4">
              <div className="inline-flex items-center gap-2 bg-red-600/30 border border-red-400/30 text-red-200 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
                🎓 Free · No Obligation · Expert Advice
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-5 leading-[1.05] tracking-tight">
                Your Journey
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-100">
                  Starts Today.
                </span>
              </h2>
              <p className="text-red-200/80 text-lg mb-10 leading-relaxed">
                Join 5,000+ students who trusted BIIC to change their lives.
                Let&apos;s make your dream university a reality.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "📞", label: "Call Us", val: "+880 1234 567890" },
                  { icon: "✉️", label: "Email Us", val: "info@biic.com.bd" },
                  { icon: "📍", label: "Visit Us", val: "Dhaka, Bangladesh" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="text-xl">{c.icon}</span>
                    <div>
                      <div className="text-[10px] font-black text-red-300 uppercase tracking-widest">
                        {c.label}
                      </div>
                      <div className="text-sm font-bold text-white/90">
                        {c.val}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form Card */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-xs font-black text-red-600 uppercase tracking-[0.2em] mb-1">
                  Get In Touch
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-6">
                  Send us an inquiry
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-black text-gray-500 mb-1.5 uppercase tracking-wide">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Alex Cooper"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 mb-1.5 uppercase tracking-wide">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+880 1XXX XXXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-black text-gray-500 mb-1.5 uppercase tracking-wide">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-black text-gray-500 mb-1.5 uppercase tracking-wide">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all bg-white">
                      <option value="">— Select a Service —</option>
                      <option>University Admission</option>
                      <option>Visa Assistance</option>
                      <option>IELTS Preparation</option>
                      <option>Scholarship Guidance</option>
                      <option>Accommodation Help</option>
                      <option>Document Preparation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 mb-1.5 uppercase tracking-wide">
                      Destination
                    </label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all bg-white">
                      <option value="">— Select Country —</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>Malaysia</option>
                    </select>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-xs font-black text-gray-500 mb-1.5 uppercase tracking-wide">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your academic background and goals..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-red-200 text-base"
                >
                  Send Inquiry →
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Not ready to fill the form?{" "}
                  <Link
                    href="/contact"
                    className="text-red-600 font-bold hover:underline"
                  >
                    Book a Call Directly
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
