'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'inicio',
    path: '/',
  },
  {
    name: 'servicios',
    path: '/services',
  },
  {
    name: 'curriculum',
    path: '/resume',
  },
  {
    name: 'trabajo',
    path: '/work',
  },
  {
    name: 'contactar',
    path: '/contact',
  },
]

function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              'text-green-600 border-b-2 border-green-600'
            } capitalize font-medium hover:text-green-600 transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
