import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { FaArrowRight, FaFire } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Blog & Resources | Banglay IELTS",
  description: "Tips, guides, and news about studying abroad in UK, USA, Canada, Australia and more.",
};

export const blogPosts = [
  {
    slug: "how-to-get-uk-student-visa-2025",
    title: "How to Get a UK Student Visa in 2025: Complete Step-by-Step Guide",
    excerpt: "Everything Bangladeshi students need to know about applying for the UK Student Visa (Tier 4), from CAS to biometrics.",
    category: "UK",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    date: "March 5, 2026",
    readTime: "8 min read",
    author: "Sarah Ahmed",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    popular: true,
  },
  {
    slug: "ielts-band-7-tips",
    title: "10 Proven Tips to Score Band 7+ in IELTS (From Our Top Students)",
    excerpt: "Our IELTS expert coaches share the most effective strategies that helped 500+ students achieve their target scores.",
    category: "IELTS",
    categoryColor: "bg-emerald-100 text-emerald-700",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b6f57?w=800&q=80",
    date: "February 28, 2026",
    readTime: "6 min read",
    author: "Dr. Rahim Khan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    popular: true,
  },
  {
    slug: "canada-pgwp-guide",
    title: "Canada PGWP (Post-Graduate Work Permit) 2025 — Everything You Need to Know",
    excerpt: "After graduating in Canada, can you stay and work? Everything about the PGWP and pathways to permanent residency.",
    category: "Canada",
    categoryColor: "bg-rose-100 text-rose-700",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    date: "February 20, 2026",
    readTime: "7 min read",
    author: "Maria Chen",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    popular: true,
  },
  {
    slug: "scholarship-guide-2025",
    title: "Top 15 Scholarships for Bangladeshi Students in 2025",
    excerpt: "A curated list of the best fully-funded and partial scholarships available for Bangladeshi students going abroad.",
    category: "Scholarship",
    categoryColor: "bg-orange-100 text-orange-700",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    date: "February 15, 2026",
    readTime: "10 min read",
    author: "Sarah Ahmed",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    popular: true,
  },
  {
    slug: "study-australia-2025",
    title: "Why Australia Is the Best Study Destination in 2025 for South Asians",
    excerpt: "With generous work rights, beautiful cities, and a path to PR, Australia is the top choice for Bangladeshi students.",
    category: "Australia",
    categoryColor: "bg-amber-100 text-amber-700",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    date: "February 8, 2026",
    readTime: "5 min read",
    author: "James Wilson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    popular: true,
  },
  {
    slug: "usa-f1-visa-tips",
    title: "USA F-1 Student Visa Interview: Common Questions & Answers",
    excerpt: "Preparing for your US student visa interview? Here are the most commonly asked questions and how to answer them confidently.",
    category: "USA",
    categoryColor: "bg-red-100 text-red-700",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80",
    date: "January 30, 2026",
    readTime: "9 min read",
    author: "Dr. Rahim Khan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    popular: true,
  },
  {
    slug: "sop-writing-guide",
    title: "How to Write a Perfect Statement of Purpose (SOP) — With Examples",
    excerpt: "Your SOP can make or break your application. Learn the structure, tips, and common mistakes to avoid.",
    category: "Visa",
    categoryColor: "bg-purple-100 text-purple-700",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    date: "January 22, 2026",
    readTime: "11 min read",
    author: "Sarah Ahmed",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    popular: false,
  },
  {
    slug: "uk-student-life-costs",
    title: "Real Cost of Student Life in London 2025 — An Honest Breakdown",
    excerpt: "From accommodation to groceries, transport to entertainment — what international students actually spend in London.",
    category: "UK",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&q=80",
    date: "January 15, 2026",
    readTime: "6 min read",
    author: "Maria Chen",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    popular: false,
  },
  {
    slug: "ielts-writing-task2",
    title: "IELTS Writing Task 2: How to Score Band 8 with These Proven Structures",
    excerpt: "Learn the exact essay structures, vocabulary tips, and examiner secrets to score high in IELTS Writing Task 2.",
    category: "IELTS",
    categoryColor: "bg-emerald-100 text-emerald-700",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    date: "January 10, 2026",
    readTime: "8 min read",
    author: "Dr. Rahim Khan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    popular: false,
  },
];

// Group posts by category for section display
const categoryGroups = [
  { label: "UK",         slug: "UK",         color: "text-blue-600",    dot: "bg-blue-600" },
  { label: "IELTS",      slug: "IELTS",       color: "text-emerald-600", dot: "bg-emerald-600" },
  { label: "Canada",     slug: "Canada",      color: "text-rose-600",    dot: "bg-rose-600" },
  { label: "Australia",  slug: "Australia",   color: "text-amber-600",   dot: "bg-amber-600" },
  { label: "Scholarship",slug: "Scholarship", color: "text-orange-600",  dot: "bg-orange-600" },
  { label: "Visa Tips",  slug: "Visa",        color: "text-purple-600",  dot: "bg-purple-600" },
];

function PostCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <span className={`text-[10px] font-black px-2.5 py-1 rounded-full w-fit mb-2 ${post.categoryColor}`}>
          {post.category}
        </span>
        <h3 className="font-black text-gray-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-red-600 transition">
          {post.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-400">{post.date}</span>
          <span className="inline-flex items-center gap-1 text-red-600 text-xs font-black group-hover:gap-2 transition-all">
            Read More <FaArrowRight className="w-2.5 h-2.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const featured = blogPosts[0];
  const popular  = blogPosts.filter((p) => p.popular).slice(0, 6);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── Featured Banner ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#4c1d95 100%)" }}>
        <div className="absolute inset-0 opacity-20">
          <Image src={featured.image} alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(30,27,75,0.95) 40%,rgba(30,27,75,0.5) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaFire className="text-yellow-400 w-4 h-4" />
                <span className="text-yellow-400 font-black text-xs uppercase tracking-widest">Featured Post</span>
              </div>
              <span className={`text-[11px] font-black px-3 py-1 rounded-full mb-4 inline-block ${featured.categoryColor}`}>
                {featured.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
                {featured.title}
              </h1>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-lg">{featured.excerpt}</p>
              <div className="flex items-center gap-4">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-sm px-6 py-3 rounded-xl transition shadow-lg shadow-red-900/40"
                >
                  Read More <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image src={featured.authorImage} alt={featured.author} fill className="object-cover rounded-full border-2 border-white/30" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">{featured.author}</div>
                    <div className="text-white/50 text-[10px]">{featured.date}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Featured image */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <Image src={featured.image} alt={featured.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Promo Banners ── */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/contact" className="group relative rounded-2xl overflow-hidden h-24 flex items-center px-6 gap-4" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <div className="text-white font-black text-base">Personalized Consultancy Session</div>
              <div className="text-white/70 text-xs">Book a free 1-on-1 session with our experts</div>
            </div>
            <span className="ml-auto bg-white text-purple-700 font-black text-xs px-4 py-2 rounded-xl group-hover:scale-105 transition flex-shrink-0">
              Book Now
            </span>
          </Link>
          <Link href="/universities" className="group relative rounded-2xl overflow-hidden h-24 flex items-center px-6 gap-4" style={{ background: "linear-gradient(135deg,#be123c,#9f1239)" }}>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <div className="text-white font-black text-base">Book a PDF Career Path Guide</div>
              <div className="text-white/70 text-xs">Free university selection & career roadmap</div>
            </div>
            <span className="ml-auto bg-white text-red-700 font-black text-xs px-4 py-2 rounded-xl group-hover:scale-105 transition flex-shrink-0">
              Get Free
            </span>
          </Link>
        </div>
      </section>

      {/* ── Most Popular Blog ── */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <FaFire className="text-red-600 w-5 h-5" />
            <h2 className="text-xl font-black text-gray-900">Most Popular Blog</h2>
          </div>
          <Link href="/blog/all" className="flex items-center gap-1.5 text-red-600 font-bold text-sm hover:underline">
            See More Blog <span className="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-[10px]">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popular.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="relative rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 60%,#0f172a 100%)" }}>
          <div className="absolute inset-0 opacity-10">
            <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80" alt="" fill className="object-cover" />
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-center px-8 py-10">
            <div>
              <span className="inline-block bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                Free Service
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                Complete Study Abroad<br />
                <span className="text-red-400">Counseling — Batch Open</span>
              </h2>
              <p className="text-white/60 text-sm mb-5">Get expert guidance on university selection, visa process, scholarships, and pre-departure preparation.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-xl text-sm transition shadow-lg shadow-red-900/50"
              >
                Book Free Session <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="Study Abroad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Sections ── */}
      {categoryGroups.map((cat) => {
        const posts = blogPosts.filter((p) => p.category === cat.slug).slice(0, 3);
        if (posts.length === 0) return null;
        return (
          <section key={cat.slug} className="max-w-7xl mx-auto px-4 pb-10">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${cat.dot}`} />
                <h2 className={`text-xl font-black ${cat.color}`}>{cat.label}</h2>
              </div>
              <Link href={`/blog?cat=${cat.slug}`} className="flex items-center gap-1.5 text-gray-500 font-bold text-sm hover:text-red-600 transition">
                See More Blog <span className="w-5 h-5 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-[10px]">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        );
      })}

      {/* ── Newsletter ── */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Get Weekly Study Tips</h2>
          <p className="text-gray-500 text-sm mb-6">Join 5,000+ students receiving our newsletter on scholarships, visas, and study abroad news.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-sm outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-red-100 whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

    </div>
  );
}
