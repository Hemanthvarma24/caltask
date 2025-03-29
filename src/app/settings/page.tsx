"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Globe, MessageSquare, Image as ImageIcon, Users, LogOut } from "lucide-react";
import Footer from "@/components/Footer";

export default function Settings() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="px-4 py-3">
          <div className="flex items-center">
            <Link href="/chat" className="p-2 mr-3">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-semibold">Setting</h1>
          </div>
        </div>
      </header>

      <div className="px-4 py-4 flex-grow">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <Link href="/settings/language" className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Globe className="h-5 w-5 text-gray-600" aria-hidden="true" />
              </div>
              <span>App Language</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          <Link href="/chat" className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-gray-600" aria-hidden="true" />
              </div>
              <span>Chat</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          <Link href="/settings/wallpaper" className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <ImageIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
              </div>
              <span>Wallpaper</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          <Link href="/settings/invite" className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-gray-600" aria-hidden="true" />
              </div>
              <span>Invite People</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          <Link href="/login" className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <LogOut className="h-5 w-5 text-gray-600" aria-hidden="true" />
              </div>
              <span>Log Out</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
