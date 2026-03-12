import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { blogPosts } from "../page";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post ? post.title : "Blog Post",
    description: post ? post.excerpt : "Read our latest study abroad insights.",
  };
}

const articleContent = [
  {
    heading: "Introduction",
    body: "Studying abroad is one of the most transformative experiences a student can undertake. It opens doors to world-class education, international networks, and career opportunities that simply aren't available at home. Whether you are planning to study in the UK, USA, Canada, or Australia, understanding the process thoroughly is the key to a successful application.",
  },
  {
    heading: "Why This Matters for Bangladeshi Students",
    body: "Bangladesh has a rapidly growing pool of talented students who are increasingly looking beyond borders for quality education. With over 5,000 students placed by BIIC Global alone, the trend is clear: studying abroad is no longer a privilege reserved for the elite. With proper guidance, scholarships, and preparation, international education is within reach for dedicated students from all backgrounds.",
  },
  {
    heading: "Step-by-Step Process",
    body: "The first step is to determine which country and program aligns best with your academic background and career goals. Research university rankings, course content, tuition fees, and post-study work options. Once you have shortlisted 3-5 universities, begin preparing your documents — including your SOP, letters of recommendation, and English proficiency test scores.",
  },
  {
    heading: "Common Mistakes to Avoid",
    body: "Many students make the mistake of applying too late, underestimating the importance of their Statement of Purpose, or choosing universities solely based on rankings without considering fit. Another critical error is not preparing financially — you need to demonstrate sufficient funds not just for tuition but for living expenses as well. Start early, ideally 12 months before your intended intake.",
  },
  {
    heading: "Tips from Our Expert Counselors",
    body: "Our counselors have reviewed thousands of applications over 15+ years. The single most important factor in a successful application is authenticity — in your SOP, in your interviews, and in your documents. Universities are looking for students who genuinely know why they want to study there and what they plan to do after graduation. Be specific, be personal, and be honest.",
  },
  {
    heading: "Final Thoughts",
    body: "The journey to studying abroad is long but deeply rewarding. Every step — from taking IELTS to receiving your visa — is part of a process that will define your future. BIIC Global is here to support you at every stage. Book a free consultation with our experts today and take the first step towards your international education journey.",
  },
];

const tableOfContents = articleContent.map((s) => s.heading);

const categoryColors: Record<string, string> = {
  UK: "bg-blue-100 text-blue-700",
  USA: "bg-red-100 text-red-700",
  Canada: "bg-red-100 text-red-700",
  Australia: "bg-yellow-100 text-yellow-700",
  Visa: "bg-purple-100 text-purple-700",
  IELTS: "bg-green-100 text-green-700",
  Scholarship: "bg-orange-100 text-orange-700",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full pb-12">
          <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative w-11 h-11 flex-shrink-0">
              <Image src={post.authorImage} alt={post.author} fill className="object-cover rounded-full border-2 border-white/50" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{post.author}</div>
              <div className="text-white/60 text-xs">{post.date} &nbsp;•&nbsp; {post.readTime}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-red-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Article */}
          <article className="lg:col-span-3">
            {/* Excerpt callout */}
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-2xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed font-medium italic text-lg">{post.excerpt}</p>
            </div>

            {/* Content sections */}
            <div className="prose max-w-none space-y-8">
              {articleContent.map((section, i) => (
                <div key={i} id={`section-${i}`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {section.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base">{section.body}</p>
                </div>
              ))}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4">Share This Article</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Share on Facebook", icon: "f", bg: "bg-blue-600" },
                  { label: "Share on Twitter / X", icon: "𝕏", bg: "bg-gray-900" },
                  { label: "Share on LinkedIn", icon: "in", bg: "bg-blue-700" },
                  { label: "Copy Link", icon: "🔗", bg: "bg-gray-200 text-gray-700" },
                ].map((btn) => (
                  <button
                    key={btn.label}
                    className={`${btn.bg} text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition flex items-center gap-2`}
                  >
                    <span className="text-base leading-none">{btn.icon}</span>
                    <span className="hidden sm:inline">{btn.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div className="mt-8 bg-gray-50 rounded-2xl p-6 flex items-start gap-5 border border-gray-200">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image src={post.authorImage} alt={post.author} fill className="object-cover rounded-full" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg mb-1">{post.author}</div>
                <div className="text-red-600 text-sm font-semibold mb-2">Study Abroad Expert — BIIC Global</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  An experienced education counselor with 10+ years helping Bangladeshi students achieve their dreams of studying abroad. Specializes in UK and Commonwealth university admissions.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Table of Contents */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Table of Contents</h3>
              <ol className="space-y-2.5">
                {tableOfContents.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="flex items-start gap-2 text-sm text-gray-600 hover:text-red-600 transition"
                    >
                      <span className="w-5 h-5 bg-red-100 text-red-600 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">Ready to Start?</h3>
              <p className="text-red-100 text-sm mb-4">Get a free counseling session with our experts.</p>
              <Link
                href="/contact"
                className="block text-center bg-white text-red-600 font-bold py-3 rounded-xl hover:bg-red-50 transition text-sm"
              >
                Book Free Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-0.5 bg-red-600 w-8" />
            <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[p.category] || "bg-gray-100 text-gray-700"}`}>
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{p.date} • {p.readTime}</p>
                  <h3 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-red-600 transition line-clamp-2">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
