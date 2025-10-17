'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Logo from '../logo-components/logo'

const MENU_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
] as const

interface NavMenuItemsProps {
  className?: string
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ''}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
)

export function Header() {
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
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
                  <NavMenuItems />
                  <Button className="w-full">Try for free</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden w-full flex-row justify-end gap-5 md:flex">
            <NavMenuItems />
            <Button>Try for free</Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
