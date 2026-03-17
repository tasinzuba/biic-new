"use client";

import { useState, useEffect, useCallback } from "react";
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

const perView = 4;

export default function StoryCarousel() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const maxIndex = images.length - perView;

  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  useEffect(() => {
    if (hovered) return;
    const t = setInterval(next, 2800);
    return () => clearInterval(t);
  }, [hovered, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${current * (100 / perView)}% - ${current * (16 / perView)}px))` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ width: `calc(${100 / perView}% - ${(16 * (perView - 1)) / perView}px)` }}
            >
              <div className="relative h-56">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-7 h-2.5 bg-red-600" : "w-2.5 h-2.5 bg-red-200"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="w-9 h-9 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white rounded-xl font-black transition-all text-lg flex items-center justify-center">‹</button>
          <button onClick={next} className="w-9 h-9 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black transition-all text-lg flex items-center justify-center">›</button>
        </div>
      </div>
    </div>
  );
}
