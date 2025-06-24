import Image from "next/image";

const Payments = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-13.75 ">
        <h1 className="text-xl font-semibold text-black">Payments</h1>
        <div className="border-none bg-[#543CDA] py-4 px-11.25 rounded-[7px] text-white cursor-pointer">
          <p className="font-normal text-[12px]">Create Invoice</p>
        </div>
      </div>
      <div className="cards grid grid-cols-4 gap-1.75 mt-7.5">
        <div className="card1 bg-white pl-3.25 pr-13.75 py-3 rounded-[5px] border-l-6 border-l-[#543CDA]">
          <div className="flex items-center justify-between text-black mb-3.5">
            <p className="font-medium text-sm pb-4">Total Invoiced</p>
            <span>
              <Image src="/total-invoiced.svg" alt="" width={32} height={32} />
            </span>
          </div>
          <h2 className="text-black font-bold text-4xl">500K</h2>
        </div>
        <div className="card1 bg-white pl-3.25 pr-13.75 py-3 rounded-[5px] border-l-6 border-l-[#543CDA]">
          <div className="flex items-center justify-between text-black mb-3.5">
            <p className="font-medium text-sm pb-4">Total Paid</p>
            <span>
              <Image src="/total-paid.svg" alt="" width={32} height={32} />
            </span>
          </div>
          <h2 className="text-black font-bold text-4xl">200K</h2>
        </div>
        <div className="card1 bg-white pl-3.25 pr-13.75 py-3 rounded-[5px] border-l-6 border-l-[#543CDA]">
          <div className="flex items-center justify-between text-black mb-3.5">
            <p className="font-medium text-sm pb-4">Pending Payments</p>
            <span>
              <Image
                src="/pending-payments.svg"
                alt=""
                width={32}
                height={32}
              />
            </span>
          </div>
          <h2 className="text-black font-bold text-4xl">150K</h2>
        </div>
        <div className="card1 bg-white pl-3.25 pr-13.75 py-3 rounded-[5px] border-l-6 border-l-[#543CDA]">
          <div className="flex items-center justify-between text-black mb-3.5">
            <p className="font-medium text-sm pb-4">Overdue Invoices</p>
            <span>
              <Image
                src="/overdue-invoices.svg"
                alt=""
                width={32}
                height={32}
              />
            </span>
          </div>
          <h2 className="text-black font-bold text-4xl">100K</h2>
        </div>
        <div className="card1 bg-white pl-3.25 pr-13.75 py-3 rounded-[5px] border-l-6 border-l-[#543CDA]">
          <div className="flex items-center justify-between text-black mb-3.5">
            <p className="font-medium text-sm pb-4">This Month&apos;s Income</p>
            <span>
              <Image
                src="/overdue-invoices.svg"
                alt=""
                width={32}
                height={32}
              />
            </span>
          </div>
          <h2 className="text-black font-bold text-4xl">150K</h2>
        </div>
      </div>
      <div className="flex justify-end gap-[15px] my-9.5 pr-8">
        <div className="flex items-center gap-[56px] border-1 border-[#543CDA80] py-[14px] px-[17px] bg-white rounded-[7px] w-[137px] cursor-pointer">
          <p className="font-semibold text-[10px] text-[#543CDA]">Client</p>
          <span>
            <Image src="/arrow-down-2.svg" alt="" width={10} height={10} />
          </span>
        </div>
        <div className="flex items-center gap-[56px] border-1 border-[#543CDA80] py-[14px] px-[17px] bg-white rounded-[7px] w-[137px] cursor-pointer">
          <p className="font-semibold text-[10px] text-[#543CDA]">Project</p>
          <span>
            <Image src="/arrow-down-2.svg" alt="" width={10} height={10} />
          </span>
        </div>
        <div className="flex items-center gap-[56px] border-1 border-[#543CDA80] py-[14px] px-[17px] bg-white rounded-[7px] w-[137px] cursor-pointer">
          <p className="font-semibold text-[10px] text-[#543CDA]">Status</p>
          <span>
            <Image src="/arrow-down-2.svg" alt="" width={10} height={10} />
          </span>
        </div>
        <div className="flex items-center gap-[56px] border-1 border-[#543CDA80] py-[14px] px-[17px] bg-white rounded-[7px] w-[137px] cursor-pointer">
          <p className="font-semibold text-[10px] text-[#543CDA]">Date</p>
          <span>
            <Image src="/arrow-down-2.svg" alt="" width={10} height={10} />
          </span>
        </div>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th className="font-semibold text-sm text-black">Invoice #</th>
              <th className="font-semibold text-sm text-black">Amount</th>
              <th className="font-semibold text-sm text-black">Client</th>
              <th className="font-semibold text-sm text-black">Project</th>
              <th className="font-semibold text-sm text-black">Milestone</th>
              <th className="font-semibold text-sm text-black">Status</th>
              <th className="font-semibold text-sm text-black">Date</th>
              <th className="font-semibold text-sm text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INV-104</td>
              <td>#250,000</td>
              <td>Tayo Wellens</td>
              <td>Food Delivery Website</td>
              <td>Wireframe Design</td>
              <td>
                <p>Pending Confirmation</p>
              </td>
              <td>Feb 1, 2025</td>
              <td>
                {" "}
                <Image
                  src="/bullet-list-points.svg"
                  alt=""
                  width={18}
                  height={14}
                />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Payments;
