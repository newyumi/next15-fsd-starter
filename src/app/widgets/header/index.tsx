"use client";

import Button from "@/shared/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/shared/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { Icon } from "@/shared/ui/icon";
import { Sheet, SheetContent, SheetTitle } from "@/shared/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LANGUAGES = ["English", "한국어"] as const;

interface HeaderProps {
  isLoggedIn?: boolean;
}

interface ViewProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  isLoggedIn?: boolean;
}

const Logo = () => (
  <div className="flex items-center flex-shrink-0">
    <Link href="/">
      <Image src="/next.svg" alt="Logo" className="h-5" width={92.61} height={20} priority />
    </Link>
  </div>
);

const MenuItem = ({
  href,
  label,
  onClick,
  selectedLanguage,
}: {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  selectedLanguage?: string;
}) => (
  <li className="flex items-center justify-between p-4 rounded-xl">
    <Link href={href} onClick={onClick} className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <span className="text-body4">{label}</span>
        {selectedLanguage && <span className="text-g-400 text-body4">{selectedLanguage}</span>}
      </div>
      <Icon name="arrowRightS" size="sm" className="m-2" />
    </Link>
  </li>
);

const LanguageDialog = ({
  isLanguageDialogOpen,
  setIsLanguageDialogOpen,
  selectedLanguage,
  setSelectedLanguage,
}: {
  isLanguageDialogOpen: boolean;
  setIsLanguageDialogOpen: (open: boolean) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}) => (
  <Sheet open={isLanguageDialogOpen} onOpenChange={setIsLanguageDialogOpen}>
    <SheetContent side="bottom" className="h-auto">
      <SheetTitle>
        <div className="text-center text-g-900 text-heading4" role="heading" aria-level={2}>
          Language
        </div>
      </SheetTitle>
      <div id="sheet-contents" className="mt-6 flex flex-col gap-2">
        {LANGUAGES.map((language) => (
          <button
            key={language}
            className={`w-full px-4 py-3 text-left flex items-center justify-between text-body4 rounded-xl ${
              selectedLanguage === language ? "text-sb-600 bg-sb-100" : "text-g-900"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedLanguage(language);
              setIsLanguageDialogOpen(false);
            }}
          >
            {language}
            {selectedLanguage === language && <Icon name="checkDone" size="sm" className="float-right m-2" />}
          </button>
        ))}
      </div>
    </SheetContent>
  </Sheet>
);

const MobileView = ({
  selectedLanguage,
  setSelectedLanguage,
  isLoggedIn,
  isLanguageDialogOpen,
  setIsLanguageDialogOpen,
}: ViewProps & {
  isLanguageDialogOpen: boolean;
  setIsLanguageDialogOpen: (open: boolean) => void;
}) => {
  return (
    <div className="flex items-center gap-4 desktop:hidden">
      <Link href={isLoggedIn ? "/" : "/login"}>
        <Button size="small">{isLoggedIn ? "Start" : "Log in"}</Button>
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <button aria-label="메뉴 열기">
            <Icon name="menu" size="md" />
          </button>
        </DialogTrigger>
        <DialogContent aria-describedby="open-menu">
          <DialogTitle className="sr-only">메뉴</DialogTitle>
          <div id="open-menu">
            <div className="mt-12 h-[82px] bg-g-250 rounded-3xl p-4 flex items-center gap-2">
              <div className="text-g-700 text-body4 leading-[24px] min-w-0 line-clamp-2 [&.line-clamp-2]:tracking-[0.014px]">
                Hi, <span className="text-sb-600">build amazing thing</span>
              </div>
            </div>

            <div className="mt-5">
              <nav>
                <ul className="text-g-900">
                  <MenuItem href="#" label="Language" onClick={() => setIsLanguageDialogOpen(true)} selectedLanguage={selectedLanguage} />
                  <MenuItem href="/signup" label="Sign up" />
                  <MenuItem href="/help" label="Help" />
                  <MenuItem href="/setting" label="Setting" />
                </ul>
              </nav>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <LanguageDialog
        isLanguageDialogOpen={isLanguageDialogOpen}
        setIsLanguageDialogOpen={setIsLanguageDialogOpen}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
    </div>
  );
};

const LanguageMenu = ({ selectedLanguage, setSelectedLanguage }: { selectedLanguage: string; setSelectedLanguage: (language: string) => void }) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="focus-visible:outline-none" aria-label="language">
      <Icon name="globe" size="md" />
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      sideOffset={16}
      className="w-auto p-3 rounded-2xl [box-shadow:0px_8px_32px_4px_rgba(0,0,0,0.06)] animate-slide-down origin-top space-y-2"
    >
      {LANGUAGES.map((language) => (
        <DropdownMenuItem
          key={language}
          className={`h-[42px] px-4 py-3 rounded-xl font-semibold text-g-900 hover:text-sb-600 hover:bg-sb-100 focus:bg-sb-100 focus:text-sb-600 flex justify-between items-center
        ${selectedLanguage === language ? "text-sb-600 bg-sb-100" : ""}`}
          onClick={() => setSelectedLanguage(language)}
        >
          {language}
          {selectedLanguage === language && <Icon name="checkDone" size="sm" className="float-right m-2" />}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

const DesktopView = ({ isLoggedIn = true, selectedLanguage, setSelectedLanguage }: ViewProps) => {
  return (
    <ul className="hidden w-fit items-center list-none m-0 p-0 desktop:flex">
      <li className="flex items-center">
        <LanguageMenu selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      </li>
      <div className="w-[1px] h-4 mx-6 opacity-20 bg-g-500" />
      <li className="flex items-center">
        <Link href="/help">Help</Link>
      </li>

      <div className="flex items-center gap-6 ml-6">
        {isLoggedIn ? (
          <>
            <li className="flex items-center">
              <Link href="/my" className="flex items-center">
                <span>MY</span>
                <Icon name="arrowDownS" size="sm" />
              </Link>
            </li>
            <Link href="/">
              <Button>Start</Button>
            </Link>
          </>
        ) : (
          <>
            <li className="flex items-center">
              <Link href="/signup">Sign up</Link>
            </li>
            <Link href="/login">
              <Button variant="fill" buttonType="primary">
                Log in
              </Button>
            </Link>
          </>
        )}
      </div>
    </ul>
  );
};

const Header = ({ isLoggedIn = false }: HeaderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("한국어");
  const [isLanguageDialogOpen, setIsLanguageDialogOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 pt-[1px]">
      <div className="min-w-[375px] max-w-[2580px] h-[63px] mx-auto px-5 desktop:px-12 flex items-center justify-between text-button3 text-g-500">
        <Logo />
        <DesktopView isLoggedIn={isLoggedIn} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        <MobileView
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          isLoggedIn={isLoggedIn}
          isLanguageDialogOpen={isLanguageDialogOpen}
          setIsLanguageDialogOpen={setIsLanguageDialogOpen}
        />
      </div>
    </header>
  );
};

export default Header;
