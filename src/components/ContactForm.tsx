import PickDate from "./PickDate";

const ContactForm = () => {
  const formAction = async (data: FormData) => {
    'use server'
    console.log('Owner:', data.get('ownername'));
    console.log('Email:', data.get('email'));
    console.log('Phone:', data.get('phonenumber'));
    console.log('Pet:', data.get('petname'));
    console.log('Breed:', data.get('breed'));
    console.log('Weight:', data.get('weight'));
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 p-4">
      <input 
        name="ownername" 
        type="text" 
        required 
        placeholder="Owner's Name" 
      />
      <input 
        name="email" 
        type="email" 
        required 
        placeholder="Email" 
      />
      <input 
        name="phonenumber" 
        type="number" 
        required 
        placeholder="Phone #" 
      />
      <input 
        name="petname" 
        type="text" 
        required 
        placeholder="Pet's Name" 
      />
      <input 
        name="breed" 
        type="text" 
        placeholder="Breed" 
      />
      <input 
        name="weight" 
        type="number" 
        required 
        placeholder="Weight in lbs" 
      />
      <PickDate />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
