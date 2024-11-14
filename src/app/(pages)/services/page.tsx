import Services from "@/components/Services";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <main>
      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-center">Our Grooming Process</h1>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>At Pawsitively Perfect Grooming, we follow a step-by-step process to ensure a smooth and enjoyable experience for every pet. From a warm bath and gentle drying to careful trimming and styling, our process is designed with your pet&apos;s comfort in mind.</p>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">Service Options</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>At Pawsitively Perfect Grooming, we offer a full range of grooming services tailored to meet the specific needs of your pet. From baths and brushes to specialized grooming packages, our services are designed to make your pet look and feel their best. Explore our service options below to find the perfect fit for your furry friend.</p>
            <Services />
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">Specialty Add-Ons</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>Choose one or more available add-ons for your pet&apos;s visit.</p>
            <ul className="list-disc ml-5 flex flex-col gap-4">
              <li>
                <h3>Flea & Tick Treatment / <span className="text-green-700 font-bold">$10</span></h3>
                <p>Keep pests at bay with our specialized flea and tick shampoo treatment, designed to provide lasting protection.</p>
              </li>
              <li>
                <h3>Ear Cleaning & Deodorizing / <span className="text-green-700 font-bold">$7</span></h3>
                <p>A gentle ear cleaning service that removes wax buildup and leaves your pet&apos;s ears smelling fresh.</p>
              </li>
              <li>
                <h3>Custom Fur Styling / <span className="text-green-700 font-bold">$20</span></h3>
                <p>Looking for a unique style? Our groomers offer custom fur cuts tailored to your preference—whether it&apos;s a fun trim or a breed-specific look.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-center">Book an Appointment</h1>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>Ready to pamper your pet? Book an appointment with us today and let us take care of the rest! We look forward to welcoming you and your furry friend to Pawsitively Perfect Grooming.</p>
            <div>
              <Link href="/contact" className="bg-green-700 text-xl text-white rounded-md p-2 hover:bg-green-900">Book Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;