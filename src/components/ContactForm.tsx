import PhoneInput from "./PhoneInput";
import PickDate from "./PickDate";

const ContactForm = () => {
  const formAction = async (data: FormData) => {
    'use server'
    console.log('ownername:', data.get('ownername'));
    console.log('email:', data.get('email'));
    console.log('phone:', data.get('phone'));
    console.log('petname:', data.get('petname'));
    console.log('breed:', data.get('breed'));
    console.log('weight:', data.get('weight'));
    console.log('date:', data.get('date'));
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-slate-400 p-4 rounded-xl">

        <div className="flex justify-between items-center">
          <label htmlFor="ownername" className="text-white">Name</label>
          <input 
            name="ownername" 
            type="text" 
            required 
            placeholder="Your Name" 
            className="bg-slate-500 text-white placeholder-slate-400 rounded-xl p-2 outline-1 outline-slate-100"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="email" className="text-white">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            placeholder="Email" 
            className="bg-slate-500 text-white placeholder-slate-400 rounded-xl p-2 outline-1 outline-slate-100"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="phone" className="text-white">Phone #</label>
          <PhoneInput name="phone"/>
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="ownername" className="text-white">Pet's Name</label>
          <input 
            name="petname" 
            type="text" 
            required 
            placeholder="Pet's Name" 
            className="bg-slate-500 text-white placeholder-slate-400 rounded-xl p-2 outline-1 outline-slate-100"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="ownername" className="text-white">Weight (lbs)</label>
          <input 
            name="weight" 
            type="number" 
            required 
            placeholder="Weight in lbs" 
            className="bg-slate-500 text-white placeholder-slate-400 rounded-xl p-2 outline-1 outline-slate-100"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="date" className="text-white">Date</label>
          <PickDate />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
