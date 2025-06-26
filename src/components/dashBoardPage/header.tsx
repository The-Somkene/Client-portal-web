import Image from "next/image";
import Link from "next/link";

function Header() {
return(
 <>
 <div className="flex items-center gap-10 mb-6 sticky top-0 z-10">
  <div className="flex items-center justify-between shadow-2xl px-12 py-3 rounded-xl w-full bg-white">
  <div className="flex gap-20 items-center ml-[36px]">
      <h1 className=" font-bold text-xl text-[#543CDA]">Overview</h1>
      <div className="search my-[10px]">
      <input
        type="search"
        className="search-input py-5 bg-[#EAE8F7] rounded-[10px] w-[442px] px-[24px] text[16px] text-[#543CDA] placeholder-[#543CDA80] outline-none"
        placeholder="Search Clients, Projects..."
      />
    </div>
  </div>
  <div className="flex items-center space-x-10">
    <Link href="/newclient/clientinfo">
    <button className="text-[#543CDA] font-bold text-xl px-4 py-2 rounded-md cursor-pointer">+ New Client</button>
    </Link>
      <Image src="/notification-alarm.svg" alt="Profile Picture" width={30} height={30}/>
      <Image src="/Profile pic.svg" alt="Profile Picture" width={60} height={60}/>
  </div>
  </div>
</div>
 </>
) 
}

export default Header;