"use client"

import Header from "@/components/header"
import Footer from "@/components/Footer"
import CallListItem from "@/components/call-list-item"
import { PhoneCall } from "lucide-react"
import Link from "next/link"

// Profile Images
import michael from "@/app/assets/profile/p2.png"
import Kristin from "@/app/assets/profile/p3.png"
import killer from "@/app/assets/profile/p4.png"
import John from "@/app/assets/profile/p5.png"
import profileOne from "@/app/assets/profile/p7.png"
import profileTwo from "@/app/assets/profile/p8.png"
import profileThree from "@/app/assets/profile/p9.png"
import profileFour from "@/app/assets/profile/p10.png"

export default function CallsPage() {
  return (
    <div className="pb-16">
     <Header title="Call History" backLink="/chat" showSearch={true} showDelete={true} />


      <main className="container mx-auto px-4 py-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Recent Calls</h3>

        <ul className="divide-y divide-border">
          <CallListItem
            name="Michael"
            image={michael.src}
            time="Today | 2:16 PM"
            type="audio"
            status="outgoing"
            link="/calls/audio-ringing"
          />

          <CallListItem
            name="Kristin"
            image={Kristin.src}
            time="Today | 1:45 PM"
            type="video"
            status="incoming"
            link="/calls/video-ringing"
          />

          <CallListItem
            name="John"
            image={John.src}
            time="Yesterday | 6:20 PM"
            type="audio"
            status="missed"
            link="/calls/audio-ringing"
          />

          <CallListItem
            name="Killer"
            image={killer.src}
            time="Yesterday | 4:50 PM"
            type="audio"
            status="outgoing"
            link="/calls/audio-ringing"
          />

          <CallListItem
            name="Samantha"
            image={profileOne.src}
            time="March 25 | 10:05 AM"
            type="video"
            status="incoming"
            link="/calls/video-ringing"
          />

          <CallListItem
            name="Daniel"
            image={profileTwo.src}
            time="March 24 | 9:30 PM"
            type="audio"
            status="outgoing"
            link="/calls/audio-ringing"
          />

          <CallListItem
            name="Jessica"
            image={profileThree.src}
            time="March 23 | 11:20 AM"
            type="video"
            status="missed"
            link="/calls/video-ringing"
          />

          <CallListItem
            name="Emma"
            image={profileFour.src}
            time="March 22 | 7:15 PM"
            type="audio"
            status="incoming"
            link="/calls/audio-ringing"
          />
        </ul>
      </main>

      <div className="fixed bottom-20 right-6">
        <Link
          href="/calls/new"
          className="bg-primary text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg"
        >
          <PhoneCall className="h-6 w-6" />
        </Link>
      </div>

      <Footer />
    </div>
  )
}
