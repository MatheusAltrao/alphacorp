import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import MenuLinks from "./menu-links";

export default function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="space-y-8">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigate through the sections</SheetDescription>
        </SheetHeader>
        <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
          <MenuLinks />
          <Link href="#contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
