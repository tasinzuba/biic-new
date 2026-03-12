"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  uni: {
    name: string;
    description: string;
    courses: string[];
    tuitionFrom: string;
    location: string;
  };
  overviewContent: {
    about: string;
    highlights: string[];
  };
  courses: {
    level: string;
    name: string;
    duration: string;
    tuition: string;
    intakes: string;
  }[];
  requirements: {
    ielts: string;
    toefl: string;
    gpa: string;
    gre: string;
    documents: string[];
    timeline: { step: string; label: string; desc: string; time: string }[];
  };
  scholarships: {
    name: string;
    amount: string;
    eligibility: string;
    deadline: string;
    type: string;
  }[];
};

const tabList = ["Overview", "Courses", "Requirements", "Scholarships"];

export default function UniversityTabs({ uni, overviewContent, courses, requirements, scholarships }: Props) {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="py-0">
      {/* Tab Navigation */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex gap-0 overflow-x-auto">
          {tabList.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-semibold text-sm whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About {uni.name}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{overviewContent.about}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {overviewContent.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-gray-700 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Location", value: uni.location },
                    { label: "Tuition from", value: uni.tuitionFrom },
                    { label: "Programs", value: uni.courses.join(", ") },
                  ].map((f) => (
                    <div key={f.label} className="flex justify-between border-b border-white/20 pb-3">
                      <span className="text-red-200">{f.label}</span>
                      <span className="font-semibold text-right max-w-[55%]">{f.value}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block mt-5 text-center bg-white text-red-600 font-bold py-3 rounded-xl hover:bg-red-50 transition"
                >
                  Get Free Counseling
                </Link>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <div className="text-blue-800 font-semibold mb-2">Need help applying?</div>
                <p className="text-blue-700 text-sm">Our counselors have helped 500+ students get into top universities like this one.</p>
                <Link href="/contact" className="inline-block mt-3 text-blue-700 font-bold text-sm hover:underline">
                  Talk to an expert →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* COURSES TAB */}
        {activeTab === "Courses" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Programs</h2>
            <p className="text-gray-500 mb-8">Popular courses available for international students at {uni.name}</p>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-6 py-4 font-semibold">Program</th>
                    <th className="text-left px-6 py-4 font-semibold">Level</th>
                    <th className="text-left px-6 py-4 font-semibold">Duration</th>
                    <th className="text-left px-6 py-4 font-semibold">Tuition</th>
                    <th className="text-left px-6 py-4 font-semibold">Intakes</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, i) => (
                    <tr key={i} className={`border-t border-gray-100 hover:bg-red-50 transition ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <td className="px-6 py-4 font-semibold text-gray-800">{course.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          course.level === "PhD" ? "bg-purple-100 text-purple-700" :
                          course.level === "Postgraduate" ? "bg-blue-100 text-blue-700" :
                          "bg-green-100 text-green-700"
                        }`}>
                          {course.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{course.duration}</td>
                      <td className="px-6 py-4 font-semibold text-red-600">{course.tuition}</td>
                      <td className="px-6 py-4 text-gray-600">{course.intakes}</td>
                      <td className="px-6 py-4">
                        <Link href="/contact" className="text-red-600 font-bold text-xs hover:underline whitespace-nowrap">
                          Apply →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
              This is a sample list. Contact us for the complete course catalog.
            </p>
          </div>
        )}

        {/* REQUIREMENTS TAB */}
        {activeTab === "Requirements" && (
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Admission Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { label: "IELTS Score", value: requirements.ielts, icon: "📖", color: "bg-blue-50 border-blue-100", text: "text-blue-700" },
                  { label: "TOEFL Score", value: requirements.toefl, icon: "📝", color: "bg-green-50 border-green-100", text: "text-green-700" },
                  { label: "Minimum GPA", value: requirements.gpa, icon: "🎯", color: "bg-orange-50 border-orange-100", text: "text-orange-700" },
                  { label: "GRE / GMAT", value: requirements.gre, icon: "🧠", color: "bg-purple-50 border-purple-100", text: "text-purple-700" },
                ].map((item) => (
                  <div key={item.label} className={`${item.color} border rounded-2xl p-6 flex items-center gap-4`}>
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className="text-gray-500 text-sm font-medium">{item.label}</div>
                      <div className={`font-bold text-xl ${item.text}`}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Required Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {requirements.documents.map((doc) => (
                  <div key={doc} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-red-300 transition">
                    <span className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Application Timeline</h3>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />
                <div className="space-y-6">
                  {requirements.timeline.map((item) => (
                    <div key={item.step} className="relative flex gap-6 items-start pl-2">
                      <div className="w-9 h-9 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">
                        {item.step}
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-5 flex-1 hover:border-red-300 transition">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-gray-800">{item.label}</h4>
                          <span className="text-xs bg-red-100 text-red-600 font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-3">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCHOLARSHIPS TAB */}
        {activeTab === "Scholarships" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Scholarships & Funding</h2>
            <p className="text-gray-500 mb-8">Available scholarships for international students at {uni.name}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarships.map((s, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition hover:border-red-300">
                  <div className={`py-3 px-5 text-xs font-bold uppercase tracking-widest ${
                    s.type === "Government" ? "bg-blue-600 text-white" :
                    s.type === "Research" ? "bg-purple-600 text-white" :
                    "bg-red-600 text-white"
                  }`}>
                    {s.type} Scholarship
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{s.name}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-4">{s.amount}</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-gray-400 font-medium w-24 flex-shrink-0">Eligibility:</span>
                        <span className="text-gray-700">{s.eligibility}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-gray-400 font-medium w-24 flex-shrink-0">Deadline:</span>
                        <span className="text-red-600 font-semibold">{s.deadline}</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="block mt-5 text-center bg-gray-900 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition text-sm"
                    >
                      Apply for This Scholarship →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h4 className="font-bold text-yellow-800 mb-1">Need Scholarship Help?</h4>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  Our counselors specialize in finding the right scholarships for your profile. We have helped students secure over £500,000 in scholarships last year alone.
                </p>
                <Link href="/contact" className="inline-block mt-3 text-yellow-800 font-bold text-sm hover:underline">
                  Get Scholarship Guidance →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
