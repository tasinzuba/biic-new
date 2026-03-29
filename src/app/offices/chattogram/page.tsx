import Link from "next/link";
import { Metadata } from "next";
import {
  FaLocationDot, FaPhone, FaEnvelope, FaClock, FaWhatsapp,
  FaChevronRight, FaCircleCheck, FaGraduationCap, FaPassport,
  FaBuildingColumns, FaAward, FaMicrophone, FaUsers,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Chattogram Office | BIIC Global",
  description: "Visit our Chattogram office at Aerial Legend, CDA Avenue, GEC Circle for expert study abroad counseling, visa assistance, and IELTS preparation.",
};

const services = [
  { icon: FaGraduationCap, title: "University Admission", desc: "Expert guidance for UK, USA, Canada, Australia & more. Shortlisting, SOP writing, and application submission.", href: "/services/university-admission" },
  { icon: FaPassport, title: "Visa Assistance", desc: "End-to-end visa application support — documentation, file preparation, and interview coaching.", href: "/services/visa-assistance" },
  { icon: FaMicrophone, title: "IELTS Preparation", desc: "Regular batches, weekend classes, crash courses, and mock tests by certified trainers.", href: "/services/ielts-preparation" },
  { icon: FaAward, title: "Scholarship Guidance", desc: "Find and apply for merit, need-based, and government scholarships. Chevening, Commonwealth & more.", href: "/services/scholarship" },
  { icon: FaBuildingColumns, title: "University Counseling", desc: "One-on-one sessions to help you choose the right university and program based on your profile.", href: "/services/university-admission" },
  { icon: FaUsers, title: "Free Seminars & Events", desc: "Regular free events, open days, and webinars at our Chattogram office. Open to all.", href: "/events" },
];

const teamMembers = [
  { name: "Farhan Kabir", title: "Head Counselor — Australia & UK", initials: "FK" },
  { name: "Sadia Islam", title: "Visa Specialist — Canada & USA", initials: "SI" },
  { name: "Rezaul Karim", title: "IELTS Trainer", initials: "RK" },
  { name: "Mithila Chowdhury", title: "Scholarship & Admission Advisor", initials: "MC" },
];

const officeHours = [
  { day: "Saturday – Thursday", time: "10:00 AM – 7:00 PM" },
  { day: "Friday", time: "2:00 PM – 6:00 PM" },
  { day: "Public Holidays", time: "Closed" },
];

export default function ChattogramOfficePage() {
  return (
    <>
      <div className="h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 w-full" />

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 py-3 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <FaChevronRight className="w-3 h-3" />
          <Link href="/offices" className="hover:text-red-600 transition">Our Offices</Link>
          <FaChevronRight className="w-3 h-3" />
          <span className="text-red-700 font-black">Chattogram Office</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4" style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}>
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 bottom-0 w-72 h-72 bg-red-50/70 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 mb-5">
              <FaLocationDot className="w-4 h-4 text-red-600" />
              <span className="text-red-700 text-xs font-black uppercase tracking-widest">Chattogram Branch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-red-900 mb-4 leading-tight">
              BIIC Global<br />
              <span className="text-red-600">Chattogram Office</span>
            </h1>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
              Our Chattogram branch at GEC Circle — providing the same world-class study abroad counseling and visa services to students across Chattogram and surrounding areas.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: FaLocationDot, text: "Aerial Legend (4th Floor), CDA Avenue, beside O R Nizam Rd 7, East Nasirabad, GEC Circle, Chattogram" },
                { icon: FaPhone, text: "+880 96138-20821" },
                { icon: FaWhatsapp, text: "WhatsApp: +880 96138-20821" },
                { icon: FaEnvelope, text: "chattogram@biicglobal.com" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  <span className="text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-red-200">
                Book Free Counseling
              </Link>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-red-200 text-red-600 font-black px-6 py-3.5 rounded-xl hover:bg-red-50 transition">
                <FaLocationDot className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-80 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <FaLocationDot className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <p className="font-black text-gray-700">Aerial Legend, GEC Circle</p>
              <p className="text-gray-400 text-sm mt-1">CDA Avenue, East Nasirabad, Chattogram</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-red-600 text-white text-xs font-black px-4 py-2 rounded-lg hover:bg-red-700 transition">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {officeHours.map((h) => (
              <div key={h.day} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <FaClock className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <div className="font-black text-gray-800 text-sm">{h.day}</div>
                  <div className="text-red-600 font-black text-sm">{h.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff9f9 0%,#ffffff 60%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">What We Offer</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Services at Chattogram Office</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">All services are completely free of charge for students.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900 to-red-600 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2 group-hover:text-red-600 transition">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-red-600 text-xs font-black flex items-center gap-1">
                  Learn More <FaChevronRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why visit */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Why Visit Us</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2 mb-6">What to Expect at Our Chattogram Office</h2>
            <div className="space-y-4">
              {[
                "Free one-on-one counseling with certified education consultants",
                "Instant profile evaluation and university shortlisting",
                "Help with SOP, LOR, and application documents",
                "Visa file preparation and mock interview practice",
                "IELTS coaching with regular mock tests",
                "Scholarship research and application support",
                "No hidden fees — all advice is completely free",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCircleCheck className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2,000+", label: "Students Counseled" },
              { value: "97%", label: "Visa Success Rate" },
              { value: "200+", label: "University Partners" },
              { value: "5+", label: "Years in Chattogram" },
            ].map((s) => (
              <div key={s.label} className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 rounded-2xl p-6 text-center text-white">
                <div className="text-3xl font-black text-red-200 mb-1">{s.value}</div>
                <div className="text-white/70 text-xs font-black uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(135deg,#fff9f9 0%,#ffffff 60%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Our Team</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">Meet the Chattogram Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-900 to-red-600 flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                  {m.initials}
                </div>
                <div className="font-black text-gray-900 text-sm">{m.name}</div>
                <div className="text-gray-400 text-xs mt-1 leading-snug">{m.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Offices */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-black text-gray-900 text-lg mb-5">Our Other Offices</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { city: "Dhaka", addr: "III/A, Zeenat Center 2, Road 07, Sector 04, Rajlokkhi, Uttara, Dhaka", href: "/offices/dhaka" },
              { city: "Sylhet", addr: "4203, Arcadia Centre, Lift 4th Floor, Dorshon Dewri, Amberkhana, Sylhet-3100", href: "/offices/sylhet" },
            ].map((o) => (
              <Link key={o.city} href={o.href} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-md transition group">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <FaLocationDot className="w-4 h-4 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="font-black text-gray-800 group-hover:text-red-600 transition">{o.city} Office</div>
                  <div className="text-gray-400 text-xs mt-0.5 leading-snug">{o.addr}</div>
                </div>
                <FaChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400 transition mt-1 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-black mb-3">Ready to Start Your Study Abroad Journey?</h2>
          <p className="text-red-200 mb-6">Walk into our Chattogram office or book a free counseling session online.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-red-700 font-black px-8 py-4 rounded-xl hover:bg-red-50 transition text-lg shadow-lg">
            Book Free Counseling →
          </Link>
        </div>
      </section>
    </>
  );
}
