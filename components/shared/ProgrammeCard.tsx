"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { ReactNode } from "react";

interface ProgrammeCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const ProgrammeCard = ({
  title,
  subtitle,
  description,
  icon,
  color,
}: ProgrammeCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md">
      <div className="h-2" style={{ backgroundColor: color }}></div>
      <CardHeader className="pt-6">
        <div className="flex items-center space-x-3">
          <div 
            className="h-12 w-12 rounded-full flex items-center justify-center text-xl"
            style={{ backgroundColor: `${color}30` }}
          >
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProgrammeCard;