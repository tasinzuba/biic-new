"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const offices = [
  {
    city: "Dhaka (Head Office)",
    flag: "🇧🇩",
    address: "III/A, Zeenat Center 2, Road 07, Sector 04, Rajlokkhi, Uttara, Dhaka",
    phone: "+880 96138-20821",
    email: "info@biicglobal.com",
    hours: "Saturday – Thursday: 10AM – 7PM\nFriday: 2PM – 6PM",
    mapImage: "https://images.unsplash.com/photo-1592295293022-43cc394fc5e3?w=600&q=80",
    primary: true,
  },
  {
    city: "Chattogram",
    flag: "🇧🇩",
    address: "Aerial Legend (4th Floor), CDA Avenue, beside O R Nizam Rd 7, East Nasirabad, GEC Circle, Chattogram",
    phone: "+880 96138-20821",
    email: "chattogram@biicglobal.com",
    hours: "Saturday – Thursday: 10AM – 7PM\nFriday: 2PM – 6PM",
    mapImage: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",
    primary: false,
  },
  {
    city: "Sylhet",
    flag: "🇧🇩",
    address: "4203, Arcadia Centre, Lift 4th Floor, Dorshon Dewri, Amberkhana, Sylhet-3100",
    phone: "+880 96138-20821",
    email: "sylhet@biicglobal.com",
    hours: "Saturday – Thursday: 10AM – 7PM\nFriday: 2PM – 6PM",
    mapImage: "https://images.unsplash.com/photo-1605493725784-89e139a2ce86?w=600&q=80",
    primary: false,
  },
];

const countries = [
  "United Kingdom", "United States", "Canada", "Australia",
  "Germany", "Malaysia", "New Zealand", "Ireland", "Other",
];

const services = [
  "University Admission", "Visa Assistance", "IELTS Preparation",
  "Scholarship Guidance", "Accommodation Help", "Pre-Departure Briefing", "General Inquiry",
];

const faqs = [
  { q: "Is the consultation really free?", a: "Yes! Our initial consultation is completely free. We assess your profile and give you honest advice about your options — no charges, no obligations." },
  { q: "How long does the process take?", a: "Typically 4-8 months from initial consultation to visa approval, depending on the country and university deadlines. We recommend starting 12 months in advance." },
  { q: "Do you guarantee visa approval?", a: "While no one can guarantee a visa, we have a 98% visa success rate. We ensure every application is complete, accurate, and maximally strong before submission." },
  { q: "What are your service fees?", a: "Our fees vary by service. University shortlisting consultations are free. Application processing, SOP writing, and visa support have structured fees. We discuss all costs transparently upfront." },
];

const stats = [
  { value: "Free", label: "Consultation" },
  { value: "24h", label: "Response Time" },
  { value: "98%", label: "Success Rate" },
  { value: "5,000+", label: "Students Helped" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero — pure dark red gradient, no gray/blue */}
      <section className="relative bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
            alt="Contact"
            fill
            className="object-cover"
          />
        </div>
        {/* Subtle red-only glows */}
        <div className="absolute -right-32 top-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-72 h-72 bg-red-700/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em] inline-block bg-white/90 px-4 py-1.5 rounded-full mb-5">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
            Start Your Journey<br />
            <span className="text-red-300">Today — For Free</span>
          </h1>
          <p className="text-red-100 text-xl max-w-2xl mx-auto">
            Book a free consultation with our expert counselors. We'll assess your profile and guide you step by step.
          </p>

          {/* Quick contact links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
            <a href="tel:+8809613820821" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 px-5 py-2.5 rounded-xl text-sm font-semibold transition">
              📞 Call: +880 96138-20821
            </a>
            <a href="mailto:info@biicglobal.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 px-5 py-2.5 rounded-xl text-sm font-semibold transition">
              ✉️ info@biicglobal.com
            </a>
          </div>

          {/* Inline stats as white/transparent badges — replaces flat red stats bar */}
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-6 py-3 text-center min-w-[110px]">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-red-200 text-xs font-semibold uppercase tracking-wide mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Section: Form + Info */}
      <section
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-red-100 p-8">
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Send a Message</span>
              <h2 className="text-2xl font-black text-gray-900 mt-1 mb-2">We'd Love to Hear From You</h2>
              <p className="text-gray-500 mb-8">Fill in the form and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">
                    Thank you, <strong>{form.name}</strong>! We've received your message and will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", country: "", service: "", message: "" }); }}
                    className="text-red-600 font-black hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+880 XXXX-XXXXXX"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country of Interest</label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition bg-white"
                      >
                        <option value="">Select a country...</option>
                        {countries.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your academic background, target country/university, and any questions you have..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-2xl font-black text-white text-lg transition hover:scale-[1.02] shadow-lg ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed shadow-none"
                        : "bg-red-600 hover:bg-red-700 shadow-red-200"
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message — It's Free 🚀"
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    By submitting, you agree to be contacted by BIIC Global. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Office cards */}
            {offices.map((office) => (
              <div
                key={office.city}
                className={`bg-white rounded-3xl shadow-sm border overflow-hidden ${office.primary ? "border-red-100" : "border-red-100"}`}
              >
                {/* Map image */}
                <div className="relative h-36 overflow-hidden">
                  <Image src={office.mapImage} alt={office.city} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl">{office.flag}</span>
                    <span className="text-white font-black text-sm">{office.city}</span>
                    {office.primary && (
                      <span className="bg-red-600 text-white text-xs font-black px-2 py-0.5 rounded-full">HEAD OFFICE</span>
                    )}
                  </div>
                </div>
                <div className="p-5 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">📍</span>
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">📞</span>
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-red-600 font-semibold hover:underline">{office.phone}</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">✉️</span>
                    <a href={`mailto:${office.email}`} className="text-red-600 font-semibold hover:underline">{office.email}</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">🕐</span>
                    <span className="text-gray-600 whitespace-pre-line">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp box — red brand colors, green button kept for WhatsApp */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">💬</span>
                <div>
                  <div className="font-black text-gray-800">WhatsApp Us</div>
                  <div className="text-red-600 text-sm font-semibold">Fastest response — usually within an hour</div>
                </div>
              </div>
              <a
                href="https://wa.me/8809613820821"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-500 hover:bg-green-600 text-white font-black py-3 rounded-2xl transition hover:scale-[1.02] shadow-lg shadow-green-200"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section
        className="px-4 pb-10 pt-2"
        style={{ background: "linear-gradient(180deg,#ffffff 0%,#fffbfb 50%,#fff7f7 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden h-72 relative border border-red-100 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1592295293022-43cc394fc5e3?w=1600&q=80"
              alt="Office Map"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-3xl px-8 py-5 shadow-lg border border-red-100 text-center">
                <div className="text-4xl mb-2">📍</div>
                <div className="font-black text-gray-900">BIIC Global Head Office</div>
                <div className="text-gray-500 text-sm">Zeenat Center 2, Uttara, Dhaka</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-red-600 font-black text-sm hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — warm rose gradient, details/summary accordions */}
      <section
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Got Questions?</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-red-100 hover:border-red-300 rounded-2xl shadow-sm overflow-hidden transition-all"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <div className="flex items-center gap-4">
                    <span className="w-7 h-7 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0">
                      Q
                    </span>
                    <span className="font-black text-gray-900 text-sm md:text-base">{item.q}</span>
                  </div>
                  {/* + / × icon */}
                  <span className="text-red-400 font-black text-xl leading-none flex-shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
