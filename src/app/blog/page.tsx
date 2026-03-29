import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import BlogFilters from "./BlogFilters";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description: "Tips, guides, and news about studying abroad in UK, USA, Canada, Australia and more.",
};

export const blogPosts = [
  {
    slug: "how-to-get-uk-student-visa-2025",
    title: "How to Get a UK Student Visa in 2025: Complete Step-by-Step Guide",
    excerpt: "Everything Bangladeshi students need to know about applying for the UK Student Visa (Tier 4), from CAS to biometrics.",
    category: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    date: "March 5, 2026",
    readTime: "8 min read",
    author: "Sarah Ahmed",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    featured: true,
  },
  {
    slug: "ielts-band-7-tips",
    title: "10 Proven Tips to Score Band 7+ in IELTS (From Our Top Students)",
    excerpt: "Our IELTS expert coaches share the most effective strategies that helped 500+ students achieve their target scores.",
    category: "IELTS",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b6f57?w=800&q=80",
    date: "February 28, 2026",
    readTime: "6 min read",
    author: "Dr. Rahim Khan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    featured: false,
  },
  {
    slug: "canada-pgwp-guide",
    title: "Canada PGWP (Post-Graduate Work Permit) 2025 — Everything You Need to Know",
    excerpt: "After graduating in Canada, can you stay and work? Here is everything about the PGWP and pathways to permanent residency.",
    category: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    date: "February 20, 2026",
    readTime: "7 min read",
    author: "Maria Chen",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    featured: false,
  },
  {
    slug: "scholarship-guide-2025",
    title: "Top 15 Scholarships for Bangladeshi Students in 2025",
    excerpt: "A curated list of the best fully-funded and partial scholarships available for Bangladeshi students going abroad.",
    category: "Scholarship",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    date: "February 15, 2026",
    readTime: "10 min read",
    author: "Sarah Ahmed",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    featured: false,
  },
  {
    slug: "study-australia-2025",
    title: "Why Australia Is the Best Study Destination in 2025 for South Asians",
    excerpt: "With generous work rights, beautiful cities, and a path to PR, Australia is becoming the top choice for Bangladeshi students.",
    category: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    date: "February 8, 2026",
    readTime: "5 min read",
    author: "James Wilson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    featured: false,
  },
  {
    slug: "usa-f1-visa-tips",
    title: "USA F-1 Student Visa Interview: Common Questions & Answers",
    excerpt: "Preparing for your US student visa interview? Here are the most commonly asked questions and how to answer them confidently.",
    category: "USA",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80",
    date: "January 30, 2026",
    readTime: "9 min read",
    author: "Dr. Rahim Khan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    featured: false,
  },
  {
    slug: "sop-writing-guide",
    title: "How to Write a Perfect Statement of Purpose (SOP) — With Examples",
    excerpt: "Your SOP can make or break your application. Learn the structure, tips, and common mistakes to avoid — with real examples.",
    category: "Visa",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    date: "January 22, 2026",
    readTime: "11 min read",
    author: "Sarah Ahmed",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    featured: false,
  },
  {
    slug: "uk-student-life-costs",
    title: "Real Cost of Student Life in London 2025 — An Honest Breakdown",
    excerpt: "From accommodation to groceries, transport to entertainment — here is what international students actually spend in London.",
    category: "UK",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&q=80",
    date: "January 15, 2026",
    readTime: "6 min read",
    author: "Maria Chen",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80"
            alt="Blog background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Study Abroad Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Tips, Guides & News
          </h1>
          <p className="text-red-100 text-xl max-w-2xl mx-auto">
            Expert advice on studying abroad — visas, scholarships, IELTS, university applications and more.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section
          className="py-12 px-4"
          style={{ background: "linear-gradient(135deg,#fff7f7 0%,#fef2f2 40%,#fff1f0 70%,#fafafa 100%)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 bg-red-600 w-8" />
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Featured Article</span>
            </div>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100">
                <div className="relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 group-hover:text-red-600 transition leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                      <Image src={featured.authorImage} alt={featured.author} fill className="object-cover rounded-full" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">{featured.author}</div>
                      <div className="text-xs text-gray-400">BIIC Expert</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-red-600 font-black text-sm group-hover:underline">Read Full Article →</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid with Filters */}
      <BlogFilters posts={rest} />

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="text-4xl mb-4">📧</div>
          <h2 className="text-3xl font-black mb-3">Get Study Abroad Tips in Your Inbox</h2>
          <p className="text-red-100 mb-6">Join 5,000+ students who get our weekly newsletter on scholarships, visa tips and more.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-2xl text-gray-800 text-sm outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-red-600 font-black px-6 py-3 rounded-2xl hover:bg-red-50 hover:scale-105 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
