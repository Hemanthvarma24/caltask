"use client"

import Link from "next/link"
import { ChevronLeft, Search, Trash2 } from "lucide-react"

interface HeaderProps {
  title: string
  backLink: string
  showSearch?: boolean
  showDelete?: boolean
  subtitle?: string
  isVideoHeader?: boolean
  callTime?: string
}

export default function Header({
  title,
  backLink,
  showSearch = false,
  showDelete = false,
  subtitle,
  isVideoHeader = false,
  callTime,
}: HeaderProps) {
  return (
    <header className={`${isVideoHeader ? "p-0" : "py-4"} border-b border-border`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${isVideoHeader ? "video-header" : ""}`}>
          <div className="flex items-center gap-2">
            <Link href={backLink} className="p-2 rounded-full hover:bg-muted">
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <div>
              <h4 className={`font-semibold ${isVideoHeader ? "text-white" : "text-foreground"}`}>{title}</h4>
              {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {callTime && <h5 className="call-timing">{callTime}</h5>}

            {showSearch && (
              <button
                className="p-2 rounded-full hover:bg-muted"
                onClick={() => document.getElementById("search-offcanvas")?.classList.add("show")}
              >
                <Search className="h-6 w-6" />
              </button>
            )}

            {showDelete && (
              <button
                className="p-2 rounded-full hover:bg-muted"
                data-bs-toggle="modal"
                data-bs-target="#delate-call"
                onClick={() => document.getElementById("delete-call-modal")?.classList.add("show")}
              >
                <Trash2 className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

