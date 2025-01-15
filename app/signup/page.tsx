"use client";

import Button from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import Link from "next/link";
import { useState } from "react";

type IconName = "facebookIcon" | "kakaoTalkIcon" | "googleIcon" | "appleIcon";

const socialIcons: {
  name: IconName;
  bgColor: string;
  label: string;
  onClick: () => void;
}[] = [
  {
    name: "facebookIcon",
    bgColor: "bg-[#3E71D6]",
    label: "Facebook clicked",
    onClick: () => {},
  },
  {
    name: "kakaoTalkIcon",
    bgColor: "bg-[#FAE475]",
    label: "KakaoTalk clicked",
    onClick: () => {},
  },
  {
    name: "googleIcon",
    bgColor: "bg-g-150",
    label: "Google clicked",
    onClick: () => {},
  },
  {
    name: "appleIcon",
    bgColor: "bg-g-700",
    label: "Apple clicked",
    onClick: () => {},
  },
];

function SocialIcon({ name, bgColor, onClick }: { name: IconName; bgColor: string; onClick: () => void }) {
  return (
    <div className="relative">
      <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center cursor-pointer`} onClick={onClick}>
        <Icon name={name} size="md" />
      </div>
    </div>
  );
}

function SocialLoginIcons() {
  return (
    <div className="flex justify-center space-x-6 mb-1000">
      {socialIcons.map((icon, index) => (
        <div className="relative" key={index}>
          <SocialIcon name={icon.name} bgColor={icon.bgColor} onClick={icon.onClick} />
        </div>
      ))}
    </div>
  );
}

export default function Login() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isValidLogin = () => {
    const phoneRegex = /^\d{10,11}$/; // 10 or 11 numbers
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email format
    return (phoneRegex.test(id) || emailRegex.test(id)) && password.length > 0;
  };

  const login = () => {
    console.log("Tried login:", { id, password });
  };

  return (
    <>
      <div className="py-400 mt-300 mb-300 px-250 desktop:px-300 text-heading2 desktop:text-heavy3 text-g-900">
        Hi, <span className="text-sb-550">Signup</span>
      </div>

      <div className="px-250">
        <input
          className="w-full border border-g-150 placeholder-g-350 h-16 rounded-md text-body2 px-200 mb-2 focus:border-sb-550 outline-none"
          placeholder="Phone number or email address"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="w-full border border-g-150 placeholder-g-350 h-16 rounded-md text-body2 px-200 mb-[60px] focus:border-sb-550 outline-none"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button fullWidth={true} size="xlarge" disabled={!isValidLogin()} onClick={login}>
          Login
        </Button>

        <div className="flex items-center my-400 text-g-400 text-body6">
          <div className="flex-grow border-t border-g-200"></div>
          <span className="mx-2">OR</span>
          <div className="flex-grow border-t border-g-200"></div>
        </div>
        <SocialLoginIcons />
      </div>

      <div className="text-center">
        <span className="text-g-400 text-body4 mr-2">Do you already have an account?</span>
        <Link href="/login">
          <Button variant="text" buttonType="secondary" size="medium">
            Login
          </Button>
        </Link>
      </div>
    </>
  );
}
