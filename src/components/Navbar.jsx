'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMenuIsVisible(false);
  }, [pathname]);

  const navlinks = [
    { href: '/', text: 'Home'},
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact' },
  ]

  return (
    <header className="sticky top-0 h-16 bg-white shadow-md">
      <div className="max-w-6xl h-full m-auto px-4 flex justify-between items-center text-center">

        {/* Logo */}
        <Link className="text-3xl uppercase font-bold" href={'/'}>Logo</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-center gap-12">
          {navlinks.map(link => <Link key={link.href} href={link.href} className={`p-2 uppercase font-bold hover:text-green-600 hover:underline hover:decoration-4 ${link.href === pathname ? 'text-green-600 underline decoration-4' : ''}`}>{link.text}</Link>)}
        </nav>

        {/* Menu button */}
        <div onClick={() => setMenuIsVisible(!menuIsVisible)} className="block md:hidden w-10 h-10 bg-slate-600 rounded-xl cursor-pointer">
        </div>

        {/* Menu nav */}
        <div className={
          menuIsVisible 
          ? "md:hidden fixed top-16 left-0 w-full bg-white ease-in-out duration-500 shadow-md"
          : "fixed top-16 left-[-100%] w-full ease-in-out duration-500 shadow-md"
        }>
          <nav className="flex flex-col items-center gap-6">
            {navlinks.map(link => <Link key={link.href} href={link.href} className={`p-2 uppercase font-bold hover:text-green-600 hover:underline hover:decoration-4 ${link.href === pathname ? 'text-green-600 underline decoration-4' : ''}`}>{link.text}</Link>)}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;