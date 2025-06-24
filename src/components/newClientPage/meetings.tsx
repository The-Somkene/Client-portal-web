import Image from "next/image";
import Link from "next/link";

function Meetings() {
 return(
  <section className="flex flex-col gap-8">
   <nav className="bg-white flex flex-col gap-8 py-8 px-8 rounded-tr-xl rounded-tl-xl">
    <h1 className="text-xl font-bold">Add New Client</h1>
    <ul className="flex items-center justify-around">
     <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Client Info</li>
     <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Project Info</li>
     <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Milestone</li>
     <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Deliverables</li>
     <li className="hover:underline text-lg font-bold cursor-pointer text-gray-500">Meetings</li>
    </ul>
   </nav>

   <div className="flex flex-col gap-10 p-10 bg-white rounded-br-xl rounded-bl-xl border-l-5 border-l-[#543CDA]">
        <form className="flex flex-col gap-24">
          <div className="space-y-4">
          <label htmlFor="" className="textxl font-bold">Meeting Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="" className="textxl font-bold">Meeting Purpose</label>
          <input
            type="text"
            placeholder="Enter Purpose"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />
          
          <label htmlFor="" className="textxl font-bold">Meeting Type</label>
          <select
            className="w-full px-4 py-4 bg-[#ecebf1] text-gray-500 border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          >
            <option value="">Select Meeting Type</option>
            <option value="admin">Video Call</option>
            <option value="user">Voice Call</option>
          </select>

          <div className="flex items-center justify-between gap-4">
           <div className="flex flex-col w-1/2">
            <label htmlFor="" className="textxl font-bold">Meeting Date</label>
            <input type="date" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>

           <div className="flex flex-col w-1/2">
            <label htmlFor="" className="textxl font-bold">Meeting Time</label>
            <input type="time" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>
          </div>

          <label htmlFor="" className="textxl font-bold">Assigned team member</label>
          <select
            className="w-full px-4 py-4 bg-[#ecebf1] text-gray-500 border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          >
            <option value="">Select Team Member</option>
            <option value="admin">Williams</option>
            <option value="user">SomKenechukwu</option>
          </select>

          <Link href="#">
          <p className="flex items-center gap-2 text-[#543CDA] font-bold">
           <span><Image src="/link-chain.png" alt="Circle" width={20} height={20} /></span>
           Add Meeting Link
           </p>
          </Link>

          </div>

         <div className="flex items-center gap-8">
           <div className="flex items-center justify-center bg-[#543CDA] rounded">
           <button className="text-white py-4 px-20 font-bold">Onboard</button>
           </div>

           <div className="flex items-center justify-center  bg-transparent border border-[#543CDA] rounded">
           <button className="py-4 px-20 text-[#543CDA] flex gap-2 font-bold"><span className="text-[#543CDA] font-bold">+</span>Add Meeting</button>
           </div>
          </div>
        </form>
      </div>
  </section>
 )
};

export default Meetings;