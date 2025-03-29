"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OTPInput from "./OTPInput";
import illustration from "@/app/assets/login-vector.svg";

export default function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleOtpChange = (otpArray: string[]) => {
    setOtp(otpArray);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/choose-country");
  };

  const handleResend = () => {
    setOtp(["", "", "", "", ""]);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6">
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
        <h1 className="text-lg font-bold text-[#02ab86]">OTP Verification</h1>
        <p className="text-gray-500 text-sm">
          Let&apos;s start again to chat with friends
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <OTPInput length={5} value={otp} onChange={handleOtpChange} />

        <button
          type="submit"
          className="w-full bg-[#02ab86] text-white py-2 rounded-md font-semibold"
        >
         Sumbit
        </button>

        <div className="text-center text-sm">
          <span className="text-gray-500">Not Received Yet ? </span>
          <button
            type="button"
            className="text-[#02ab86] font-medium"
            onClick={handleResend}
          >
            Resend it
          </button>
        </div>
      </form>
    </div>
  );
}
