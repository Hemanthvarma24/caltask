import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Footer from "@/components/Footer"

export default function GroupInfoPage() {
  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Group Header Image */}
      <div className="relative h-64 w-full">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Group Cover"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center gap-2 text-white">
            <h1 className="text-2xl font-bold">Stars</h1>
            <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
          </div>
          <p className="text-white">6 People</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-4 border-b border-gray-200">
        <Link href="#" className="flex flex-col items-center justify-center py-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </div>
          <span className="text-sm">Link</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center py-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          </div>
          <span className="text-sm">Mute</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center py-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          </div>
          <span className="text-sm">Add</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center py-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-1 text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </div>
          <span className="text-sm text-red-500">Leave</span>
        </Link>
      </div>

      {/* Group Details */}
      <div className="p-4">
        <h2 className="text-sm text-gray-500 mb-2">Group Details :</h2>
        <p className="text-sm mb-4">
          The group is created to plan a trip. Everyone can suggest their place and if it&apos;s suitable for all, we
          will go there.
        </p>

        {/* Media Files */}
        <Link href="#" className="flex items-center justify-between py-3 border-b border-gray-200">
          <span className="text-sm font-medium">Media Files (12)</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* Document Files */}
        <Link href="#" className="flex items-center justify-between py-3 border-b border-gray-200">
          <span className="text-sm font-medium">Document Files (12)</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* Link Files */}
        <Link href="#" className="flex items-center justify-between py-3 border-b border-gray-200">
          <span className="text-sm font-medium">Link Files (12)</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* Total People */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <span className="text-sm font-medium">Total People</span>
          <span className="text-sm text-gray-500">6 People</span>
        </div>

        {/* Group Members */}
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Member"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
              </div>
              <div>
                <p className="text-sm font-medium">You</p>
                <p className="text-xs text-gray-500">Happy 😊</p>
              </div>
            </div>
            <button className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Member"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
              </div>
              <div>
                <p className="text-sm font-medium">You</p>
                <p className="text-xs text-gray-500">Happy 😊</p>
              </div>
            </div>
            <button className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

