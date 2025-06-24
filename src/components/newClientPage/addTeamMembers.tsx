import Image from "next/image";
import Link from "next/link";

function AddTeamMembers() {
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
    <h1 className="text-gray-800 font-bold text-xl">Add Team members</h1>
        <form className="flex flex-col gap-12 space-y-4">
          <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-between gap-4">
          <div className="flex w-full gap-6">
           <div className="flex flex-col w-1/2 gap-3">
            <label htmlFor="" className="textxl font-bold">Name</label>
            <input type="text" placeholder="Enter Name" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>

           <div className="flex flex-col w-1/2 gap-3">
            <label htmlFor="" className="textxl font-bold">Role</label>
            <input type="text" placeholder="Enter Role" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>
          </div>

           <div className="flex w-full gap-6">
           <div className="flex flex-col w-1/2 gap-3">
            <label htmlFor="" className="textxl font-bold">Name</label>
            <input type="text" placeholder="Enter Name" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>

           <div className="flex flex-col w-1/2 gap-3">
            <label htmlFor="" className="textxl font-bold">Role</label>
            <input type="text" placeholder="Enter Role" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>
          </div>

          <div className="flex w-full gap-6">
           <div className="flex flex-col w-1/2 gap-3">
            <label htmlFor="" className="textxl font-bold">Name</label>
            <input type="text" placeholder="Enter Name" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>

           <div className="flex flex-col w-1/2 gap-3">
            <label htmlFor="" className="textxl font-bold">Role</label>
            <input type="text" placeholder="Enter Role" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>
          </div>
           </div>

          <Link href="#">
          <p className="flex items-center gap-2 text-[#543CDA] font-bold">
           <span><Image src="/add-circle.png" alt="Circle" width={20} height={20} /></span>
           Add Memeber
           </p>
          </Link>
          </div>

          <div className="flex items-center gap-8">
           <div className="flex items-center justify-center bg-[#543CDA] rounded">
           <button className="text-white py-4 px-20 font-bold">Next</button>
           </div>
           <div className="flex items-center justify-center  bg-transparent border border-[#543CDA] rounded">
           <button className="py-4 px-20 text-[#543CDA] flex gap-2 font-bold"><span className="text-[#543CDA] font-bold">+</span>Add Project</button>
           </div>
          </div>
        </form>

        <div className="flex items-center justify-center gap-4">
         <p className="flex items-center gap-4 font-bold">
          <span><Image src="/Arrow left.png" alt="" width={20} height={20} /></span> 
          Previous
         </p>

         <p className="font-bold">1</p>
         <p className="font-bold">2</p>

         <p className="flex items-center gap-4 font-bold"> 
          Next
          <span><Image src="/Arrow right.png" alt="" width={20} height={20} /></span>
         </p>
        </div>
      </div>
  </section>
 )
};

export default AddTeamMembers;