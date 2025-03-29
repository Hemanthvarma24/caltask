"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gifone from "@/app/assets/gif/1.gif";
import giftwo from "@/app/assets/gif/2.gif";
import gifthree from "@/app/assets/gif/3.gif";
import profileone from "@/app/assets/onboarding/1.png";
import profiletwo from "@/app/assets/onboarding/2.png";
import profilethree from "@/app/assets/onboarding/3.png";
import design from "@/app/assets/onboarding/line-design.svg";

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      gif: gifone,
      poster: profileone,
      title: "Now Discuss Anything",
      description:
        "Create conferences, invite people, Discuss any topic together.",
    },
    {
      gif: giftwo,
      poster: profiletwo,
      title: "See Each Other Anytime",
      description:
        "Get to see each other anywhere, anytime. Enjoy safe, discreet messaging",
    },
    {
      gif: gifthree,
      poster: profilethree,
      title: "Plan Anything & Anywhere",
      description:
        "Just call your group and plan your trip or meeting at any time.",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      className="min-h-screen bg-white overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-screen">
        <div className="h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="w-full h-[40vh] relative overflow-hidden">
                  <Image
                    src={slide.gif || "/placeholder.svg?height=400&width=400"}
                    alt={`Onboarding slide ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
                <div className="relative px-4">
                  <div className="bg-white rounded-t-3xl pt-4 pb-4 relative">
                    <div className="relative mx-auto max-w-[500px]">
                      <div className="relative mb-8">
                        <Image
                          src={slide.poster || "/placeholder.svg?height=300&width=300"}
                          alt="Poster"
                          width={300}
                          height={300}
                          className="mx-auto"
                        />
                      </div>
                      <div className="text-center px-4">
                        <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                        <div className="mb-3">
                          <Image
                            src={design}
                            alt="border-design"
                            width={150}
                            height={10}
                            className="mx-auto"
                          />
                        </div>
                        <h5 className="text-gray-600 text-sm mb-6">
                          {slide.description}
                        </h5>
                        <Link href="/login" className="inline-block">
                          <div className="w-14 h-14 rounded-full bg-[#02ab86] flex items-center justify-center shadow-lg">
                            <ChevronRight className="text-white w-8 h-8" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hidden md:block"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6 text-teal-500" />
        </button>
      </div>
    </section>
  );
}
