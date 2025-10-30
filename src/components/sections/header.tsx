"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "../logo-components/logo";
import MenuLinks from "./menu-links";

export default function Header() {
  return (
    <header>
      <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
        <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>

            <Sheet>
              <SheetTrigger className="md:hidden">
                <Menu />
              </SheetTrigger>
              <SheetContent className="space-y-8">
                <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
                  <MenuLinks />
                  <Link href="#contact">
                    <Button>Contact</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden w-full flex-row justify-end gap-5 md:flex">
            <MenuLinks />
            <Link href="#contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
