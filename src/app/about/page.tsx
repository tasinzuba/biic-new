import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BIIC Global — Bangladesh's leading study abroad consultancy with 15+ years of experience.",
};

const stats = [
  { value: "5,000+", label: "Students Placed", icon: "🎓" },
  { value: "15+", label: "Years Experience", icon: "📅" },
  { value: "98%", label: "Visa Success Rate", icon: "✈️" },
  { value: "50+", label: "Partner Universities", icon: "🏛️" },
];

const team = [
  {
    name: "Mohammad Karim",
    title: "CEO & Founder",
    bio: "15+ years in international education. Former student at the University of Manchester. Passionate about making global education accessible to every Bangladeshi student.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    country: "🇬🇧 UK Specialist",
  },
  {
    name: "Dr. Sarah Ahmed",
    title: "Head of Counseling",
    bio: "PhD from UCL London. Expert in UK and Commonwealth university admissions with a 99% SOP acceptance rate among her students.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    country: "🇬🇧 🇦🇺 UK & Australia",
  },
  {
    name: "James Wilson",
    title: "Visa Expert",
    bio: "10+ years as a visa consultant. Has successfully processed 3,000+ student visa applications across UK, USA, Canada, and Australia.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    country: "🇺🇸 🇨🇦 USA & Canada",
  },
  {
    name: "Maria Rahman",
    title: "IELTS Head Coach",
    bio: "Former British Council examiner. Has coached over 2,000 students to their target IELTS band. Average student score improvement: +1.5 bands.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    country: "🌍 All Countries",
  },
];

const milestones = [
  { year: "2009", event: "BIIC Global founded in Dhaka with a team of 3 counselors" },
  { year: "2012", event: "Expanded services to include IELTS preparation coaching" },
  { year: "2015", event: "Reached 500 students placed milestone" },
  { year: "2018", event: "Opened Chittagong branch office" },
  { year: "2020", event: "Launched online counseling during the global pandemic" },
  { year: "2022", event: "Celebrated 2,500+ students placed globally" },
  { year: "2024", event: "Exceeded 5,000 students placed — now Bangladesh's largest study abroad consultancy" },
];

const values = [
  {
    icon: "🤝",
    title: "Integrity",
    desc: "We provide honest, unbiased advice. We never recommend a university based on commission — only on what's best for the student.",
  },
  {
    icon: "🎯",
    title: "Excellence",
    desc: "We maintain the highest standards in every service we offer — from SOP writing to visa processing.",
  },
  {
    icon: "💛",
    title: "Care",
    desc: "We treat every student as family. Your success is our success, and we're with you every step of the way.",
  },
  {
    icon: "🌍",
    title: "Accessibility",
    desc: "We believe quality international education should be accessible to every deserving student, regardless of background.",
  },
];

const whyChoose = [
  { icon: "🏆", title: "Industry Leaders", desc: "Bangladesh's most trusted study abroad consultancy for 15+ years." },
  { icon: "🎓", title: "Expert Team", desc: "Our counselors are former international students themselves — they know the process inside out." },
  { icon: "💯", title: "No Hidden Fees", desc: "Complete transparency in all our fees. No surprises, no hidden charges." },
  { icon: "📞", title: "Always Available", desc: "We answer questions 7 days a week via WhatsApp, phone, and email." },
  { icon: "🤝", title: "End-to-End Service", desc: "From first consultation to airport departure, we're with you every step." },
  { icon: "🌐", title: "Global Network", desc: "Direct relationships with admissions offices at 50+ partner universities." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}
        className="relative pt-20 pb-16 px-4 overflow-hidden"
      >
        {/* Red accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

        {/* Decorative background blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-red-50/60 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px w-10 bg-red-400" />
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">About BIIC Global</span>
            <div className="h-px w-10 bg-red-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-red-900 mb-4 leading-tight text-center">
            Bangladesh's Most Trusted<br />
            <span className="text-red-600">Study Abroad Consultancy</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto text-center mb-12">
            Since 2009, we have helped over 5,000 Bangladeshi students achieve their dreams of studying at top universities worldwide.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center divide-x divide-red-100">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col items-center px-10 py-4 ${i === 0 ? "" : ""}`}>
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-3xl font-black text-red-900">{s.value}</div>
                <div className="text-gray-500 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Our Story</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900 mb-6">
              15 Years of Transforming Lives Through Education
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                BIIC Global was founded in 2009 by Mohammad Karim, a former international student at the University of Manchester, who saw the struggles Bangladeshi students faced when trying to study abroad. Armed with firsthand experience and a passion for education, he started BIIC from a small office in Mirpur, Dhaka.
              </p>
              <p>
                What began as a one-man operation giving free advice to neighbors' children has grown into Bangladesh's largest study abroad consultancy — with offices in Dhaka and Chittagong, a team of 25+ specialized counselors, and 5,000+ students successfully placed in universities across the UK, USA, Canada, Australia, and beyond.
              </p>
              <p>
                Our mission has never changed: to make world-class international education accessible to every deserving Bangladeshi student, regardless of background or financial means.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3.5 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-red-200"
            >
              Start Your Journey Today
            </Link>
          </div>

          {/* Photo collage */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80", label: "Our Students" },
              { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", label: "University Visits" },
              { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b6f57?w=600&q=80", label: "IELTS Training" },
              { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80", label: "Our Team" },
            ].map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 h-48" : "h-36"}`}>
                <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-red-900/20 group-hover:bg-red-900/10 transition" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-semibold bg-red-900/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        style={{ background: "linear-gradient(180deg,#ffffff 0%,#fffbfb 50%,#fff7f7 100%)" }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 justify-center mb-10">
            <div className="h-px w-10 bg-red-400" />
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Purpose & Direction</span>
            <div className="h-px w-10 bg-red-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-10">
              <div className="text-5xl mb-5">🎯</div>
              <h3 className="text-2xl font-black mb-4">Our Mission</h3>
              <p className="text-red-100 leading-relaxed text-lg">
                To empower Bangladeshi students with the knowledge, guidance, and support they need to access world-class international education — and to transform their futures through the power of global learning.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-red-900 to-red-800 text-white rounded-3xl p-10">
              <div className="text-5xl mb-5">🔭</div>
              <h3 className="text-2xl font-black mb-4">Our Vision</h3>
              <p className="text-red-100 leading-relaxed text-lg">
                To become the most trusted bridge between Bangladeshi talent and global opportunity — placing 10,000+ students in the world's best universities by 2030, and building a generation of globally-minded Bangladeshi leaders.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm hover:shadow-xl hover:border-red-200 hover:scale-[1.02] transition-all text-center"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h4 className="font-black text-red-800 text-lg mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Section label */}
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">The People Behind BIIC</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Meet Our Expert Team</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Our counselors are not just professionals — many are former international students who understand exactly what you are going through.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 hover:scale-[1.02] transition-all border border-red-100"
              >
                {/* Photo */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs bg-red-600 text-white font-semibold px-2.5 py-1 rounded-full">
                      {member.country}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-black text-red-900 text-lg">{member.name}</h3>
                  <p className="text-red-600 text-sm font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{ background: "linear-gradient(180deg,#ffffff 0%,#fffbfb 50%,#fff7f7 100%)" }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* Section label */}
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Our Journey</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">15 Years of Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-red-200 hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex gap-6 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-red-100 hover:border-red-200 hover:shadow-xl hover:scale-[1.02] transition-all">
                    <div className="font-black text-red-800">{m.event}</div>
                  </div>
                  {/* Year bubble */}
                  <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-sm z-10 flex-shrink-0 shadow-lg text-center leading-tight">
                    {m.year}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Section label */}
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Why BIIC Global</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Why 5,000+ Students Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-red-200 hover:scale-[1.02] transition-all"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-black text-red-800 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px w-10 bg-red-400" />
            <span className="text-red-300 font-black text-xs uppercase tracking-[0.2em]">Get Started</span>
            <div className="h-px w-10 bg-red-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Join the BIIC Family</h2>
          <p className="text-red-100 text-xl mb-8">
            5,000+ students have trusted us with their futures. You're next.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-black px-8 py-3.5 rounded-2xl hover:bg-red-50 transition-all hover:scale-105 shadow-lg text-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/universities"
              className="border-2 border-white/60 text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-white/10 transition text-lg"
            >
              Browse Universities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
