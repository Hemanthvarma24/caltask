import Link from "next/link"
import Image from "next/image"
import { Phone, Video, ArrowUp } from "lucide-react"

interface CallListItemProps {
  name: string
  image: string
  time: string
  type: "audio" | "video"
  status: "incoming" | "outgoing" | "missed"
  link: string
}

export default function CallListItem({ name, image, time, type, status, link }: CallListItemProps) {
  const statusColor = {
    incoming: "text-green-500",
    outgoing: "text-primary",
    missed: "text-destructive",
  }

  return (
    <li className="border-b border-border py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg?height=48&width=48"} alt={name} fill className="object-cover" />
          </div>

          <div>
            <h3 className="font-medium">{name}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <ArrowUp className={`h-3 w-3 mr-1 ${status === "incoming" ? "rotate-180" : ""} ${statusColor[status]}`} />
              <span>{time}</span>
            </div>
          </div>
        </div>

        <Link href={link} className={`p-2 rounded-full ${statusColor[status]}`}>
          {type === "audio" ? <Phone className="h-5 w-5" /> : <Video className="h-5 w-5" />}
        </Link>
      </div>
    </li>
  )
}

