export type Event = {
  id: string;
  title: string;
  type: "Seminar" | "Webinar" | "Workshop" | "Open Day";
  date: string;
  day: string;
  month: string;
  year: string;
  time: string;
  location: string;
  isOnline: boolean;
  seats: number;
  seatsLeft: number;
  image: string;
  description: string;
  fullDescription: string;
  topics: string[];
  speakers: { name: string; title: string }[];
  typeColor: string;
  typeBg: string;
  badge?: string;
  flagCode?: string;
  featured?: boolean;
};

export const allEvents: Event[] = [
  {
    id: "uk-university-fair-2026",
    title: "UK University Fair 2026",
    type: "Seminar",
    date: "2026-03-25",
    day: "25",
    month: "MAR",
    year: "2026",
    time: "10:00 AM – 5:00 PM",
    location: "BIIC Global Office, Uttara, Dhaka",
    isOnline: false,
    seats: 150,
    seatsLeft: 42,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    description: "Meet representatives from 30+ UK universities. Get direct admission offers on the spot.",
    fullDescription:
      "Join us for the biggest UK University Fair of 2026 in Bangladesh. Over 30 leading UK universities will have representatives on-site to meet you in person, discuss your academic profile, and provide conditional admission letters on the spot. Whether you're planning for September 2026 or January 2027 intake, this is your chance to explore your options without any pressure. Our expert counselors will also be available to guide you on scholarships, IELTS requirements, and the UK student visa process.",
    topics: [
      "University shortlisting for your profile",
      "Admission requirements & deadlines",
      "Scholarship opportunities (up to 50% tuition waiver)",
      "UK Student Visa (CAS letter, IHS, biometrics)",
      "Cost of living & part-time work rules",
      "One-on-one counseling sessions",
    ],
    speakers: [
      { name: "Md. Rafiqul Islam", title: "Senior Education Counselor, BIIC Global" },
      { name: "Guest Representatives", title: "From 30+ UK Universities" },
    ],
    typeColor: "text-blue-700",
    typeBg: "bg-blue-100",
    badge: "UK",
    flagCode: "GB",
    featured: true,
  },
  {
    id: "canada-study-seminar-2026",
    title: "Canada Study Seminar",
    type: "Seminar",
    date: "2026-04-10",
    day: "10",
    month: "APR",
    year: "2026",
    time: "7:00 PM – 9:00 PM",
    location: "Online (Zoom)",
    isOnline: true,
    seats: 300,
    seatsLeft: 215,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    description: "Learn about Canadian student visa, scholarships and top universities with our experts.",
    fullDescription:
      "Canada remains one of the most sought-after study destinations for Bangladeshi students in 2026. This free online seminar covers everything you need to know — from choosing the right DLI (Designated Learning Institution) to surviving the SDS (Student Direct Stream) process. Our counselors have helped 500+ students get Canadian study permits and will share insider tips, real case studies, and the latest IRCC policy updates.",
    topics: [
      "Top Canadian universities & colleges",
      "SDS vs. Regular stream — which is right for you?",
      "Proof of funds requirements (2026 updated)",
      "Scholarship & co-op programs",
      "IELTS score requirements",
      "Q&A with past successful applicants",
    ],
    speakers: [
      { name: "Nusrat Fatema", title: "Canada Visa Specialist, BIIC Global" },
      { name: "Tanvir Ahmed", title: "MSc Student, University of Toronto (Alumni)" },
    ],
    typeColor: "text-red-700",
    typeBg: "bg-red-100",
    badge: "Canada",
    flagCode: "CA",
    featured: true,
  },
  {
    id: "ielts-strategy-workshop-2026",
    title: "IELTS Strategy Workshop",
    type: "Workshop",
    date: "2026-04-20",
    day: "20",
    month: "APR",
    year: "2026",
    time: "9:00 AM – 5:00 PM",
    location: "BIIC Global Office, Uttara, Dhaka",
    isOnline: false,
    seats: 40,
    seatsLeft: 12,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b6f57?w=1200&q=80",
    description: "Intensive 1-day IELTS preparation workshop. Target band 7+ with proven strategies.",
    fullDescription:
      "This intensive full-day IELTS Strategy Workshop is designed for students aiming for Band 7 or above. Our IELTS master trainers will break down every module — Listening, Reading, Writing, and Speaking — and share the exact techniques that our students use to consistently score 7+. Seats are extremely limited (40 max) to ensure personalized attention. Includes mock test, detailed feedback, and printed study materials.",
    topics: [
      "Listening: Skimming & prediction strategies",
      "Reading: Matching headings & True/False/NG",
      "Writing Task 1: Charts, graphs, maps",
      "Writing Task 2: Band 7 essay structure",
      "Speaking: Fluency & coherence techniques",
      "Full mock test + individual feedback",
    ],
    speakers: [
      { name: "Shahriar Hossain", title: "IELTS Band 9 Trainer, BIIC Global" },
      { name: "Tania Begum", title: "Academic Writing Specialist" },
    ],
    typeColor: "text-green-700",
    typeBg: "bg-green-100",
    badge: "📝 IELTS",
  },
  {
    id: "uk-university-fair-2025",
    title: "UK University Admission Fair 2025",
    type: "Seminar",
    date: "2025-04-12",
    day: "12",
    month: "APR",
    year: "2025",
    time: "10:00 AM – 4:00 PM",
    location: "BIIC Global Office, Uttara, Dhaka",
    isOnline: false,
    seats: 100,
    seatsLeft: 23,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    description:
      "Meet representatives from 20+ UK universities and get direct admission guidance from our expert counselors.",
    fullDescription:
      "The UK University Admission Fair 2025 brings together representatives from over 20 leading UK universities under one roof. This is a unique opportunity to explore undergraduate and postgraduate programs, understand admission criteria, and even receive conditional offer letters on the day. BIIC Global counselors will provide free one-on-one consultations throughout the event to help you build your ideal university shortlist.",
    topics: [
      "University shortlisting",
      "Admission requirements",
      "Scholarship opportunities",
      "Visa process overview",
    ],
    speakers: [
      { name: "Md. Rafiqul Islam", title: "Senior Education Counselor, BIIC Global" },
      { name: "UK University Representatives", title: "20+ Universities" },
    ],
    typeColor: "text-blue-700",
    typeBg: "bg-blue-100",
    badge: "UK",
    flagCode: "GB",
    featured: true,
  },
  {
    id: "canada-visa-webinar",
    title: "Canada Study Permit: Step by Step Guide",
    type: "Webinar",
    date: "2025-04-18",
    day: "18",
    month: "APR",
    year: "2025",
    time: "7:00 PM – 9:00 PM",
    location: "Online (Zoom)",
    isOnline: true,
    seats: 200,
    seatsLeft: 87,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    description:
      "A comprehensive webinar on how to apply for a Canadian Study Permit in 2025. Latest updates and case studies included.",
    fullDescription:
      "Navigating the Canadian Study Permit process can be daunting — but it doesn't have to be. This step-by-step webinar walks you through the entire application journey from selecting your DLI to receiving your permit. Our visa specialists will cover the latest 2025 IRCC updates, explain the SDS and regular streams, and walk through real approved cases. You'll also have a live Q&A session to get your specific questions answered.",
    topics: [
      "New immigration rules (2025 updates)",
      "Document checklist",
      "Proof of funds breakdown",
      "Common mistakes to avoid",
    ],
    speakers: [
      { name: "Nusrat Fatema", title: "Canada Visa Specialist, BIIC Global" },
    ],
    typeColor: "text-red-700",
    typeBg: "bg-red-100",
    badge: "Canada",
    flagCode: "CA",
    featured: true,
  },
  {
    id: "ielts-workshop-april",
    title: "Free IELTS Writing Workshop",
    type: "Workshop",
    date: "2025-04-25",
    day: "25",
    month: "APR",
    year: "2025",
    time: "2:00 PM – 5:00 PM",
    location: "BIIC Global Office, Uttara, Dhaka",
    isOnline: false,
    seats: 30,
    seatsLeft: 8,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b6f57?w=1200&q=80",
    description:
      "Hands-on writing workshop focusing on Task 1 (graphs/charts) and Task 2 (essays). Bring your writing samples!",
    fullDescription:
      "This hands-on IELTS Writing Workshop is focused entirely on the Writing module — the area where most students lose marks. Bring your own writing samples and our expert trainer will review them live in class. You'll learn exactly what IELTS examiners look for in a Band 7+ response and how to structure your Task 1 and Task 2 answers effectively. Seats are limited to 30 for maximum interaction.",
    topics: [
      "Task 1: Charts & Graphs",
      "Task 2: Essay writing",
      "Band 7 writing techniques",
      "Common errors fixed",
    ],
    speakers: [
      { name: "Shahriar Hossain", title: "IELTS Writing Specialist, BIIC Global" },
    ],
    typeColor: "text-green-700",
    typeBg: "bg-green-100",
    badge: "📝 IELTS",
  },
  {
    id: "australia-open-day",
    title: "Australia Open Day 2025",
    type: "Open Day",
    date: "2025-05-03",
    day: "03",
    month: "MAY",
    year: "2025",
    time: "11:00 AM – 3:00 PM",
    location: "BIIC Global Office, Uttara, Dhaka",
    isOnline: false,
    seats: 60,
    seatsLeft: 41,
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80",
    description:
      "Explore study opportunities in Australia. University reps from Melbourne, Monash, Sydney and more will be present.",
    fullDescription:
      "Australia is one of the top 3 study destinations for Bangladeshi students, and this Open Day is your chance to explore it fully. Representatives from the University of Melbourne, Monash University, University of Sydney, and several other top Australian institutions will be present. Walk in, talk to them directly about your academic background, and leave with a clear roadmap. Our counselors will also explain the Australian Student Visa (subclass 500) process.",
    topics: [
      "University presentations",
      "One-on-one counseling",
      "Scholarship info",
      "Student visa overview",
    ],
    speakers: [
      { name: "Farhan Kabir", title: "Australia Specialist, BIIC Global" },
      { name: "Australian University Representatives", title: "Melbourne, Monash, Sydney & more" },
    ],
    typeColor: "text-yellow-700",
    typeBg: "bg-yellow-100",
    badge: "Australia",
    flagCode: "AU",
  },
  {
    id: "scholarship-masterclass",
    title: "Scholarship Hunting Masterclass",
    type: "Webinar",
    date: "2025-05-10",
    day: "10",
    month: "MAY",
    year: "2025",
    time: "6:00 PM – 8:00 PM",
    location: "Online (Google Meet)",
    isOnline: true,
    seats: 150,
    seatsLeft: 112,
    image: "https://images.unsplash.com/photo-1459499362902-55a20553e082?w=1200&q=80",
    description:
      "Learn how to find, apply, and win scholarships for UK, USA, Canada, and Australia. Real success stories shared.",
    fullDescription:
      "Thousands of dollars in scholarship money go unclaimed every year because students don't know where to look or how to apply. In this Masterclass, our scholarship experts will walk you through a proven system for finding and winning scholarships for UK, USA, Canada, and Australia. Real BIIC students who won Chevening, Commonwealth, and university-specific scholarships will share their personal stories and tips.",
    topics: [
      "Finding scholarships online",
      "Writing winning personal statements",
      "Chevening, Fulbright & Commonwealth",
      "Q&A with past scholars",
    ],
    speakers: [
      { name: "Tania Begum", title: "Scholarship Advisor, BIIC Global" },
      { name: "BIIC Alumni Scholars", title: "Chevening & Commonwealth Recipients" },
    ],
    typeColor: "text-purple-700",
    typeBg: "bg-purple-100",
    badge: "Scholarships",
  },
  {
    id: "usa-f1-visa-seminar",
    title: "USA F-1 Visa Interview Preparation",
    type: "Workshop",
    date: "2025-05-17",
    day: "17",
    month: "MAY",
    year: "2025",
    time: "3:00 PM – 6:00 PM",
    location: "BIIC Global Office, Uttara, Dhaka",
    isOnline: false,
    seats: 25,
    seatsLeft: 15,
    image: "https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?w=1200&q=80",
    description:
      "Mock interview sessions for US F-1 visa with real embassy-style questions. Get feedback from our visa experts.",
    fullDescription:
      "The US F-1 visa interview is one of the most nerve-wracking parts of studying in America — but preparation is everything. In this workshop, our visa experts will conduct mock interview sessions using real embassy-style questions. You'll receive individualized feedback on your answers, body language, and document presentation. With only 25 seats available, every participant gets personal attention.",
    topics: [
      "Common F-1 interview questions",
      "Mock interview practice",
      "Documents to bring on interview day",
      "Handling rejections & reapplication",
    ],
    speakers: [
      { name: "Md. Rafiqul Islam", title: "USA Visa Expert, BIIC Global" },
    ],
    typeColor: "text-red-700",
    typeBg: "bg-red-100",
    badge: "USA",
    flagCode: "US",
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return allEvents.find((e) => e.id === slug);
}

export const upcomingEvents = allEvents.filter(
  (e) => new Date(e.date) >= new Date("2026-03-25")
);

export const pastEvents2025 = [
  { title: "UK University Fair March 2025", date: "March 15, 2025", attendees: 120, type: "Seminar" },
  { title: "IELTS Speaking Bootcamp", date: "March 8, 2025", attendees: 28, type: "Workshop" },
  { title: "Canada Immigration Webinar", date: "February 22, 2025", attendees: 180, type: "Webinar" },
  { title: "Australia Open Day", date: "February 10, 2025", attendees: 85, type: "Open Day" },
  { title: "Scholarship Application Workshop", date: "January 25, 2025", attendees: 45, type: "Workshop" },
  { title: "Study Abroad Orientation 2025", date: "January 11, 2025", attendees: 200, type: "Seminar" },
];
