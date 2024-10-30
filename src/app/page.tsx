import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-[700px]">
        <Image 
          className="object-cover"
          src={'/banner.jpg'} 
          alt="banner"
          fill
        />
      </div>
    </main>
  );
}
