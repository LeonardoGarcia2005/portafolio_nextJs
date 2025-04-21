'use client'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

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

function MobileNav() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center p-2 hover:bg-zinc-700 rounded-md transition-colors">
        <CiMenuFries className="text-2xl text-green-700" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col w-64  bg-zinc-900 border-r border-zinc-700">
        <SheetTitle className="sr-only">Navegación móvil</SheetTitle>
        
        {/* logo */}
        <div className="mt-8 mb-12 text-center">
          <Link href="/">
            <h1 className="text-3xl font-semibold text-white">
              Leo <span className="text-green-700">.</span>
            </h1>
          </Link>
        </div>
        
        {/* nav */}
        <nav className="flex flex-col items-start px-4 gap-6 overflow-y-auto">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`w-full py-2 px-3 rounded-md capitalize text-lg transition-all ${
                  link.path === pathname
                    ? 'text-green-700 font-medium bg-zinc-800'
                    : 'text-gray-300 hover:text-green-700 hover:bg-zinc-800'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        
        <div className="mt-auto mb-8 px-4 pt-6 border-t border-zinc-800">
          <Link
            href="/contact" 
            className="flex justify-center w-full py-2 px-4 bg-green-600/65 hover:bg-green-600/50 rounded-md text-white font-medium transition-colors"
          >
            Contratrame
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav