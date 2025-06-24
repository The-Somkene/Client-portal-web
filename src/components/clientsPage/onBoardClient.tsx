import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OnBoardingClient() {
 return (
   <div className="p-4 rounded-xl space-y-4">
     <div className="flex justify-between items-center mb-4">
       <h2 className="font-bold text-lg text-gray-800">Next Deliverables (This Week)</h2>
       <a href="#" className="text-lg font-medium">View All</a>
     </div>

     <div className="overflow-x-auto">
       <table className="w-full text-sm text-center border-separate border-spacing-y-4">
         <thead>
           <tr className="bg-[#553bd96d] text-[#543CDA]">
             <th className="py-6 px-6 font-bold text-lg rounded-tl-xl rounded-bl-xl">Client Name</th>
             <th className="py-6 px-6 font-bold text-lg"># Of Projects</th>
             <th className="py-6 px-6 font-bold text-lg">Client Status</th>
             <th className="py-6 px-6 font-bold text-lg">Last Active</th>
             <th className="py-6 px-6 font-bold text-lg">Phone</th>
             <th className="py-6 px-6 font-bold text-lg">Email</th>
             <th className="py-6 px-6 font-bold text-lg rounded-tr-xl rounded-br-xl">Action</th>
           </tr>
         </thead>
         <tbody>
             <tr className="bg-white shadow hover:bg-gray-50 transition text-gray-500">
               <td className="py-6 px-6 font-semibold rounded-tl-xl rounded-bl-xl">Tayo Wellens</td>
               <td className="py-6 px-6 font-semibold">3</td>
               <td className="py-6 px-6 font-semibold">New</td>
               <td className="py-6 px-6 font-semibold">Today</td>
               <td className="py-6 px-6 font-semibold">08123344556</td>
               <td className="py-6 px-6 font-semibold">tayowells@gmail.com</td>
               <td className="py-6 px-6 text-xl cursor-pointer text-gray-400 rounded-tr-xl rounded-br-xl">...</td>
             </tr>
         </tbody>
       </table>
     </div>

     
             <div className="flex items-center justify-center gap-4">
              <Link href="#"><p className="flex items-center gap-4 font-bold">
               <span><Image src="/Arrow left.png" alt="" width={20} height={20} /></span> 
               Previous
              </p>
              </Link>
     
              <p className="font-bold">1</p>
              <p className="font-bold">2</p>
              <p className="font-bold">3</p>
              <p className="font-bold">4</p>
              <p className="font-bold">5</p>
     
              <Link href="#">
              <p className="flex items-center gap-4 font-bold"> 
               Next
               <span><Image src="/Arrow right.png" alt="" width={20} height={20} /></span>
              </p>
              </Link>
             </div>
   </div>
 );
}


// export default function OnBoardingClient() {
//  return (
//    <div className="p-4 rounded-xl space-y-4">
//      <div className="flex justify-between items-center mb-4">
//        <h2 className="font-bold text-lg text-gray-800">Next Deliverables (This Week)</h2>
//        <a href="#" className="text-lg font-medium">View All</a>
//      </div>

//      <div className="overflow-auto rounded-xl">
//        <table className="w-full text-sm text-center space-y-02">
//          <thead>
//            <tr className="bg-[#553bd96d] text-[#543CDA]">
//              <th className="py-6 px-6 font-bold text-lg rounded-tl-xl">Client Name</th>
//              <th className="py-6 px-6 font-bold text-lg"># Of Projects</th>
//              <th className="py-6 px-6 font-bold text-lg">Client Status</th>
//              <th className="py-6 px-6 font-bold text-lg">Last Active</th>
//              <th className="py-6 px-6 font-bold text-lg">Phone</th>
//              <th className="py-6 px-6 font-bold text-lg">Email</th>
//              <th className="py-6 px-6 font-bold text-lg rounded-tr-xl">Action</th>
//            </tr>
//          </thead>
//          <tbody className="">
//            {deliverables.map((d, idx) => (
//              <tr
//                key={idx}
//                className="bg-white shadow hover:bg-gray-50 transition"
//              >
//                <td className="py-6 px-6 font-semibold text-gray-500">Tayo Wellens</td>
//                <td className="py-6 px-6 font-semibold text-gray-500">3</td>
//                <td className="py-6 px-6 font-semibold text-gray-500">New</td>
//                <td className="py-6 px-6 font-semibold text-gray-500">Today</td>
//                <td className="py-6 px-6 font-semibold text-gray-500">08123344556</td>
//                <td className="py-6 px-6 font-semibold text-gray-500">tayowells@gmail.com</td>
//                <td className="py-6 px-6 text-xl text-gray-400 cursor-pointer">...</td>
//              </tr>
//            ))}
//          </tbody>
//        </table>
//      </div>
//    </div>
//  );
// }


// export default function OnBoardingClient() {
//   return (
//     <div className="p-4 rounded-xl space-y-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="font-bold text-lg text-gray-800">Next Deliverables (This Week)</h2>
//         <a href="#" className="text-lg font-medium">View All</a>
//       </div>

//       {/* Independent table header */}
//       <div className="overflow-hidden rounded-xl">
//         <table className="w-full text-sm text-center">
//           <thead>
//             <tr className="bg-[#553bd96d] text-[#543CDA]">
//               <th className="py-6 px-6 font-bold text-lg rounded-tl-xl">Client Name</th>
//               <th className="py-6 px-6 font-bold text-lg"># Of Projects</th>
//               <th className="py-6 px-6 font-bold text-lg">Client Status</th>
//               <th className="py-6 px-6 font-bold text-lg">Last Active</th>
//               <th className="py-6 px-6 font-bold text-lg">Phone</th>
//               <th className="py-6 px-6 font-bold text-lg">Email</th>
//               <th className="py-6 px-6 font-bold text-lg rounded-tr-xl">Action</th>
//             </tr>
//           </thead>
//         </table>
//       </div>

//       {/* Independent table body */}
//       <table className="space-y-2 w-full">
//         {deliverables.map((d, idx) => (
//           <tbody
//             key={idx}
//             className="grid grid-cols-7 bg-white shadow rounded-xl overflow-hidden text-sm hover:bg-gray-50 transition"
//           >
//             <tr className="py-6 px-6 font-semibold text-gray-500">Tayo Wellens</tr>
//             <tr className="py-6 px-6 font-semibold text-gray-500">3</tr>
//             <tr className="py-6 px-6 font-semibold text-gray-500">New</tr>
//             <tr className="py-6 px-6 font-semibold text-gray-500">Today</tr>
//             <tr className="py-6 px-6 font-semibold text-gray-500">08123344556</tr>
//             <tr className="py-6 px-6 font-semibold text-gray-500">tayowells@gmail.com</tr>
//             <tr className="py-6 px-6 text-xl text-gray-400 cursor-pointer">...</tr>
//           </tbody>
//         ))}
//       </table>
//     </div>
//   );
// }
