'use client'
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {
  useEffect(() => {
    setTimeout(() => {
      redirect('/contact');
    }, 5000);
  }, []);

  return (
    <main className="min-h-[calc(100vh-64px-256px)] flex justify-center items-center">
      <section className="my-12">
        <div className="max-w-6xl m-auto px-8 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-center">Appointment Scheduled</h1>
          <hr className="w-32 border-t-2 border-green-700"/>
          <div className="text-lg flex flex-col items-center gap-4">
            <p>Thank you for booking an appointment! We look forward to seeing you and will reach out at the earliest convenience.</p>
            <Link href='/contact' className="underline">Click here if you are not automatically redirected.</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SuccessPage