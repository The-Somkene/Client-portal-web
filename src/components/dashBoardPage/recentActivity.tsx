import Image from "next/image";
import Link from "next/link";

function RecentActivitiy() {
 return(
 <section className="bg-white px-4 py-10 border-l-4 border-l-[#543CDA]  border-2 border-[#553bd96d] rounded shadow">
  <div className="flex flex-col gap-4 px-8">
    <div className="flex items-center justify-between">
      <h1 className="font-semibold mb-2">Recent Activity</h1>
      <div className="flex items-center gap-8">
      <Image src="/Arrow - Up Circle.svg" alt="" width={25} height={25} />
      <Image src="/Arrow - Up Circle-1.svg" alt="" width={25} height={25} />
      </div>
    </div>

    <div className="text-sm space-y-2">
      <div className="flex flex-col gap-2 border border-[#543cda73] p-4 rounded">
      <h1 className="font-bold">You Marked Jam Fill App Project as Complete</h1>

      <div className="flex justify-between items-center">
        <p className="text-gray-500">10 min ago</p>
        <Link href="#" className="underline">View</Link>
      </div>
      </div>

      <div className="flex flex-col gap-2 border border-[#543cda73] p-4 rounded">
      <h1 className="font-bold">Client ABC Made Payemnt</h1>

      <div className="flex justify-between items-center">
        <p className="text-gray-500">10 min ago</p>
        <Link href="#" className="underline">View</Link>
      </div>
      </div>

      <div className="flex flex-col gap-2 border border-[#543cda73] p-4 rounded">
      <h1 className="font-bold">Meeting Rescheduled by Sarah</h1>

      <div className="flex justify-between items-center">
        <p className="text-gray-500">10 min ago</p>
        <Link href="#" className="underline">View</Link>
      </div>
      </div>

      <div className="flex flex-col gap-2 border border-[#543cda73] p-4 rounded">
      <h1 className="font-bold">Client ABC Cancelled the video call scheduled for 2pm today.</h1>

      <div className="flex justify-between items-center">
        <p className="text-gray-500">10 min ago</p>
        <Link href="#" className="underline">View</Link>
      </div>
      </div>
      
    </div>
  </div>
</section>
 ) 
 }
 
 export default RecentActivitiy;