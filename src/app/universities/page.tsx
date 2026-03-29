import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import UniversityFilters from "./UniversityFilters";

export const metadata: Metadata = {
  title: "Top Universities",
  description: "Browse top universities in UK, USA, Canada, Australia and more. Find your perfect university.",
};

export const universities = [
  {
    name: "University of Oxford",
    slug: "university-of-oxford",
    country: "UK",
    countryFlag: "GB",
    location: "Oxford, England",
    ranking: "#1 World",
    image: "https://images.unsplash.com/photo-1600428853876-fb6702f38b92?w=600&q=80",
    courses: ["BSc", "MSc", "PhD", "MBA"],
    tuitionFrom: "£26,770/year",
    students: "24,000+",
    acceptanceRate: "17%",
    founded: "1096",
    description: "One of the world's leading universities with an eight-century tradition of scholarly excellence.",
  },
  {
    name: "University of Cambridge",
    slug: "university-of-cambridge",
    country: "UK",
    countryFlag: "GB",
    location: "Cambridge, England",
    ranking: "#2 World",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80",
    courses: ["BSc", "MSc", "PhD"],
    tuitionFrom: "£24,507/year",
    students: "23,000+",
    acceptanceRate: "21%",
    founded: "1209",
    description: "A world-leading research university with a mission to contribute to society through education.",
  },
  {
    name: "Harvard University",
    slug: "harvard-university",
    country: "USA",
    countryFlag: "US",
    location: "Cambridge, Massachusetts",
    ranking: "#3 World",
    image: "https://images.unsplash.com/photo-1584475784921-d9dbfd9d17ca?w=600&q=80",
    courses: ["BSc", "MSc", "PhD", "MBA", "JD"],
    tuitionFrom: "$54,768/year",
    students: "21,000+",
    acceptanceRate: "4%",
    founded: "1636",
    description: "The oldest institution of higher education in the United States, established in 1636.",
  },
  {
    name: "MIT",
    slug: "mit",
    country: "USA",
    countryFlag: "US",
    location: "Cambridge, Massachusetts",
    ranking: "#1 Engineering",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600&q=80",
    courses: ["BSc", "MSc", "PhD"],
    tuitionFrom: "$57,590/year",
    students: "11,500+",
    acceptanceRate: "7%",
    founded: "1861",
    description: "A world-class research university focused on science, technology, engineering, and mathematics.",
  },
  {
    name: "University of Toronto",
    slug: "university-of-toronto",
    country: "Canada",
    countryFlag: "CA",
    location: "Toronto, Ontario",
    ranking: "#21 World",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80",
    courses: ["BSc", "MSc", "PhD", "MBA"],
    tuitionFrom: "CAD 26,000/year",
    students: "97,000+",
    acceptanceRate: "43%",
    founded: "1827",
    description: "Canada's top university and one of the world's greatest research-intensive universities.",
  },
  {
    name: "UBC",
    slug: "ubc",
    country: "Canada",
    countryFlag: "CA",
    location: "Vancouver, British Columbia",
    ranking: "#34 World",
    image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=600&q=80",
    courses: ["BSc", "MSc", "PhD"],
    tuitionFrom: "CAD 23,000/year",
    students: "68,000+",
    acceptanceRate: "52%",
    founded: "1908",
    description: "A global centre for research and teaching on the traditional, ancestral, and unceded territory.",
  },
  {
    name: "University of Melbourne",
    slug: "university-of-melbourne",
    country: "Australia",
    countryFlag: "AU",
    location: "Melbourne, Victoria",
    ranking: "#14 World",
    image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=600&q=80",
    courses: ["BSc", "MSc", "PhD", "MBA"],
    tuitionFrom: "AUD 34,000/year",
    students: "52,000+",
    acceptanceRate: "70%",
    founded: "1853",
    description: "Australia's leading university and one of the world's top 20 universities.",
  },
  {
    name: "University of Sydney",
    slug: "university-of-sydney",
    country: "Australia",
    countryFlag: "AU",
    location: "Sydney, New South Wales",
    ranking: "#41 World",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80",
    courses: ["BSc", "MSc", "PhD"],
    tuitionFrom: "AUD 30,000/year",
    students: "74,000+",
    acceptanceRate: "31%",
    founded: "1850",
    description: "Australia's first university, globally renowned for research excellence and graduate outcomes.",
  },
  {
    name: "Imperial College London",
    slug: "imperial-college-london",
    country: "UK",
    countryFlag: "GB",
    location: "London, England",
    ranking: "#3 UK",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80",
    courses: ["BSc", "MSc", "PhD"],
    tuitionFrom: "£31,000/year",
    students: "20,000+",
    acceptanceRate: "14%",
    founded: "1907",
    description: "A world-top-ten university with an international reputation for excellence in science and engineering.",
  },
  {
    name: "Stanford University",
    slug: "stanford-university",
    country: "USA",
    countryFlag: "US",
    location: "Stanford, California",
    ranking: "#3 USA",
    image: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=600&q=80",
    courses: ["BSc", "MSc", "PhD", "MBA"],
    tuitionFrom: "$56,169/year",
    students: "17,000+",
    acceptanceRate: "4%",
    founded: "1885",
    description: "One of the world's leading research and teaching universities, located in Silicon Valley.",
  },
];

export default function UniversitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end pb-12 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"
          alt="Universities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            World-Class Education
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Top Universities Worldwide
          </h1>
          <p className="text-gray-300 text-lg">
            Browse {universities.length}+ partner universities across 4 countries
          </p>
        </div>
      </section>

      {/* Filter + Grid (Client Component) */}
      <UniversityFilters universities={universities} />

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Can't Find Your Dream University?</h2>
          <p className="text-red-100 mb-6">
            We work with 50+ partner universities. Contact us for a personalized recommendation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition inline-block"
          >
            Get Free Counseling
          </Link>
        </div>
      </section>
    </>
  );
}
