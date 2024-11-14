import { redirect } from "next/navigation";
import PhoneInput from "./inputs/PhoneInput";
import DateInput from "./inputs/DateInput";

const ContactForm = () => {
  const formAction = async (data: FormData) => {
    'use server'
    console.log('ownername:', data.get('ownername'));
    console.log('email:', data.get('email'));
    console.log('phone:', data.get('phone'));
    console.log('petname:', data.get('petname'));
    console.log('weight:', data.get('weight'));
    console.log('date:', data.get('date'));

    redirect('/contact/success');
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 p-4 shadow-xl">
      <div className="flex flex-col gap-4">

        <div className="flex justify-between items-center">
          <label htmlFor="ownername">Name</label>
          <input 
            id="ownername"
            name="ownername" 
            type="text" 
            autoComplete="on"
            required 
            placeholder="Your Name" 
            className="placeholder-slate-400 p-2 outline-1 outline-slate-300 bg-slate-100 w-8/12"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            name="email" 
            type="email" 
            autoComplete="on"
            required 
            placeholder="Email" 
            className="placeholder-slate-400 p-2 outline-1 outline-slate-300 bg-slate-100 w-8/12"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="phone">Phone #</label>
          <PhoneInput name="phone"/>
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="ownername">Pet&apos;s Name</label>
          <input 
            id="petname"
            name="petname" 
            type="text" 
            required 
            placeholder="Pet's Name" 
            className="placeholder-slate-400 p-2 outline-1 outline-slate-300 bg-slate-100 w-8/12"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="ownername">Weight (lbs)</label>
          <input 
            id="weight"
            name="weight" 
            type="number" 
            required 
            placeholder="Weight in lbs" 
            className="placeholder-slate-400 p-2 outline-1 outline-slate-300 bg-slate-100 w-8/12"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="date">Date</label>
          <div className="w-8/12">
            <DateInput />
          </div>
        </div>
      </div>
      <button type="submit" className="p-2 text-white bg-slate-400 rounded-xl">Submit</button>
    </form>
  );
}

export default ContactForm;
