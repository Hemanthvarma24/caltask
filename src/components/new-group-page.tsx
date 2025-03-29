"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, PlusSquare } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Footer from "@/components/Footer"

interface Participant {
  id: string
  name: string
  avatar: string
}

export default function NewGroupPage() {
  const [groupTitle, setGroupTitle] = useState("")
  const [participants] = useState<Participant[]>([
    { id: "1", name: "Jessica", avatar: "/placeholder.svg?height=50&width=50" },
    { id: "2", name: "Michael", avatar: "/placeholder.svg?height=50&width=50" },
    { id: "3", name: "Kristin", avatar: "/placeholder.svg?height=50&width=50" },
    { id: "4", name: "Trunk", avatar: "/placeholder.svg?height=50&width=50" },
    { id: "5", name: "Johnny", avatar: "/placeholder.svg?height=50&width=50" },
    { id: "6", name: "John", avatar: "/placeholder.svg?height=50&width=50" },
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#02ab86] text-white py-4">
        <div className="container px-4 mx-auto max-w-md">
          <div className="flex items-center gap-2">
            <Link href="/chat">
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <div>
              <h4 className="font-semibold">New Group</h4>
              <h6 className="text-sm">Add Title & Photo</h6>
            </div>
          </div>
        </div>
      </header>

      {/* Group Profile Section */}
      <section className="py-8">
        <div className="container px-4 mx-auto max-w-md">
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Add Profile"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="absolute bottom-0 right-0 bg-[#02ab86] text-white rounded-full p-2">
                      <PlusSquare className="h-5 w-5" />
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Profile Photo</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 mt-4">
                      <button className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-md">
                        <div className="w-10 h-10 rounded-full bg-[#02ab86] flex items-center justify-center text-white">
                          <Image src="/placeholder.svg?height=24&width=24" alt="Gallery" width={24} height={24} />
                        </div>
                        <span>Select From Gallery</span>
                      </button>
                      <button className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-md">
                        <div className="w-10 h-10 rounded-full bg-[#02ab86] flex items-center justify-center text-white">
                          <Image src="/placeholder.svg?height=24&width=24" alt="Camera" width={24} height={24} />
                        </div>
                        <span>Open Camera</span>
                      </button>
                      <button className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-md">
                        <div className="w-10 h-10 rounded-full bg-[#02ab86] flex items-center justify-center text-white">
                          <Image src="/placeholder.svg?height=24&width=24" alt="Anonymous" width={24} height={24} />
                        </div>
                        <span>Set anonymous pic</span>
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-6">
                <label htmlFor="groupTitle" className="block text-sm font-medium mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="groupTitle"
                  value={groupTitle}
                  onChange={(e) => setGroupTitle(e.target.value)}
                  placeholder="Add group title"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#02ab86]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <h6 className="font-medium">Participant : {participants.length}</h6>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {participants.map((participant) => (
                    <div key={participant.id} className="flex flex-col items-center">
                      <Image
                        src={participant.avatar || "/placeholder.svg"}
                        alt={participant.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover mb-1"
                      />
                      <h5 className="text-sm truncate max-w-full">{participant.name}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/chat/group-new"
            className="fixed bottom-6 right-6 w-14 h-14 bg-[#02ab86] rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

