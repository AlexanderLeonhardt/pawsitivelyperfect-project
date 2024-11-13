import Link from "next/link";

const SuccessPage = () => {
  return (
    <main>
      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-center">Appointment Scheduled</h1>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-center gap-4">
            <p>Thank you for booking an appointment. We will reach out to you at the earliest convenience.</p>
            <Link href='/contact' className="underline">Click here to go back</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SuccessPage