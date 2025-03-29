"use client"

import { useState } from "react"
import Header from "@/components/header"
import CallButton from "@/components/call-button"
import Image from "next/image"

export default function VideoRingingPage() {
  const [isRinging, setIsRinging] = useState(true)

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Header title="" backLink="/calls" />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h2 className="text-xl font-semibold text-white mb-2">
        &quot;Stars{" "}
          <span className="inline-block mx-1">
            <Image src="/placeholder.svg?height=20&width=20" alt="Ring" width={20} height={20} />
          </span>
          &quot; Group Video Call
        </h2>

        {isRinging && <p className="text-primary font-medium">Ringing...</p>}

        <div className="mt-auto mb-12 w-full">
          <div className="flex justify-center mb-8">
            <CallButton type="message" href="/chat" />
          </div>

          <div className="flex justify-center items-center gap-6">
            <CallButton type="decline" href="/calls" />
            <CallButton type="answer" href="/calls/video-received" onClick={() => setIsRinging(false)} />
          </div>
        </div>
      </main>
    </div>
  )
}

