import Link from "next/link";

const Nav = () => {
  return (
    <nav className="sticky top-0 bg-white mb-8 p-4 shadow-md">
      <div className="max-w-6xl my-0 mx-auto text-center md:flex justify-between items-center">
        <Link className="font-dynapuff text-2xl font-bold text-center" href={'/'}>Pawsitively Perfect Grooming</Link>
        <div className="flex justify-center gap-12">
          <Link href={'/about'} className="uppercase font-bold">About</Link>
          <Link href={'/services'} className="uppercase font-bold">Services</Link>
          <Link href={'/contact'} className="uppercase font-bold">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;