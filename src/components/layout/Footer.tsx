import { links } from "@/data/const";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-64 bg-neutral-950 text-white flex flex-col gap-4 p-8 justify-center items-center">
      <div className="text-center divide-x-2">
        {links.map(link => 
          <Link 
            key={link.href} 
            href={link.href} 
            className="p-2"
          >{link.text}</Link>
        )}
      </div>

      <div className="text-center">
        <p>1234 Paws Avenue, Dogcity, FL 12345</p>
        <p>(555) 123-4567</p>
        <p><a href="mailto:info@pawsitivelyperfectgrooming.com">info@pawsitivelyperfectgrooming.com</a></p>
      </div>

      <p className="text-neutral-600 line-through">Copyright © 2024 Pawsitively Perfect Grooming LLC. All rights reserved.</p>
    </footer>
  );
}

export default Footer;