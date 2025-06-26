import Image from "next/image";
import Link from "next/link";

function Deliverables() {
 return(
  <section className="flex flex-col gap-8">
   <nav className="bg-white flex flex-col gap-8 py-8 px-8 rounded-tr-xl rounded-tl-xl">
    <h1 className="text-xl font-bold">Add New Client</h1>
    <ul className="flex items-center justify-around">
     <Link href="/newclient/clientinfo">
     <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Client Info</li>
     </Link>
    <Link href="/newclient/projectinfo">
    <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Project Info</li>
    </Link>
     <Link href="/newclient/milestones">
     <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Milestone</li>
     </Link>
     <Link href="/newclient/deliverables">
     <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Deliverables</li>
     </Link>
     <Link href="/newclient/meetings">
     <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Meetings</li>
     </Link>
    </ul>
   </nav>

   <div className="flex flex-col gap-10 p-10 bg-white rounded-br-xl rounded-bl-xl border-l-5 border-l-[#543CDA]">
        <form className="flex flex-col gap-24">
          <div className="space-y-4">
          <label htmlFor="" className="textxl font-bold">Deliverable Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="" className="textxl font-bold">Associated Project</label>
          <input
            type="text"
            placeholder="Food Delivery Website"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

         <div className="flex flex-col">
         <label htmlFor="" className="textxl font-bold">Delivery Description</label>
          <textarea name="Description" rows={3} cols={10} className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required>Enter Description</textarea>
         </div>

           <div className="">
            <label htmlFor="" className="textxl font-bold">Expected Delivery Date</label>
            <input type="date" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
          </div>

          <label htmlFor="" className="textxl font-bold">Status (e.g Not Started, In Progress, Completed. On Hold)</label>
          <input
            type="text"
            placeholder="Enter Status"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />
          </div>

         <div className="flex items-center gap-8">
           <div className="flex items-center justify-center bg-[#543CDA] rounded">
           <button className="text-white py-4 px-20 font-bold">Next</button>
           </div>

           <div className="flex items-center justify-center  bg-transparent border border-[#543CDA] rounded">
           <button className="py-4 px-20 text-[#543CDA] flex gap-2 font-bold"><span className="text-[#543CDA] font-bold">+</span>Add Milestone</button>
           </div>
          </div>
        </form>
      </div>
  </section>
 )
};

export default Deliverables;