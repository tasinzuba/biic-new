import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

const countryData: Record<string, any> = {
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80",
    heroOverlay: "from-blue-900/80 via-blue-800/60 to-transparent",
    accentColor: "red",
    subtitle: "World-class education in one of the most historic countries",
    description:
      "The United Kingdom is home to some of the world's oldest and most prestigious universities. With a rich academic tradition dating back centuries, the UK offers an unparalleled educational experience combined with a vibrant multicultural environment.",
    stats: [
      { number: "130+", label: "Universities", icon: "🏛️" },
      { number: "500K+", label: "Intl. Students", icon: "👩‍🎓" },
      { number: "#2", label: "World Ranking", icon: "🏆" },
      { number: "1-2 yrs", label: "Masters Duration", icon: "📅" },
    ],
    whyStudy: [
      { icon: "🎓", title: "World-Ranked Universities", desc: "Home to Oxford, Cambridge and Imperial — consistently top-ranked globally." },
      { icon: "⏱️", title: "Shorter Duration", desc: "UK Masters takes only 1 year — saving time and money vs other countries." },
      { icon: "💼", title: "Post-Study Work Visa", desc: "Graduate Route allows 2 years stay after graduation to work or find work." },
      { icon: "🌍", title: "Multicultural Society", desc: "Diverse and welcoming environment with students from 200+ countries." },
    ],
    requirements: {
      ielts: "6.0 - 7.0",
      gpa: "3.0+",
      documents: ["Valid Passport", "Academic Transcripts", "Statement of Purpose (SOP)", "2 Letters of Recommendation", "Updated CV/Resume", "Proof of Funds"],
    },
    costOfLiving: {
      accommodation: "£600 - £1,200/month",
      food: "£200 - £400/month",
      transport: "£100 - £150/month",
      total: "£1,000 - £1,800/month",
    },
    tuitionRange: "£10,000 - £38,000/year",
    topUniversities: [
      { name: "University of Oxford", ranking: "#1", location: "Oxford", image: "https://images.unsplash.com/photo-1600428853876-fb6702f38b92?w=400&q=80" },
      { name: "University of Cambridge", ranking: "#2", location: "Cambridge", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&q=80" },
      { name: "Imperial College London", ranking: "#3", location: "London", image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&q=80" },
      { name: "UCL", ranking: "#4", location: "London", image: "https://images.unsplash.com/photo-1584475784921-d9dbfd9d17ca?w=400&q=80" },
      { name: "University of Edinburgh", ranking: "#15", location: "Edinburgh", image: "https://images.unsplash.com/photo-1590002892736-0b8b958d427b?w=400&q=80" },
      { name: "University of Manchester", ranking: "#32", location: "Manchester", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400&q=80" },
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=600&q=80", label: "London" },
      { image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80", label: "Campus Life" },
      { image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&q=80", label: "Student Life" },
      { image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600&q=80", label: "City Life" },
    ],
    faq: [
      { q: "Can I work while studying in UK?", a: "Yes, international students can work up to 20 hours per week during term time and full-time during holidays." },
      { q: "Is IELTS mandatory for UK?", a: "Most universities require IELTS 6.0-7.0. Some accept alternatives like PTE or TOEFL." },
      { q: "What is the Graduate Route visa?", a: "After graduation, you can stay in the UK for 2 years (3 for PhD) to work or look for work." },
      { q: "What is the cost of studying in UK?", a: "Tuition fees range from £10,000 to £38,000 per year. Living costs are around £1,000-£1,800/month." },
    ],
    intakes: [
      {
        name: "September Intake",
        badge: "Main Intake",
        badgeColor: "bg-green-500",
        icon: "🍂",
        startDate: "September 2025",
        applicationDeadline: "June 30, 2025",
        visaDeadline: "July 31, 2025",
        status: "open",
        statusLabel: "Applications Open",
        note: "Most popular intake. Highest number of courses available.",
        courses: ["BSc", "MSc", "MBA", "PhD", "Foundation"],
      },
      {
        name: "January Intake",
        badge: "Winter Intake",
        badgeColor: "bg-blue-500",
        icon: "❄️",
        startDate: "January 2026",
        applicationDeadline: "October 31, 2025",
        visaDeadline: "November 30, 2025",
        status: "upcoming",
        statusLabel: "Coming Soon",
        note: "Limited courses available. Good alternative if you missed September.",
        courses: ["MSc", "MBA", "Foundation"],
      },
      {
        name: "May Intake",
        badge: "Summer Intake",
        badgeColor: "bg-orange-500",
        icon: "🌸",
        startDate: "May 2026",
        applicationDeadline: "February 28, 2026",
        visaDeadline: "March 31, 2026",
        status: "upcoming",
        statusLabel: "Planning Ahead",
        note: "Very limited universities offer May intake. Mostly foundation programs.",
        courses: ["Foundation", "Pre-sessional English"],
      },
    ],
    successStories: [
      {
        name: "Rahim Uddin",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
        university: "University of Manchester",
        course: "MSc Data Science",
        year: "2024",
        flag: "🇬🇧",
        story: "BIIC helped me get into Manchester with a partial scholarship. The visa process was smooth and stress-free. Now I am working in London as a Data Analyst!",
        rating: 5,
      },
      {
        name: "Tasnim Akter",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
        university: "University of Edinburgh",
        course: "MSc International Business",
        year: "2024",
        flag: "🇬🇧",
        story: "I had no idea where to start. BIIC guided me through every step — from shortlisting universities to getting my CAS. Highly recommended!",
        rating: 5,
      },
      {
        name: "Arif Hossain",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        university: "UCL",
        course: "MSc Computer Science",
        year: "2023",
        flag: "🇬🇧",
        story: "Got into UCL which was my dream university. The SOP writing support from BIIC was exceptional. I could not have done it without their help.",
        rating: 5,
      },
    ],
  },
  usa: {
    name: "United States",
    flag: "🇺🇸",
    heroImage: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1600&q=80",
    heroOverlay: "from-blue-900/80 via-blue-700/60 to-transparent",
    accentColor: "blue",
    subtitle: "Home to the world's top-ranked universities and research centers",
    description:
      "The United States hosts the largest number of international students in the world. With over 4,000 accredited universities and a culture of innovation, the USA offers unmatched academic diversity and career opportunities.",
    stats: [
      { number: "4000+", label: "Universities", icon: "🏛️" },
      { number: "1M+", label: "Intl. Students", icon: "👩‍🎓" },
      { number: "#1", label: "World Ranking", icon: "🏆" },
      { number: "2 yrs", label: "Masters Duration", icon: "📅" },
    ],
    whyStudy: [
      { icon: "🔬", title: "Research Excellence", desc: "USA leads global research with cutting-edge labs and innovation hubs." },
      { icon: "💡", title: "Flexible Programs", desc: "Wide range of majors and the ability to change your major easily." },
      { icon: "💼", title: "OPT Work Program", desc: "Work in the USA for 12 months post-graduation, 36 months for STEM." },
      { icon: "🤝", title: "Global Network", desc: "Build a powerful professional network with students from every country." },
    ],
    requirements: {
      ielts: "6.5 - 7.5",
      gpa: "3.0+",
      documents: ["Valid Passport", "Academic Transcripts", "Statement of Purpose", "3 Letters of Recommendation", "GRE/GMAT Score", "Updated CV/Resume", "Proof of Funds"],
    },
    costOfLiving: {
      accommodation: "$800 - $1,500/month",
      food: "$300 - $500/month",
      transport: "$100 - $200/month",
      total: "$1,200 - $2,200/month",
    },
    tuitionRange: "$20,000 - $60,000/year",
    topUniversities: [
      { name: "MIT", ranking: "#1", location: "Cambridge, MA", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&q=80" },
      { name: "Harvard University", ranking: "#2", location: "Cambridge, MA", image: "https://images.unsplash.com/photo-1584475784921-d9dbfd9d17ca?w=400&q=80" },
      { name: "Stanford University", ranking: "#3", location: "Stanford, CA", image: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=400&q=80" },
      { name: "Caltech", ranking: "#4", location: "Pasadena, CA", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80" },
      { name: "University of Chicago", ranking: "#10", location: "Chicago, IL", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400&q=80" },
      { name: "Columbia University", ranking: "#12", location: "New York, NY", image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=400&q=80" },
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80", label: "New York" },
      { image: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=600&q=80", label: "Campus Life" },
      { image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80", label: "Student Life" },
      { image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600&q=80", label: "Research" },
    ],
    faq: [
      { q: "Do I need GRE for USA?", a: "Many universities have waived GRE requirements. Check individual university websites for details." },
      { q: "Can I work in USA after study?", a: "Yes, through OPT (Optional Practical Training) for 12 months, extendable to 3 years for STEM graduates." },
      { q: "Is USA expensive for students?", a: "Costs vary by state and university. Scholarships and assistantships can significantly reduce costs." },
    ],
    intakes: [
      {
        name: "Fall Intake",
        badge: "Main Intake",
        badgeColor: "bg-green-500",
        icon: "🍁",
        startDate: "August / September 2025",
        applicationDeadline: "December 15, 2024",
        visaDeadline: "June 30, 2025",
        status: "open",
        statusLabel: "Applications Open",
        note: "Primary intake for most US universities. Largest selection of programs.",
        courses: ["BSc", "MSc", "MBA", "PhD"],
      },
      {
        name: "Spring Intake",
        badge: "Secondary Intake",
        badgeColor: "bg-blue-500",
        icon: "🌱",
        startDate: "January 2026",
        applicationDeadline: "September 1, 2025",
        visaDeadline: "November 30, 2025",
        status: "upcoming",
        statusLabel: "Coming Soon",
        note: "Not all universities offer Spring intake. Good option for late applicants.",
        courses: ["MSc", "MBA"],
      },
    ],
    successStories: [
      {
        name: "Sakib Rahman",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
        university: "Columbia University",
        course: "MS Computer Science",
        year: "2024",
        flag: "🇺🇸",
        story: "Getting into Columbia was beyond my imagination. BIIC's team helped me craft a perfect application. Now studying in New York — a dream come true!",
        rating: 5,
      },
      {
        name: "Nadia Islam",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
        university: "University of Texas",
        course: "MBA",
        year: "2023",
        flag: "🇺🇸",
        story: "BIIC handled my F-1 visa application perfectly. Their knowledge of US admissions process is outstanding. Got a 50% scholarship too!",
        rating: 5,
      },
    ],
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    heroImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=80",
    heroOverlay: "from-red-900/80 via-red-700/60 to-transparent",
    accentColor: "red",
    subtitle: "A top destination for quality education and post-study immigration",
    description: "Canada is one of the most welcoming countries for international students with clear immigration pathways, affordable education, and exceptional quality of life.",
    stats: [
      { number: "100+", label: "Universities", icon: "🏛️" },
      { number: "800K+", label: "Intl. Students", icon: "👩‍🎓" },
      { number: "Top 10", label: "World Ranking", icon: "🏆" },
      { number: "2 yrs", label: "Masters Duration", icon: "📅" },
    ],
    whyStudy: [
      { icon: "🛂", title: "Easy Immigration", desc: "Canada offers clear PR pathways through Express Entry and PNP programs." },
      { icon: "💰", title: "Affordable Tuition", desc: "Lower tuition fees compared to USA and UK with similar quality education." },
      { icon: "💼", title: "3-Year Work Permit", desc: "PGWP allows you to work in Canada for up to 3 years after graduation." },
      { icon: "🌲", title: "Quality of Life", desc: "Ranked among the best countries in the world for quality of life and safety." },
    ],
    requirements: {
      ielts: "6.0 - 6.5",
      gpa: "3.0+",
      documents: ["Valid Passport", "Academic Transcripts", "SOP", "2 Letters of Recommendation", "CV/Resume", "Proof of Funds"],
    },
    costOfLiving: {
      accommodation: "CAD 700 - 1,500/month",
      food: "CAD 300 - 500/month",
      transport: "CAD 100 - 150/month",
      total: "CAD 1,100 - 2,200/month",
    },
    tuitionRange: "CAD 15,000 - 35,000/year",
    topUniversities: [
      { name: "University of Toronto", ranking: "#21", location: "Toronto, ON", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&q=80" },
      { name: "UBC", ranking: "#34", location: "Vancouver, BC", image: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=400&q=80" },
      { name: "McGill University", ranking: "#46", location: "Montreal, QC", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80" },
      { name: "University of Alberta", ranking: "#111", location: "Edmonton, AB", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&q=80" },
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80", label: "Toronto" },
      { image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=600&q=80", label: "Vancouver" },
      { image: "https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=600&q=80", label: "Campus" },
      { image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&q=80", label: "City Life" },
    ],
    faq: [
      { q: "Can I get PR after studying in Canada?", a: "Yes, Canada has multiple pathways like Express Entry and PNP specifically for international graduates." },
      { q: "How long is the Post-Graduation Work Permit?", a: "PGWP duration equals your study duration, up to a maximum of 3 years." },
    ],
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80",
    heroOverlay: "from-yellow-900/80 via-yellow-700/60 to-transparent",
    accentColor: "yellow",
    subtitle: "Sun, surf, and world-class education await you Down Under",
    description: "Australia offers a unique combination of high-quality education, beautiful lifestyle, and excellent post-study work opportunities in a safe and multicultural society.",
    stats: [
      { number: "40+", label: "Universities", icon: "🏛️" },
      { number: "700K+", label: "Intl. Students", icon: "👩‍🎓" },
      { number: "Top 20", label: "World Ranking", icon: "🏆" },
      { number: "1.5-2 yrs", label: "Masters Duration", icon: "📅" },
    ],
    whyStudy: [
      { icon: "☀️", title: "Amazing Lifestyle", desc: "Beautiful beaches, great weather and an outdoor culture like no other." },
      { icon: "🔬", title: "Research Focused", desc: "Australia excels in research, with 7 universities in the global top 100." },
      { icon: "💼", title: "Post-Study Work", desc: "Work visa available for 2-4 years depending on study location." },
      { icon: "🦺", title: "Safe Country", desc: "Consistently ranked as one of the safest countries in the world." },
    ],
    requirements: {
      ielts: "6.0 - 7.0",
      gpa: "3.0+",
      documents: ["Valid Passport", "Academic Transcripts", "SOP", "2 Letters of Recommendation", "CV/Resume", "Health Insurance (OSHC)", "Proof of Funds"],
    },
    costOfLiving: {
      accommodation: "AUD 800 - 1,500/month",
      food: "AUD 300 - 500/month",
      transport: "AUD 150 - 200/month",
      total: "AUD 1,250 - 2,200/month",
    },
    tuitionRange: "AUD 20,000 - 45,000/year",
    topUniversities: [
      { name: "University of Melbourne", ranking: "#14", location: "Melbourne", image: "https://images.unsplash.com/photo-1600428853876-fb6702f38b92?w=400&q=80" },
      { name: "Australian National Uni.", ranking: "#30", location: "Canberra", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80" },
      { name: "University of Sydney", ranking: "#41", location: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80" },
      { name: "University of Queensland", ranking: "#47", location: "Brisbane", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&q=80" },
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80", label: "Sydney" },
      { image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=600&q=80", label: "Melbourne" },
      { image: "https://images.unsplash.com/photo-1565684730867-6e3c59e95e86?w=600&q=80", label: "Campus" },
      { image: "https://images.unsplash.com/photo-1524293568345-75d62c3664f7?w=600&q=80", label: "Student Life" },
    ],
    faq: [
      { q: "Can I work while studying in Australia?", a: "Yes, student visa holders can work up to 48 hours per fortnight during the semester." },
      { q: "Is Australia good for permanent residency?", a: "Yes, Australia has several skilled migration pathways for international graduates." },
    ],
  },
};

const defaultCountry = {
  name: "This Country",
  flag: "🌍",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80",
  heroOverlay: "from-gray-900/80 via-gray-700/60 to-transparent",
  accentColor: "blue",
  subtitle: "Explore exciting study opportunities abroad",
  description: "Discover world-class education opportunities in this amazing destination.",
  stats: [],
  whyStudy: [],
  requirements: { ielts: "6.0+", gpa: "3.0+", documents: [] },
  costOfLiving: { accommodation: "-", food: "-", transport: "-", total: "-" },
  tuitionRange: "Contact us for details",
  topUniversities: [],
  gallery: [],
  faq: [],
  intakes: [],
  successStories: [],
};

type Props = { params: Promise<{ country: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const data = countryData[country] || defaultCountry;
  return {
    title: `Study in ${data.name}`,
    description: data.subtitle,
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const data = countryData[country] || { ...defaultCountry, name: country.toUpperCase() };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[85vh] min-h-[560px] flex items-center">
        <Image
          src={data.heroImage}
          alt={`Study in ${data.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${data.heroOverlay}`} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{data.flag}</span>
              <span className="bg-white/20 backdrop-blur text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/30">
                Study Destination
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 leading-tight">
              Study in<br />{data.name}
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">{data.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg"
              >
                Free Consultation
              </Link>
              <Link
                href="/universities"
                className="bg-white/15 hover:bg-white/25 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                View Universities
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-center">
          <div className="animate-bounce text-2xl">↓</div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      {data.stats.length > 0 && (
        <section className="bg-red-600 text-white py-6">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.stats.map((s: any) => (
              <div key={s.label} className="text-center py-2">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-3xl font-bold">{s.number}</div>
                <div className="text-red-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── OVERVIEW ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Overview</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-5">
              Why Study in {data.name}?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{data.description}</p>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border">
              <div className="text-3xl">💰</div>
              <div>
                <div className="text-sm text-gray-500">Tuition Fee Range</div>
                <div className="font-bold text-gray-800 text-lg">{data.tuitionRange}</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data.whyStudy.map((item: any) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      {data.gallery.length > 0 && (
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data.gallery.map((g: any, i: number) => (
                <div key={i} className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 row-span-2 h-72 md:h-80" : "h-36 md:h-[calc(160px)]"}`}>
                  <Image
                    src={g.image}
                    alt={g.label}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    {g.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TOP UNIVERSITIES ── */}
      {data.topUniversities.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Top Picks</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Top Universities in {data.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.topUniversities.map((uni: any) => (
                <Link
                  key={uni.name}
                  href={`/universities/${uni.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={uni.image}
                      alt={uni.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {uni.ranking}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition">
                      {uni.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                      <span>📍</span> {uni.location}
                    </p>
                    <div className="mt-3 text-red-600 text-sm font-semibold group-hover:underline">
                      View Details →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── REQUIREMENTS + COST ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">What You Need</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Requirements & Costs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">📋</div>
                <h3 className="text-2xl font-bold text-gray-800">Admission Requirements</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="text-gray-600 font-medium">IELTS Score</span>
                  <span className="font-bold text-blue-700 text-lg">{data.requirements.ielts}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="text-gray-600 font-medium">Minimum GPA</span>
                  <span className="font-bold text-blue-700 text-lg">{data.requirements.gpa}</span>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-3">Required Documents:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {data.requirements.documents.map((doc: string) => (
                      <div key={doc} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</span>
                        <span className="text-gray-700 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cost of Living */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">💸</div>
                <h3 className="text-2xl font-bold text-gray-800">Cost of Living</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "🏠 Accommodation", value: data.costOfLiving.accommodation, color: "bg-orange-50" },
                  { label: "🍔 Food", value: data.costOfLiving.food, color: "bg-yellow-50" },
                  { label: "🚌 Transport", value: data.costOfLiving.transport, color: "bg-green-50" },
                ].map((item) => (
                  <div key={item.label} className={`flex justify-between items-center p-4 ${item.color} rounded-xl`}>
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="font-bold text-gray-800">{item.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center p-4 bg-red-600 rounded-xl mt-4">
                  <span className="text-white font-bold text-lg">Total Estimate</span>
                  <span className="text-white font-bold text-lg">{data.costOfLiving.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTAKE SECTION ── */}
      {data.intakes?.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Application Timeline</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Intakes for {data.name}</h2>
              <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                Choose the right intake for your study plan. Apply early to secure your seat.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.intakes.map((intake: any, i: number) => (
                <div
                  key={i}
                  className={`bg-white rounded-3xl overflow-hidden shadow-sm border-2 transition hover:shadow-xl ${
                    intake.status === "open" ? "border-green-400" : "border-gray-100"
                  }`}
                >
                  {/* Top color bar */}
                  <div className={`${intake.badgeColor} px-6 py-4 flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{intake.icon}</span>
                      <span className="text-white font-bold text-lg">{intake.name}</span>
                    </div>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {intake.badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Status badge */}
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${intake.status === "open" ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
                      <span className={`text-sm font-semibold ${intake.status === "open" ? "text-green-600" : "text-gray-500"}`}>
                        {intake.statusLabel}
                      </span>
                    </div>

                    {/* Dates */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <span className="text-gray-500 text-sm">🗓️ Start Date</span>
                        <span className="font-bold text-gray-800 text-sm">{intake.startDate}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                        <span className="text-gray-500 text-sm">📝 Apply By</span>
                        <span className="font-bold text-red-600 text-sm">{intake.applicationDeadline}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl">
                        <span className="text-gray-500 text-sm">🛂 Visa By</span>
                        <span className="font-bold text-orange-600 text-sm">{intake.visaDeadline}</span>
                      </div>
                    </div>

                    {/* Available courses */}
                    <div>
                      <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">Available Programs</p>
                      <div className="flex flex-wrap gap-2">
                        {intake.courses.map((c: string) => (
                          <span key={c} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Note */}
                    <p className="text-gray-500 text-sm border-t pt-4 leading-relaxed">{intake.note}</p>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`block text-center py-3 rounded-xl font-bold text-sm transition ${
                        intake.status === "open"
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {intake.status === "open" ? "Apply for This Intake →" : "Get Notified →"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Warning note */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-bold text-yellow-800">Apply Early!</p>
                <p className="text-yellow-700 text-sm mt-1">
                  University seats fill up fast. We recommend applying at least 4-6 months before the intake deadline. Contact us today to start your application.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SUCCESS STORIES ── */}
      {data.successStories?.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Real Students, Real Results</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Our Success Stories
              </h2>
              <p className="text-gray-500 mt-2">Students we helped get into {data.name}</p>
            </div>

            {/* Big stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { number: "500+", label: `Students in ${data.name}`, icon: "🎓" },
                { number: "98%", label: "Visa Success Rate", icon: "✈️" },
                { number: "4.9★", label: "Average Rating", icon: "⭐" },
              ].map((s) => (
                <div key={s.label} className="text-center bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-5 border border-red-100">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="text-3xl font-bold text-red-600">{s.number}</div>
                  <div className="text-gray-600 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.successStories.map((story: any, i: number) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition relative overflow-hidden">
                  {/* Quote mark */}
                  <div className="absolute top-4 right-5 text-7xl text-red-100 font-serif leading-none select-none">"</div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: story.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  {/* Story */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-6 relative z-10">
                    "{story.story}"
                  </p>

                  {/* Student info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={story.photo}
                        alt={story.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-800 text-sm">{story.name}</div>
                      <div className="text-red-600 text-xs font-semibold truncate">{story.university}</div>
                      <div className="text-gray-400 text-xs">{story.course} · {story.year}</div>
                    </div>
                    <span className="text-2xl">{story.flag}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* View more CTA */}
            <div className="text-center mt-8">
              <Link
                href="/success-stories"
                className="inline-flex items-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-xl font-bold transition"
              >
                View All Success Stories →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {data.faq.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {data.faq.map((item: any, i: number) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="flex items-start gap-4 p-6">
                    <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">{item.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <Image
          src={data.heroImage}
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-red-700/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Study in {data.name}?
          </h2>
          <p className="text-red-100 text-xl mb-8">
            Talk to our expert counselors — 100% free consultation, no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition text-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/universities"
              className="border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition text-lg"
            >
              Browse Universities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
