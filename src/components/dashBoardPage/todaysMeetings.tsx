import Image from "next/image";
import Link from "next/link";

function TodaysMeetings() {
 return(
 <section className="bg-white px-4 py-10 border-l-4 border-l-[#543CDA]  border-2 border-[#553bd96d] rounded shadow">
  <div className="flex flex-col gap-4 px-8">
    <div className="flex flex-col gap-4">
    <div className="flex justify-end gap-8">
      <Image src="/Arrow - Up Circle.svg" alt="" width={25} height={25} />
      <Image src="/Arrow - Up Circle-1.svg" alt="" width={25} height={25} />
    </div>
    <div className="flex items-center justify-between">
      <h1 className="font-semibold mb-2">Today's Meetings</h1>
      <Link href="#">View All</Link>
    </div>
    </div>

    <div className="text-sm space-y-2">
      <div className="flex flex-col gap-2 border border-[#543cda73] p-4 rounded">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-[#553bd96d] w-13 h-12 flex items-center justify-center">
        <Image src="Vector.svg" alt="Vector" width={25} height={25} />
        </div>
      <h1 className="font-bold text-lg">Meeting with Item 7 go stakeholders (Voice Call)</h1>
      </div>

        <p className="text-gray-500 text-lg font-medium"><span className="text-[#543CDA]">3:30 pm</span> | Food Delivery Website | Discuss Landing page design</p>
      </div>

      <div className="flex flex-col gap-2 border border-[#543cda73] p-4 rounded">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-[#553bd96d] w-12 h-12 flex items-center justify-center">
        <Image src="button-record.svg" alt="Vector" width={25} height={25} />
        </div>
      <h1 className="font-bold text-lg">Meeting with Bolu (Video Call)</h1>
      </div>

        <p className="text-gray-500 text-lg font-medium"><span className="text-[#543CDA]">5:30 pm </span>| Jam Fill App | Discuss Wireframes</p>
      </div>

      <div className="flex flex-col gap-2 border border-[#543cda73] p-4 rounded">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-[#553bd96d] w-13 h-12 flex items-center justify-center">
        <Image src="Vector.svg" alt="Vector" width={25} height={25} />
        </div>
      <h1 className="font-bold text-lg">Meeting with Item 7 go stakeholders (Voice Call)</h1>
      </div>

        <p className="text-gray-500 text-lg font-medium"><span className="text-[#543CDA]">3:30 pm</span> | Food Delivery Website | Discuss Landing page design</p>
      </div>

    </div>
  </div>
</section>
 ) 
 }
 
 export default TodaysMeetings;