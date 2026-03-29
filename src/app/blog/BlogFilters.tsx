"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
};

const categories = ["All", "UK", "USA", "Canada", "Australia", "Visa", "IELTS", "Scholarship"];

export default function BlogFilters({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all border ${
              active === cat
                ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-100"
                : "bg-white text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-44 overflow-hidden flex-shrink-0">
              <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-full w-fit mb-2 ${post.categoryColor}`}>
                {post.category}
              </span>
              <h3 className="font-black text-gray-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-red-600 transition">
                {post.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <FaRegClock className="w-3 h-3" /> {post.readTime}
                </div>
                <span className="inline-flex items-center gap-1 text-red-600 text-xs font-black group-hover:gap-2 transition-all">
                  Read More <FaArrowRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="font-semibold text-gray-400">No articles in this category yet.</p>
        </div>
      )}
    </div>
  );
}
