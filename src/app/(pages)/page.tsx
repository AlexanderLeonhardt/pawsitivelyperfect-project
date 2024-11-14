import Image from "next/image";
import Services from "@/components/Services";
import Reviews from "@/components/reviews/Reviews";
import Link from "next/link";

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

        <div className="h-[40rem] max-w-6xl m-auto px-8 flex justify-center items-center md:justify-end">
          <div className="font-bold bg-gradient-to-r from-black to-transparent p-4 max-w-[28rem] flex flex-col gap-4">
            <h1 className="text-white text-3xl">Give Your Pet the Pampering They Deserve!</h1>
            <div>
              <Link href="/contact" className="bg-green-700 text-xl text-white rounded-md p-2 hover:bg-green-900">Book Appointment</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">A Spa Day for Your Furry Friend</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>Welcome to Pawsitively Perfect Grooming, where we treat every pet like family! Our professional team is dedicated to providing gentle, high-quality grooming services to keep your furry friend looking and feeling their best.</p>
            <p>From soothing baths to full grooming packages, <strong>we&apos;re here to make your pet&apos;s visit enjoyable and stress-free</strong>. Discover our range of services, read what our happy clients have to say, and book an appointment to experience the Pawsitively Perfect difference!</p>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">Our Grooming Services</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>At Pawsitively Perfect Grooming, we know every pet is unique, which is why we provide a variety of grooming options for pets of all breeds and sizes. From gentle, calming baths to detailed grooming packages that include haircuts, nail trims, and more, our services are designed to ensure your furry friend looks and feels fantastic. Each treatment is carefully tailored to keep your pet comfortable and happy, whether it&apos;s a quick freshen-up or a complete spa day. We&apos;re here to make grooming a stress-free and enjoyable experience for pets and owners alike.</p>
            <Services />
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>We know your pet is family, and at Pawsitively Perfect Grooming, we treat them like our own. Our groomers are highly trained in pet handling, grooming techniques, and breed-specific needs, making us a trusted choice for pet parents. With a blend of expertise, compassion, and quality care, we&apos;re here to make your pet look and feel fantastic.</p>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">What Our Clients Are Saying</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <Reviews />
        </div>
      </section>
    </main>
  );
}
