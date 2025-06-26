import Image from "next/image"

export const EmptyState = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-[75vh]">
              <span>
                <Image src="/MessageEmptyState.svg" alt="" width={380} height={290} />
              </span>
              <p className="font-bold text-black text-[28px] text-center mt-14 mb-2">
                No Messages
              </p>
              <p className="w-[22ch] text-lg text-[#9E9E9E] font-medium text-center mb-7">When you have messages you’ll see them here</p>
              <div className="py-3.5 px-13.5 cursor-pointer text-white font-semibold text-[16px] rounded-[7px] bg-[#543CDA]">
                New Chat
              </div>
            </div>

    </section>
  )
}
