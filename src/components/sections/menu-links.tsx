'use client'
import { MENU_ITEMS } from '@/const/links'
import Link from 'next/link'
import { Button } from '../ui/button'

interface MenuLinksProps {
  className?: string
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export default function MenuLinks({ className, onLinkClick }: MenuLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onLinkClick) {
      onLinkClick(e, href)
    }
  }

  return (
    <div className={`flex flex-col gap-1 md:flex-row ${className ?? ''}`}>
      {MENU_ITEMS.map(({ label, href }) => (
        <Link onClick={(e) => handleClick(e, href)} key={label} href={href}>
          <Button variant="ghost" className="w-full md:w-auto">
            {label}
          </Button>
        </Link>
      ))}
    </div>
  )
}
