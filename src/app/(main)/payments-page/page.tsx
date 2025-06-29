import Image from "next/image";
import Link from "next/link";

const statusStyles = {
  Pending: "text-[#F8A72D]",
  Overdue: "text-[#C43131]",
  Paid: "text-[#00D073]",
};

const milestone = [
  { status: "Pending" },
  { status: "Pending" },
  { status: "Overdue" },
  { status: "Paid" },
  { status: "Paid" },
];

const Payments = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-13.75 ">
        <h1 className="text-xl font-semibold text-black">Payments</h1>
        <Link href="/create-invoice-page">
        <div className="border-none bg-[#543CDA] py-4 px-11.25 rounded-[7px] text-white cursor-pointer">
          <p className="font-normal text-[12px]">Create Invoice</p>
        </div>
        </Link>
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

      <div className="py-4 rounded-[7px] space-y-4">
        {/* Independent table header */}
        <div className="overflow-hidden rounded-[7px] border-1 border-[#543CDA4D]">
          <table className="w-full  text-left">
            <thead>
              <tr className="bg-[#543CDA1A] text-[#543CDA] font-semibold text-sm">
                <th className="py-6 px-6">Invoice #</th>
                <th className="py-6 px-6">Amount</th>
                <th className="py-6 px-6">Client</th>
                <th className="py-6 px-6">Project</th>
                <th className="py-6 px-6">Milestone</th>
                <th className="py-6 px-6">Status</th>
                <th className="py-6 px-6">Date</th>
                <th className="py-6 px-6 ">Actions</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Independent table body */}
        <div className="space-y-2">
          {milestone.map((d, idx) => (
            <div
              key={idx}
              className="grid grid-cols-8 bg-white shadow rounded-[7px] font-semibold text-[10px] text-black hover:bg-gray-50 transition"
            >
              <div className="py-5 px-6">INV-104</div>
              <div className="py-5 px-5 ml-5">#250,000</div>
              <div className="py-5 px-5 ml-4">Tayo Wellens</div>
              <div className="py-5 px-5 ml-0">Food Delivery Website</div>
              <div className="py-5 px-5 ml-2">Wireframe Design</div>
              <div className="py-5 px-5 ml-5">
                <span
                  className={`px-5 py-5 rounded-[4px] w-[20ch] ${
                    statusStyles[d.status]
                  }`}
                >
                  {d.status}
                </span>
              </div>
              <div className="py-5 px-5 ml-6">Feb 1, 2025</div>
              <div className="py-5 px-5 text-xl cursor-pointer ml-3">
                <span>
                  <Image
                    src="/bullet-list-points.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payments;
