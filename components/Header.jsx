import React from 'react'
import Link from 'next/link'
/* Componentes */
import Navbar from './Navbar'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header className="pt-6 pb-2 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-22 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Leo <span className="text-green-600">.</span>
          </h1>
        </Link>
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button className="cursor-pointer">Contratame</Button>
          </Link>
        </div>
        {/* ------------------------- */}
        {/* Movile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
