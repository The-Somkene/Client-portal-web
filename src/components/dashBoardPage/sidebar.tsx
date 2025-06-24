import Image from "next/image";

function Sidebar() {
 return(
  <>
  <aside className="w-[20rem] p-6 mx-4 flex flex-col space-y-6">
    <div className="bg-black px-8 py-2 rounded-xl w-[20rem] flex items-center justify-center">
      <Image src="/nexoris_logo_black.svg" alt="Nexoris Logo" width={100} height={100} />
    </div>

   <div className="bg-white w-[20rem] py-6 rounded-xl px-4 flex flex-col gap-4">
    <div className="flex items-end justify-end">
    <Image src="/Arrow - Up Circle.svg" alt="" width={30} height={30} />
    </div>
  
    <nav className="flex flex-col space-y-4">
      <ul className="flex flex-col">
        <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-bold">
          <span><Image src="/dashboard-circle.svg" alt="" width={15} height={15} className="text-[#543CDA]"/></span>DashBoard
        </li>

        <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-bold">
        <span><Image src="/user-single.svg" alt="" width={15} height={15} /></span>Clients
        </li>

        <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-bold">
        <span><Image src="/search-dollar.svg" alt="" width={15} height={15} /></span>Projects
        </li>

        <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-bold">
        <span><Image src="/insert-side.svg" alt="" width={15} height={15} /></span>Deliverables
        </li>

        <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-bold">
        <span><Image src="/webcam-video.svg" alt="" width={15} height={15} /></span>Meetings
        </li>

        <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-bold">
        <span><Image src="/chat-bubble.svg" alt="" width={15} height={15} /></span>Messages
        </li>

        <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-bold">
        <span><Image src="/bill-2--currency.svg" alt="" width={15} height={15} /></span>Payment
        </li>

      </ul>

      <div className="h-[0.2] bg-[#553bd96d]"></div>

      <ul>
      <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-bold">
        <span><Image src="/cog--work.svg" alt="" width={15} height={15} /></span>Settings
        </li>
      </ul>
    </nav>

    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 border border-[#553bd96d] px-4 py-3 rounded-xl">
        <Image src="/Profile pic.svg" alt="" width={40} height={40} />
        <div className="">
          <h2 className="font-bold text-xl">Tolu Ayomide</h2>
          <p className="font-light text-sm text-gray-500">Product Manager</p>
        </div>
      </div>

      <div className="border border-red-400 px-4 py-1 rounded-xl">
      <h1 className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-red-600 font-bold">
        <span><Image src="/logout-1.png" alt="" width={20} height={20} /></span>Logout
        </h1>
      </div>
    </div>
   </div>
</aside>
  </>
 ) 
 }
 
 export default Sidebar;