import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, SendIcon as Send2 } from "lucide-react"
import Footer from "@/components/Footer"
import qr from "@/app/assets/qrcode.png"
import profileone from "@/app/assets/profile/p16.png"

export default function QRCodePage() {
  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#02ab86] border-b border-border py-4">
        <div className="container px-4 mx-auto max-w-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/select-contact">
                <ChevronLeft className="h-6 w-6 text-white" />
              </Link>
              <div>
                <h4 className="font-semibold text-lg text-white">QR Code</h4>
              </div>
            </div>
            <button className="p-2 rounded-full text-white hover:bg-gray-100">
              <Send2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* QR Code Section */}
      <section className="py-8">
        <div className="container px-4 mx-auto max-w-md">
          <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-sm">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
              <Image
                src={profileone}
                alt="Profile"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-64 mb-6">
              <Image
                src={qr}
                alt="QR Code"
                width={256}
                height={256}
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-muted-foreground">
              This QR code is Private. If it is shared with someone, they can scan it with their Caltrak Camera to join
              you.
            </p>
          </div>
          <div className="mt-8">
            <button className="w-full py-3 px-4 border-2 border-[#02ab86] text-[#02ab86] font-medium rounded-lg">
              Reset QR Code
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

