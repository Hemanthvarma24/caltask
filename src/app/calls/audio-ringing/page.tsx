"use client";

import { useState } from "react";
import Header from "@/components/header";
import CallButton from "@/components/call-button";
import Image from "next/image";
import callbg from "@/app/assets/call-bg.svg";
import profiletwo from "@/app/assets/profile/p10.png";

export default function AudioRingingPage() {
  const [isRinging, setIsRinging] = useState<boolean>(true);

  return (
    <div className="h-screen flex flex-col">
      <Header title="" backLink="/calls"  />

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
                src={profiletwo}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">Guy Hawkins Audio Call</h2>
        {isRinging ? (
          <p className="text-primary font-medium">Ringing...</p>
        ) : (
          <p className="text-muted-foreground">Connected</p>
        )}

        <div className="mt-auto mb-12 w-full">
          <div className="flex justify-center mb-8">
            <CallButton type="message" href="/chat" />
          </div>

          <div className="flex justify-center items-center gap-6">
            <CallButton type="decline" href="/calls" />
            <CallButton
              type="answer"
              href="/calls/audio-received"
              onClick={() => setIsRinging(false)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
