import Image from "next/image";

const EmptyState = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-[75vh]">
        <span>
          <Image src="/PaymentEmptyState.svg" alt="" width={380} height={290} />
        </span>
        <p className="w-[19ch] font-bold text-black text-[28px] text-center -mt-16 mb-4">
          No Payment has been made
        </p>
        <p className="w-[28ch] text-lg text-[#9E9E9E] font-medium text-center mb-11.25">
          No Client has made any payment yet.
        </p>
        <div className="py-3.5 px-10.75 cursor-pointer text-white font-semibold text-[16px] rounded-[7px] bg-[#543CDA]">
          View Project
        </div>
      </div>
    </section>
  );
};

export default EmptyState;
