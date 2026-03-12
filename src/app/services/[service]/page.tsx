import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
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
    icon: "🏆",
    title: "15+ Years of Experience",
    desc: "Over a decade and a half of helping Bangladeshi students achieve their international education dreams.",
  },
  {
    icon: "✅",
    title: "Proven Track Record",
    desc: "5,000+ students placed, 98% visa success rate, and hundreds of scholarships secured for our students.",
  },
  {
    icon: "🤝",
    title: "End-to-End Support",
    desc: "We don't just help you apply — we guide you from initial consultation all the way to settling in abroad.",
  },
];

const successStats = [
  { value: "5,000+", label: "Students Placed", icon: "🎓" },
  { value: "98%", label: "Visa Success Rate", icon: "✈️" },
  { value: "50+", label: "Partner Universities", icon: "🏛️" },
  { value: "15+", label: "Countries", icon: "🌍" },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { service } = await params;
  const svc = services.find((s) => s.slug === service) || services[0];
  const otherServices = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        <Image
          src={svc.image}
          alt={svc.title}
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${svc.color} opacity-90`} />
        {/* Decorative shapes */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full" />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-white/10 rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="text-6xl mb-5">{svc.icon}</div>
          <span className="inline-block bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Our Service
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{svc.title}</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">{svc.tagline}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
            >
              Get Started — Free
            </Link>
            <a
              href="#process"
              className="border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{svc.title}</span>
        </div>
      </div>

      {/* What We Offer */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-5">
              Everything Included in {svc.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{svc.description}</p>
            <div className="space-y-3">
              {svc.features.map((feature) => (
                <div key={feature} className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100 hover:border-green-300 transition">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${svc.color} opacity-60`} />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{svc.icon}</span>
                <div>
                  <div className="font-bold text-2xl text-gray-900">{svc.stats.successRate}</div>
                  <div className="text-gray-500 text-xs">Success Rate</div>
                </div>
              </div>
              <div className="text-xs text-gray-400">{svc.stats.students} students helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section id="process" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Step-by-Step Process</h2>
            <p className="text-gray-500 mt-3">Here is exactly how we help you through {svc.title}:</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-400 to-gray-200 hidden md:block" />

            <div className="space-y-6">
              {svc.steps.map((step, i) => (
                <div key={i} className="relative flex gap-6 items-start pl-0 md:pl-4">
                  {/* Step number circle */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${svc.color} text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 z-10 shadow-lg`}>
                    {step.num}
                  </div>
                  {/* Card */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1 hover:border-red-300 hover:shadow-md transition">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Why BIIC Global</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Why Students Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Numbers Speak for Themselves</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {successStats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-red-400 mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className={`bg-gradient-to-r ${svc.color} px-8 py-10 text-white text-center`}>
              <h2 className="text-3xl font-bold mb-2">Ready to Get Started with {svc.title}?</h2>
              <p className="text-white/80 text-lg">Book a free consultation — no commitment, no hidden fees.</p>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 text-xl mb-4">Contact Our Team</h3>
                <div className="space-y-3">
                  {[
                    { icon: "📍", label: "Office", value: "Mirpur 2, Dhaka-1216" },
                    { icon: "📞", label: "Phone", value: "+880 96138-20821" },
                    { icon: "✉️", label: "Email", value: "info@biicglobal.com" },
                    { icon: "🕐", label: "Hours", value: "Mon–Fri: 10AM–6PM" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0">{c.icon}</span>
                      <div>
                        <div className="text-xs text-gray-400 font-medium">{c.label}</div>
                        <div className="text-gray-800 font-semibold text-sm">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/contact"
                  className={`block text-center bg-gradient-to-r ${svc.color} text-white font-bold py-4 rounded-2xl hover:opacity-90 transition text-lg`}
                >
                  Book Free Consultation
                </Link>
                <a
                  href="tel:+8809613820821"
                  className="block text-center border-2 border-gray-300 text-gray-700 font-bold py-4 rounded-2xl hover:border-red-600 hover:text-red-600 transition"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-red-300 hover:shadow-md transition"
              >
                <span className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {s.icon}
                </span>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 group-hover:text-red-600 transition">{s.title}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{s.tagline}</div>
                </div>
                <span className="text-gray-400 group-hover:text-red-600 transition">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
