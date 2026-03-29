import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-950 text-red-100">
      <div className="h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800" />
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-black mb-3">
            BIIC<span className="text-red-400">Global</span>
          </h3>
          <p className="text-sm text-red-200/70">
            Your trusted partner for studying abroad. We help students achieve
            their dream of international education.
          </p>
        </div>

        {/* Study Destinations */}
        <div>
          <h4 className="text-white font-black mb-3">Study Destinations</h4>
          <ul className="space-y-2 text-sm">
            {["UK", "USA", "Canada", "Australia", "Germany", "Malaysia"].map(
              (c) => (
                <li key={c}>
                  <Link
                    href={`/study-in/${c.toLowerCase()}`}
                    className="hover:text-red-300 transition"
                  >
                    Study in {c}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-black mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              "University Admission",
              "Visa Assistance",
              "IELTS Preparation",
              "Scholarship Guidance",
              "Accommodation",
            ].map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-red-300 transition">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-black mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1XXX-XXXXXX</li>
            <li>✉️ info@biicglobal.com</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-black shadow-lg shadow-red-900/30 transition-all hover:scale-105"
          >
            Free Consultation
          </Link>
        </div>
      </div>

      <div className="border-t border-red-900/50 text-center py-4 text-sm text-red-200/50">
        © {new Date().getFullYear()} BIICGlobal. All rights reserved.
      </div>
    </footer>
  );
}
