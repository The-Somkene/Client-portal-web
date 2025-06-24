import Link from "next/link";
import CircularProgress from "./circularProgress";

function ProjectCard() {
 return(
  <section className="flex flex-col justify-between gap-4 mb-4">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold">Ongoing Projects</h1>
      <Link href="#" className="text-[#543CDA] underline text-xl font-bold">View All</Link>
    </div>
    
    <div className="flex items-center gap-8">
      <div className="flex items-center justify-between bg-white px-4 py-6 w-1/2 rounded shadow border-[#543cda73] border pr-24 pl-8">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold">Food Delivery Website</h1>
            <p className="text-sm">Client: Zam 7 Co</p>
          </div>
            <p className="mt-2 text-sm text-gray-600">Next Due Item: <br /> <span className="text-black font-light text-xl">Wireframe Delivery</span> <br /> <span className="text-[#543CDA] font-medium">June 1</span>
            </p>

            <Link href="#" className="text-[#543CDA] underline text-xl font-bold">View</Link>
        </div>
        
        <CircularProgress percent={65} />
      </div>

      <div className="flex items-center justify-between bg-white px-4 py-6 w-1/2 rounded shadow border-[#543cda73] border pr-24 pl-8">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold">Food Delivery Website</h1>
            <p className="text-sm">Client: Zam 7 Co</p>
          </div>
            <p className="mt-2 text-sm text-gray-600">Next Due Item: <br /> <span className="text-black font-light text-xl">Wireframe Delivery</span> <br /> <span className="text-[#543CDA] font-medium">June 1</span>
            </p>

          <Link href="#" className="text-[#543CDA] underline text-xl font-bold">View</Link>
        </div>
        
        <CircularProgress percent={65} />
      </div>
    </div>
  </section>
 ) 
 }
 
 export default ProjectCard;