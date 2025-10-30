import { MENU_ITEMS } from "@/const/links";
import Link from "next/link";
import { Button } from "../ui/button";

interface MenuLinksProps {
  className?: string;
}

export default function MenuLinks({ className }: MenuLinksProps) {
  return (
    <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
      {MENU_ITEMS.map(({ label, href }) => (
        <Link key={label} href={href}>
          <Button variant="ghost" className="w-full md:w-auto">
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
