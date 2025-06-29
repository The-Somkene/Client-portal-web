
import Image from "next/image";

const Invoice = () => {
  return (
    <section className="mt-7.75">
      <div className="flex items-center gap-3.5 font-medium text-black text-[16px]">
        <span>
          <Image src="/stroke-left.svg" alt="" width={7} height={7} />
        </span>
        <p>Back</p>
      </div>
      <h1 className="font-semibold text-2xl mt-7 mb-12.75">Create Invoice</h1>
      <div className="box1 bg-white pl-13 pr-14 pt-8 rounded-[10px] border-l-10 border-l-[#543CDA] mb-28">
        <form action="" className="flex flex-col gap-6 text-black">
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="client"
              className="font-semibold text-sm text-black"
            >
              Client
            </label>
            <input
              type="text"
              name="client"
              placeholder="Enter Name"
              className="bg-[#EAE8F7] px-10.5 py-6.5 rounded-sm border-b-3 border-b-[#543CDA] text-xs outline-none placeholder:text-[#00000066] font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="project"
              className="font-semibold text-sm text-black"
            >
              Project
            </label>
            <input
              type="text"
              name="project"
              placeholder="Enter Project"
              className="bg-[#EAE8F7] px-10.5 py-6.5 rounded-sm border-b-3 border-b-[#543CDA] text-xs outline-none placeholder:text-[#00000066] font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="linkedMilestone"
              className="font-semibold text-sm text-black"
            >
              Linked Milestone
            </label>
            <input
              type="text"
              name="linkedMilestone"
              placeholder="Enter Milestonne"
              className="bg-[#EAE8F7] px-10.5 py-6.5 rounded-sm border-b-3 border-b-[#543CDA] text-xs outline-none placeholder:text-[#00000066] font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="amount"
              className="font-semibold text-sm text-black"
            >
              Amount To Bill
            </label>
            <input
              type="text"
              name="amount"
              placeholder="NGN"
              className="bg-[#EAE8F7] px-10.5 py-6.5 rounded-sm border-b-3 border-b-[#543CDA] text-xs outline-none placeholder:text-[#00000066] font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="invoiceDescription"
              className="font-semibold text-sm text-black"
            >
              Invoice Description
            </label>
            <input
              type="text"
              name="invoiceDescription"
              placeholder="Enter Description"
              className="bg-[#EAE8F7] px-10.5 py-6.5 rounded-sm border-b-3 border-b-[#543CDA] text-xs outline-none placeholder:text-[#00000066] font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="invoiceId"
              className="font-semibold text-sm text-black"
            >
              Invoice ID
            </label>
            <input
              type="text"
              name="invoiceId"
              placeholder="INV-104"
              className="bg-[#EAE8F7] px-10.5 py-6.5 rounded-sm border-b-3 border-b-[#543CDA] text-xs outline-none placeholder:text-[#00000066] font-semibold"
            />
          </div>
        </form>
        <div className=" flex gap-9.5 mt-16 pb-8">
          <div className="btn bg-[#543CDA] py-3.5 px-14 font-semibold text-[16px] text-white rounded-[7px] cursor-pointer">
            <p>Create</p>
          </div>
          <div className="tick flex items-center gap-3.5 cursor-pointer text-[#543CDA] font-semibold text-[16px]">
            <span>
              <Image src="/container.svg" alt="" width={18} height={18} />
            </span>
            <p>Notify Client</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
