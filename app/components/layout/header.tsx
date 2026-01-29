import Link from 'next/link';
import Image from 'next/image';
import NavLink from './nav-link';

const navItems = [
  { href: '/messages', label: 'Messages' },
  { href: '/messages/new', label: 'New Message' },
] 

const Header = () => {
  return (
    <nav className="flex items-center gap-4 p-4 border-b border-gray-200 flex-none text-white">
      <Link href="/">
          <Image src={'/images/logo.png'} alt="logo" width={50} height={50} priority />
      </Link>
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
  </nav>
  )
}

export default Header