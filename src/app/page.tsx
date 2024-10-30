import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Image 
          className="object-cover -z-10"
          src={'/banner.jpg'} 
          alt="banner"
          fill
          priority
        />

        <div className="h-[40rem] max-w-6xl m-auto flex justify-center items-center md:justify-end">
          <div className="font-bold bg-gradient-to-r from-black to-transparent p-4 max-w-[28rem] flex flex-col gap-4">
            <p className="text-white text-3xl">Give Your Pet the Pampering They Deserve!</p>
            <div>
              <button className="bg-green-700 text-xl text-white rounded-md p-2 hover:bg-green-900">Book Appointment</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
