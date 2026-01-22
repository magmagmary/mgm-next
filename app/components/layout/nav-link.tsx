'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, label }: { href: string, label: string }) => {
const currentPath = usePathname();

  return (
    <div>
      <Link href={href} className={`${currentPath === href ? 'text-amber-600' : ''}`}>{label}</Link>
    </div>
  )
}

export default NavLink;
