import type React from "react"
import Link from "next/link"
import { Settings, UserPlus, Star, Archive, MessageSquare, Bell, Moon } from "lucide-react"

export default function MoreOptionsMenu() {
  return (
    <div className="py-1">
      <MenuItem href="/settings" icon={Settings} text="Settings" />
      <MenuItem href="/contacts/new" icon={UserPlus} text="New Contact" />
      <MenuItem href="/starred" icon={Star} text="Starred Messages" />
      <MenuItem href="/archived" icon={Archive} text="Archived Chats" />
      <MenuItem href="/broadcast/new" icon={MessageSquare} text="Broadcast" />
      <MenuItem href="/notifications" icon={Bell} text="Notifications" />
      <MenuItem href="#" icon={Moon} text="Dark Mode" />
    </div>
  )
}

function MenuItem({
  href,
  icon: Icon,
  text,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  text: string
}) {
  return (
    <Link href={href} className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-secondary rounded-md">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <span>{text}</span>
    </Link>
  )
}

