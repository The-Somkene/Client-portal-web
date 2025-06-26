import Image from "next/image";

const NoMatch = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-[75vh]">
        <span>
          <Image src="/NoMatchState.svg" alt="" width={285} height={220} />
        </span>
        <p className="w-[18ch] font-semibold text-black text-[28px] text-center">
          No Meeting Matches Your Search
        </p>
      </div>
    </section>
  );
};

export default NoMatch;
