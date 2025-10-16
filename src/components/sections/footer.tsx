"use client";

import Link from "next/link";
import Logo from "../logo-components/logo";

export function Footer() {
  return (
    <footer className="bg-background section-padding-y" role="contentinfo" aria-label="Site footer">
      <div className="container-padding-x  mx-auto flex flex-col items-center justify-center gap-8">
        <div className="flex w-full flex-col items-center gap-12 text-center">
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>
        </div>

        <div>
          <p className="text-muted-foreground text-center text-sm">
            Built with{" "}
            <Link href="https://www.shadcndesign.com/pro-blocks" className="underline" target="_blank">
              Pro Blocks
            </Link>{" "}
            by{" "}
            <Link href="https://www.shadcndesign.com/" className="underline" target="_blank">
              shadcndesign.com
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
