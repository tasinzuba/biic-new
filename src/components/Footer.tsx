import Link from "next/link";
import Flag from "@/components/Flag";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaLocationDot, FaClock, FaPhone, FaEnvelope } from "react-icons/fa6";

const destinations = [
  { name: "UK",          code: "GB", slug: "uk" },
  { name: "Australia",   code: "AU", slug: "australia" },
  { name: "New Zealand", code: "NZ", slug: "new-zealand" },
  { name: "Canada",      code: "CA", slug: "canada" },
  { name: "USA",         code: "US", slug: "usa" },
  { name: "Europe",      code: "EU", slug: "europe" },
  { name: "Malaysia",    code: "MY", slug: "malaysia" },
];

const usefulLinks = [
  { label: "About Us",                     href: "/about" },
  { label: "Study Abroad Guidance",        href: "/services" },
  { label: "University Selection Support", href: "/universities" },
  { label: "Admission & Application Process", href: "/services/university-admission" },
  { label: "Student Success Stories",      href: "/about#testimonials" },
  { label: "Latest News & Updates",        href: "/blog" },
];

const quickLinks = [
  { label: "Privacy Policy",   href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy",    href: "/cookie-policy" },
  { label: "Contact Us",       href: "/contact" },
  { label: "Latest News",      href: "/blog" },
  { label: "Our Sitemap",      href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      {/* World map background */}
      <div
        className="relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3C/svg%3E")`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Brand / Contact */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg border-4 border-red-100 flex-shrink-0">
                  B
                </div>
                <div>
                  <div className="text-red-600 font-bold text-base leading-tight">Banglay IELTS</div>
                  <div className="text-gray-500 text-xs">& Immigration Center</div>
                </div>
              </Link>

              {/* Contact details */}
              <ul className="space-y-2.5 text-sm text-gray-600 mb-5">
                <li className="flex items-start gap-2">
                  <FaLocationDot className="text-red-500 mt-0.5 flex-shrink-0 w-3.5 h-3.5" />
                  <span>III/A, Zeenat Center 2, Road 07,<br />Sector 04, Rajlokkhi, Uttara, Dhaka.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaClock className="text-red-500 flex-shrink-0 w-3.5 h-3.5" />
                  Every Day : 10:00 AM – 06:00 PM
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-red-500 flex-shrink-0 w-3.5 h-3.5" />
                  +880 96138-20821
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500 flex-shrink-0 w-3.5 h-3.5" />
                  info@biic.com.bd
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {[
                  { Icon: FaFacebookF,  href: "https://facebook.com",  bg: "bg-blue-600" },
                  { Icon: FaInstagram,  href: "https://instagram.com", bg: "bg-pink-500" },
                  { Icon: FaYoutube,    href: "https://youtube.com",   bg: "bg-red-600" },
                  { Icon: FaLinkedinIn, href: "https://linkedin.com",  bg: "bg-blue-700" },
                ].map(({ Icon, href, bg }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${bg} text-white w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Study Destinations */}
            <div>
              <h4 className="text-red-600 font-black text-base mb-4">Study Destinations</h4>
              <ul className="space-y-2.5 text-sm">
                {destinations.map((d) => (
                  <li key={d.code}>
                    <Link
                      href={`/study-in/${d.slug}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
                    >
                      <Flag code={d.code} size="1.2em" />
                      Study in {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-red-600 font-black text-base mb-4">Usefull Links</h4>
              <ul className="space-y-2.5 text-sm">
                {usefulLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-gray-600 hover:text-red-600 transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-red-600 font-black text-base mb-4">Quick Link</h4>
              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-gray-600 hover:text-red-600 transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ICEF Badge */}
            <div className="flex items-start justify-center lg:justify-end">
              <div className="bg-[#1a2e5a] rounded-2xl p-4 text-center w-36">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <div className="w-4 h-4 rounded-full bg-blue-400 flex items-center justify-center">
                    <span className="text-white text-[8px] font-black">✓</span>
                  </div>
                  <span className="text-white text-[10px] font-black tracking-wide">ICEF ACCREDITED</span>
                </div>
                <div className="text-blue-200 text-[9px] font-bold uppercase tracking-widest mb-2">
                  ICEF AGENCY STATUS
                </div>
                {/* QR placeholder */}
                <div className="bg-white rounded-lg p-2 mb-2 mx-auto w-20 h-20 flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-0.5 w-full h-full">
                    {Array.from({length: 25}).map((_, i) => (
                      <div key={i} className={`rounded-sm ${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,12,18].includes(i) ? "bg-gray-800" : "bg-white"}`} />
                    ))}
                  </div>
                </div>
                <div className="text-blue-300 text-[11px] font-black">#6389</div>
                <div className="text-blue-200 text-[9px] font-semibold uppercase tracking-widest">
                  TRUSTED AGENCY
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-red-950 text-center py-4 text-sm text-red-100/70">
        © {new Date().getFullYear()} Banglay IELTS Immigration Center. All rights reserved.
      </div>
    </footer>
  );
}
