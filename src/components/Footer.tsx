"use client"

import Link from "next/link"
import { Home, Phone, Settings, User } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-10">
      <div className="container mx-auto max-w-md">
        <div className="grid grid-cols-4 py-2">
          <Link
            href="/chat"
            className={`flex flex-col items-center justify-center p-2 ${
              isActive("/chat") ? "text-[#02ab86]" : "text-muted-foreground"
            } hover:text-[#02ab86]`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Chat</span>
          </Link>

          <Link
            href="/calls"
            className={`flex flex-col items-center justify-center p-2 ${
              isActive("/calls") ? "text-[#02ab86]" : "text-muted-foreground"
            } hover:text-[#02ab86]`}
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs mt-1">Calls</span>
          </Link>

          <Link
            href="/settings"
            className={`flex flex-col items-center justify-center p-2 ${
              isActive("/settings") ? "text-[#02ab86]" : "text-muted-foreground"
            } hover:text-[#02ab86]`}
          >
            <Settings className="h-5 w-5" />
            <span className="text-xs mt-1">Settings</span>
          </Link>

          <Link
            href="/updateprofile"
            className={`flex flex-col items-center justify-center p-2 ${
              isActive("/updateprofile") ? "text-[#02ab86]" : "text-muted-foreground"
            } hover:text-[#02ab86]`}
          >
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

