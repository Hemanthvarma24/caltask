"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import imgdele from "@/app/assets/delete.png"

export default function DeleteCallModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      id="delete-call-modal"
      className={`fixed inset-0 bg-black/50 flex items-center justify-center ${isOpen ? "block" : "hidden"} z-50`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false)
      }}
    >
      <div className="bg-background rounded-lg w-full max-w-md mx-4">
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 pb-6 text-center">
          <div className="mb-4">
            <Image className="w-24 h-24 mx-auto" src={imgdele} alt="Delete confirmation" />
          </div>
          <h2 className="text-xl font-bold mb-2">Delete Call History</h2>
          <h4 className="text-muted-foreground mb-6">
            You will lose all your data. Still you want to delete your call history?
          </h4>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => {
                // Handle delete logic
                setIsOpen(false)
              }}
            >
              Delete Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

