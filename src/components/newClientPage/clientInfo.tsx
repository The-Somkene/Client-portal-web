import Image from "next/image";
import Link from "next/link";

function ClientInfo() {
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

   <div className="flex p-10 bg-white rounded-br-xl rounded-bl-xl border-l-5 border-l-[#543CDA]">
        <form className="space-y-4">
          <label htmlFor="" className="textxl font-bold">Client Full Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="" className="textxl font-bold">Company Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="" className="textxl font-bold">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="" className="textxl font-bold">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="" className="textxl font-bold">Client Type (e.g Individual. Company, Team)</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-4 bg-[#ecebf1] border-b-4 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <div className="flex flex-col">
          <label htmlFor="" className="textxl font-bold">Notes on Client</label>
          <textarea name="noteOnClient" rows={5} cols={30} className="px-4 py-4 text-gray-500 outline outline-gray-300 rounded bg-[#ecebf1] border-b-4 border-b-[#543CDA]">Enter Text</textarea>
          </div>

          <button
            type="submit"
            className="w-40 bg-indigo-700 text-white py-3 rounded-md hover:bg-indigo-800 transition"
          >
            Next
          </button>
        </form>
      </div>
  </section>
 )
};

export default ClientInfo;