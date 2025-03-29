"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Bell, Send, Trash, X } from "lucide-react"
import profileTwo from "@/app/assets/profile/p8.png"
import bgimg from "@/app/assets/background/group-bg.png"
import profileFour from "@/app/assets/profile/p10.png"
import profileFive from "@/app/assets/profile/p11.png"
import ring from "@/app/assets/svg/ring.svg"
import Footer from "@/components/Footer"

export default function ProfilePage() {
  // Removed unused state setters by using array destructuring with only first element
  const [status] = useState("|| Beyond the Boundaries ||")
  // Removed unused profileImage state
  const [userName] = useState("Guy Hawkins")
  const [phoneNumber] = useState("74589 36521")
  // Removed unused email state
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  
  const groups = [
    {
      name: "Stars",
      avatar: profileFour,
      members: "Asther, Smith, Bountry, You",
      isVerified: true
    },
    {
      name: "Nature Lover",
      avatar: profileFive,
      members: "Bheressa, Mutphy, Hawkins, Serlen, You",
      isVerified: false
    },
    {
      name: "Trip Plan",
      avatar: profileTwo,
      members: "Smitha, Seign, Kitly, Kreta, You",
      isVerified: false
    }
  ]

  // Removed unused handleImageUpload function

  return (
    <div className="min-h-screen bg-background">
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
            <button onClick={() => setShowDeleteModal(true)} className="bg-black/20 rounded-full p-1">
              <Trash className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">{userName}</h2>
          <p className="text-sm">{phoneNumber}</p>
        </div>
      </header>

      <section className="bg-white p-4">
        <div className="container mx-auto max-w-md">
          <div className="mb-4">
            <h6 className="text-sm font-medium">Status :</h6>
            <p className="text-gray-700">{status}</p>
          </div>
        </div>
      </section>

      <section className="bg-white mt-2 p-4">
        <div className="container mx-auto max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h5 className="font-medium">Total People</h5>
            <span className="text-sm text-gray-500">{groups.length} Group</span>
          </div>
          <ul className="space-y-4">
            {groups.map((group) => (
              <li key={group.name} className="flex items-center">
                <Image src={group.avatar} alt={group.name} width={50} height={50} className="w-12 h-12 rounded-full object-cover mr-3" />
                <div>
                  <h5 className="font-medium flex items-center">
                    {group.name}
                    {group.isVerified && <Image src={ring} alt="Verified" width={16} height={16} className="ml-2" />}
                  </h5>
                  <h6 className="text-sm text-gray-500">{group.members}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg relative">
            <button className="absolute top-2 right-2" onClick={() => setShowDeleteModal(false)}>
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-lg font-bold">Delete Account</h2>
            <p className="text-gray-600 text-sm">You will lose all your data. Still want to delete your account?</p>
            <div className="flex justify-between mt-4">
              <button onClick={() => setShowDeleteModal(false)} className="w-1/2 py-2 border rounded-lg text-gray-700">Cancel</button>
              <button className="w-1/2 py-2 text-red-500">Delete Account</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}