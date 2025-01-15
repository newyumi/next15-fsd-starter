"use client";

import React from "react";
import Button from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function ResetPassword() {
  const [step, setStep] = useState(1);
  const [id, setId] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isValidId = (id: string) => {
    const phoneRegex = /^\d{10,11}$/; // 10 or 11 numbers
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return phoneRegex.test(id) || emailRegex.test(id);
  };

  const passwordValidation = useMemo(() => {
    if (!password) {
      return {
        hasRequiredChars: false,
        noRepeatingChars: false,
        noSequentialChars: false,
        noPhoneEmail: false,
        noBirthDate: false,
        isValid: false,
      };
    }

    const hasRequiredChars = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const noRepeatingChars = password.length >= 4 && !/(.)\1{3,}/.test(password);
    const noSequentialChars =
      password.length >= 4 &&
      !/(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/.test(
        password.toLowerCase()
      );
    const noPhoneEmail = !/^\d{10,11}$/.test(password) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(password);
    const noBirthDate = !/^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/.test(password);

    return {
      hasRequiredChars,
      noRepeatingChars,
      noSequentialChars,
      noPhoneEmail,
      noBirthDate,
      isValid: hasRequiredChars && noRepeatingChars && noSequentialChars && noPhoneEmail && noBirthDate,
    };
  }, [password]);

  return (
    <>
      {step === 1 && (
        <>
          <Link href="/login" className="h-12 flex items-center justify-end px-2">
            <Icon name="close" size="md" className="block desktop:hidden mx-2" />
            <Icon name="close" size="lg" className="hidden desktop:block" />
          </Link>

          <div className="py-300 mb-300 px-250 desktop:px-300 text-heading2 desktop:text-heavy3 text-g-900">
            Please enter your mobile number or email address
          </div>

          <div className="px-250">
            <input
              className="w-full border border-g-150 placeholder-g-350 h-16 rounded-md text-body2 px-200 mb-700 focus:border-sb-550 outline-none"
              placeholder="Mobile number or email"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <Button fullWidth={true} size="xlarge" disabled={!isValidId(id)} onClick={() => setStep(2)}>
              (1/3) Next
            </Button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="h-12 flex items-center px-2" onClick={() => setStep(1)}>
            <Icon name="backDelete" size="md" className="block desktop:hidden mx-2" />
            <Icon name="backDelete" size="lg" className="hidden desktop:block" />
          </div>

          <div className="py-300 mb-300 px-250 desktop:px-300 text-heading2 desktop:text-heavy3 text-g-900">
            Please enter your authentication number
          </div>

          <div className="px-250">
            <input
              className="w-full border border-g-150 placeholder-g-350 h-16 rounded-md text-body2 px-200 mb-2 focus:border-sb-550 outline-none"
              placeholder="Mobile number or email"
              value={id}
              disabled
            />
            <div className="relative">
              <input
                className="w-full border border-g-150 placeholder-g-350 h-16 rounded-md text-body2 px-200 mb-700 focus:border-sb-550 outline-none pr-24"
                placeholder="authentication number"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button
                className="absolute right-200 top-4"
                buttonType="tertiary"
                size="small"
                onClick={() => {
                  // Resend request
                }}
              >
                Resend
              </Button>
            </div>
            <Button fullWidth={true} size="xlarge" disabled={code.length < 1} onClick={() => setStep(3)}>
              (2/3) Next
            </Button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="h-12 flex items-center justify-between px-2" onClick={() => setStep(2)}>
            <Icon name="backDelete" size="md" className="block desktop:hidden mx-2" />
            <Icon name="backDelete" size="lg" className="hidden desktop:block" />

            <Link href="/login" className="h-12 flex items-center justify-end px-2">
              <Icon name="close" size="md" className="block desktop:hidden mx-2" />
              <Icon name="close" size="lg" className="hidden desktop:block" />
            </Link>
          </div>

          <div className="py-300 mb-300 px-250 desktop:px-300 text-heading2 desktop:text-heavy3 text-g-900">Please enter your new password</div>

          <div className="px-250">
            <input
              className="w-full border border-g-150 placeholder-g-350 h-16 rounded-md text-body2 px-200 mb-6 focus:border-sb-550 outline-none"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-full mb-700 rounded-lg p-200 bg-g-100 text-caption1 space-y-2.5">
              <div className={`flex items-center ${passwordValidation.hasRequiredChars ? "text-gr-500" : password ? "text-r-500" : "text-g-400"}`}>
                <Icon name={passwordValidation.hasRequiredChars ? "checkDoneB" : password ? "closeS" : "checkDoneB"} size="sm" className="mr-100" />
                Password must be at least 8 characters long and include uppercase and lowercase letters, numbers, and special characters.
              </div>
              <div className={`flex items-center ${passwordValidation.noRepeatingChars ? "text-gr-500" : password ? "text-r-500" : "text-g-400"}`}>
                <Icon name={passwordValidation.noRepeatingChars ? "checkDoneB" : password ? "closeS" : "checkDoneB"} size="sm" className="mr-100" />
                The same character cannot be repeated more than 3 times consecutively.
              </div>
              <div className={`flex items-center ${passwordValidation.noSequentialChars ? "text-gr-500" : password ? "text-r-500" : "text-g-400"}`}>
                <Icon name={passwordValidation.noSequentialChars ? "checkDoneB" : password ? "closeS" : "checkDoneB"} size="sm" className="mr-100" />
                Sequential characters of 4 or more (e.g., “abcd,” “1234”) are not allowed.
              </div>
              <div className={`flex items-center ${passwordValidation.noPhoneEmail ? "text-gr-500" : password ? "text-r-500" : "text-g-400"}`}>
                <Icon name={passwordValidation.noPhoneEmail ? "checkDoneB" : password ? "closeS" : "checkDoneB"} size="sm" className="mr-100" />
                Passwords cannot contain phone numbers or email addresses.
              </div>
              <div className={`flex items-center ${passwordValidation.noBirthDate ? "text-gr-500" : password ? "text-r-500" : "text-g-400"}`}>
                <Icon name={passwordValidation.noBirthDate ? "checkDoneB" : password ? "closeS" : "checkDoneB"} size="sm" className="mr-100" />
                Passwords cannot include dates of birth.
              </div>
            </div>
            <Button fullWidth={true} size="xlarge" disabled={!passwordValidation.isValid}>
              (3/3) Complete
            </Button>
          </div>
        </>
      )}
    </>
  );
}
