import Link from 'next/link'

const Header = () => {
  return (
    <nav className="flex gap-4 p-4 border-b border-gray-200 flex-none text-white">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/posts">Posts</Link>
    <Link href="/meals">Meals</Link>
    <Link href="/community">Community</Link>
  </nav>
  )
}

export default Header