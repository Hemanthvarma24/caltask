"use client"

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Smile, Mic, Paperclip, Send } from "lucide-react";
import Image from "next/image";

interface StoryViewerProps {
  story: {
    id: string;
    name: string;
    avatar: string;
    content?: string;
    time?: string;
    isMyStory?: boolean;
  };
  onCloseAction: () => void;
}

export default function StoryViewer({ story, onCloseAction }: StoryViewerProps) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized progress timer function
  const startProgressTimer = useCallback(() => {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimerRef.current!);
          return 100;
        }
        return prev + 0.5;
      });
    }, 50);
  }, []);

  // Memoized close timer function
  const startCloseTimer = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => onCloseAction(), 10000);
  }, [onCloseAction]);

  // Initialize timers on component mount
  useEffect(() => {
    setProgress(0);
    setImageLoaded(false);
    startProgressTimer();
    startCloseTimer();
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [story.id, startProgressTimer, startCloseTimer]);

  // Reset timers when image loads
  useEffect(() => {
    if (imageLoaded) {
      setProgress(0);
      startProgressTimer();
      startCloseTimer();
    }
  }, [imageLoaded, startProgressTimer, startCloseTimer]);

  // Pause/resume story
  const handleStoryClick = () => {
    setIsPaused((prev) => !prev);
    if (isPaused) {
      startProgressTimer();
      startCloseTimer();
    } else {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    }
  };

  // Handle message sending
  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message.trim()]);
      setMessage("");
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      setTimeout(() => {
        startProgressTimer();
        startCloseTimer();
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-700">
        <div
          className="h-full bg-green-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image src={story.avatar || "/placeholder.svg"} alt={story.name} width={32} height={32} className="object-cover" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">{story.name}</p>
            <p className="text-gray-400 text-xs">{story.time || "10 min ago"}</p>
          </div>
        </div>
        <button onClick={onCloseAction} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Story content and messages */}
      <div className="flex-1 flex flex-col">
        <div className="flex-grow relative" onClick={handleStoryClick}>
          {!imageLoaded && <div className="absolute inset-0 flex items-center justify-center bg-black/50 animate-spin h-10 w-10 border-t-2 border-white" />}
          <Image src={story.content || "/placeholder.svg"} alt="Story content" width={800} height={600} onLoad={() => setImageLoaded(true)} className="w-full h-full object-contain transition-opacity duration-300" />
        </div>
      </div>

      {/* Message input */}
      <div className="p-4">
        <div className="flex items-center gap-2 bg-white rounded-full p-2 px-4">
          <Smile className="w-6 h-6 text-gray-500" />
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type here..." onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} className="flex-1 outline-none text-sm" />
          <Mic className="w-6 h-6 text-gray-500" />
          <Paperclip className="w-6 h-6 text-gray-500" />
          <button onClick={handleSendMessage} className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
