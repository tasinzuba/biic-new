import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  FaCalendarDays, FaLocationDot, FaClock, FaUsers, FaArrowRight,
  FaVideo, FaCircleCheck, FaChevronRight, FaPhone, FaWhatsapp,
} from "react-icons/fa6";
import { allEvents, getEventBySlug } from "@/data/events";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allEvents.map((e) => ({ slug: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} | BIIC Global Events`,
    description: event.description,
  };
}

const eventTypeColors: Record<string, string> = {
  Seminar: "bg-blue-100 text-blue-700",
  Webinar: "bg-red-100 text-red-700",
  Workshop: "bg-green-100 text-green-700",
  "Open Day": "bg-yellow-100 text-yellow-700",
};

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const relatedEvents = allEvents
    .filter((e) => e.id !== event.id && e.type === event.type)
    .slice(0, 3);

  const seatPercent = Math.round(((event.seats - event.seatsLeft) / event.seats) * 100);
  const isAlmostFull = event.seatsLeft < 20;

  return (
    <>
      <div className="h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 w-full" />

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 py-3 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <FaChevronRight className="w-3 h-3" />
          <Link href="/events" className="hover:text-red-600 transition">Events</Link>
          <FaChevronRight className="w-3 h-3" />
          <span className="text-red-700 font-black truncate max-w-xs">{event.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] md:h-[500px]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto w-full px-4 pb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`text-xs font-black px-3 py-1.5 rounded-full ${event.typeBg} ${event.typeColor}`}>
                {event.type}
              </span>
              {event.isOnline && (
                <span className="text-xs font-black px-3 py-1.5 rounded-full bg-white/90 text-gray-700 flex items-center gap-1">
                  <FaVideo className="w-3 h-3" /> Online
                </span>
              )}
              {isAlmostFull && (
                <span className="text-xs font-black px-3 py-1.5 rounded-full bg-orange-500 text-white">
                  Almost Full — {event.seatsLeft} seats left
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-5 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <FaCalendarDays className="w-4 h-4 text-red-400" />
                {event.day} {event.month} {event.year}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="w-4 h-4 text-red-400" />
                {event.time}
              </span>
              <span className="flex items-center gap-2">
                <FaLocationDot className="w-4 h-4 text-red-400" />
                {event.location}
              </span>
              <span className="flex items-center gap-2">
                <FaUsers className="w-4 h-4 text-red-400" />
                {event.seats} total seats
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — details */}
          <div className="lg:col-span-2 space-y-10">

            {/* About the event */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-1 h-6 bg-red-600 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">About This Event</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">{event.fullDescription}</p>
            </div>

            {/* What you will learn */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-1 h-6 bg-red-600 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900">What You Will Learn</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.topics.map((topic) => (
                  <div key={topic} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                    <FaCircleCheck className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-semibold">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers / Presenters */}
            {event.speakers && event.speakers.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-1 h-6 bg-red-600 rounded-full" />
                  <h2 className="text-2xl font-black text-gray-900">Speakers & Presenters</h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  {event.speakers.map((speaker) => (
                    <div key={speaker.name} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm min-w-[220px]">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-900 to-red-600 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                        {speaker.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-black text-gray-900 text-sm">{speaker.name}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{speaker.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Details card */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-black text-gray-900 text-lg mb-4">Event Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FaCalendarDays, label: "Date", value: `${event.day} ${event.month} ${event.year}` },
                  { icon: FaClock, label: "Time", value: event.time },
                  { icon: FaLocationDot, label: "Location", value: event.location },
                  { icon: FaUsers, label: "Available Seats", value: `${event.seatsLeft} / ${event.seats}` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs font-black uppercase tracking-wide">{label}</div>
                      <div className="text-gray-800 font-black text-sm mt-0.5">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — registration sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">

              {/* Registration card */}
              <div className="bg-white border-2 border-red-100 rounded-3xl overflow-hidden shadow-xl">
                <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 p-6 text-white">
                  <div className="inline-block bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                    Free Registration
                  </div>
                  <div className="text-3xl font-black mb-1">FREE</div>
                  <div className="text-red-200 text-sm">No registration fees</div>
                </div>

                <div className="p-6">
                  {/* Seat progress */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="font-black text-gray-700">Seats Filled</span>
                      <span className={`font-black text-sm ${isAlmostFull ? "text-orange-600" : "text-gray-500"}`}>
                        {event.seats - event.seatsLeft} / {event.seats}
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isAlmostFull ? "bg-orange-500" : "bg-red-600"}`}
                        style={{ width: `${seatPercent}%` }}
                      />
                    </div>
                    {isAlmostFull && (
                      <p className="text-orange-600 text-xs font-black mt-1.5">
                        ⚡ Only {event.seatsLeft} seats remaining!
                      </p>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-red-200 text-base mb-3"
                  >
                    Register for Free <FaArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://wa.me/8801XXXXXXXXX"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-black py-3.5 rounded-2xl hover:scale-[1.02] transition-all text-sm"
                  >
                    <FaWhatsapp className="w-4 h-4" /> Register via WhatsApp
                  </a>

                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCircleCheck className="w-3.5 h-3.5 text-green-600" />
                      Completely free — no hidden fees
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCircleCheck className="w-3.5 h-3.5 text-green-600" />
                      Certificate of participation
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCircleCheck className="w-3.5 h-3.5 text-green-600" />
                      Free counseling session included
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact card */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h3 className="font-black text-gray-900 text-sm mb-3">Have Questions?</h3>
                <Link href="/contact" className="flex items-center gap-3 text-sm text-gray-600 hover:text-red-600 transition group">
                  <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition">
                    <FaPhone className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  Contact our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-16 px-4" style={{ background: "linear-gradient(135deg,#fff9f9 0%,#ffffff 60%,#fff5f5 100%)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">More Events</span>
                <h2 className="text-3xl font-black text-gray-900 mt-1">Related Events</h2>
              </div>
              <Link href="/events" className="hidden md:flex items-center gap-2 text-red-600 font-black text-sm hover:text-red-700 transition">
                View All <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedEvents.map((e) => (
                <Link
                  key={e.id}
                  href={`/events/${e.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image src={e.image} alt={e.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-black px-2.5 py-1 rounded-full ${e.typeBg} ${e.typeColor}`}>{e.type}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white rounded-lg px-2.5 py-1.5 text-center shadow">
                      <div className="text-lg font-black text-red-600 leading-none">{e.day}</div>
                      <div className="text-[10px] font-black text-gray-500">{e.month}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-gray-900 text-sm mb-1 group-hover:text-red-600 transition leading-snug line-clamp-2">{e.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
                      <FaLocationDot className="w-3 h-3" />
                      <span className="truncate">{e.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <FaCalendarDays className="w-12 h-12 mx-auto mb-4 text-red-300" />
          <h2 className="text-3xl font-black mb-3">Don&apos;t Miss This Event</h2>
          <p className="text-red-200 mb-6 max-w-xl mx-auto">
            Secure your free spot now. Limited seats available — register today to guarantee your place.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-700 font-black px-8 py-4 rounded-xl hover:bg-red-50 transition text-lg shadow-lg"
          >
            Register Now — It&apos;s Free
          </Link>
        </div>
      </section>
    </>
  );
}
