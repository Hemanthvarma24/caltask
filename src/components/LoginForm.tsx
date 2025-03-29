"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import PhoneInput from "./PhoneInput";
import illustration from "@/app/assets/login-vector.svg";

export default function LoginForm() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/otp");
  };

  const handleCountrySelect = (code: string) => {
    setCountryCode(code);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="mb-6 flex justify-center">
        <div className="relative bg-[#e4f5f2] rounded-lg p-6 flex items-center justify-center">
          <Image
            src={illustration}
            alt="Login illustration"
            width={250}
            height={256}
          />
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-lg font-bold text-[#02ab86]">Login</h1>
        <p className="text-gray-500 text-sm">
          Let&apos;s start again to chat with friends
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <PhoneInput
          value={phoneNumber}
          onChange={setPhoneNumber}
          countryCode={countryCode}
          onCountrySelect={handleCountrySelect}
        />

        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
          />
          <label htmlFor="remember" className="text-sm text-gray-500">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#02ab86] text-white py-2 rounded-md font-semibold"
        >
          Get OTP
        </button>
      </form>
    </div>
  );
}
