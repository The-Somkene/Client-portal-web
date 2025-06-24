import Image from "next/image";

function StatsCards() {
return(
 <>
<div className="grid grid-cols-5 gap-4 mb-6">
  <div className="flex flex-col gap-12 bg-white p-4 rounded shadow border-l-[#543CDA] border-l-4">
    <div className="flex items-center justify-between">
      <div className="">
      <h1 className="font-bold text-lg">Total Projects</h1>
      <p className="text-sm font-light text-gray-500">Active Projects</p>
      </div>
     <div className="bg-[#EAE8F7] p-3 rounded-full">
     <Image src="bag-suitcase.svg" alt="Bag" width={20} height={20} />
     </div>
    </div>
    
    <div className="flex items-center justify-between">
    <p className="text-5xl font-bold text-gray-500">18</p>
    <div className="flex items-center gap-2">
    <Image src="/graph-arrow-increase.svg" alt="Graph" width={15} height={15} />
    <p className="text-sm font-light text-[#543CDA]">
    +3 this week
    </p>
    </div>
    </div>
  </div>

  <div className="flex flex-col gap-12 bg-white p-4 rounded shadow border-l-[#543CDA] border-l-4">
    <div className="flex items-center justify-between">
      <div className="">
      <h1 className="font-bold text-lg">Payment Confirmations</h1>
      <p className="text-sm font-light text-gray-500">Payments awaiting approval</p>
      </div>
     <div className="bg-[#EAE8F7] p-3 rounded-full">
     <Image src="/bill-2--currency.svg" alt="Bag" width={20} height={20} />
     </div>
    </div>
    
    <div className="flex items-center justify-between">
    <p className="text-5xl font-bold text-gray-500">3</p>
    <div className="flex items-center gap-2">
    <Image src="/graph-arrow-increase.svg" alt="Graph" width={15} height={15} />
    <p className="text-sm font-light text-[#543CDA]">
    +3 this week
    </p>
    </div>
    </div>
  </div>

  <div className="flex flex-col gap-12 bg-white p-4 rounded shadow border-l-[#543CDA] border-l-4">
    <div className="flex items-center justify-between">
      <div className="">
      <h1 className="font-bold text-lg">Upcoming Meetings</h1>
      <p className="text-sm font-light text-gray-500">For this week</p>
      </div>
     <div className="bg-[#EAE8F7] p-3 rounded-full">
     <Image src="/webcam-video.svg" alt="Bag" width={20} height={20} />
     </div>
    </div>
    
    <div className="flex items-center justify-between">
    <p className="text-5xl font-bold text-gray-500">3</p>
    <div className="flex items-center gap-2">
    <Image src="/graph-arrow-increase.svg" alt="Graph" width={20} height={20} />
    <p className="text-sm font-light text-[#543CDA]">
    +3 this week
    </p>
    </div>
    </div>
  </div>

  <div className="flex flex-col gap-12 bg-white p-4 rounded shadow border-l-[#543CDA] border-l-4">
    <div className="flex items-center justify-between">
      <div className="">
      <h1 className="font-bold text-lg">Deliverables Due</h1>
      <p className="text-sm font-light text-gray-500">For this week. Across 4 projects.</p>
      </div>
     <div className="bg-[#EAE8F7] p-3 rounded-full">
     <Image src="/warning-octagon.svg" alt="Bag" width={20} height={20} />
     </div>
    </div>
    
    <div className="flex items-center justify-between">
    <p className="text-5xl font-bold text-gray-500">7</p>
    <div className="flex items-center gap-2">
    <Image src="/graph-arrow-increase.svg" alt="Graph" width={20} height={20} />
    <p className="text-sm font-light text-[#543CDA]">
    +3 this week
    </p>
    </div>
    </div>
  </div>

  <div className="flex flex-col gap-12 bg-white p-4 rounded shadow border-l-[#543CDA] border-l-4">
    <div className="flex items-center justify-between">
      <div className="">
      <h1 className="font-bold text-lg">Pending Payments</h1>
      <p className="text-sm font-light text-gray-500">Unpaid Invoices</p>
      </div>
     <div className="bg-[#EAE8F7] p-3 rounded-full">
     <Image src="/bag-dollar.svg" alt="Bag" width={20} height={20} />
     </div>
    </div>
    
    <div className="flex items-center justify-between">
    <p className="text-5xl font-bold text-gray-500">540K</p>
    <div className="flex items-center gap-2">
    <Image src="/graph-arrow-increase.svg" alt="Graph" width={15} height={15} />
    <p className="text-sm font-light text-[#543CDA]">
    +3 this week
    </p>
    </div>
    </div>
  </div>
</div>
 </>
) 
}

export default StatsCards;