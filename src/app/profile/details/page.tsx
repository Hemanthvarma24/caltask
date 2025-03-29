"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Bell, Send, ChevronRight, Edit } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import profileTwo from "@/app/assets/profile/p8.png"
import bgimg from "@/app/assets/background/group-bg.png"
import profileFour from "@/app/assets/profile/p10.png"
import profileFive from "@/app/assets/profile/p11.png"
import ring from "@/app/assets/svg/ring.svg"

interface GroupInfo {
  name: string
  avatar: string
  members: string
  isVerified?: boolean
}

export default function ProfilePage() {
  const [status] = useState("|| Beyond the Boundaries ||")
  const [groups] = useState<GroupInfo[]>([
    {
      name: "Stars",
      avatar: profileFour.src,
      members: "Asther, Smith, Bountry, You",
      isVerified: true
    },
    {
      name: "Nature Lover",
      avatar: profileFive.src,
      members: "Bheressa, Mutphy, Hawkins, Serlen, You",
      isVerified: false
    },
    {
      name: "Trip Plan",
      avatar: profileTwo.src,
      members: "Smitha, Seign, Kitly, Kreta, You",
      isVerified: false
    },
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Background Image */}
      <header className="relative h-64 bg-gray-300">
        <Image src={bgimg} alt="Profile Background" fill className="object-cover" />
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between">
          <Link href="/chat">
            <ChevronLeft className="h-8 w-8 text-white bg-black/20 rounded-full p-1" />
          </Link>
          <div className="flex gap-2">
            <button className="bg-black/20 rounded-full p-1">
              <Bell className="h-6 w-6 text-white" />
            </button>
            <button className="bg-black/20 rounded-full p-1">
              <Send className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">Guy Hawkins</h2>
          <p className="text-sm">74589 36521</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="absolute bottom-4 right-4 bg-black/20 rounded-full p-2">
              <Edit className="h-5 w-5 text-white" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Details</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center mt-4">
              <div className="relative mb-4">
                <Image
                  src={profileTwo}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <button className="absolute bottom-0 right-0 bg-chatzy-primary text-white rounded-full p-1">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input type="text" defaultValue="Good Wishes" className="w-full p-2 border rounded-md" />
                <button className="w-full mt-4 bg-chatzy-primary text-white py-2 rounded-md">Update</button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      {/* Profile Info */}
      <section className="bg-white p-4">
        <div className="container mx-auto max-w-md">
          <div className="mb-4">
            <h6 className="text-sm font-medium">Status :</h6>
            <p className="text-gray-700">{status}</p>
          </div>

          <div className="border-t pt-4">
            <ul className="space-y-4">
              <li>
                <Link href="/files/media" className="flex items-center justify-between">
                  <h5 className="font-medium">Media Files (12)</h5>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </li>
              <li>
                <Link href="/files/documents" className="flex items-center justify-between">
                  <h5 className="font-medium">Document Files (12)</h5>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </li>
              <li>
                <Link href="/files/links" className="flex items-center justify-between">
                  <h5 className="font-medium">Link Files (12)</h5>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Groups Section */}
      <section className="bg-white mt-2 p-4">
        <div className="container mx-auto max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h5 className="font-medium">Total People</h5>
            <span className="text-sm text-gray-500">{groups.length} Group</span>
          </div>

          <ul className="space-y-4">
            {groups.map((group) => (
              <li key={group.name}>
                <div className="flex items-center">
                  <Image
                    src={group.avatar}
                    alt={group.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h5 className="font-medium flex items-center">
                      {group.name}
                      {group.isVerified && (
                        <Image
                          src={ring}
                          alt="Verified"
                          width={16}
                          height={16}
                          className="ml-2"
                        />
                      )}
                    </h5>
                    <h6 className="text-sm text-gray-500">{group.members}</h6>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
