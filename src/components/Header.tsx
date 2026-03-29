"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const topBarInfo = {
  text: "We are Open 7 days | +880 96138-20821 | 10AM-6PM",
  socials: [
    { label: "Facebook", icon: "f", href: "#" },
    { label: "Instagram", icon: "in", href: "#" },
    { label: "YouTube", icon: "▶", href: "#" },
    { label: "LinkedIn", icon: "li", href: "#" },
  ],
};

type NavChild = { label: string; href: string; sub?: string };
type NavLink = { label: string; href?: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  {
    label: "STUDY DESTINATION",
    children: [
      { label: "Study in UK", href: "/study-in/uk" },
      { label: "Study in USA", href: "/study-in/usa" },
      { label: "Study in Canada", href: "/study-in/canada" },
      { label: "Study in Australia", href: "/study-in/australia" },
      { label: "Study in Germany", href: "/study-in/germany" },
      { label: "Study in Malaysia", href: "/study-in/malaysia" },
    ],
  },
  { label: "UNIVERSITIES", href: "/universities" },
  {
    label: "SERVICE",
    children: [
      { label: "University Admission", href: "/services/university-admission" },
      { label: "Visa Assistance", href: "/services/visa-assistance" },
      { label: "IELTS Preparation", href: "/services/ielts-preparation" },
      { label: "Scholarship Guidance", href: "/services/scholarship" },
    ],
  },
  {
    label: "RESOURCES",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "News", href: "/blog/news" },
      { label: "Student Guide", href: "/blog/guide" },
    ],
  },
  { label: "ABOUT US", href: "/about" },
  {
    label: "OUR OFFICES",
    children: [
      { label: "Dhaka Office", href: "/offices/dhaka" },
      { label: "Chattogram Office", href: "/offices/chattogram" },
      { label: "Sylhet Office", href: "/offices/sylhet" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full z-50 sticky top-0 shadow-md">
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-medium tracking-wide">{topBarInfo.text}</span>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { href: "#", svg: (
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              )},
              { href: "#", svg: (
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="red" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/></svg>
              )},
              { href: "#", svg: (
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="red" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              )},
              { href: "#", svg: (
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              )},
            ].map((s, i) => (
              <a key={i} href={s.href} className="hover:opacity-80 transition w-7 h-7 flex items-center justify-center bg-white/20 rounded-full">
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl border-4 border-red-100">
              B
            </div>
            <div>
              <div className="text-red-600 font-bold text-xl leading-tight">Banglay IELTS</div>
              <div className="text-gray-500 text-xs">& Immigration Center</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-red-600 font-semibold text-sm transition whitespace-nowrap">
                    {link.label}
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <div className={`absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 border-t-2 border-red-600 z-50 ${link.children.some((c) => c.sub) ? "w-72" : "w-52"}`}>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition group"
                        >
                          <div className="text-sm font-semibold group-hover:text-red-600">{child.label}</div>
                          {child.sub && <div className="text-xs text-gray-400 mt-0.5 leading-snug">{child.sub}</div>}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href ?? "/"}
                  className="px-3 py-2 text-gray-700 hover:text-red-600 font-semibold text-sm transition whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Contact CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-5 py-2.5 rounded font-bold text-sm transition whitespace-nowrap"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg px-4 pb-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="font-bold text-red-600 mt-4 mb-1 text-sm uppercase tracking-wider">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 text-gray-600 pl-4 border-l-2 border-red-100 hover:text-red-600 hover:border-red-600 transition text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href ?? "/"}
                className="block py-3 text-gray-700 font-semibold border-b border-gray-100 hover:text-red-600 transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="block mt-4 bg-red-600 text-white text-center px-4 py-3 rounded font-bold hover:bg-red-700 transition"
            onClick={() => setMobileOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}
