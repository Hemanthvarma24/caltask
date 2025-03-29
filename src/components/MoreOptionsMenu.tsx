import Link from "next/link"
import { Users, Megaphone, Star, UserPlus } from "lucide-react"

export default function MoreOptionsMenu() {
  return (
    <>
      <Link href="/group/new" className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded-md">
        <Users className="h-5 w-5" /> New Group
      </Link>
      <Link href="/broadcast/new" className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded-md">
        <Megaphone className="h-5 w-5" /> New Broadcast
      </Link>
      <Link href="/starred" className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded-md">
        <Star className="h-5 w-5" /> Starred Message
      </Link>
      <Link href="/invite" className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded-md">
        <UserPlus className="h-5 w-5" /> Invite a Friend
      </Link>
    </>
  )
}

