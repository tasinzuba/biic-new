import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  FaCalendarDays, FaLocationDot, FaClock, FaUsers,
  FaArrowRight, FaVideo, FaChevronRight,
} from "react-icons/fa6";
import { allEvents, pastEvents2025 } from "@/data/events";

export const metadata: Metadata = {
  title: "Events | BIIC Global",
  description: "Join our upcoming seminars, webinars, and workshops on studying abroad, visa guidance, and IELTS preparation.",
};

const eventTypeColors: Record<string, string> = {
  Seminar: "bg-blue-100 text-blue-700",
  Webinar: "bg-red-100 text-red-700",
  Workshop: "bg-green-100 text-green-700",
  "Open Day": "bg-yellow-100 text-yellow-700",
};

export default function EventsPage() {
  const featuredEvents = allEvents.filter((e) => e.featured);
  const regularEvents = allEvents.filter((e) => !e.featured);

  return (
    <>
      <div className="h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 w-full" />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4" style={{ background: "linear-gradient(135deg,#ffffff 0%,#fff9f9 50%,#fff5f5 100%)" }}>
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-red-50/70 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 mb-6">
            <FaCalendarDays className="w-4 h-4 text-red-600" />
            <span className="text-red-700 text-xs font-black uppercase tracking-widest">Events & Seminars</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-red-900 mb-5 leading-tight">
            Join Our Free<br />
            <span className="text-red-600">Events & Workshops</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-8">
            Attend our seminars, webinars, and workshops to learn everything about studying abroad — from visa guidance to scholarship hunting.
          </p>

          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-4 border border-red-100 bg-white/80 rounded-2xl px-8 py-5 shadow-sm">
            {[
              { value: "50+", label: "Events Per Year" },
              { value: "10,000+", label: "Total Attendees" },
              { value: "Free", label: "Entry for All" },
              { value: "Online+Offline", label: "Both Formats" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-black text-red-700">{s.value}</div>
                <div className="text-gray-500 text-xs font-black uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 py-3 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <FaChevronRight className="w-3 h-3" />
          <Link href="/resources" className="hover:text-red-600 transition">Resources</Link>
          <FaChevronRight className="w-3 h-3" />
          <span className="text-red-700 font-black">Events</span>
        </div>
      </div>

      {/* Featured Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Don&apos;t Miss</span>
              <h2 className="text-3xl font-black text-gray-900 mt-1">Featured Events</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`text-xs font-black px-3 py-1.5 rounded-full ${event.typeBg} ${event.typeColor}`}>{event.type}</span>
                    {event.isOnline && <span className="text-xs font-black px-3 py-1.5 rounded-full bg-white/90 text-gray-700 flex items-center gap-1"><FaVideo className="w-3 h-3" /> Online</span>}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-lg">
                    <div className="text-2xl font-black text-red-600 leading-none">{event.day}</div>
                    <div className="text-xs font-black text-gray-500">{event.month}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-gray-900 text-xl mb-2 group-hover:text-red-600 transition leading-snug">{event.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">{event.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5"><FaClock className="w-3.5 h-3.5" /> {event.time}</span>
                    <span className="flex items-center gap-1.5"><FaLocationDot className="w-3.5 h-3.5" /> {event.location}</span>
                    <span className="flex items-center gap-1.5 text-orange-600 font-black"><FaUsers className="w-3.5 h-3.5" /> {event.seatsLeft} seats left</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {event.topics.map((t) => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="block text-center bg-red-600 hover:bg-red-700 text-white font-black py-3 rounded-xl transition-all shadow-lg shadow-red-200">
                    View Event Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(135deg,#fff9f9 0%,#ffffff 60%,#fff5f5 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">All Events</span>
            <h2 className="text-3xl font-black text-gray-900 mt-1">Upcoming Schedule</h2>
          </div>

          <div className="space-y-4">
            {regularEvents.map((event) => (
              <div key={event.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all p-5 flex flex-col md:flex-row gap-5 items-start">
                {/* Date badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-red-50 border border-red-100 rounded-2xl flex flex-col items-center justify-center">
                  <div className="text-2xl font-black text-red-600 leading-none">{event.day}</div>
                  <div className="text-xs font-black text-red-400">{event.month}</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-full ${eventTypeColors[event.type]}`}>{event.type}</span>
                    {event.isOnline && <span className="text-xs font-black px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 flex items-center gap-1"><FaVideo className="w-3 h-3" /> Online</span>}
                    <span className="text-orange-600 text-xs font-black">{event.seatsLeft}/{event.seats} seats left</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-1 group-hover:text-red-600 transition">{event.title}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-1">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5"><FaClock className="w-3.5 h-3.5" /> {event.time}</span>
                    <span className="flex items-center gap-1.5"><FaLocationDot className="w-3.5 h-3.5" /> {event.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0 flex flex-col gap-2">
                  <Link href={`/events/${event.id}`} className="flex items-center gap-2 border-2 border-red-200 text-red-600 font-black px-4 py-2.5 rounded-xl hover:bg-red-50 transition text-sm whitespace-nowrap">
                    View Details
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-5 py-2.5 rounded-xl transition text-sm whitespace-nowrap">
                    Register Free <FaArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <FaCalendarDays className="w-12 h-12 mx-auto mb-4 text-red-300" />
          <h2 className="text-3xl font-black mb-3">Never Miss an Event</h2>
          <p className="text-red-200 mb-6">Get notified about upcoming seminars, webinars, and free workshops directly via WhatsApp or email.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-red-700 font-black px-8 py-4 rounded-xl hover:bg-red-50 transition text-lg shadow-lg">
            <FaCalendarDays className="w-5 h-5" />
            Subscribe to Event Alerts
          </Link>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-gray-400 font-black text-xs uppercase tracking-[0.2em]">Archive</span>
            <h2 className="text-3xl font-black text-gray-900 mt-1">Past Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents2025.map((e) => (
              <div key={e.title} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaCalendarDays className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-gray-700 text-sm truncate">{e.title}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{e.date} · {e.attendees} attendees</div>
                </div>
                <span className={`text-xs font-black px-2 py-1 rounded-full flex-shrink-0 ${eventTypeColors[e.type]}`}>{e.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
