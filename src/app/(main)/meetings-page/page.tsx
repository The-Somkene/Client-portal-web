import Image from "next/image";

const statusStyles = {
  Held: "text-[#8E8E8E]",
  Cancelled: "text-[#C43131]",
  Upcoming: "text-[#00D073]",
};

const milestone = [
  { status: "Upcoming" },
  { status: "Upcoming" },
  { status: "Upcoming" },
  { status: "Held" },
  { status: "Held" },
  { status: "Held" },
  { status: "Cancelled" },
  { status: "Cancelled" },
  { status: "Cancelled" },
];

const Meetings = () => {
  return (
    <section className="mt-9.25">
      <div>
        <div className="flex items-center gap-13.75 ">
          <h1 className="text-xl font-semibold text-[#543CDA]">Meetings</h1>
          <div className="border-none bg-[#543CDA] py-4 px-9 rounded-[7px] text-white cursor-pointer">
            <p className="font-normal text-[12px]">Schedule Meeting</p>
          </div>
        </div>
        <div className="flex justify-end gap-[15px] -mt-4">
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
      </div>

      <div className="mt-16 rounded-[7px] space-y-4">
        {/* Independent table header */}
        <div className="overflow-hidden rounded-[7px] border-1 border-[#543CDA4D]">
          <table className="w-full  text-left">
            <thead>
              <tr className="bg-[#543CDA1A] text-[#543CDA] font-semibold text-sm">
                <th className="py-6 px-6">Date & Time</th>
                <th className="py-6 px-6">Client</th>
                <th className="py-6 px-6">Project</th>
                <th className="py-6 px-6">Purpose</th>
                <th className="py-6 px-6">Status</th>
                <th className="py-6 px-6">Platform</th>
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
              className="grid grid-cols-7 bg-white shadow rounded-[7px] font-semibold text-[10px] text-black hover:bg-gray-50 transition"
            >
              <div className="py-5 px-6">Mar 5, 2025 11:00 AM</div>
              <div className="py-5 px-5 ml-4">Tayo Wellens</div>
              <div className="py-5 px-5 ml-5">Food Delivery Website</div>
              <div className="py-5 px-5 ml-0">Dashboard Feedback</div>
              <div className="py-5 px-5 ml-5">
                <span
                  className={`px-5 py-5 rounded-[4px] w-[20ch] ${
                    statusStyles[d.status]
                  }`}
                >
                  {d.status}
                </span>
              </div>
              <div className="py-5 px-5 ml-6">Zoom</div>
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

export default Meetings;
