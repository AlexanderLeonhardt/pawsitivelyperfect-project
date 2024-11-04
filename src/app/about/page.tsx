
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
    </main>
  );
}

export default AboutPage;