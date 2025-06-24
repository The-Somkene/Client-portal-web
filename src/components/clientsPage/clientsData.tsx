import Image from "next/image";

function ClientData() {
 return(
<section>
 <div className="flex flex-col items-center justify-center gap-10 relative">
  <div className="absolute bottom-20">
  <Image src="EmptyState.svg" alt="Empty State" width={500} height={500} />
  </div>
  <h1 className="font-bold text-2xl text-center">No client has been <br /> onboarded yet</h1>
   <button className="text-white py-4 px-20 font-bold bg-[#543CDA] rounded">New Client</button>
 </div>
</section>
 )
};

export default ClientData;