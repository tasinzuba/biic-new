"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
};

const categories = ["All", "UK", "USA", "Canada", "Australia", "Visa", "IELTS", "Scholarship"];

const categoryColors: Record<string, string> = {
  UK: "bg-blue-100 text-blue-700",
  USA: "bg-red-100 text-red-700",
  Canada: "bg-red-100 text-red-700",
  Australia: "bg-yellow-100 text-yellow-700",
  Visa: "bg-purple-100 text-purple-700",
  IELTS: "bg-green-100 text-green-700",
  Scholarship: "bg-orange-100 text-orange-700",
};

export default function BlogFilters({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {active === "All" ? "All Articles" : `Articles: ${active}`}
            <span className="ml-2 text-base text-gray-400 font-normal">({filtered.length})</span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  active === cat
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-red-600 transition line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <Image src={post.authorImage} alt={post.author} fill className="object-cover rounded-full" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium flex-1">{post.author}</span>
                  <span className="text-red-600 text-xs font-bold group-hover:underline">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-lg font-medium">No articles in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
