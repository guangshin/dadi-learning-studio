"use client";

import { Card, CardContent } from "@/components/ui/card";

interface PhilosophyCardProps {
  character: string;
  pinyin: string;
  meaning: string;
  description: string;
  color: string;
}

const PhilosophyCard = ({
  character,
  pinyin,
  meaning,
  description,
  color,
}: PhilosophyCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md text-center">
      <div
        className="h-36 flex items-center justify-center"
        style={{ backgroundColor: `${color}30` }}
      >
        <span className="text-7xl font-bold" style={{ color }}>
          {character}
        </span>
      </div>
      <CardContent className="pt-6">
        <div className="mb-2">
          <span className="text-sm font-medium text-gray-500">{pinyin}</span>
          <h3 className="font-semibold text-xl">{meaning}</h3>
        </div>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PhilosophyCard;