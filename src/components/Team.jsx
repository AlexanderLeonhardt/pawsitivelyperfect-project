import { members } from "@/data/const";
import Image from "next/image";

const Team = () => {
  return ( 
    <div className="w-full flex flex-col">
      {members.map(member => 
      <div key={member.name} className="flex flex-col gap-4 p-4 items-center justify-center text-center md:flex-row">
        <Image src={member.picture} alt={member.name} width={100} height={100}/>
        <div className="max-w-96">
          <h3 className="font-bold my-4">{member.name}, {member.job}</h3>
          <p>{member.desc}</p>
        </div>
      </div>)}
    </div>
  );
}

export default Team;