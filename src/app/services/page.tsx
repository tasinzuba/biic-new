import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive study abroad services: university admission, visa assistance, IELTS prep, scholarships and more.",
};

export const services = [
  {
    slug: "university-admission",
    icon: "🎓",
    iconBg: "bg-blue-100",
    title: "University Admission",
    tagline: "Get into your dream university",
    description:
      "From shortlisting the right university to submitting a flawless application — our experts handle every step. We have helped 5,000+ students secure offers from top universities worldwide.",
    features: [
      "Personalized university shortlisting based on your profile",
      "SOP writing and editing by expert counselors",
      "Application review and submission support",
      "Interview preparation for competitive programs",
      "Document checklist and verification",
      "Follow-up with universities on your behalf",
    ],
    steps: [
      { num: "01", title: "Profile Assessment", desc: "We evaluate your academic background, IELTS score, and career goals." },
      { num: "02", title: "University Shortlisting", desc: "We identify the best universities that match your profile and ambitions." },
      { num: "03", title: "Document Preparation", desc: "We help craft a compelling SOP and gather all required documents." },
      { num: "04", title: "Application Submission", desc: "We submit your applications and track deadlines meticulously." },
      { num: "05", title: "Offer Management", desc: "We help you evaluate and accept the best offer you receive." },
    ],
    stats: { students: "5,000+", successRate: "95%", partners: "50+" },
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    color: "from-blue-600 to-blue-700",
    borderColor: "border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    slug: "visa-assistance",
    icon: "✈️",
    iconBg: "bg-red-100",
    title: "Visa Assistance",
    tagline: "98% visa approval rate",
    description:
      "Navigating student visa applications can be stressful. Our visa experts have an industry-leading 98% success rate for UK, USA, Canada, and Australia visas.",
    features: [
      "Expert guidance on visa requirements per country",
      "Financial document review and fund sufficiency check",
      "Complete visa application form preparation",
      "Biometrics appointment scheduling",
      "Visa interview coaching for US F-1 visa",
      "CAS and COE assistance for UK and Australia",
    ],
    steps: [
      { num: "01", title: "Visa Eligibility Check", desc: "We assess your profile to determine visa eligibility and requirements." },
      { num: "02", title: "Document Preparation", desc: "We prepare and review all required financial and personal documents." },
      { num: "03", title: "Application Filing", desc: "We complete and submit the visa application accurately." },
      { num: "04", title: "Interview Prep", desc: "For US visas, we conduct mock interview sessions." },
      { num: "05", title: "Visa Collection", desc: "We guide you through the final steps of visa collection." },
    ],
    stats: { students: "3,000+", successRate: "98%", partners: "40+" },
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    color: "from-red-600 to-red-700",
    borderColor: "border-red-200",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    slug: "ielts-preparation",
    icon: "📝",
    iconBg: "bg-green-100",
    title: "IELTS Preparation",
    tagline: "Expert coaching for Band 7+",
    description:
      "Our professional IELTS coaching program is designed to help students achieve their target band score. With small batch sizes and experienced trainers, we ensure maximum improvement.",
    features: [
      "Expert trainers with proven track records",
      "Small batches for personalized attention",
      "Complete coverage of all 4 modules",
      "Weekly mock tests with detailed feedback",
      "Speaking practice with native-style sessions",
      "Writing task correction and model answers",
    ],
    steps: [
      { num: "01", title: "Diagnostic Test", desc: "We assess your current level with a free diagnostic test." },
      { num: "02", title: "Customized Plan", desc: "We create a study plan based on your weak areas and target score." },
      { num: "03", title: "Coaching Classes", desc: "Regular classes covering all 4 modules: Listening, Reading, Writing, Speaking." },
      { num: "04", title: "Mock Tests", desc: "Weekly full-length mock tests under exam conditions." },
      { num: "05", title: "Exam Registration", desc: "We help you register for the actual IELTS exam at the right time." },
    ],
    stats: { students: "2,000+", successRate: "90%", partners: "20+" },
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b6f57?w=800&q=80",
    color: "from-green-600 to-green-700",
    borderColor: "border-green-200",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    slug: "scholarship",
    icon: "💰",
    iconBg: "bg-yellow-100",
    title: "Scholarship Guidance",
    tagline: "Find funding for your education",
    description:
      "Don't let finances stop your dream. We identify and help you apply for scholarships, grants, and funding opportunities that match your academic profile.",
    features: [
      "Comprehensive scholarship database by country",
      "Profile matching with scholarship eligibility",
      "Scholarship essay and SOP assistance",
      "Application deadline tracking",
      "Government and university scholarship guidance",
      "Fellowship and bursary identification",
    ],
    steps: [
      { num: "01", title: "Profile Review", desc: "We evaluate your academic achievements, extracurriculars, and financial need." },
      { num: "02", title: "Scholarship Matching", desc: "We identify scholarships that best match your profile and goals." },
      { num: "03", title: "Essay Writing", desc: "We help craft compelling scholarship essays and personal statements." },
      { num: "04", title: "Application Support", desc: "We guide you through the complete scholarship application process." },
      { num: "05", title: "Follow-up", desc: "We track application status and help with any additional requirements." },
    ],
    stats: { students: "800+", successRate: "70%", partners: "30+" },
    image: "https://images.unsplash.com/photo-1459499362902-55a20553e082?w=800&q=80",
    color: "from-yellow-500 to-yellow-600",
    borderColor: "border-yellow-200",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    slug: "accommodation",
    icon: "🏠",
    iconBg: "bg-purple-100",
    title: "Accommodation Help",
    tagline: "Find your home away from home",
    description:
      "Finding safe and affordable accommodation in a foreign country is daunting. Our accommodation service connects you with verified housing options near your university.",
    features: [
      "University dormitory application assistance",
      "Private student accommodation options",
      "Homestay placement with verified families",
      "Budget-based accommodation matching",
      "Pre-arrival accommodation booking",
      "Airport pickup and settling-in support",
    ],
    steps: [
      { num: "01", title: "Requirement Assessment", desc: "We understand your budget, location preference, and lifestyle needs." },
      { num: "02", title: "Options Shortlisting", desc: "We shortlist verified accommodation options near your university." },
      { num: "03", title: "Booking Assistance", desc: "We help you book and confirm your accommodation remotely." },
      { num: "04", title: "Move-In Support", desc: "We provide checklists and guidance for your first weeks abroad." },
    ],
    stats: { students: "1,500+", successRate: "99%", partners: "25+" },
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
    color: "from-purple-600 to-purple-700",
    borderColor: "border-purple-200",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    slug: "pre-departure",
    icon: "🗺️",
    iconBg: "bg-orange-100",
    title: "Pre-Departure Briefing",
    tagline: "Be fully prepared before you fly",
    description:
      "Going abroad for the first time is exciting but can be overwhelming. Our pre-departure program ensures you are fully informed and confident before boarding your flight.",
    features: [
      "Cultural orientation and adaptation tips",
      "Banking and financial setup guidance",
      "Health insurance and NHS registration guide",
      "Travel packing checklist by country",
      "Community connections with senior students",
      "Emergency contact and support network setup",
    ],
    steps: [
      { num: "01", title: "Briefing Session", desc: "Attend our comprehensive pre-departure workshop covering everything you need." },
      { num: "02", title: "Documentation Checklist", desc: "Review and verify all documents you need to carry." },
      { num: "03", title: "Financial Preparation", desc: "Guidance on opening international bank accounts and currency exchange." },
      { num: "04", title: "Departure Support", desc: "We are available to answer questions right up until your flight." },
    ],
    stats: { students: "5,000+", successRate: "100%", partners: "15+" },
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-orange-200",
    tagColor: "bg-orange-100 text-orange-700",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-24 px-4">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
            alt="Services"
            fill
            className="object-cover"
          />
        </div>
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Everything You Need to<br />
            <span className="text-red-400">Study Abroad</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            From IELTS coaching to visa approval, we provide end-to-end support so you can focus on your dream.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "5,000+", label: "Students Placed" },
            { value: "98%", label: "Visa Success Rate" },
            { value: "15+", label: "Years Experience" },
            { value: "50+", label: "Partner Universities" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-red-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Comprehensive Study Abroad Support</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              We offer a complete suite of services to guide you from initial planning all the way to settling in abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${service.borderColor} group flex flex-col`}
              >
                {/* Top image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent`} />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className={`w-10 h-10 ${service.iconBg} rounded-xl flex items-center justify-center text-xl shadow`}>
                      {service.icon}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${service.tagColor}`}>
                      {service.tagline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                  {/* Quick features */}
                  <ul className="space-y-2 mb-5">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-5 p-3 bg-gray-50 rounded-xl">
                    {[
                      { label: "Students", value: service.stats.students },
                      { label: "Success", value: service.stats.successRate },
                      { label: "Partners", value: service.stats.partners },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-sm font-bold text-gray-800">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className={`block text-center bg-gradient-to-r ${service.color} text-white font-bold py-3 rounded-xl hover:opacity-90 transition`}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">How We Work</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Our Simple 5-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { num: "01", icon: "👤", label: "Profile Assessment" },
              { num: "02", icon: "🎯", label: "Plan Your Path" },
              { num: "03", icon: "📋", label: "Prepare Documents" },
              { num: "04", icon: "🚀", label: "Apply & Track" },
              { num: "05", icon: "✈️", label: "Fly & Succeed" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-3 relative">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {step.num}
                  </span>
                </div>
                <p className="font-semibold text-gray-800 text-sm">{step.label}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-0 w-full border-t-2 border-dashed border-gray-300 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-red-100 mb-6 text-lg">
            Book a free consultation with our expert counselors today — no commitment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/universities"
              className="border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition"
            >
              Browse Universities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
