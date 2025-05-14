"use client";

import { PlayCircle } from "lucide-react";

const MEDIA = [
  {
    platform: "YouTube",
    title: "\uD83C\uDFC6 Champion: Speak Mandarin Campaign 2023",
    description:
      "Watch how Ben Lim and his daughter brought Da Di’s teaching to life — winning 1st Place in the Preschool Division of the Speak Mandarin Family Talent Competition.",
    thumbnail: "/speak-chinese-campaign-ben.png",
    button: "\u25B6 Watch on YouTube",
    link: "https://www.youtube.com/watch?v=5okAvrruW_4",
    bg: "bg-[#FFFBE6]",
    platformStyle: "bg-[#FFE066] text-black",
  },
  {
    platform: "Facebook Live",
    title: "\uD83D\uDCFA Interview with Founder Ben Lim",
    description:
      "In this 958 radio interview session, Ben Lim shares Da Di’s origin story, his parenting philosophy, and how mindfulness is shaping the next generation of Mandarin learners.",
    thumbnail: "/958-interview-ben.png",
    button: "\u25B6 View on Facebook",
    link: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=212376738287055",
    bg: "bg-[#FFFBE6]",
    platformStyle: "bg-[#BFE140] text-black",
  },
];

export default function MediaFeatures() {
  return (
    <section
      className="w-full py-16 px-4 md:px-0"
      style={{ background: "#FFFBE6" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-sans">
          Media Features
        </h2>
        <p className="mb-10 text-lg md:text-xl text-gray-700 font-serif">
          Spotlight moments from the national stage and heartfelt interviews
          with our founder.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEDIA.map((item, idx) => (
            <div
              key={item.platform}
              className="rounded-2xl shadow-sm border border-gray-200 bg-white flex flex-col overflow-hidden"
              style={{ minHeight: 320 }}
            >
              <div className="relative group h-48 md:h-56 bg-gray-100 flex items-center justify-center">
                <img
                  src={item.thumbnail}
                  alt={item.platform + " thumbnail"}
                  className="object-cover w-full h-full"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform bg-black/60 rounded-full p-2" />
                </span>
              </div>
              <div className="flex-1 flex flex-col p-6 gap-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${item.platformStyle}`}
                >
                  {item.platform}
                </span>
                <h3 className="text-xl font-semibold mb-1 font-sans">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4 font-serif">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#FFE066] text-black font-bold shadow hover:bg-[#FFD700] transition-colors text-base mt-auto"
                >
                  {item.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
