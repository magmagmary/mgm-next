import Link from 'next/link';
import Image from 'next/image';
import NavLink from './nav-link';
import {verifyUser } from '@/lib/utils/lucia';
import Logout from './logout';

const navItems = [
  { href: '/training', label: 'Training' },
] 

const Header = async() => {
  const { user } = await verifyUser();

  return (
    <nav className="flex items-center gap-4 p-4 border-b border-gray-200 flex-none text-white">
      <Link href="/">
          <Image src={'/images/auth-icon.jpg'} alt="logo" width={50} height={50} priority />
      </Link>
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
      {user && (
        <Logout />
      )}
  </nav>
  )
}

export default Header