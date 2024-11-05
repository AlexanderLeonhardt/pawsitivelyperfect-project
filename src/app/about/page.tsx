import Team from '@/components/Team';

const AboutPage = () => {
  return (
    <main>
      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-center">Our Story</h1>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <blockquote className="italic text-lg">&quot;Pawsitively Perfect Grooming began with a simple mission: to give pets the care, comfort, and attention they deserve. Inspired by my lifelong love for animals, I wanted to create a space where pets are treated with kindness and patience. From humble beginnings as a one-person grooming setup, we&apos;ve grown into a dedicated team of pet lovers who share the same goal: making every grooming session a positive and stress-free experience.&quot;</blockquote>
            <p className="self-center uppercase text-gray-500">- Sarah, Founder</p>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">Our Mission & Values</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>Our mission is to provide exceptional grooming services that enhance pets&apos; well-being and build lasting relationships with our clients and their furry family members. We believe in compassionate care, quality, and integrity in everything we do. Each pet is unique, and we value their comfort, safety, and happiness above all else.</p>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>Our team is a group of experienced pet groomers with diverse backgrounds in pet care. Here are the wonderful people behind Pawsitively Perfect Grooming</p>
            <Team />
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center">Our Grooming Philosophy</h2>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-start gap-4">
            <p>At Pawsitively Perfect Grooming, we believe in a gentle, pet-first approach. We take the time to understand each pet&apos;s personality, needs, and comfort level, allowing us to tailor our grooming sessions to them. Our team uses top-quality, pet-safe products to ensure a healthy grooming experience. Whether it&apos;s a simple bath or a full grooming package, we&apos;re committed to creating a stress-free environment for every pet.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;