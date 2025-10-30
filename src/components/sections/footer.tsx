import Link from "next/link";
import Logo from "../logo-components/logo";

export default function Footer() {
  return (
    <footer id="footer" className="bg-background section-padding-y">
      <div className="container-padding-x  mx-auto flex flex-col items-center justify-center gap-8">
        <div className="flex w-full flex-col items-center gap-12 text-center">
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>
        </div>

        <div>
          <p className="text-muted-foreground text-center text-sm">
            Developed by{" "}
            <Link href="https://www.linkedin.com/in/matheus-altrao/" className="underline" target="_blank">
              Matheus Altrão
            </Link>{" "}
            and{" "}
            <Link href="https://www.linkedin.com/in/rafael-myauti/" className="underline" target="_blank">
              Rafael Myauti
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
