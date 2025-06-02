"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { fetchTeacher, Teacher } from "@/lib/fetchTeacher";
import { Skeleton } from "@/components/ui/skeleton";

interface AboutTeamProps {
  title?: string;
  description?: string;
}

export function AboutTeam({
  title = "Meet Our Educators",
  description = "Our team of passionate educators is dedicated to providing the best learning experience for your child.",
}: AboutTeamProps) {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = 3; // Default number of items to show initially

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch all teachers (up to 100)
        const { teachers } = await fetchTeacher(1, 100);

        if (Array.isArray(teachers)) {
          setTeachers(teachers);
        } else {
          setError("Invalid data format received");
        }
      } catch (err) {
        console.error("Failed to fetch teachers:", err);
        setError("Failed to load teachers. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadTeachers();
  }, []);

  // Determine which teachers to show based on showAll state
  const teachersToShow = showAll ? teachers : teachers.slice(0, itemsToShow);

  // Only show the View More button if there are more teachers to show
  const showViewMoreButton = teachers.length > itemsToShow;

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <Skeleton className="h-64 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-5 w-1/2 mb-3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg inline-block">
            {error}
          </div>
        </div>
      </section>
    );
  }

  // Hide the entire section if no teachers are found
  if (teachers.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {teachers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No educators found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teachersToShow.map((teacher) => (
                <div
                  key={teacher.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                    {!teacher.photo || teacher.photo.endsWith(".svg") ? (
                      <img
                        src={teacher.photo || "/images/placeholder-teacher.svg"}
                        alt={teacher.imageAlt || `${teacher.name || "Teacher"}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/images/placeholder-teacher.svg";
                        }}
                      />
                    ) : (
                      <Image
                        src={teacher.photo}
                        alt={teacher.imageAlt || `${teacher.name || "Teacher"}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/images/placeholder-teacher.svg";
                        }}
                      />
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground">
                      {teacher.name}
                    </h3>
                    <p className="text-green-600 font-medium mb-2">
                      {teacher.level}
                    </p>
                    <p className="text-muted-foreground mb-4 flex-1 italic">
                      {teacher.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {showViewMoreButton && (
              <div className="mt-10 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-2 text-base font-medium"
                >
                  {showAll ? "View Less" : "View More"}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
