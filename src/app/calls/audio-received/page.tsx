"use client";

import { useState } from "react";
import Header from "@/components/header";
import CallButton from "@/components/call-button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronUp } from "lucide-react";
import profileOne from "@/app/assets/profile/p7.png";
import callbg from "@/app/assets/call-bg.svg";
import profiletwo from "@/app/assets/profile/p11.png";

export default function AudioReceivedPage() {
  const [callTime] = useState("00:45");

  return (
    <div className="h-screen flex flex-col">
      <Header title="You and 5 others" backLink="/chat" callTime={callTime} />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="relative w-full max-w-xs aspect-square mb-8">
          <Image
            src={callbg}
            alt="Call background"
            fill
            className="object-cover rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white">
              <Image
                src={profileOne}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-auto mb-6 w-full">
          <div className="flex justify-center gap-4 mb-8">
            <CallButton type="video" />
            <CallButton type="mute" />
          </div>

          <div className="flex justify-center items-center gap-4">
            <CallButton type="speaker" />
            <CallButton type="hangup" href="/chat" />
            <CallButton type="add-user" />
          </div>

          <div className="flex justify-center mt-6">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-primary">
                  <ChevronUp className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[70vh]">
                <div className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Call Participants
                  </h3>

                  <ul className="grid grid-cols-3 gap-4">
                    <li className="flex flex-col items-center">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mb-2">
                        <Image
                          src={profiletwo}
                          alt="You"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 right-0 h-4 w-4 bg-primary rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm">You</span>
                    </li>
                  </ul>

                  <button className="w-full mt-6 py-3 bg-secondary rounded-md text-primary font-medium">
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
      </main>
    </div>
  );
}
