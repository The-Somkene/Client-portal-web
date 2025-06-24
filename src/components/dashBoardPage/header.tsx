import Image from "next/image";

function Header() {
return(
 <>
 <div className="flex items-center gap-10 mb-6 sticky top-0 z-10">
  <div className="flex items-center justify-between shadow-2xl px-12 py-3 rounded-xl w-full bg-white">
  <h1 className="text-xl font-semibold text-[#543CDA]">Overview</h1>
  <div className="flex items-center space-x-10">
    <button className="text-[#543CDA] font-bold text-xl px-4 py-2 rounded-md">+ New Client</button>
      <Image src="/notification-alarm.svg" alt="Profile Picture" width={30} height={30}/>
      <Image src="/Profile pic.svg" alt="Profile Picture" width={60} height={60}/>
  </div>
  </div>
</div>
 </>
) 
}

export default Header;