import Image from "next/image";

function Sidebar() {
  return (
    <>
      <aside className="w-[17.5%] p-6 flex flex-col space-y-6 top-0 left-0">
        <div className="bg-black px-8 py-2 h-16 rounded-xl w-[15rem] flex items-center justify-center overflow-hidden">
          <Image src="/logo.png" alt="Nexoris Logo" width={150} height={150} />
        </div>

        <div className="bg-white w-[15rem] py-6 rounded-xl px-4 flex flex-col gap-4">
          {/* <div className="flex items-end justify-end">
            <Image src="/Arrow - Up Circle.svg" alt="" width={30} height={30} />
          </div> */}

          <nav className="flex flex-col space-y-4">
            <ul className="flex flex-col space-y-4">
              <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-medium group">
                <span>
                  <Image
                    src="/dashboard-circle.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/dashboard-circle-hover.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="hidden group-hover:block"
                  />
                </span>
                DashBoard
              </li>

              <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-medium group">
                <span>
                  <Image
                    src="/user-single.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/user-single-hover.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="hidden group-hover:block"
                  />
                </span>
                Clients
              </li>

              <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-medium group">
                <span>
                  <Image
                    src="/search-dollar.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/search-dollar-hover.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="hidden group-hover:block"
                  />
                </span>
                Projects
              </li>

              <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-medium group">
                <span>
                  <Image
                    src="/insert-side.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/insert-side-hover.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="hidden group-hover:block"
                  />
                </span>
                Deliverables
              </li>

              <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-medium group">
                <span>
                  <Image
                    src="/webcam-video.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/webcam-video-hover.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="hidden group-hover:block"
                  />
                </span>
                Meetings
              </li>

              <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-medium group">
                <span>
                  <Image
                    src="/chat-bubble.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/chat-bubble-hover.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="hidden group-hover:block"
                  />
                </span>
                Messages
              </li>

              <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-medium group">
                <span>
                  <Image
                    src="/bill-2--currency.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/bill-2--currency-hover.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="hidden group-hover:block"
                  />
                </span>
                Payment
              </li>
            </ul>

            <div className="border-1 border-[#EAE8F7]"></div>

            <ul>
              <li className="hover:bg-[#543CDA] flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer text-[#543CDA] font-medium group">
                <span>
                  <Image
                    src="/cog--work.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/cog--work-hover.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="hidden group-hover:block"
                  />
                </span>
                Settings
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border border-[#553bd96d] px-4 py-3 rounded-xl">
              <Image src="/Profile-pic.svg" alt="" width={40} height={40} />
              <div className="">
                <h2 className="text-[#543CDA] font-semibold text-lg">
                  Tolu Ayomide
                </h2>
                <p className="font-light text-sm text-gray-500">
                  Product Manager
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-4 border border-red-400 hover:bg-red-500 text-red-600 hover:text-white rounded-xl cursor-pointer group">
              <span>
                <Image
                  src="/logout-1.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="group-hover:hidden"
                />
                <Image
                  src="/logout-1-hover.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="hidden group-hover:block"
                />
              </span>
              <p className=" rounded font-medium">Logout</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
