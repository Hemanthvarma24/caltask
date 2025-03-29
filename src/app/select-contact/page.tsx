import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ChevronLeft, Search, RotateCcw, Group, UserCircle, QrCode } from "lucide-react"
import Footer from "@/components/Footer"
import Mystory from "@/app/assets/profile/p1.png"
import michael from "@/app/assets/profile/p2.png"
import killer from "@/app/assets/profile/p4.png"
import profileOne from "@/app/assets/profile/p7.png"
import profileThree from "@/app/assets/profile/p9.png"
import profileFive from "@/app/assets/profile/p11.png"
import profileSeven from "@/app/assets/profile/p13.png"

interface ContactItem {
  id: string
  name: string
  status?: string
   avatar: StaticImageData | string
  phoneNumber?: string
  emoji?: string
}

export default function SelectContactPage() {
  const contacts: ContactItem[] = [
    { id: "1", name: "(+701) 7859 6326", status: "Happy", avatar: Mystory },
    { id: "2", name: "Aathryn Murphy", status: "Always Impossible 💯", avatar: michael },
    { id: "3", name: "Gabriella", status: "Not Disturbed", avatar: killer },
    { id: "4", name: "Hawkins", status: "I Heat You", avatar: profileFive },
    { id: "5", name: "Haylee", status: "Available 😊", avatar: profileOne },
    { id: "6", name: "Jacky", status: "Lat's Go", avatar: profileThree },
    { id: "7", name: "Kistin", status: "Happy Ever After 😇", avatar:profileSeven },
  ]

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#02ab86] text-white py-4">
        <div className="container px-4 mx-auto max-w-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/chat">
                <ChevronLeft className="h-6 w-6" />
              </Link>
              <div>
                <h4 className="font-semibold text-lg">Select Contact</h4>
                <h6 className="text-sm font-normal">652 Contact</h6>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-white/10">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/10">
                <RotateCcw className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contact List */}
      <section className="py-4">
        <div className="container px-4 mx-auto max-w-md">
          <ul className="divide-y divide-gray-200">
            {/* New Group */}
            <li>
              <Link href="/group/new" className="flex items-center py-3">
                <div className="w-12 h-12 rounded-full bg-[#02ab86] flex items-center justify-center mr-3">
                  <Group className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="font-medium">New Group</h5>
                </div>
              </Link>
            </li>

            {/* New Contact */}
            <li>
              <div className="flex items-center justify-between py-3">
                <Link href="/qr-code" className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#02ab86] flex items-center justify-center mr-3">
                    <UserCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-medium">New Contact</h5>
                  </div>
                </Link>
                <Link href="/qr-code">
                  <QrCode className="h-5 w-5 text-gray-500" />
                </Link>
              </div>
            </li>

            {/* Contact List */}
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link href={`/chat/${contact.id}`} className="flex items-center py-3">
                  <Image
                    src={contact.avatar || "/placeholder.svg"}
                    alt={contact.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h5 className="font-medium">{contact.name}</h5>
                    <h6 className="text-sm text-gray-500">{contact.status}</h6>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

