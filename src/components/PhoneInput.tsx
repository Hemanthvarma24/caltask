"use client"

import { useRouter } from "next/navigation"

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  countryCode: string
  onCountrySelect: (code: string) => void
}

export default function PhoneInput({ value, onChange, countryCode }: PhoneInputProps) {
  const router = useRouter()

  const handleCountryClick = () => {
    router.push("/choose-country")
  }

  return (
    <div className="mb-6">
      <label htmlFor="phone" className="block mb-2 font-medium">
        Mobile Number
      </label>
      <div className="flex">
        <button
          type="button"
          className="px-3 py-2 border border-r-0 border-input rounded-l-md bg-secondary"
          onClick={handleCountryClick}
        >
          {countryCode}
        </button>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your number"
          className="flex-1 px-3 py-2 border border-input rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </div>
    </div>
  )
}

