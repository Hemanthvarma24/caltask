"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ChevronLeft, Search, StarOff, ChevronRight } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Mystory from "@/app/assets/profile/p1.png"
import michael from "@/app/assets/profile/p2.png"
import Kristin from "@/app/assets/profile/p3.png"
import killer from "@/app/assets/profile/p4.png"
import John from "@/app/assets/profile/p5.png"

interface StarredMessage {
  id: string
  content: string
  sender: {
    id: string
    name: string
    avatar: StaticImageData | string
  }
  receiver: {
    id: string
    name: string
  }
  date: string
  time: string
  type: "text" | "document" | "image"
  fileInfo?: {
    name: string
    type: string
    size: string
    pages?: number
  }
}

export default function StarredMessagesPage() {
  const [starredMessages] = useState<StarredMessage[]>([
    {
      id: "1",
      content: "Google Password : 4896",
      sender: {
        id: "1",
        name: "Johnny",
        avatar: Mystory,
      },
      receiver: {
        id: "me",
        name: "You",
      },
      date: "10/12/2022",
      time: "11:45 AM",
      type: "text",
    },
    {
      id: "2",
      content: "I don't know, what is the real reason. But i'm sure he is't wrong.",
      sender: {
        id: "2",
        name: "Justin",
        avatar: michael,
      },
      receiver: {
        id: "me",
        name: "You",
      },
      date: "10/12/2022",
      time: "11:45 AM",
      type: "text",
    },
    {
      id: "3",
      content: "",
      sender: {
        id: "me",
        name: "You",
        avatar: killer,
      },
      receiver: {
        id: "3",
        name: "Aenny",
      },
      date: "08/12/2022",
      time: "11:45 AM",
      type: "document",
      fileInfo: {
        name: "Smitten Shah 01.pdf",
        type: "PDF",
        size: "256 KB",
        pages: 1,
      },
    },
    {
      id: "4",
      content: "",
      sender: {
        id: "me",
        name: "You",
        avatar: Kristin,
      },
      receiver: {
        id: "4",
        name: "Bristin",
      },
      date: "10/12/2022",
      time: "11:45 AM",
      type: "document",
      fileInfo: {
        name: "Poster App.api",
        type: "API",
        size: "18 MB",
        pages: 1,
      },
    },
    {
      id: "5",
      content: "",
      sender: {
        id: "5",
        name: "Mike",
        avatar: John,
      },
      receiver: {
        id: "me",
        name: "You",
      },
      date: "10/12/2022",
      time: "11:45 AM",
      type: "image",
      fileInfo: {
        name: "Marriage.png",
        type: "PNG",
        size: "1.3 MB",
      },
    },
  ])

  return (
    <div className="min-h-screen bg-background mb-6">
      {/* Header */}
      <header className="bg-Caltrak-primary text-white py-4">
        <div className="container px-4 mx-auto max-w-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/chat">
                <ChevronLeft className="h-6 w-6" />
              </Link>
              <h4 className="font-semibold">Starred Messages</h4>
            </div>
            <div className="flex items-center gap-3">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-white/10">
                    <Search className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="top" className="h-64">
                  <SheetHeader>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <input
                        type="search"
                        placeholder="Search here..."
                        className="flex-1 p-2 border rounded-lg focus:outline-none"
                      />
                    </div>
                  </SheetHeader>
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <SearchCategory icon="🎬" text="Video" />
                    <SearchCategory icon="🖼️" text="Photos" />
                    <SearchCategory icon="🎵" text="Audios" />
                    <SearchCategory icon="📄" text="Documents" />
                    <SearchCategory icon="🎭" text="GIFs" />
                    <SearchCategory icon="🔗" text="Links" />
                    <SearchCategory icon="💬" text="Unread" />
                  </div>
                </SheetContent>
              </Sheet>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-white/10">
                    <StarOff className="h-5 w-5" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Unstar All Messages !!</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <div className="flex justify-center mb-4">
                      <Image src="/placeholder.svg?height=150&width=150" alt="Unstar" width={150} height={150} />
                    </div>
                    <p className="text-center text-gray-600">Are you sure you want to unstar all messages?</p>
                  </div>
                  <DialogFooter className="flex justify-between">
                    <Button variant="outline" className="w-full">
                      Cancel
                    </Button>
                    <Button className="w-full bg-Caltrak-primary hover:bg-Caltrak-primary/90">Yes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Starred Messages List */}
      <section className="py-4">
        <div className="container px-4 mx-auto max-w-md">
          <ul className="space-y-4">
            {starredMessages.map((message) => (
              <li key={message.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-3 border-b flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={message.sender.avatar || "/placeholder.svg"}
                      alt={message.sender.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-medium">{message.sender.id === "me" ? "You" : message.sender.name}</h5>
                      <h6 className="text-xs text-gray-500">
                        {message.sender.id === "me" ? message.receiver.name : message.receiver.name}{" "}
                        <span>| {message.date}</span>
                      </h6>
                    </div>
                  </div>
                  <Link href={`/chat/${message.sender.id === "me" ? message.receiver.id : message.sender.id}`}>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </div>
                <div className="p-3">
                  {message.type === "text" && (
                    <div className="mb-2">
                      <p className="text-gray-800">{message.content}</p>
                    </div>
                  )}

                  {message.type === "document" && (
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                        <span className="text-xs font-medium">{message.fileInfo?.type}</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">{message.fileInfo?.name}</h5>
                        <h6 className="text-xs text-gray-500">
                          {message.fileInfo?.pages} Page | {message.fileInfo?.type} | {message.fileInfo?.size}
                        </h6>
                      </div>
                    </div>
                  )}

                  {message.type === "image" && (
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                        <span className="text-xs font-medium">IMG</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">{message.fileInfo?.name}</h5>
                        <h6 className="text-xs text-gray-500">
                          1 Image | {message.fileInfo?.type} | {message.fileInfo?.size}
                        </h6>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-2 text-xs text-gray-500">
                    <span>⭐</span>
                    <span>{message.time}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

function SearchCategory({ icon, text }: { icon: string; text: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-1">
        <span className="text-lg">{icon}</span>
      </div>
      <span className="text-xs">{text}</span>
    </button>
  )
}

