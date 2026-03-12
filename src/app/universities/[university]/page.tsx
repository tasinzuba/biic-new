import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { universities } from "../page";
import UniversityTabs from "./UniversityTabs";

type Props = { params: Promise<{ university: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { university } = await params;
  const uni = universities.find((u) => u.slug === university);
  return {
    title: uni ? uni.name : "University Details",
    description: uni ? uni.description : "Find out more about this university.",
  };
}

export default async function UniversityDetailPage({ params }: Props) {
  const { university } = await params;
  const uni = universities.find((u) => u.slug === university) || universities[0];

  const overviewContent = {
    about: `${uni.name} is one of the world's premier institutions of higher learning, recognized globally for its commitment to research, innovation, and academic excellence. Founded in ${uni.founded}, it has produced generations of leaders, Nobel laureates, and innovators who have shaped our world. The university offers a rigorous and transformative educational experience, combining world-class teaching with cutting-edge research across every discipline.`,
    highlights: [
      `Ranked ${uni.ranking} globally`,
      `${uni.students} enrolled students`,
      `${uni.acceptanceRate} acceptance rate`,
      `${uni.courses.length} major program types offered`,
      "Scholarships available for international students",
      "State-of-the-art research facilities",
      "Strong alumni network worldwide",
      "Dedicated international student support",
    ],
  };

  const courses = [
    { level: "Undergraduate", name: "Computer Science", duration: "3-4 years", tuition: uni.tuitionFrom, intakes: "Sep, Jan" },
    { level: "Postgraduate", name: "Data Science & AI", duration: "1-2 years", tuition: uni.tuitionFrom, intakes: "Sep" },
    { level: "Postgraduate", name: "Business Administration (MBA)", duration: "1-2 years", tuition: uni.tuitionFrom, intakes: "Sep, Jan" },
    { level: "Undergraduate", name: "Engineering", duration: "3-4 years", tuition: uni.tuitionFrom, intakes: "Sep" },
    { level: "Postgraduate", name: "International Relations", duration: "1 year", tuition: uni.tuitionFrom, intakes: "Sep, Jan" },
    { level: "PhD", name: "Research Programs", duration: "3-5 years", tuition: "Funding Available", intakes: "Sep, Jan, May" },
  ];

  const requirements = {
    ielts: "6.5 – 7.5",
    toefl: "90 – 110",
    gpa: "3.5+ / 65%+",
    gre: "Required for some programs",
    documents: [
      "Valid Passport (min. 6 months validity)",
      "All Academic Transcripts & Certificates",
      "Statement of Purpose (SOP) – 500 to 1000 words",
      "2–3 Letters of Recommendation",
      "Updated CV / Resume",
      "Proof of English Proficiency (IELTS/TOEFL)",
      "Portfolio (for creative programs)",
      "Proof of Financial Means",
    ],
    timeline: [
      { step: "1", label: "Research Programs", desc: "Shortlist programs matching your profile", time: "6 months before" },
      { step: "2", label: "Prepare Documents", desc: "Gather transcripts, write SOP, get references", time: "5 months before" },
      { step: "3", label: "Submit Application", desc: "Apply online through UCAS or university portal", time: "4 months before" },
      { step: "4", label: "Receive Offer", desc: "Accept conditional or unconditional offer", time: "2-3 months before" },
      { step: "5", label: "Apply for Visa", desc: "Submit student visa application with CAS", time: "2 months before" },
    ],
  };

  const scholarships = [
    {
      name: "International Excellence Award",
      amount: "Up to 50% tuition",
      eligibility: "CGPA 3.7+, Strong SOP",
      deadline: "Rolling basis",
      type: "Merit-based",
    },
    {
      name: "Commonwealth Scholarship",
      amount: "Full scholarship + stipend",
      eligibility: "Bangladeshi citizens, exceptional academic record",
      deadline: "December annually",
      type: "Government",
    },
    {
      name: "Graduate Research Fellowship",
      amount: "Full tuition + £15,000 stipend",
      eligibility: "PhD applicants only",
      deadline: "January annually",
      type: "Research",
    },
    {
      name: "Vice-Chancellor's Scholarship",
      amount: "£5,000 – £10,000",
      eligibility: "Top 10% applicants",
      deadline: "With application",
      type: "Merit-based",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <Image
          src={uni.image}
          alt={uni.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{uni.countryFlag}</span>
            <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 uppercase tracking-wider">
              {uni.location}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {uni.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg text-sm">
              {uni.ranking}
            </span>
            <span className="bg-white/15 backdrop-blur border border-white/30 text-white px-4 py-2 rounded-lg text-sm">
              Est. {uni.founded}
            </span>
            <span className="bg-white/15 backdrop-blur border border-white/30 text-white px-4 py-2 rounded-lg text-sm">
              {uni.students} Students
            </span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-red-600 text-white py-5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "World Ranking", value: uni.ranking },
            { label: "Total Students", value: uni.students },
            { label: "Acceptance Rate", value: uni.acceptanceRate },
            { label: "Founded", value: uni.founded },
          ].map((s) => (
            <div key={s.label} className="py-2">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-red-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/universities" className="hover:text-red-600">Universities</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{uni.name}</span>
        </div>
      </div>

      {/* Tab Sections */}
      <UniversityTabs
        uni={uni}
        overviewContent={overviewContent}
        courses={courses}
        requirements={requirements}
        scholarships={scholarships}
      />

      {/* Apply CTA */}
      <section className="relative py-20 px-4 overflow-hidden">
        <Image
          src={uni.image}
          alt={uni.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-red-700/93" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Apply to {uni.name}?</h2>
          <p className="text-red-100 text-lg mb-8">
            Our expert counselors will guide you through the entire application process — for free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition text-lg"
            >
              Start Application
            </Link>
            <Link
              href="/universities"
              className="border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition text-lg"
            >
              View Other Universities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
