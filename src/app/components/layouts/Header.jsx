import React from 'react';
import Link from "next/link";


const Headers = () => {
  return (
    <header className="flex items-center justify-between shadow-lg py-6 px-4 mb-4">
        <nav className="flex items-center gap-8 text-gray-600 font-semibold">
          <Link href={'/'} className="text-primary font-bold">PIZZA</Link>
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
        </nav>
        <nav className='flex items-center gap-4 text-gray-500 '>
          <Link href={'/login'} className="">
            Login
          </Link>
          <Link href={'/register'} className="bg-primary px-6 py-2 rounded-lg text-white">
            Register
          </Link>
        </nav>
      </header>
  )
}

export default Headers