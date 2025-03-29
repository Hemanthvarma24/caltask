"use client"

import { Phone, MessageSquare, Video, MicOff, Volume2, UserPlus } from "lucide-react"
import Link from "next/link"

interface CallButtonProps {
  type: "answer" | "decline" | "hangup" | "message" | "video" | "mute" | "speaker" | "add-user"
  href?: string
  onClick?: () => void
  className?: string
}

export default function CallButton({ type, href, onClick, className = "" }: CallButtonProps) {
  const getButtonStyle = () => {
    switch (type) {
      case "answer":
        return "bg-primary text-white"
      case "decline":
      case "hangup":
        return "bg-destructive text-white"
      default:
        return "bg-secondary/80 text-primary"
    }
  }

  const getIcon = () => {
    switch (type) {
      case "answer":
      case "decline":
      case "hangup":
        return <Phone className={`h-6 w-6 ${type === "decline" || type === "hangup" ? "rotate-135" : ""}`} />
      case "message":
        return <MessageSquare className="h-6 w-6" />
      case "video":
        return <Video className="h-6 w-6" />
      case "mute":
        return <MicOff className="h-6 w-6" />
      case "speaker":
        return <Volume2 className="h-6 w-6" />
      case "add-user":
        return <UserPlus className="h-6 w-6" />
    }
  }

  const buttonSize = type === "answer" || type === "decline" || type === "hangup" ? "h-16 w-16" : "h-12 w-12"

  const button = (
    <button
      className={`${getButtonStyle()} ${buttonSize} rounded-full flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {getIcon()}
    </button>
  )

  if (href) {
    return <Link href={href}>{button}</Link>
  }

  return button
}

