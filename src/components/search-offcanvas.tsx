"use client"

import { useState } from "react"
import { ChevronLeft, Search } from "lucide-react"

export default function SearchOffcanvas() {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { id: "video", name: "Video", icon: "/placeholder.svg?height=24&width=24" },
    { id: "photos", name: "Photos", icon: "/placeholder.svg?height=24&width=24" },
    { id: "audios", name: "Audios", icon: "/placeholder.svg?height=24&width=24" },
    { id: "calls", name: "Calls", icon: "/placeholder.svg?height=24&width=24" },
    { id: "gifs", name: "GIFs", icon: "/placeholder.svg?height=24&width=24" },
    { id: "links", name: "Links", icon: "/placeholder.svg?height=24&width=24" },
    { id: "unread", name: "Unread", icon: "/placeholder.svg?height=24&width=24" },
  ]

  return (
    <div
      id="search-offcanvas"
      className={`fixed inset-0 bg-background transform ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-muted">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative flex-1">
            <input
              type="search"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background"
              placeholder="Search here..."
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <ul className="grid grid-cols-4 gap-4">
          {categories.map((category) => (
            <li key={category.id}>
              <button className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-muted w-full">
                {/* <img className="w-6 h-6 mb-2" src={category.icon || "/placeholder.svg"} alt={category.name} /> */}
                <h6 className="text-sm">{category.name}</h6>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

