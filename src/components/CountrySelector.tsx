"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Check } from "lucide-react";
import Image, { StaticImageData } from "next/image";

// Importing flag images
import indiaFlag from "@/app/assets/svg/india.svg";
import usaFlag from "@/app/assets/svg/usa.svg";
import canadaFlag from "@/app/assets/svg/canada.svg";
import germanyFlag from "@/app/assets/svg/germany.svg";
import africaFlag from "@/app/assets/svg/africa.svg";
import australiaFlag from "@/app/assets/svg/australia.svg";
import japanFlag from "@/app/assets/svg/japan.svg";
import koreaFlag from "@/app/assets/svg/korea.svg";
import franceFlag from "@/app/assets/svg/france.svg";
import uaeFlag from "@/app/assets/svg/uae.svg";
import indonesiaFlag from "@/app/assets/svg/indonesia.svg";

interface Country {
  name: string;
  code: string;
  flag: StaticImageData; // ✅ Fixed type error
}

export default function CountrySelector() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string>("USA");

  const countries: Country[] = [
    { name: "India", code: "+91", flag: indiaFlag },
    { name: "USA", code: "+1", flag: usaFlag },
    { name: "Canada", code: "+1", flag: canadaFlag },
    { name: "Germany", code: "+49", flag: germanyFlag },
    { name: "Africa", code: "+27", flag: africaFlag },
    { name: "Australia", code: "+61", flag: australiaFlag },
    { name: "Japan", code: "+81", flag: japanFlag },
    { name: "Korea", code: "+82", flag: koreaFlag },
    { name: "France", code: "+33", flag: franceFlag },
    { name: "UAE", code: "+971", flag: uaeFlag },
    { name: "Indonesia", code: "+62", flag: indonesiaFlag },
  ];

  const handleSubmit = () => {
    router.push("/profile-setup");
  };

  return (
    <div className="relative flex flex-col h-screen">
      <div className="px-4 pt-6 mb-4">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full bg-secondary mr-4"
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold">Choose your Country</h1>
        </div>

        {/* Country Selection Grid */}
        <div className="overflow-y-auto pr-2 pb-20">
          <div className="grid grid-cols-2 gap-4">
            {countries.map((country) => (
              <div
                key={country.name}
                className={`p-4 border rounded-lg flex flex-col items-center cursor-pointer transition-colors ${
                  selectedCountry === country.name
                    ? "border-gray-300 bg-gray-100"
                    : "border-gray-100 hover:bg-[#02ab86]/20"
                }`}
                onClick={() => setSelectedCountry(country.name)}
              >
                <div className="relative mb-2">
                  <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {selectedCountry === country.name && (
                    <div className="absolute -top-1 -right-1 bg-[#02ab86] rounded-full p-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-center">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg">
        <button
          onClick={handleSubmit}
          className="w-full bg-[#02ab86] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
