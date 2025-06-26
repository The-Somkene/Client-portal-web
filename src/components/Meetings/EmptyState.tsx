import Image from "next/image";

const EmptyState = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-[75vh]">
        <span>
          <Image src="/MeetingEmptyState.svg" alt="" width={380} height={290} />
        </span>
        <p className="w-[21ch] font-bold text-black text-[28px] text-center -mt-10 mb-11.5">
          No meetings have been scheduled yet.
        </p>
        <div className="py-3.5 px-10 cursor-pointer text-white font-semibold text-[16px] rounded-[7px] bg-[#543CDA]">
          New Meeting
        </div>
      </div>
    </section>
  );
};

export default EmptyState;
