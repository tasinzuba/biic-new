import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  FaTrophy, FaCircleCheck, FaHandshake,
  FaGraduationCap, FaPassport, FaBuildingColumns, FaGlobe,
  FaLocationDot, FaPhone, FaEnvelope, FaClock,
  FaCalendarCheck,
} from "react-icons/fa6";
import { services } from "../page";

type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const svc = services.find((s) => s.slug === service);
  return {
    title: svc ? svc.title : "Service Details",
    description: svc ? svc.description : "Learn about our study abroad services.",
  };
}

const whyChooseUs = [
  {
    Icon: FaTrophy,
    title: "15+ Years of Experience",
    desc: "Over a decade and a half of helping Bangladeshi students achieve their international education dreams.",
  },
  {
    Icon: FaCircleCheck,
    title: "Proven Track Record",
    desc: "5,000+ students placed, 98% visa success rate, and hundreds of scholarships secured for our students.",
  },
  {
    Icon: FaHandshake,
    title: "End-to-End Support",
    desc: "We don't just help you apply — we guide you from initial consultation all the way to settling in abroad.",
  },
];

const globalStats = [
  { value: "5,000+", label: "Students Placed",      Icon: FaGraduationCap },
  { value: "98%",    label: "Visa Success Rate",     Icon: FaPassport },
  { value: "50+",    label: "Partner Universities",  Icon: FaBuildingColumns },
  { value: "15+",    label: "Countries",             Icon: FaGlobe },
];

const contactInfo = [
  { Icon: FaLocationDot, label: "Office", value: "Zeenat Center 2, Uttara, Dhaka" },
  { Icon: FaPhone,       label: "Phone",  value: "+880 96138-20821" },
  { Icon: FaEnvelope,    label: "Email",  value: "info@biicglobal.com" },
  { Icon: FaClock,       label: "Hours",  value: "Mon–Fri: 10AM–6PM" },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { service } = await params;
  const svc = services.find((s) => s.slug === service) || services[0];
  const otherServices = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      {/* Red 1px top bar */}
      <div className="h-px bg-gradient-to-r from-red-700 via-red-500 to-red-700 w-full" />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}
      >
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-red-50/70 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Our Service</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg" style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}>
              <svc.Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-red-900 mb-4 leading-tight">{svc.title}</h1>
            <p className="text-gray-500 text-lg max-w-lg mb-8 leading-relaxed">{svc.tagline}</p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { value: svc.stats.students, label: "Students Helped" },
                { value: svc.stats.successRate, label: "Success Rate" },
                { value: svc.stats.partners, label: "Partners" },
              ].map((s, i) => (
                <div key={s.label} className={`${i < 2 ? "border-r border-red-100 pr-6" : ""}`}>
                  <div className="text-2xl font-black text-red-700">{s.value}</div>
                  <div className="text-gray-400 text-xs font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-200 text-sm"
              >
                <FaCalendarCheck className="w-4 h-4" />
                Get Started — Free
              </Link>
              <a
                href="#process"
                className="inline-flex items-center gap-2 border-2 border-red-200 text-red-700 font-black px-7 py-3.5 rounded-xl hover:bg-red-50 hover:border-red-400 transition-all text-sm"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right — image */}
          <div className="hidden lg:block relative">
            <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-2xl shadow-red-200">
              <Image src={svc.image} alt={svc.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur rounded-2xl px-5 py-4 shadow-lg border border-red-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${svc.iconBg} rounded-xl flex items-center justify-center`}>
                      <svc.Icon className={`w-5 h-5 ${svc.iconColor}`} />
                    </div>
                    <div>
                      <div className="font-black text-red-900 text-base">{svc.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{svc.tagline}</div>
                    </div>
                    <div className="ml-auto bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-full">
                      {svc.stats.successRate}
                    </div>
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
          <span className="text-red-700 font-black">{svc.title}</span>
        </div>
      </div>

      {/* What We Offer */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">What We Offer</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900 mb-5 leading-tight">
              Everything Included in<br />
              <span className="text-red-600">{svc.title}</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">{svc.description}</p>
            <div className="space-y-3">
              {svc.features.map((feature) => (
                <div key={feature} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-red-100 hover:border-red-300 hover:shadow-md transition-all">
                  <span className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 mt-0.5 shadow-sm">✓</span>
                  <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl shadow-red-200">
              <Image src={svc.image} alt={svc.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/70 to-transparent" />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-red-100">
              <div className="flex items-center gap-3 mb-1">
                <div className={`w-10 h-10 ${svc.iconBg} rounded-xl flex items-center justify-center`}>
                  <svc.Icon className={`w-5 h-5 ${svc.iconColor}`} />
                </div>
                <div>
                  <div className="font-black text-2xl text-red-700">{svc.stats.successRate}</div>
                  <div className="text-gray-500 text-xs font-medium">Success Rate</div>
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-1">{svc.stats.students} students helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section id="process" className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">How It Works</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Step-by-Step Process</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Here is exactly how we help you through {svc.title}:</p>
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

      {/* Why Choose Us */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg,#ffffff 0%,#fffbfb 50%,#fff7f7 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Why BIIC Global</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-4xl font-black text-red-900">Why Students Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white border border-red-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-red-200 hover:scale-[1.02] transition-all text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:from-red-100 group-hover:to-red-200 transition-all">
                  <item.Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-black text-red-900 text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-red-400" />
              <span className="text-red-300 font-black text-xs uppercase tracking-[0.2em]">Our Impact</span>
              <div className="h-px w-10 bg-red-400" />
            </div>
            <h2 className="text-3xl font-black text-white">Our Numbers Speak for Themselves</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {globalStats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
                <div className="flex justify-center mb-3">
                  <stat.Icon className="w-10 h-10 text-red-300" />
                </div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-red-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-red-100 overflow-hidden">
            <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 px-8 py-10 text-white text-center relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
              <h2 className="text-3xl font-black mb-2 relative z-10">Ready to Get Started with {svc.title}?</h2>
              <p className="text-red-100 text-lg relative z-10">Book a free consultation — no commitment, no hidden fees.</p>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-black text-red-900 text-xl mb-5">Contact Our Team</h3>
                <div className="space-y-4">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-start gap-3">
                      <c.Icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-400 font-black uppercase tracking-wider">{c.label}</div>
                        <div className="text-gray-800 font-black text-sm">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Link href="/contact" className="block text-center bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-red-200 text-lg">
                  Book Free Consultation
                </Link>
                <a href="tel:+8809613820821" className="flex items-center justify-center gap-2 border-2 border-red-200 text-red-700 font-black py-4 rounded-2xl hover:bg-red-50 hover:border-red-400 transition-all">
                  <FaPhone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
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
          <h2 className="text-3xl font-black text-red-900 mb-6">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center gap-4 bg-white border border-red-100 rounded-2xl p-5 hover:border-red-300 hover:shadow-xl hover:scale-[1.01] transition-all">
                <span className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <s.Icon className={`w-6 h-6 ${s.iconColor}`} />
                </span>
                <div className="flex-1">
                  <div className="font-black text-red-900 group-hover:text-red-600 transition-colors">{s.title}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{s.tagline}</div>
                </div>
                <span className="text-red-300 group-hover:text-red-600 transition-colors font-black">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
