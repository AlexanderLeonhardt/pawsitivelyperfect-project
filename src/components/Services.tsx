import Image from "next/image";
import { services } from "@/data/const";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service, index) => <div key={index} className="p-4 rounded-xl shadow-xl flex flex-col items-center gap-4">
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