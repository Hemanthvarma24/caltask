"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Video, ArrowUp } from "lucide-react";
import michael from "@/app/assets/profile/p2.png";
import killer from "@/app/assets/profile/p4.png";
import John from "@/app/assets/profile/p5.png";
import profileOne from "@/app/assets/profile/p7.png";
import profileThree from "@/app/assets/profile/p9.png";
import profileFour from "@/app/assets/profile/p10.png";
import profileSix from "@/app/assets/profile/p12.png";
import profileSeven from "@/app/assets/profile/p13.png";

const callData = [
  {
    id: "1",
    name: "Eleanor",
    image: michael,
    time: "Today | 2:16 PM",
    type: "audio",
    direction: "outgoing",
  },
  {
    id: "2",
    name: "Eleanor",
    image: killer,
    time: "Today | 2:16 PM",
    type: "video",
    direction: "outgoing",
  },
  {
    id: "3",
    name: "Eleanor",
    image: profileOne,
    time: "Today | 2:16 PM",
    type: "audio",
    direction: "incoming",
  },
  {
    id: "4",
    name: "Eleanor",
    image: profileFour,
    time: "Today | 2:16 PM",
    type: "audio",
    direction: "outgoing",
  },
  {
    id: "5",
    name: "Eleanor",
    image: profileSix,
    time: "Today | 2:16 PM",
    type: "audio",
    direction: "missed",
  },
  {
    id: "6",
    name: "Eleanor",
    image: profileThree,
    time: "Today | 2:16 PM",
    type: "audio",
    direction: "outgoing",
  },
  {
    id: "7",
    name: "Eleanor",
    image: profileSeven,
    time: "Today | 2:16 PM",
    type: "video",
    direction: "missed",
  },
  {
    id: "8",
    name: "Eleanor",
    image: John,
    time: "Today | 2:16 PM",
    type: "video",
    direction: "incoming",
  },
  {
    id: "9",
    name: "Eleanor",
    image: profileSix,
    time: "Today | 2:16 PM",
    type: "audio",
    direction: "missed",
  },
  {
    id: "10",
    name: "Eleanor",
    image: profileFour,
    time: "Today | 2:16 PM",
    type: "audio",
    direction: "outgoing",
  },
];

export default function CallHistory() {
  const getCallIconColor = (direction: string) => {
    if (direction === "missed") return "text-destructive";
    if (direction === "incoming") return "text-green-500";
    return "text-primary";
  };

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <h6 className="text-muted-foreground font-medium mb-4">Recent Calls</h6>
        <ul className="space-y-4">
          {callData.map((call) => (
            <li key={call.id} className="relative">
              <div className="flex items-center justify-between p-3 bg-card rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      className="w-12 h-12 rounded-full object-cover"
                      src={call.image || "/placeholder.svg"}
                      alt={call.name}
                    />
                  </div>
                  <div>
                    <h5 className="font-medium">{call.name}</h5>
                    <h6 className="text-sm text-muted-foreground flex items-center gap-1">
                      <ArrowUp
                        className={`h-3 w-3 ${getCallIconColor(
                          call.direction
                        )} ${
                          call.direction === "incoming" ? "rotate-180" : ""
                        }`}
                      />
                      {call.time}
                    </h6>
                  </div>
                </div>

                <Link
                  href={`/calls/${call.type}-call/${call.id}/ringing`}
                  className="p-2 rounded-full hover:bg-muted"
                >
                  {call.type === "audio" ? (
                    <Phone
                      className={`h-5 w-5 ${getCallIconColor(call.direction)}`}
                    />
                  ) : (
                    <Video
                      className={`h-5 w-5 ${getCallIconColor(call.direction)}`}
                    />
                  )}
                </Link>

                {/* Decorative dots */}
                <div className="dots-chain3 absolute -bottom-2 left-6 opacity-10"></div>
                <div className="dots-chain4 absolute -bottom-4 left-8 opacity-5"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
