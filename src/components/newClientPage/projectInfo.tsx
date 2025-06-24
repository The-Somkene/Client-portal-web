import Image from "next/image";
import Link from "next/link";

function ProjectInfo() {
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
        <form className="space-y-4">
          <label htmlFor="" className="textxl font-bold">Project Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <div className="flex flex-col">
          <label htmlFor="" className="textxl font-bold">Project Description</label>
          <textarea name="projectDescription" rows={3} cols={30} className="px-4 py-4 text-gray-500 outline outline-gray-300 rounded bg-[#ecebf1] border-b-4 border-b-[#543CDA]">Discribe Project</textarea>
          </div>

          <label htmlFor="" className="textxl font-bold">Project Objective</label>
          <input
            type="text"
            placeholder="Objective"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="" className="textxl font-bold">Associated Client</label>
          <select
            className="w-full px-4 py-4 bg-[#ecebf1] text-gray-500 border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          >
            <option value="">Select Client</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <div className="flex flex-col">
          <label htmlFor="" className="textxl font-bold">Client Goals</label>
          <textarea name="projectDescription" rows={3} cols={30} className="px-4 py-4 text-gray-500 outline outline-gray-300 rounded bg-[#ecebf1] border-b-4 border-b-[#543CDA]">What are your Goals</textarea>
          </div>

          <div className="flex items-center justify-between gap-4">
           <div className="flex flex-col w-1/2">
            <label htmlFor="" className="textxl font-bold">Start Date</label>
            <input type="date" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>

           <div className="flex flex-col w-1/2">
            <label htmlFor="" className="textxl font-bold">Due Date</label>
            <input type="date" className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required/>
           </div>
          </div>

          <div className="flex flex-col">
          <label htmlFor="" className="textxl font-bold">Project Status (e.g Not Started, In Progress, Completed. On Hold)</label>
          <textarea name="noteOnClient" rows={3} cols={30} className="px-4 py-4 text-gray-500 outline outline-gray-300 rounded bg-[#ecebf1] border-b-4 border-b-[#543CDA]">Enter Status</textarea>
          </div>

          <label htmlFor="" className="textxl font-bold">Assigned Lead</label>
          <input
            type="text"
            placeholder="Lead Name"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="" className="textxl font-bold">Project Priority (e.g Low, Medium, High)</label>
          <input
            type="text"
            placeholder="What's your Thought?"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />
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

export default ProjectInfo;