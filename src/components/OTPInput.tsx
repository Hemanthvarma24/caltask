"use client"

import type React from "react"
import { useRef, useEffect } from "react"

interface OTPInputProps {
  length: number
  value: string[]
  onChange: (value: string[]) => void
}

export default function OTPInput({ length, value, onChange }: OTPInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRefs.current = Array(length).fill(null);
  }, [length]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val.length > 1) {
      const digits = val.split("").slice(0, length - index);
      const newOtp = [...value];

      digits.forEach((digit, i) => {
        if (index + i < length) {
          newOtp[index + i] = digit;
        }
      });

      onChange(newOtp);

      const nextIndex = Math.min(index + digits.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    } else {
      const newOtp = [...value];
      newOtp[index] = val;
      onChange(newOtp);

      if (val && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split("").slice(0, length);
      const newOtp = [...value];

      digits.forEach((digit, i) => {
        if (i < length) {
          newOtp[i] = digit;
        }
      });

      onChange(newOtp);

      const focusIndex = Math.min(digits.length, length - 1);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">OTP</label>
      <div className="flex gap-2 justify-between">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className="w-full h-12 text-center text-lg border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
