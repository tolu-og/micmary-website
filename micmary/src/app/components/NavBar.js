import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.jpg'

export default function NavBar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200 shadow-md">
      {/* Logo and Text */}
      <div className="font-cursive text-xl md:text-2xl mb-4 md:mb-0">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <h1 className="ml-2 text-[#2F5233] text-md">Micmary School</h1>
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <Link href="/about" className="hover:text-gray-600">About Us</Link>
        <Link href="/admissions" className="hover:text-gray-600">Admissions</Link>
        <Link href="/programs" className="hover:text-gray-600">Programs</Link>
      </div>
    </nav>
  )
}