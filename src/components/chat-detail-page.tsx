"use client"

import React, { useState, useRef, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, Phone, MoreVertical, Mic, Send, Smile, Video } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import michael from "@/app/assets/profile/p2.png"
import killer from "@/app/assets/profile/p4.png"
import profileFour from "@/app/assets/profile/p10.png"
import profileSeven from "@/app/assets/profile/p13.png"
import wallpaper from "@/app/assets/svg/whatsapp.svg"
import call from "@/app/assets/profile/p11.png"

interface Message {
  content: string
  sender: "me" | "other"
  time: string
  isStarred?: boolean
  isRead?: boolean
  media?: {
    type: "image" | "document" | "audio" | "video"
    url: string
  }[]
  reaction?: string
}

// Chat data with chat names as keys
const chatData: Record<
  string,
  {
    name: string
   avatar: string | StaticImageData
    status: string
    messages: Message[]
  }
> = {
  "Weekend Plan": {
    name: "Weekend Plan",
    avatar: michael,
    status: "Online",
    messages: [
      {
        content: "Let's go on a vacation, i have exciting vacation plans!",
        sender: "other",
        time: "11:45 AM",
        isStarred: true,
      },
      {
        content: "Let's go, but what's the plan?",
        sender: "me",
        time: "11:45 AM",
        isRead: true,
      },
      {
        content: "I've vacation plan in Goa for next week.",
        sender: "other",
        time: "11:45 AM",
        media: [
          {
            type: "image",
            url: "/placeholder.svg?height=200&width=200",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=200&width=200",
          },
        ],
        reaction: "❤️",
      },
      {
        content: "Wow Look amazing...",
        sender: "me",
        time: "11:45 AM",
        isStarred: true,
        isRead: true,
      },
    ],
  },
  "Albert Flores": {
    name: "Albert Flores",
    avatar: killer,
    status: "Last seen 2h ago",
    messages: [
      {
        content: "This is nice, I love it ❤️",
        sender: "other",
        time: "Just Now",
        isStarred: true,
      },
      {
        content: "Thank you! I'm glad you like it.",
        sender: "me",
        time: "Just Now",
        isRead: true,
      },
    ],
  },
  "Ann Thomas": {
    name: "Ann Thomas",
    avatar: profileFour,
    status: "Online",
    messages: [
      {
        content: "What are you doing now?",
        sender: "other",
        time: "12:55 AM",
      },
      {
        content: "Just working on some code. How about you?",
        sender: "me",
        time: "12:56 AM",
        isRead: true,
      },
    ],
  },
  "Guy Hawkins": {
    name: "Guy Hawkins",
    avatar: profileSeven,
    status: "Online",
    messages: [
      {
        content: "Hey, how's it going?",
        sender: "other",
        time: "Yesterday",
      },
      {
        content: "Pretty good! Just finished a project.",
        sender: "me",
        time: "Yesterday",
        isRead: true,
      },
    ],
  },
};

// Export chat data for use in other components
export { chatData };

interface ChatDetailPageProps {
  chatName?: string;
}

export default function ChatDetailPage({ chatName }: ChatDetailPageProps) {
  const router = useRouter()
  const defaultChatName = "Weekend Plan"
  const effectiveChatName = chatName || defaultChatName

  // Get chat data based on name or use default if not found
  const currentChat = chatData[effectiveChatName] || chatData[defaultChatName]

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>(currentChat.messages)
  const [isTyping, setIsTyping] = useState(effectiveChatName === "Guy Hawkins") // Only show typing for Guy Hawkins
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Update messages when chat name changes
    setMessages(chatData[effectiveChatName]?.messages || [])
    setIsTyping(effectiveChatName === "Guy Hawkins")
  }, [effectiveChatName])

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        content: message,
        sender: "me",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isRead: false,
      }

      setMessages((prevMessages) => [...prevMessages, newMessage])
      setMessage("")

      // Simulate reply for demo purposes
      if (Math.random() > 0.5) {
        setTimeout(() => {
          setIsTyping(true)

          setTimeout(() => {
            setIsTyping(false)
            const replyMessage: Message = {
              content: "Thanks for your message!",
              sender: "other",
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            }
            setMessages((prevMessages) => [...prevMessages, replyMessage])
          }, 2000)
        }, 1000)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleEmojiClick = (emoji: string) => {
    setMessage((prevMessage) => prevMessage + emoji)
    setShowEmojiPicker(false)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 relative">
      {/* Fixed Wallpaper Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={wallpaper}
          alt="Chat background"
          fill
          className="object-cover fixed"
          priority
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#02ab86] text-white py-3">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/chat">
                <ChevronLeft className="h-6 w-6" />
              </Link>
              <Link href={`/profile/${encodeURIComponent(effectiveChatName)}`} className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={currentChat.avatar || "/placeholder.svg"}
                    alt={currentChat.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{currentChat.name}</h4>
                  <p className="text-xs text-white/75">{currentChat.status}</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="p-2 rounded-full hover:bg-white/10"
                onClick={() => router.push(`/calls/audio-ringing`)}
              >
                <Phone className="h-5 w-5" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-white/10"
                onClick={() => router.push(`/calls/video-ringing`)}
              >
                <Video className="h-5 w-5" />
              </button>
              <ChatOptionsMenu chatName={effectiveChatName} />
            </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 relative z-10">
        <div className="mx-auto max-w-md">
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 bg-white/80 rounded-full text-xs text-gray-600">
              Today 11:45 AM
            </span>
          </div>

          {messages.map((msg, index) => (
            <MessageBubble key={index} message={msg} />
          ))}

          {isTyping && (
            <div className="flex items-start gap-2 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={currentChat.avatar || "/placeholder.svg"}
                  alt={currentChat.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input Area */}
      <div className="bg-white/90 p-2 flex items-center relative z-20">
        <div className="flex items-center w-full bg-gray-100 rounded-full relative pr-14">
          {/* Emoji Button */}
          <button className="p-3 text-gray-500" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
            <Smile className="h-5 w-5" />
          </button>

          {/* Message Input */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type here..."
            className="flex-1 bg-transparent border-none focus:outline-none py-2 px-1"
          />

          {/* Voice Message */}
          <button className="p-3 text-gray-500">
            <Mic className="h-5 w-5" />
          </button>
        </div>

        {/* Send Button - Positioned to overlap */}
        <button
          onClick={handleSendMessage}
          className="absolute right-2 p-3 bg-[#00a884] text-white rounded-full shadow-md"
        >
          <Send className="h-5 w-5" />
        </button>

        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="absolute bottom-full right-0 mb-2">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isMe = message.sender === "me"

  return (
    <div className={`flex items-start gap-2 mb-4 ${isMe ? "flex-row-reverse" : ""}`}>
      {!isMe && (
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src={call} alt="Contact" width={40} height={40} className="object-cover" />
        </div>
      )}
      <div className={`rounded-lg p-3 shadow-sm max-w-[80%] ${isMe ? "bg-[#02ab86] text-white" : "bg-white"}`}>
        {message.media && message.media.length > 0 && (
          <div className="grid grid-cols-2 gap-1 mb-2">
            {message.media.slice(0, 4).map((media, index) => (
              <div key={index} className="relative h-20">
                <Image src={media.url || "/placeholder.svg"} alt="Media" fill className="rounded-md object-cover" />
                {index === 3 && message.media && message.media.length > 4 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md">
                    <span className="text-white font-medium">+{message.media.length - 4}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <p>{message.content}</p>
        <div className={`flex items-center gap-1 mt-1 text-xs ${isMe ? "text-white/70 justify-end" : "text-gray-500"}`}>
          {message.isStarred && <span>⭐</span>}
          <span>{message.time}</span>
          {isMe && message.isRead && <span className="text-blue-400">✓✓</span>}
        </div>
        {message.reaction && (
          <div className="mt-1">
            <span className="inline-block bg-white/20 rounded-full px-2 py-0.5 text-sm">{message.reaction}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function ChatOptionsMenu({ chatName }: { chatName: string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-2 rounded-full hover:bg-white/10">
          <MoreVertical className="h-5 w-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0" align="end">
        <div className="py-1">
          <Link href={`/profile/${encodeURIComponent(chatName)}`} className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
            View Info
          </Link>
          <button className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Reply</button>
          <button className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Mute Notification
          </button>
          <Link href="/settings/wallpaper" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
            Wallpaper
          </Link>
          <button className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Add Shortcut
          </button>
          <button className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Clear Chat</button>
          <button className="flex items-center w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
            Block
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function EmojiPicker({
  onEmojiClick,
}: {
  onEmojiClick: (emoji: string) => void
}) {
  const emojis = ["😀", "😍", "👍", "❤️", "🎉", "😢", "🤔", "🙌"]

  return (
    <div className="bg-white border rounded-lg shadow-lg p-2 grid grid-cols-4 gap-2">
      {emojis.map((emoji, index) => (
        <button key={index} onClick={() => onEmojiClick(emoji)} className="text-2xl hover:bg-gray-100 rounded">
          {emoji}
        </button>
      ))}
    </div>
  )
}