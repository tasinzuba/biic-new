import Link from "next/link";

const destinations = [
  { name: "United Kingdom", slug: "uk", flag: "🇬🇧", universities: "130+", color: "bg-blue-50 border-blue-200" },
  { name: "United States", slug: "usa", flag: "🇺🇸", universities: "4000+", color: "bg-red-50 border-red-200" },
  { name: "Canada", slug: "canada", flag: "🇨🇦", universities: "100+", color: "bg-red-50 border-red-200" },
  { name: "Australia", slug: "australia", flag: "🇦🇺", universities: "40+", color: "bg-yellow-50 border-yellow-200" },
  { name: "Germany", slug: "germany", flag: "🇩🇪", universities: "400+", color: "bg-gray-50 border-gray-200" },
  { name: "Malaysia", slug: "malaysia", flag: "🇲🇾", universities: "50+", color: "bg-green-50 border-green-200" },
];

const services = [
  { icon: "🎓", title: "University Admission", desc: "Expert guidance for top university applications worldwide." },
  { icon: "✈️", title: "Visa Assistance", desc: "Complete visa application support with high success rate." },
  { icon: "📝", title: "IELTS Preparation", desc: "Professional coaching to achieve your target IELTS score." },
  { icon: "💰", title: "Scholarship Guidance", desc: "Find and apply for scholarships that suit your profile." },
];

const stats = [
  { number: "5000+", label: "Students Placed" },
  { number: "50+", label: "Partner Universities" },
  { number: "15+", label: "Countries" },
  { number: "98%", label: "Visa Success Rate" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Dream of Studying<br />
            <span className="text-orange-400">Abroad Starts Here</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We help Bangladeshi students get admitted to top universities in UK,
            USA, Canada, Australia and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              Free Consultation
            </Link>
            <Link
              href="/universities"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              Explore Universities
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-700 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-orange-400">{s.number}</div>
              <div className="text-blue-200 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Study Destinations</h2>
            <p className="text-gray-500 mt-2">Choose from top study destinations worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                href={`/study-in/${d.slug}`}
                className={`border-2 ${d.color} rounded-2xl p-6 hover:shadow-lg transition group`}
              >
                <div className="text-4xl mb-3">{d.flag}</div>
                <h3 className="font-bold text-gray-800 group-hover:text-blue-700">
                  Study in {d.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{d.universities} Universities</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="text-gray-500 mt-2">Everything you need to study abroad</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-500 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-orange-100 mb-6 max-w-xl mx-auto">
          Get a free consultation with our expert counselors today.
        </p>
        <Link
          href="/contact"
          className="bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition inline-block"
        >
          Book Free Consultation
        </Link>
      </section>
    </>
  );
}
