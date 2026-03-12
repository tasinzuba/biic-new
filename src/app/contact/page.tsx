"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const offices = [
  {
    city: "Dhaka (Head Office)",
    flag: "🇧🇩",
    address: "House 12, Road 5, Block B, Section 10, Mirpur-2, Dhaka-1216",
    phone: "+880 96138-20821",
    email: "info@biicglobal.com",
    hours: "Sunday – Thursday: 10AM – 6PM\nFriday: 10AM – 1PM\nSaturday: Closed",
    mapImage: "https://images.unsplash.com/photo-1592295293022-43cc394fc5e3?w=600&q=80",
    primary: true,
  },
  {
    city: "Chittagong",
    flag: "🇧🇩",
    address: "GEC Circle, Chittagong-4000",
    phone: "+880 96138-20822",
    email: "ctg@biicglobal.com",
    hours: "Sunday – Thursday: 10AM – 6PM",
    mapImage: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",
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
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
            alt="Contact"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute -right-32 top-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Start Your Journey<br />
            <span className="text-red-400">Today — For Free</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Book a free consultation with our expert counselors. We'll assess your profile and guide you step by step.
          </p>
          {/* Quick contact links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="tel:+8809613820821" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 px-5 py-2.5 rounded-xl text-sm font-semibold transition">
              📞 Call: +880 96138-20821
            </a>
            <a href="mailto:info@biicglobal.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 px-5 py-2.5 rounded-xl text-sm font-semibold transition">
              ✉️ info@biicglobal.com
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-red-600 text-white py-5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "Free", label: "Consultation" },
            { value: "24h", label: "Response Time" },
            { value: "98%", label: "Success Rate" },
            { value: "5,000+", label: "Students Helped" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-red-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Section: Form + Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">Fill in the form and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">
                    Thank you, <strong>{form.name}</strong>! We've received your message and will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", country: "", service: "", message: "" }); }}
                    className="text-red-600 font-bold hover:underline"
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
                    className={`w-full py-4 rounded-xl font-bold text-white text-lg transition ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-200"
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
                className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${office.primary ? "border-red-200" : "border-gray-100"}`}
              >
                {/* Map image */}
                <div className="relative h-36 overflow-hidden">
                  <Image src={office.mapImage} alt={office.city} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl">{office.flag}</span>
                    <span className="text-white font-bold text-sm">{office.city}</span>
                    {office.primary && (
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">HEAD OFFICE</span>
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

            {/* Social / WhatsApp */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">💬</span>
                <div>
                  <div className="font-bold text-gray-800">WhatsApp Us</div>
                  <div className="text-green-700 text-sm">Fastest response — usually within an hour</div>
                </div>
              </div>
              <a
                href="https://wa.me/8809613820821"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-200 rounded-3xl overflow-hidden h-72 relative">
            <Image
              src="https://images.unsplash.com/photo-1592295293022-43cc394fc5e3?w=1600&q=80"
              alt="Office Map"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-2xl px-8 py-5 shadow-lg text-center">
                <div className="text-4xl mb-2">📍</div>
                <div className="font-bold text-gray-800">BIIC Global Head Office</div>
                <div className="text-gray-500 text-sm">Mirpur-2, Dhaka-1216, Bangladesh</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-red-600 font-bold text-sm hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-red-300 transition shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
