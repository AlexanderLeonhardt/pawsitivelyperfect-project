'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "@/data/const";

const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMenuIsVisible(false);
  }, [pathname]);

  const NavLinks = () => {
    return links.map(link => <Link key={link.href} href={link.href} className={`p-2 uppercase font-bold hover:text-green-600 hover:underline hover:decoration-4 ${link.href === pathname ? 'text-green-600 underline decoration-4' : ''}`}>{link.text}</Link>);
  }

  return (
    <header className="sticky top-0 h-16 bg-white shadow-md z-50">
      <div className="max-w-6xl h-full m-auto px-8 flex justify-between items-center text-center">

        {/* Logo */}
        <Link className="text-3xl uppercase font-bold" href={'/'}>Logo</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-center gap-12">
          <NavLinks />
        </nav>

        {/* Menu button */}
        <div onClick={() => setMenuIsVisible(!menuIsVisible)} className="block md:hidden w-10 h-10 rounded-xl cursor-pointer">
          {!menuIsVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
          )}
        </div>

        {/* Menu nav */}
        <div className={
          menuIsVisible 
          ? "md:hidden fixed top-16 left-0 w-full bg-white ease-in-out duration-500 shadow-md"
          : "fixed top-16 left-[-100%] w-full ease-in-out duration-500 shadow-md"
        }>
          <nav className="flex flex-col items-center gap-6">
            <NavLinks />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;