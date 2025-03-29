"use client"

import type React from "react"
import Link from "next/link"
import {
  MessageSquare,
  Users,
  Radio,
  Phone,
  Star,
  UserPlus,
  User,
  RotateCcw,
  Moon,
  Settings,
  LogOut,
} from "lucide-react"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { usePathname } from "next/navigation"
import logo from "@/app/assets/logo/mini-logo.png"

export default function SidebarMenu() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
        <Image
                src={logo}
                alt="Caltrak Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
          <h1 className="text-xl font-semibold">Caltrak</h1>
        </div>
      </div>


      <div className="flex-1 overflow-auto">
        <SidebarMenuItem href="/chat" icon={MessageSquare} text="Chats" active={isActive("/chat")} />
        <SidebarMenuItem href="/group/new" icon={Users} text="New Group" active={isActive("/group/new")} />
        <SidebarMenuItem href="/broadcast/new" icon={Radio} text="New Broadcast" active={isActive("/broadcast/new")} />
        <SidebarMenuItem href="/calls" icon={Phone} text="New Calls" active={isActive("/calls")} />
        <SidebarMenuItem href="/starred" icon={Star} text="Starred Message" active={isActive("/starred")} />
        <SidebarMenuItem
          href="/contacts/new"
          icon={UserPlus}
          text="Add New Contact"
          active={isActive("/contacts/new")}
        />
        <SidebarMenuItem href="/profile" icon={User} text="Profile" active={isActive("/profile")} />

        <div className="px-2 flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground">RTL</span>
          </div>
          <Switch />
        </div>

        <div className="px-2 flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <Moon className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground">Dark</span>
          </div>
          <Switch />
        </div>
      </div>

      <div className="p-4 border-t border-border flex justify-between">
        <Link href="/settings" className="flex items-center gap-2 p-2">
          <Settings className="h-5 w-5" />
          <span>Setting</span>
        </Link>

        <Link href="/logout" className="flex items-center gap-2 p-2">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  )
}

// Sidebar Menu Item Component
function SidebarMenuItem({
  href,
  icon: Icon,
  text,
  active = false,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  text: string
  active?: boolean
}) {
  return (
    <div className="px-2">
      <Link
        href={href}
        className={`flex items-center gap-3 p-3 rounded-md ${active ? "bg-secondary/50" : "hover:bg-secondary/30"}`}
      >
        <Icon className={`h-5 w-5 ${active ? "text-[#02ab86]" : "text-muted-foreground"}`} />
        <span className={active ? "font-medium text-[#02ab86]" : "text-muted-foreground"}>{text}</span>
      </Link>
    </div>
  )
}

