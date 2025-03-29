"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import Footer from "@/components/Footer"

export default function InviteFriends() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showNotificationModal, setShowNotificationModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  // Sample friends data - in a real app, you might fetch these from an API
  const friends = [
    { id: 1, name: "Albert Flores", image: "/placeholder.svg?height=50&width=50" },
    { id: 2, name: "Ann Thomas", image: "/placeholder.svg?height=50&width=50" },
    { id: 3, name: "Trunk Dawson", image: "/placeholder.svg?height=50&width=50" },
    { id: 4, name: "Edward Turner", image: "/placeholder.svg?height=50&width=50" },
    { id: 5, name: "Joseph James", image: "/placeholder.svg?height=50&width=50" },
    { id: 6, name: "Kelly Katelyn", image: "/placeholder.svg?height=50&width=50" },
    { id: 7, name: "Suzanne Bauch", image: "/placeholder.svg?height=50&width=50" },
    { id: 8, name: "Guy Hawkins", image: "/placeholder.svg?height=50&width=50" },
    { id: 9, name: "Lucie Larson", image: "/placeholder.svg?height=50&width=50" },
    { id: 10, name: "Mckayla Hickle", image: "/placeholder.svg?height=50&width=50" },
    { id: 11, name: "Ruth Goldner", image: "/placeholder.svg?height=50&width=50" },
  ]

  const filteredFriends = searchQuery
    ? friends.filter((friend) => friend.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : friends

  const handleInvite = () => {
    setShowNotificationModal(true)
  }

  const handleAllowNotifications = () => {
    setShowNotificationModal(false)
    setShowContactModal(true)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="px-4 py-3">
          <div className="flex items-center">
            <Link href="/settings" className="p-2 mr-3">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-semibold">Invite Friend</h1>
          </div>
        </div>
      </header>

      <div className="px-4 py-4 flex-grow">
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-3">
          {filteredFriends.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between p-3 rounded-lg bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={friend.image || "/placeholder.svg"}
                    alt={friend.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">{friend.name}</h3>
              </div>
              <Button onClick={handleInvite} className="px-4 py-1 h-8 text-sm">
                Invite
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Access Modal */}
      <Dialog open={showNotificationModal} onOpenChange={setShowNotificationModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto my-4">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Notification access"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
            <DialogTitle className="text-center text-xl">Be in Touch</DialogTitle>
          </DialogHeader>
          <div className="text-center text-gray-600 mb-4">Would you like to give access to your notifications?</div>
          <DialogFooter className="flex sm:justify-between border-t pt-4">
            <Button variant="outline" className="flex-1 mr-2" onClick={() => setShowNotificationModal(false)}>
              Deny
            </Button>
            <Button className="flex-1 ml-2" onClick={handleAllowNotifications}>
              Allow
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Contact Access Modal */}
      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto my-4">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Contact access"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
            <DialogTitle className="text-center text-xl">Contact Access</DialogTitle>
          </DialogHeader>
          <div className="text-center text-gray-600 mb-4">Would you like to give access to your phone book?</div>
          <DialogFooter className="flex sm:justify-between border-t pt-4">
            <Button variant="outline" className="flex-1 mr-2" onClick={() => setShowContactModal(false)}>
              Deny
            </Button>
            <Link href="/chat" className="flex-1 ml-2">
              <Button className="w-full">Allow</Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Footer/>
    </div>
  )
}

