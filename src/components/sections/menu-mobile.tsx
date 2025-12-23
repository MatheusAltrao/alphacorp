"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MenuLinks from "./menu-links";

export default function MenuMobile() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open navigation menu" className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="space-y-8">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigate through the sections</SheetDescription>
        </SheetHeader>
        <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
          <MenuLinks onLinkClick={handleLinkClick} />
          <Link onClick={(e) => handleLinkClick(e, "#contact")} className="w-full" href="#contact">
            <Button aria-label="Contact" className="w-full">
              Contact
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
