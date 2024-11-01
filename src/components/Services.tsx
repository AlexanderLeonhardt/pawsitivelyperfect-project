import Image from "next/image";

const Services = () => {
  const serviceList = [
    { 
      name: "Basic Bath & Brush", 
      price: 30, 
      desc: "A refreshing bath and thorough brush to keep your pet's coat clean and shiny.",
      img: "bone",
    },
    { 
      name: "Full Groom", 
      price: 50, 
      desc: "Complete grooming with a haircut, bath, nail trim, and ear cleaning for a polished, pampered look.",
      img: "grooming",
    },
    { 
      name: "Nail Trim Only", 
      price: 10, 
      desc: "Quick and gentle nail trim to keep those paws neat and comfortable.",
      img: "nail-scissors",
    },
    { 
      name: "Teeth Cleaning", 
      price: 15, 
      desc: "Gentle teeth cleaning to support your pet's oral health and fresh breath.",
      img: "pet-brush",
    },
    { 
      name: "Deshedding Treatment", 
      price: 40, 
      desc: "Reduce shedding with a special treatment to keep coats smooth and manageable.",
      img: "brush",
    },
    { 
      name: "Puppy's First Groom", 
      price: 25, 
      desc: "A gentle introduction to grooming, perfect for puppies with a soft bath, brush, and nail trim.",
      img: "pet-shampoo",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {serviceList.map((service, index) => <div key={index} className="p-4 rounded-xl shadow-xl flex flex-col items-center gap-4">
        <Image src={`/${service.img}.png`} alt={service.img} height={100} width={100}/>
        <h3 className="text-3xl font-bold text-center">{service.name}</h3>
        <p className="italic text-gray-500">Starting at <span className="text-green-700 font-bold">${service.price}</span></p>
        <hr className="w-32 border-t-2 border-green-700"/>
        <p>{service.desc}</p>
      </div>)}
    </div>
  );
}

export default Services;