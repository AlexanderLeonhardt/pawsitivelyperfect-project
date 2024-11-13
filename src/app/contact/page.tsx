import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <main>
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