"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchImagesByKey } from "@/lib/fetchPlasmicImages";

type CMSImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function WhyDaDi() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Heart Behind Dadi
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-accent/5 p-8 rounded-2xl border-l-4 border-primary">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 italic">
              "Learning Chinese should be a joyful, mindful, and life-enriching
              experience — not just a race for grades."
            </blockquote>
          </div>

          <div className="space-y-6 text-foreground/80">
            <p>
              In today's fast-paced, distraction-filled world, children are
              constantly pulled in multiple directions. Traditional Mandarin
              education often adds to this stress, focusing on rote memorization
              and test scores rather than genuine understanding and enjoyment.
            </p>
            <p>
              At Da Di, we're changing that. We believe in bringing Mandarin to
              life through:
            </p>
            <ul className="space-y-3 pl-5 list-disc">
              <li>
                <span className="font-medium">Real communication</span> -
                Practical, everyday language use
              </li>
              <li>
                <span className="font-medium">Storytelling</span> - Connecting
                with culture through engaging narratives
              </li>
              <li>
                <span className="font-medium">Mindful learning</span> - Creating
                space for focus and presence
              </li>
              <li>
                <span className="font-medium">Joyful exploration</span> - Making
                learning an adventure, not a chore
              </li>
            </ul>
            <p className="pt-4">
              Mandarin isn't just a subject to be studied — it's a living bridge
              to culture, family, and self-discovery. At Da Di, we're passionate
              about helping students cross that bridge with confidence and joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
