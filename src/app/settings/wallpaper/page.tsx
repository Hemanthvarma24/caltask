"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Wallpaper() {
  const router = useRouter()
  const [selectedWallpaper, setSelectedWallpaper] = useState<string | null>(null)

  // Sample wallpaper data - in a real app, you might fetch these from an API
  const wallpapers = {
    solid: Array.from({ length: 6 }, (_, i) => `/wallpapers/solid-${i + 1}.jpg`),
    art: Array.from({ length: 9 }, (_, i) => `/wallpapers/art-${i + 1}.jpg`),
    light: Array.from({ length: 6 }, (_, i) => `/wallpapers/light-${i + 1}.jpg`),
    dark: Array.from({ length: 6 }, (_, i) => `/wallpapers/dark-${i + 1}.jpg`),
  }

  const handleWallpaperSelect = (wallpaper: string) => {
    setSelectedWallpaper(wallpaper)
    // Optionally, you can navigate back to chat or save the wallpaper preference
    router.push(`/chat?wallpaper=${encodeURIComponent(wallpaper)}`)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="px-4 py-3">
          <div className="flex items-center">
            <Link href="/settings" className="p-2 mr-3">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-semibold">Wallpaper</h1>
          </div>
        </div>
      </header>

      <div className="px-4 py-4 flex-grow">
        {Object.entries(wallpapers).map(([category, categoryWallpapers]) => (
          <div key={category} className="mb-6">
            <h2 className="text-lg font-medium mb-3 capitalize">{category} Wallpaper</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {categoryWallpapers.map((wallpaper, index) => (
                <button
                  key={`${category}-${index}`}
                  onClick={() => handleWallpaperSelect(wallpaper)}
                  className={cn(
                    "aspect-square rounded-lg overflow-hidden relative",
                    selectedWallpaper === wallpaper ? "ring-4 ring-primary" : "",
                  )}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=${category}${index + 1}`}
                      alt={`${category} wallpaper ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      className="object-cover"
                      priority={index < 4} // Load the first few images with priority
                    />
                  </div>
                  {selectedWallpaper === wallpaper && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="text-white font-bold">Selected</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="border-t border-border p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">Select a wallpaper to customize your chat background</p>
        </div>
      </footer>
    </div>
  )
}


