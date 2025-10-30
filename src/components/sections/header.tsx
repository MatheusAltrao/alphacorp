import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo from '../logo-components/logo'
import MenuLinks from './menu-links'
import MenuMobile from './menu-mobile'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background">
      <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
        <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>

            <MenuMobile />
          </div>

          <div className="hidden w-full flex-row justify-end gap-5 md:flex">
            <MenuLinks />
            <Link href="#contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
