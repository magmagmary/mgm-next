import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="flex items-center gap-4 p-4 border-b border-gray-200 flex-none text-white">
    <Link href="/">
        <Image src={'/images/logo.png'} alt="logo" width={30} height={30} priority />
    </Link>
    <Link href="/about">About</Link>
    <Link href="/posts">Posts</Link>
    <Link href="/meals">Meals</Link>
    <Link href="/community">Community</Link>
  </nav>
  )
}

export default Header