import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-3">
            BIIC<span className="text-orange-500">Global</span>
          </h3>
          <p className="text-sm text-gray-400">
            Your trusted partner for studying abroad. We help students achieve
            their dream of international education.
          </p>
        </div>

        {/* Study Destinations */}
        <div>
          <h4 className="text-white font-semibold mb-3">Study Destinations</h4>
          <ul className="space-y-2 text-sm">
            {["UK", "USA", "Canada", "Australia", "Germany", "Malaysia"].map(
              (c) => (
                <li key={c}>
                  <Link
                    href={`/study-in/${c.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    Study in {c}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              "University Admission",
              "Visa Assistance",
              "IELTS Preparation",
              "Scholarship Guidance",
              "Accommodation",
            ].map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-white transition">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1XXX-XXXXXX</li>
            <li>✉️ info@biicglobal.com</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Free Consultation
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} BIICGlobal. All rights reserved.
      </div>
    </footer>
  );
}
