"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type University = {
  name: string;
  slug: string;
  country: string;
  countryFlag: string;
  location: string;
  ranking: string;
  image: string;
  courses: string[];
  tuitionFrom: string;
  students: string;
  acceptanceRate: string;
  founded: string;
  description: string;
};

const tabs = ["All", "UK", "USA", "Canada", "Australia"];

export default function UniversityFilters({ universities }: { universities: University[] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? universities : universities.filter((u) => u.country === active);

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                active === tab
                  ? "bg-red-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab === "UK" && "🇬🇧 "}
              {tab === "USA" && "🇺🇸 "}
              {tab === "Canada" && "🇨🇦 "}
              {tab === "Australia" && "🇦🇺 "}
              {tab}
              <span className="ml-2 text-xs opacity-70">
                ({tab === "All" ? universities.length : universities.filter((u) => u.country === tab).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((uni) => (
            <Link
              key={uni.slug}
              href={`/universities/${uni.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={uni.image}
                  alt={uni.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/90 backdrop-blur text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                    {uni.countryFlag} {uni.country}
                  </span>
                </div>
                <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {uni.ranking}
                </span>
                {/* Location overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white text-xs font-medium">{uni.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition mb-1">
                  {uni.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{uni.description}</p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "Students", value: uni.students },
                    { label: "Acceptance", value: uni.acceptanceRate },
                    { label: "Founded", value: uni.founded },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-xs font-bold text-gray-800">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Course badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {uni.courses.map((c) => (
                    <span key={c} className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400">Tuition from</span>
                    <div className="font-bold text-red-600 text-sm">{uni.tuitionFrom}</div>
                  </div>
                  <span className="text-red-600 font-bold text-sm group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-medium">No universities found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
