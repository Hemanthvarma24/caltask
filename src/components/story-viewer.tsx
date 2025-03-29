"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { X, Smile, Mic, Paperclip, Send } from "lucide-react"
import Image from "next/image"

interface StoryViewerProps {
  story: {
    name: string
    avatar: string
    content?: string
    time?: string
    isMyStory?: boolean
  }
  onClose: () => void
}

export default function StoryViewer({ story, onClose }: StoryViewerProps) {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Start/reset progress timer
  const startProgressTimer = useCallback(() => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current)
    }

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (progressTimerRef.current) {
            clearInterval(progressTimerRef.current)
          }
          return 100
        }
        return prev + 0.5
      })
    }, 50)
  }, [])

  // Start/reset close timer
  const startCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }

    closeTimerRef.current = setTimeout(() => {
      onClose()
    }, 10000)
  }, [onClose])

  // Initialize timers when component mounts
  useEffect(() => {
    setProgress(0)
    setImageLoaded(false)
    startProgressTimer()
    startCloseTimer()

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [story.name, startProgressTimer, startCloseTimer]) // Added missing dependencies

  // Pause/resume story on user interaction
  const handleStoryClick = () => {
    setIsPaused(!isPaused)

    if (isPaused) {
      // Resume
      startProgressTimer()
      startCloseTimer()
    } else {
      // Pause
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }

  // Reset timers when image loads
  useEffect(() => {
    if (imageLoaded) {
      setProgress(0)
      startProgressTimer()
      startCloseTimer()
    }
  }, [imageLoaded, startProgressTimer, startCloseTimer]) // Added missing dependencies

  // Handle message sending
  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message.trim()])
      setMessage("")

      // Pause story briefly when sending a message
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)

      // Resume after a short delay
      setTimeout(() => {
        startProgressTimer()
        startCloseTimer()
      }, 1000)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-700">
        <div
          className="h-full bg-green-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={story.avatar || "/placeholder.svg"}
              alt={story.name}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-white text-sm font-medium">{story.name}</p>
            <p className="text-gray-400 text-xs">{story.time || "10 min ago"}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Story content and messages */}
      <div className="flex-1 flex flex-col">
        {/* Image container with click handler to pause/resume */}
        <div className="flex-grow relative" onClick={handleStoryClick}>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-white"></div>
            </div>
          )}
          <Image
            src={story.content || "/placeholder.svg"}
            alt="Story content"
            fill
            className={`object-contain transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="bg-white/20 rounded-full p-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-4 h-12 bg-white mx-1 rounded-sm"></div>
                  <div className="w-4 h-12 bg-white mx-1 rounded-sm"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Messages container */}
        {messages.length > 0 && (
          <div className="absolute bottom-20 left-0 right-0 px-4 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={`message-${index}`}
                className="bg-white/20 backdrop-blur-sm text-white rounded-lg px-3 py-2 max-w-[80%] self-start animate-fade-in"
              >
                {msg}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Message input */}
      <div className="p-4">
        <div className="flex items-center gap-2 bg-white rounded-full p-2 px-4">
          <Smile className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Send message to ${story.name}...`}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 outline-none text-sm"
          />
          <Mic className="w-6 h-6 text-gray-500" />
          <Paperclip className="w-6 h-6 text-gray-500" />
          <button
            onClick={handleSendMessage}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}