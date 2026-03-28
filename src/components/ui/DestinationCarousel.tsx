"use client";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  { name: "United Kingdom", slug: "uk", flag: "🇬🇧", universities: "130+", students: "600K+", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
  { name: "United States", slug: "usa", flag: "🇺🇸", universities: "4,000+", students: "1M+", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80" },
  { name: "Canada", slug: "canada", flag: "🇨🇦", universities: "100+", students: "800K+", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80" },
  { name: "Australia", slug: "australia", flag: "🇦🇺", universities: "40+", students: "700K+", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
  { name: "Germany", slug: "germany", flag: "🇩🇪", universities: "400+", students: "400K+", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80" },
  { name: "Malaysia", slug: "malaysia", flag: "🇲🇾", universities: "50+", students: "150K+", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80" },
];

const items = [...destinations, ...destinations];

export default function DestinationCarousel() {
  return (
    <>
      <style>{`
        @keyframes destScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .dest-track {
          animation: destScroll 22s linear infinite;
          display: flex;
          gap: 20px;
          width: max-content;
        }
        .dest-wrap:hover .dest-track {
          animation-play-state: paused;
        }
        .dest-card {
          flex-shrink: 0;
          width: 220px;
          height: 340px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s ease;
          border: 2px solid transparent;
        }
        .dest-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 28px 50px -10px rgba(153,27,27,0.45);
          border-color: #ef4444;
        }
        .dest-card .img {
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .dest-card:hover .img {
          transform: scale(1.08);
        }
        .dest-card .shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .dest-card:hover .shine {
          opacity: 1;
        }
      `}</style>

      <div className="overflow-hidden dest-wrap py-4" style={{maskImage:"linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)"}}>
        <div className="dest-track">
          {items.map((d, i) => (
            <Link key={`${d.slug}-${i}`} href={`/study-in/${d.slug}`} className="dest-card">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image src={d.image} alt={d.name} fill className="object-cover img" />
              </div>

              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

              {/* Shine on hover */}
              <div className="shine" />

              {/* Top: flag + unis badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between" style={{zIndex:10}}>
                <span className="text-3xl drop-shadow-lg">{d.flag}</span>
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full border border-white/25 tracking-wide">
                  {d.universities} Unis
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{zIndex:10}}>
                <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Study in</div>
                <h3 className="font-black text-white text-lg leading-tight mb-2">{d.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-red-300 text-[11px] font-semibold">{d.students} students</span>
                  <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
