import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <main>
      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-center">Reach Out To Us</h1>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-center gap-4">
            <p>Let us know here online, over the phone, or in person.</p>
            <div className="flex flex-col items-center">
              <p>1234 Paws Avenue, Dogcity, FL 12345</p>
              <p>(555) 123-4567</p>
              <p className="text-blue-500"><a href="mailto:info@pawsitivelyperfectgrooming.com">info@pawsitivelyperfectgrooming.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">Book an Appointment</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;