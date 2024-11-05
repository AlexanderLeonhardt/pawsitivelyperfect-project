import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <main>
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
    </main>
  );
}

export default ServicesPage;