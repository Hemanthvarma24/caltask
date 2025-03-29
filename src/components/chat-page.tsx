"use client"

import type React from "react"
import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import {
  Menu,
  Search,
  MoreVertical,
  MessageSquare,
  Plus,
  ArrowLeft,
  Video,
  Headphones,
  FileText,
  Gift,
  MessageCircle,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Footer from "@/components/Footer"
import SidebarMenu from "@/components/sidebar-menu"
import MoreOptionsMenu from "@/components/more-options-menu"
import StoryViewer from "./story-viewer"
import Mystory from "@/app/assets/profile/p1.png"
import michael from "@/app/assets/profile/p2.png"
import Kristin from "@/app/assets/profile/p3.png"
import killer from "@/app/assets/profile/p4.png"
import John from "@/app/assets/profile/p5.png"
import profileOne from "@/app/assets/profile/p7.png"
import profileTwo from "@/app/assets/profile/p8.png"
import profileThree from "@/app/assets/profile/p9.png"
import profileFour from "@/app/assets/profile/p10.png"
import profileSeven from "@/app/assets/profile/p13.png"
import logo from "@/app/assets/logo/mini-logo.png"


interface ChatItem {
  name: string
  avatar: StaticImageData | string
  lastMessage: string
  time: string
  unread?: number
  isTyping?: boolean
  isPinned?: boolean
  isMuted?: boolean
  isLiked?: boolean
}

interface StoryItem {
  name: string
  avatar: string | StaticImageData
  content?: string
  time?: string
  isMyStory?: boolean
}

interface SearchFilterItem {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export default function ChatPage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null)

  const stories: StoryItem[] = [
    {
      name: "My Story",
      avatar: michael,
      content: "/placeholder.svg?height=600&width=400",
      isMyStory: true,
    },
    {
      name: "Michael",
      avatar: killer,
      content: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Kristin",
      avatar: Kristin,
      content: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Trunk",
      avatar: Mystory,
      content: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "John",
      avatar: John,
      content: "/placeholder.svg?height=600&width=400",
    },
  ]

  const chats: ChatItem[] = [
    {
      name: "Weekend Plan",
      avatar: michael,
      lastMessage: "Sima : Is there any plan on this Weekend",
      time: "11:30 PM",
      isPinned: true,
    },
    {
      name: "Albert Flores",
      avatar: killer,
      lastMessage: "This is nice, I love it ❤️",
      time: "Just Now",
      isMuted: true,
      isLiked: true,
    },
    {
      name: "Ann Thomas",
      avatar: profileOne,
      lastMessage: "What are you doing now ?",
      time: "12:55 AM",
      unread: 1,
    },
    {
      name: "Guy Hawkins",
      avatar: profileTwo,
      lastMessage: "Typing",
      time: "Yesterday",
      isTyping: true,
    },
    {
      name: "Edward Turner",
      avatar: profileSeven,
      lastMessage: "Sent you image",
      time: "13/12/2023",
      unread: 1,
    },
    {
      name: "Great Thoughts",
      avatar: profileThree,
      lastMessage: "You : This is COOL",
      time: "11:30 PM",
    },
    {
      name: "Joseph James",
      avatar: profileFour,
      lastMessage: "Hello there!",
      time: "11/12/2023",
    },
  ]

  const searchFilterItems: SearchFilterItem[] = [
    { icon: Video, text: "Video" },
    { icon: Headphones, text: "Audios" },
    { icon: FileText, text: "Documents" },
    { icon: Gift, text: "GIFs" },
    { icon: MessageCircle, text: "Unread" },
  ]

  const handleStoryClick = (story: StoryItem) => {
    setActiveStory(story)
  }

  const closeStory = () => {
    setActiveStory(null)
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-border">
        <div className="container px-4 mx-auto max-w-md">
          <div className="flex items-center justify-between py-4">
            {/* Left Section */}
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                  <SidebarMenu />
                </SheetContent>
              </Sheet>
            </div>

            {/* Center Logo & Title */}
            <div className="flex items-center gap-2">
              <Image src={logo || "/placeholder.svg"} alt="Caltrak Logo" width={32} height={32} className="w-8 h-8" />
              <h1 className="text-xl font-semibold">Caltrak</h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-full hover:bg-gray-100">
                <Search className="h-5 w-5" />
              </button>

              {/* More Options Dropdown */}
              <Popover>
                <PopoverTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-2 bg-white shadow-md rounded-lg">
                  <MoreOptionsMenu />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Animated Search Bar */}
        <div
          className={`absolute top-0 left-0 w-full bg-white border-b border-border transition-all duration-300 ${
            searchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className="container px-4 mx-auto max-w-md py-3 flex items-center gap-2">
            <button onClick={() => setSearchOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 p-2 border rounded-lg focus:outline-none"
            />
          </div>

          {/* Search Filter Options */}
          <div className="container px-4 mx-auto max-w-md py-3 flex flex-wrap gap-2">
            {searchFilterItems.map(({ icon: Icon, text }, idx) => (
              <button key={idx} className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full">
                <Icon className="h-4 w-4" /> {text}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Stories Section */}
      <div className="container px-4 mx-auto max-w-md">
        <div className="py-4">
          <h2 className="text-sm font-medium mb-3 text-muted-foreground">Recent Update</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {stories.map((story, index) => (
              <StoryItem key={index} story={story} onClick={() => handleStoryClick(story)} />
            ))}
          </div>
        </div>

        {/* Chats Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium text-muted-foreground">Chat ({chats.length})</h2>
          </div>
          <div className="divide-y divide-border">
            {chats.map((chat, index) => (
              <ChatItem key={index} chat={chat} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* New Message Button */}
      <Link
        href="/select-contact"
        className="fixed bottom-20 right-4 w-12 h-12 bg-[#02ab86] rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Link>

      {/* Story Viewer */}
      {activeStory && <StoryViewer onClose={closeStory} story={{
        name: "",
        avatar: "",
        content: undefined,
        time: undefined,
        isMyStory: undefined
      }} />}
    </div>
  )
}

// Story Item Component
function StoryItem({ story, onClick }: { story: StoryItem; onClick: () => void }) {
  return (
    <div className="flex flex-col items-center min-w-[60px]" onClick={onClick}>
      <div className="relative mb-1 cursor-pointer">
        <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-r from-pink-500 to-primary">
          <div className="w-full h-full rounded-full overflow-hidden bg-background p-0.5">
            {typeof story.avatar === "string" ? (
              <Image
                src={story.avatar || "/placeholder.svg"}
                alt={story.name}
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={story.avatar || "/placeholder.svg"}
                alt={story.name}
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
        {story.isMyStory && (
          <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
            <Plus className="h-3 w-3" />
          </div>
        )}
      </div>
      <span className="text-xs truncate max-w-[60px]">{story.name}</span>
    </div>
  )
}

// Chat Item Component
function ChatItem({ chat }: { chat: ChatItem }) {
  return (
    <Link href={`/chat/${encodeURIComponent(chat.name)}`} className="flex items-center gap-3 py-3">
      <div className="relative">
        <Image
          src={chat.avatar || "/placeholder.svg"}
          alt={chat.name}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full object-cover"
        />
        {chat.unread && (
          <div className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {chat.unread}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="font-medium truncate">{chat.name}</h3>
          <span className={`text-xs ${chat.time === "Just Now" ? "text-primary" : "text-muted-foreground"}`}>
            {chat.time}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p
            className={`text-sm truncate ${
              chat.isTyping ? "text-primary" : "text-muted-foreground"
            } ${chat.isTyping ? "flex items-center" : ""}`}
          >
            {chat.isTyping ? (
              <>
                <span>Typing</span>
                <span className="flex ml-1 typing-animation">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </>
            ) : (
              <>
                {chat.lastMessage}
                {chat.isLiked && <span className="inline-block ml-1 text-red-500">❤️</span>}
              </>
            )}
          </p>
          <div className="flex items-center gap-1">
            {chat.isPinned && <PinnedIcon />}
            {chat.isMuted && <MutedIcon />}
          </div>
        </div>
      </div>
    </Link>
  )
}

// Pinned Icon Component
function PinnedIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-muted-foreground"
    >
      <path
        d="M12 11V17M12 11L9 8M12 11L15 8M7 5H17M5 5H19V5.5L18 7M5 19H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Muted Icon Component
function MutedIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-muted-foreground"
    >
      <path
        d="M17 14L19.2929 16.2929C19.6834 16.6834 20.3166 16.6834 20.7071 16.2929L22 15M14 9.5L14 4.5C14 3.67157 13.3284 3 12.5 3L11.5 3C10.6716 3 10 3.67157 10 4.5L10 9.5L6.5 14C5.67157 14 5 14.6716 5 15.5L5 16.5C5 17.3284 5.67157 18 6.5 18L17.5 18C18.3284 18 19 17.3284 19 16.5L19 15.5C19 14.6716 18.3284 14 17.5 14L14 9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}