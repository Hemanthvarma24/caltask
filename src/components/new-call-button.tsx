"use client"

import Link from "next/link"
import { PhoneCall, Plus } from "lucide-react"

export default function NewCallButton() {
  return (
    <div className="fixed bottom-20 right-6 z-40">
      <Link
        href="/add-call-contact"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#02ab86] text-white shadow-lg"
      >
        <PhoneCall className="h-6 w-6" />
        <Plus className="h-4 w-4 absolute top-3 right-3" />
      </Link>
    </div>
  )
}

