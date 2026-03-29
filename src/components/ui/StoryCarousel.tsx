import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", alt: "Student 1" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", alt: "Student 2" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", alt: "Student 3" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80", alt: "Student 4" },
  { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80", alt: "Student 5" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", alt: "Student 6" },
  { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80", alt: "Student 7" },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", alt: "Student 8" },
];

const items = [...images, ...images];

export default function StoryCarousel() {
  return (
    <>
      <style>{`
        @keyframes storyScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .story-track { animation: storyScroll 24s linear infinite; display:flex; gap:12px; width:max-content; }
        .story-wrap:hover .story-track { animation-play-state:paused; }
        .story-img { flex-shrink:0; width:280px; height:220px; border-radius:16px; overflow:hidden; position:relative; transition:transform .3s ease, box-shadow .3s ease; }
        .story-img:hover { transform:translateY(-6px) scale(1.03); box-shadow:0 20px 40px -10px rgba(185,28,28,.3); }
      `}</style>
      <div
        className="overflow-hidden story-wrap py-2"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="story-track">
          {items.map((img, i) => (
            <div key={i} className="story-img">
              <Image src={img.src} alt={img.alt} fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
