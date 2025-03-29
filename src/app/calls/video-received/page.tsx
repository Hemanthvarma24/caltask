"use client";

import { useState } from "react";
import Header from "@/components/header";
import CallButton from "@/components/call-button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronUp } from "lucide-react";
import profileOne from "@/app/assets/profile/p7.png";
import profiletwo from "@/app/assets/profile/p6.png";
import profile from "@/app/assets/profile/p1.png"

export default function VideoReceivedPage() {
  const [callTime] = useState("10:45");

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Header
        title="You and 5 others"
        backLink="/chat"
        callTime={callTime}
    
      />

      <main className="flex-1 grid grid-cols-2 gap-2 p-2">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={profileOne}
            alt="Video call participant"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
            Person 1
          </div>
        </div>

        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={profiletwo}
            alt="Video call participant"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
            You
          </div>
        </div>
      </main>

      <div className="p-4 flex justify-center">
        <CallButton type="hangup" href="/chat" className="mb-4" />
      </div>

      <div className="flex justify-center mb-6">
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white">
              <ChevronUp className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="h-[70vh] bg-gray-900 text-white"
          >
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Call Participants</h3>

              <ul className="grid grid-cols-3 gap-4">
                <li className="flex flex-col items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mb-2">
                    <Image
                      src={profile}
                      alt="You"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 right-0 h-4 w-4 bg-primary rounded-full border-2 border-gray-900"></div>
                  </div>
                  <span className="text-sm">You</span>
                </li>
              </ul>

              <button className="w-full mt-6 py-3 bg-gray-800 rounded-md text-white font-medium">
                + Add New People
              </button>

              <div className="flex justify-around mt-8">
                <CallButton type="speaker" />
                <CallButton type="video" />
                <CallButton type="mute" />
                <CallButton type="hangup" href="/chat" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
