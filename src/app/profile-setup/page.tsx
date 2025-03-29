"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Plus } from "lucide-react";
import Image from "next/image";

export default function ProfileSetup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/chat");
  };

  return (
    <div className="min-h-screen bg-white flex items-start justify-center py-4 px-4">
      <div className="w-full max-w-sm">
        {/* Back Button & Title */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => router.back()} 
            className="absolute p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold w-full text-center">Profile Setup</h1>
        </div>

        {/* Profile Image Upload Section */}
        <div className="flex justify-center mb-8">
          <div 
            className="relative w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
            onClick={triggerFileInput}
          >
            {avatar ? (
              <Image
                src={avatar}
                alt="Profile"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex flex-col items-center">
                <Plus className="h-10 w-10 text-gray-400" />
              </div>
            )}

            {avatar && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  triggerFileInput();
                }}
                className="absolute bottom-0 right-0 bg-[#02ab86] p-1.5 rounded-full border-2 border-white shadow-md"
              >
                <Plus className="h-5 w-5 text-white" />
              </button>
            )}
          </div>

          <input 
            type="file" 
            ref={fileInputRef} 
            accept="image/*" 
            className="hidden" 
            onChange={handleAvatarChange} 
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1 text-sm text-gray-700">
              User Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02ab86]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02ab86]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="status" className="block mb-1 text-sm text-gray-700">
              Add Status
            </label>
            <input
              type="text"
              id="status"
              placeholder="Enter your status"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02ab86]"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 mt-4 bg-[#02ab86] text-white rounded-md hover:bg-[#028a6c] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}