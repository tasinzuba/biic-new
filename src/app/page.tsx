import Link from "next/link";
import Image from "next/image";
import StoryCarousel from "@/components/ui/StoryCarousel";
import DestinationCarousel from "@/components/ui/DestinationCarousel";


const services = [
  { icon: "🎓", title: "University Admission", desc: "Personalised counselling for top university applications worldwide." },
  { icon: "✈️", title: "Visa Assistance", desc: "Step-by-step visa support with a 98% approval success rate." },
  { icon: "📝", title: "IELTS Preparation", desc: "Expert coaching to hit your target band score fast." },
  { icon: "💰", title: "Scholarship Guidance", desc: "Discover and win scholarships that match your profile." },
  { icon: "🏠", title: "Accommodation Help", desc: "Find safe, affordable housing before you even land." },
  { icon: "📋", title: "Document Preparation", desc: "Every document prepared, verified and organised for you." },
];

const stats = [
  { number: "5,000+", label: "Students Placed", icon: "🎓" },
  { number: "50+", label: "Partner Universities", icon: "🏛️" },
  { number: "15+", label: "Countries", icon: "🌍" },
  { number: "98%", label: "Visa Success", icon: "✅" },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "Book a session with our expert counselors to map out your goals.", icon: "💬" },
  { num: "02", title: "Profile Evaluation", desc: "We assess your academics and shortlist the best universities.", icon: "📊" },
  { num: "03", title: "Application & Docs", desc: "Our team prepares and submits everything — perfectly.", icon: "📁" },
  { num: "04", title: "Visa & Departure", desc: "We handle your visa and guide you until you land safely.", icon: "🛫" },
];

const testimonials = [
  { name: "Tanvir Ahmed", uni: "Univ. of Manchester", flag: "🇬🇧", course: "MSc Data Science", text: "BIIC made my UK dream a reality. From IELTS to visa — everything handled perfectly.", rating: 5 },
  { name: "Nusrat Jahan", uni: "University of Toronto", flag: "🇨🇦", course: "MBA", text: "Got a 70% scholarship thanks to BIIC. Couldn't have done it without their guidance!", rating: 5 },
  { name: "Rakib Hossain", uni: "Monash University", flag: "🇦🇺", course: "Masters in Engineering", text: "The whole process was smooth and stress-free. Incredibly professional team.", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes floatUp { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-18px);opacity:.9} }
        @keyframes floatX  { 0%,100%{transform:translate(0,0);opacity:.3} 50%{transform:translate(14px,-12px);opacity:.7} }
        .b{border-radius:9999px;position:absolute;pointer-events:none;}
        .fa{animation:floatUp 6s ease-in-out infinite;}
        .fb{animation:floatUp 8s ease-in-out infinite 2s;}
        .fc{animation:floatX 7s ease-in-out infinite 1s;}
        .fd{animation:floatX 9s ease-in-out infinite 3s;}
        .fe{animation:floatUp 5s ease-in-out infinite 1.5s;}
        .ch{transition:all .3s cubic-bezier(.4,0,.2,1);}
        .ch:hover{transform:translateY(-6px);box-shadow:0 20px 40px -12px rgba(185,28,28,.2);}
        .di img{transition:transform .6s cubic-bezier(.4,0,.2,1);}
        .di:hover img{transform:scale(1.07);}
      `}</style>

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" alt="Study Abroad" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/97 via-red-900/85 to-red-700/50" />
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 0)",backgroundSize:"36px 36px"}} />
        <div className="b fa bg-white/8" style={{width:160,height:160,top:'8%',left:'4%'}} />
        <div className="b fb bg-red-300/15" style={{width:260,height:260,bottom:'-8%',right:'10%'}} />
        <div className="b fc bg-white/5" style={{width:100,height:100,top:'50%',right:'4%'}} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-bold px-4 py-2 rounded-full mb-8 backdrop-blur-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Bangladesh&apos;s #1 Study Abroad Consultancy
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white leading-[1.0] mb-6 tracking-tight">
              Your Dream<br />University<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-white to-red-200">Awaits You.</span>
            </h1>
            <p className="text-lg text-red-100/80 mb-10 leading-relaxed max-w-md">
              We help Bangladeshi students get into top universities in UK, USA, Canada & Australia — from application to visa, completely stress-free.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="bg-white text-red-800 font-black px-8 py-4 rounded-2xl hover:bg-red-50 transition-all shadow-2xl shadow-black/30 text-base hover:scale-105">
                Get Free Consultation →
              </Link>
              <Link href="#destinations" className="border border-white/25 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all text-base">
                Explore Countries
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["No Hidden Fees","Expert Counselors","98% Visa Success","10+ Years Experience"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] font-black flex-shrink-0">✓</span>{t}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl p-8 min-h-[380px] flex items-center justify-center">
              <div className="text-center text-white/30">
                <div className="text-5xl mb-3 opacity-50">📋</div>
                <p className="text-sm font-medium">Form coming soon</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce text-2xl">↓</div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath:"polygon(0 100%,100% 100%,100% 0)"}} />
      </section>

      {/* ══ STATS ══ */}
      <section className="relative bg-white pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="ch bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 text-center shadow-xl shadow-red-200">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-3xl font-black text-white">{s.number}</div>
                <div className="text-red-200 text-sm mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DESTINATIONS ══ */}
      <section id="destinations" className="relative overflow-hidden py-20 px-4 bg-white">
        <div className="b fa bg-red-200/30" style={{width:10,height:10,top:'5%',left:'2%'}} />
        <div className="b fc bg-red-300/20" style={{width:14,height:14,bottom:'8%',right:'3%'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Where Will You Go?</span>
              <h2 className="text-5xl font-black text-red-900 mt-2 leading-tight">Top Study<br /><span className="text-red-600">Destinations</span></h2>
            </div>
            <Link href="/study-in/uk" className="text-red-600 font-bold text-sm border-b-2 border-red-600 pb-0.5 hover:text-red-700 whitespace-nowrap self-end">View All →</Link>
          </div>
          <DestinationCarousel />
        </div>
      </section>

      {/* ══ WHY BIIC ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-white">
        <div className="b fa bg-red-100/60" style={{width:12,height:12,top:'6%',left:'3%'}} />
        <div className="b fc bg-red-200/50" style={{width:10,height:10,bottom:'8%',right:'4%'}} />
        <div className="b fb bg-red-100/40" style={{width:8,height:8,top:'45%',right:'8%'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Why Choose BIIC</span>
            <h2 className="text-5xl md:text-6xl font-black text-red-900 mt-3 leading-tight">
              We Don&apos;t Just Guide.<br /><span className="text-red-600">We Deliver.</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
              For over 10 years, BIIC has been the most trusted name in study abroad consulting for Bangladeshi students.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon:"🏆", num:"10+", title:"Years of Excellence", desc:"A decade of placing students in world-class universities across 15+ countries.", color:"from-amber-500 to-orange-600" },
              { icon:"🛡️", num:"98%", title:"Visa Success Rate", desc:"Industry-leading approval rate thanks to meticulous preparation and expertise.", color:"from-red-600 to-red-800" },
              { icon:"💸", num:"৳Cr+", title:"Scholarships Won", desc:"Our students collectively win crores in scholarships every single year.", color:"from-emerald-500 to-teal-600" },
              { icon:"🤝", num:"50+", title:"University Partners", desc:"Direct tie-ups mean faster processing and exclusive admission benefits.", color:"from-blue-500 to-blue-700" },
              { icon:"🌐", num:"15+", title:"Destinations", desc:"From UK to Malaysia — wherever you want to go, we have the network.", color:"from-purple-500 to-purple-700" },
              { icon:"📞", num:"24/7", title:"Always Available", desc:"Your dedicated counselor is reachable even after you land abroad.", color:"from-red-500 to-red-700" },
            ].map((item) => (
              <div key={item.title} className="ch group bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-red-200 overflow-hidden relative">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300" />
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-5`}>{item.icon}</div>
                <div className="text-4xl font-black text-red-900 leading-none mb-1">{item.num}</div>
                <div className="font-black text-gray-800 text-base mb-3">{item.title}</div>
                <div className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</div>
                <div className="mt-5 w-10 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-14 bg-gradient-to-r from-red-700 via-red-600 to-red-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-red-200">
            <div>
              <div className="text-white font-black text-2xl md:text-3xl leading-tight">Ready to start your journey?</div>
              <div className="text-red-200 text-sm mt-1">Join 5,000+ students who chose BIIC — Bangladesh&apos;s most trusted consultancy.</div>
            </div>
            <Link href="/contact" className="bg-white text-red-700 font-black px-8 py-3.5 rounded-2xl hover:bg-red-50 transition-all shadow-lg whitespace-nowrap hover:scale-105 flex-shrink-0">
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-red-50">
        <div className="b fa bg-red-300/25" style={{width:12,height:12,top:'5%',right:'5%'}} />
        <div className="b fc bg-red-400/20" style={{width:10,height:10,bottom:'10%',left:'6%'}} />
        <div className="b fb bg-red-200/25" style={{width:8,height:8,top:'50%',left:'40%'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">What We Do</span>
            <h2 className="text-5xl font-black text-red-900 mt-2">Everything You Need,<br /><span className="text-red-600">Under One Roof</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="ch group relative bg-white rounded-2xl p-7 border border-red-100 shadow-sm overflow-hidden cursor-pointer hover:border-red-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -right-4 -bottom-4 text-7xl opacity-5 group-hover:opacity-10 transition-opacity duration-300 select-none">{s.icon}</div>
                <div className="w-13 h-13 w-12 h-12 bg-red-100 group-hover:bg-red-600 rounded-xl flex items-center justify-center text-xl mb-5 transition-colors duration-300">{s.icon}</div>
                <h3 className="font-black text-red-900 text-lg mb-2 group-hover:text-red-600 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-red-600 text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3.5 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-red-200">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-white">
        <div className="b fa bg-red-200/30" style={{width:12,height:12,top:'5%',right:'4%'}} />
        <div className="b fc bg-red-300/20" style={{width:10,height:10,bottom:'8%',left:'3%'}} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Simple Process</span>
            <h2 className="text-5xl font-black text-red-900 mt-2">How It <span className="text-red-600">Works</span></h2>
            <p className="text-gray-500 mt-3 text-lg">4 simple steps to your dream university</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="ch bg-white border-2 border-red-100 hover:border-red-300 rounded-3xl p-7 text-center h-full flex flex-col items-center">
                  <div className="relative mb-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-red-200">{step.icon}</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-900 text-white text-[10px] font-black rounded-full flex items-center justify-center">{step.num}</div>
                  </div>
                  <h3 className="font-black text-red-900 text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/3 -right-3 z-10 w-6 h-6 bg-red-100 rounded-full items-center justify-center text-red-600 text-xs font-black">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 rounded-2xl transition-all shadow-xl shadow-red-100 text-lg hover:scale-105 inline-block">
              Start Your Journey →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ UPCOMING EVENTS ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-red-800 via-red-700 to-red-600">
        <div className="absolute inset-0 opacity-8" style={{backgroundImage:"radial-gradient(circle at 2px 2px,rgba(255,255,255,.08) 1px,transparent 0)",backgroundSize:"28px 28px"}} />
        <div className="b fa bg-white/8" style={{width:160,height:160,top:'-5%',right:'5%'}} />
        <div className="b fb bg-white/5" style={{width:120,height:120,bottom:'-5%',left:'3%'}} />
        <div className="b fc bg-white/5" style={{width:10,height:10,top:'30%',left:'8%'}} />
        <div className="b fd bg-white/5" style={{width:12,height:12,bottom:'25%',right:'12%'}} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-red-200 font-black text-xs uppercase tracking-[0.2em]">Don&apos;t Miss Out</span>
              <h2 className="text-5xl font-black text-white mt-2">Upcoming <span className="text-red-200">Events</span></h2>
            </div>
            <Link href="/events" className="text-white font-bold text-sm border-b-2 border-white/40 pb-0.5 hover:border-white whitespace-nowrap self-end">All Events →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { date:"25 Mar", month:"2026", title:"UK University Fair 2026", type:"Free Event", location:"Dhaka, Bangladesh", desc:"Meet representatives from 30+ UK universities. Get direct admission offers on the spot.", badge:"🇬🇧 UK" },
              { date:"10 Apr", month:"2026", title:"Canada Study Seminar", type:"Free Seminar", location:"Online (Zoom)", desc:"Learn about Canadian student visa, scholarships and top universities with our experts.", badge:"🇨🇦 Canada" },
              { date:"20 Apr", month:"2026", title:"IELTS Strategy Workshop", type:"Paid Workshop", location:"BIIC Office, Dhaka", desc:"Intensive 1-day IELTS preparation workshop. Target band 7+ with proven strategies.", badge:"📝 IELTS" },
            ].map((ev) => (
              <div key={ev.title} className="ch group bg-white rounded-3xl overflow-hidden shadow-xl shadow-red-900/20 hover:shadow-2xl hover:shadow-red-900/30">
                <div className="flex items-stretch">
                  <div className="bg-red-600 px-5 py-6 flex flex-col items-center justify-center min-w-[80px] text-center">
                    <div className="text-white font-black text-3xl leading-none">{ev.date.split(" ")[0]}</div>
                    <div className="text-red-200 text-xs font-bold mt-1">{ev.date.split(" ")[1]}</div>
                    <div className="text-red-300 text-[10px] mt-0.5">{ev.month}</div>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-red-50 text-red-600 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide">{ev.badge}</span>
                      <span className="text-gray-400 text-[10px] font-bold uppercase">{ev.type}</span>
                    </div>
                    <h3 className="font-black text-red-900 text-base mb-1 group-hover:text-red-600 transition-colors">{ev.title}</h3>
                    <p className="text-gray-400 text-xs mb-2 flex items-center gap-1">📍 {ev.location}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{ev.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-4 pt-3 border-t border-red-50">
                  <Link href="/contact" className="text-red-600 text-xs font-black hover:text-red-700 transition-colors">Register Free →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BLOG ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-white">
        <div className="b fb bg-red-200/25" style={{width:12,height:12,top:'5%',left:'3%'}} />
        <div className="b fd bg-red-300/20" style={{width:10,height:10,bottom:'10%',right:'4%'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Latest Updates</span>
              <h2 className="text-5xl font-black text-red-900 mt-2">From Our <span className="text-red-600">Blog</span></h2>
            </div>
            <Link href="/blog" className="text-red-600 font-bold text-sm border-b-2 border-red-600 pb-0.5 hover:text-red-700 whitespace-nowrap self-end">All Articles →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { cat:"Visa Guide", title:"UK Student Visa 2025: Complete Step-by-Step Guide", date:"March 10, 2026", read:"8 min read", img:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80", excerpt:"Everything you need to know about applying for a UK student visa — documents, fees, timeline and tips." },
              { cat:"Scholarship", title:"Top 10 Fully Funded Scholarships for Bangladeshi Students", date:"March 5, 2026", read:"12 min read", img:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80", excerpt:"From Chevening to Commonwealth — here are the best scholarships you can apply for right now." },
              { cat:"Study Abroad", title:"Canada vs Australia: Which is Better for Bangladeshi Students?", date:"Feb 28, 2026", read:"10 min read", img:"https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80", excerpt:"A detailed comparison of costs, visa success rates, job prospects and lifestyle for Bangladeshi students." },
            ].map((post) => (
              <Link key={post.title} href="/blog" className="ch group block bg-white rounded-3xl overflow-hidden border border-red-100 shadow-sm hover:shadow-xl hover:border-red-200">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wide">{post.cat}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                    <span>{post.date}</span><span>·</span><span>{post.read}</span>
                  </div>
                  <h3 className="font-black text-red-900 text-lg leading-snug mb-3 group-hover:text-red-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 text-red-600 text-xs font-black flex items-center gap-1">Read More <span>→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SUCCESS STORIES ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-white via-red-100 to-red-50">
        <div className="b fa bg-red-400/20" style={{width:10,height:10,top:'4%',left:'6%'}} />
        <div className="b fb bg-red-500/15" style={{width:14,height:14,top:'15%',right:'5%'}} />
        <div className="b fc bg-red-300/25" style={{width:8,height:8,top:'40%',left:'2%'}} />
        <div className="b fd bg-red-400/20" style={{width:12,height:12,bottom:'20%',right:'8%'}} />
        <div className="b fe bg-red-500/15" style={{width:10,height:10,bottom:'8%',left:'35%'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Real Students · Real Results</span>
              <h2 className="text-5xl font-black text-red-900 mt-2">Success <span className="text-red-600">Stories</span></h2>
              <p className="text-gray-500 mt-2 text-base">Hear directly from students who changed their lives with BIIC</p>
            </div>
            <Link href="/success-stories" className="text-red-600 font-bold text-sm border-b-2 border-red-600 pb-0.5 hover:text-red-700 whitespace-nowrap self-end">All Stories →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {[
              { title:"How I Got Into University of Manchester", student:"Tanvir Ahmed · MSc Data Science · 🇬🇧 UK", id:"dQw4w9WgXcQ" },
              { title:"My Scholarship Journey to Canada", student:"Nusrat Jahan · MBA · 🇨🇦 Canada", id:"dQw4w9WgXcQ" },
            ].map((v) => (
              <div key={v.title} className="ch rounded-3xl overflow-hidden border border-red-200 bg-white shadow-md">
                <div className="relative aspect-video">
                  <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
                </div>
                <div className="p-5 border-t border-red-100">
                  <h3 className="font-black text-red-900 text-base mb-1">{v.title}</h3>
                  <p className="text-gray-500 text-sm">{v.student}</p>
                </div>
              </div>
            ))}
          </div>
          <StoryCarousel />
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-white">
        <div className="b fb bg-red-200/25" style={{width:12,height:12,top:'6%',right:'4%'}} />
        <div className="b fd bg-red-300/20" style={{width:10,height:10,bottom:'12%',left:'5%'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Student Reviews</span>
              <h2 className="text-5xl font-black text-red-900 mt-2">What Our <span className="text-red-600">Students Say</span></h2>
            </div>
            <Link href="/success-stories" className="text-red-600 font-bold text-sm border-b-2 border-red-600 pb-0.5 hover:text-red-700 whitespace-nowrap self-end">All Stories →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`ch relative rounded-3xl p-7 overflow-hidden ${i === 1 ? "bg-gradient-to-br from-red-600 to-red-800 text-white" : "bg-white border border-red-100 shadow-sm"}`}>
                <div className={`absolute top-4 right-5 text-8xl font-serif leading-none select-none ${i === 1 ? "text-white/10" : "text-red-50"}`}>&ldquo;</div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({length:t.rating}).map((_,j) => <span key={j} className={i===1?"text-red-200 text-lg":"text-red-400 text-lg"}>★</span>)}
                </div>
                <p className={`text-sm leading-relaxed mb-6 relative z-10 ${i===1?"text-red-100":"text-gray-600"}`}>&ldquo;{t.text}&rdquo;</p>
                <div className={`flex items-center gap-3 pt-4 border-t ${i===1?"border-red-500":"border-red-100"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 ${i===1?"bg-white/20 text-white":"bg-red-600 text-white"}`}>{t.name[0]}</div>
                  <div>
                    <div className={`font-black text-sm ${i===1?"text-white":"text-red-900"}`}>{t.name} {t.flag}</div>
                    <div className={`text-xs ${i===1?"text-red-200":"text-gray-400"}`}>{t.course} · {t.uni}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="relative overflow-hidden py-24 px-4 bg-red-50">
        <div className="b fa bg-red-300/25" style={{width:12,height:12,top:'5%',right:'5%'}} />
        <div className="b fc bg-red-400/20" style={{width:10,height:10,bottom:'8%',left:'4%'}} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Got Questions?</span>
            <h2 className="text-5xl font-black text-red-900 mt-2">Frequently Asked <span className="text-red-600">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {[
              { q:"How much does BIIC's consultation cost?", a:"Our initial consultation is completely free. We believe every student deserves expert guidance regardless of their budget. Contact us today to book your free session." },
              { q:"What documents do I need to study abroad?", a:"Generally you'll need academic transcripts, English test scores (IELTS/TOEFL), passport, recommendation letters, SOP/personal statement, and financial documents. Our team will guide you through exactly what's required for your specific destination." },
              { q:"How long does the visa process take?", a:"Visa processing times vary by country — UK typically takes 3-6 weeks, Canada 4-8 weeks, Australia 4-6 weeks. We recommend applying at least 3 months before your intake to be safe." },
              { q:"Can BIIC help me get a scholarship?", a:"Absolutely! We have helped hundreds of students secure full and partial scholarships. Our team knows exactly which scholarships are available for Bangladeshi students and how to write winning applications." },
              { q:"Do I need IELTS to study abroad?", a:"Most universities require IELTS (or TOEFL/PTE). The minimum score varies by university and course — usually 6.0 to 7.0 overall for IELTS. We offer IELTS preparation coaching to help you hit your target score." },
              { q:"What if my visa gets rejected?", a:"In the rare case of a visa rejection, our team immediately analyses the reason and helps you prepare a strong reapplication. Our 98% success rate means this rarely happens, but we're always here to support you." },
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden hover:border-red-300 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-red-900 group-open:text-red-600 transition-colors pr-4">{item.q}</span>
                  <span className="w-8 h-8 bg-red-50 group-open:bg-red-600 rounded-xl flex items-center justify-center text-red-600 group-open:text-white font-black text-lg transition-all flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <div className="h-px bg-red-100 mb-4" />
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3.5 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-red-200">
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative overflow-hidden py-28 px-4 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:"radial-gradient(circle at 1px 1px,white 1px,transparent 0)",backgroundSize:"36px 36px"}} />
        <div className="b fa bg-white/5" style={{width:300,height:300,top:'-10%',left:'5%'}} />
        <div className="b fb bg-red-400/20" style={{width:400,height:400,bottom:'-20%',right:'5%'}} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/30 border border-red-400/30 text-red-200 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            🎓 Free · No Obligation · Expert Advice
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-5 leading-[1.0] tracking-tight">
            Your Journey<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-100">Starts Today.</span>
          </h2>
          <p className="text-red-200/80 text-xl mb-10 leading-relaxed">
            Join 5,000+ students who trusted BIIC to change their lives. Let&apos;s make your dream university a reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-red-800 font-black px-10 py-4 rounded-2xl hover:bg-red-50 transition-all shadow-2xl text-lg hover:scale-105">
              Book Free Consultation
            </Link>
            <Link href="#destinations" className="border border-white/20 text-white/80 font-semibold px-10 py-4 rounded-2xl hover:bg-white/10 hover:text-white transition-all text-lg">
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
