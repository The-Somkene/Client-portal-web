"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const navItems = [
    {
      name: "Dashboard",
      icon: "/dashboard-circle",
      hoverIcon: "/dashboard-circle-hover.svg",
      href: "/",
    },
    {
      name: "Clients",
      icon: "/user-single",
      hoverIcon: "/user-single-hover.svg",
      href: "/clients-page",
    },
    {
      name: "Projects",
      icon: "/search-dollar",
      hoverIcon: "/search-dollar-hover.svg",
      href: "/projects-page",
    },
    {
      name: "Deliverables",
      icon: "/insert-side",
      hoverIcon: "/insert-side-hover.svg",
      href: "/deliverables-page",
    },
    {
      name: "Meetings",
      icon: "/webcam-video",
      hoverIcon: "/webcam-video-hover.svg",
      href: "/meetings-page",
    },
    {
      name: "Messages",
      icon: "/chat-bubble",
      hoverIcon: "/chat-bubble-hover.svg",
      href: "/messages-page",
    },
    {
      name: "Payment",
      icon: "/bill-2--currency",
      hoverIcon: "/bill-2--currency-hover.svg",
      href: "/payments-page",
    },
    {
      name: "Settings",
      icon: "/cog--work",
      hoverIcon: "/cog--work-hover.svg",
      href: "/settings-page",
    },
  ];

  return (
    <>
      <aside className="w-[17.5%] py-6 flex flex-col space-y-6 fixed top-0 left-0 ml-[2rem]">
        <Link href="/">
          <div className="bg-white px-8 py-2 h-16 rounded-[10px]  flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.png"
              alt="Nexoris Logo"
              width={150}
              height={150}
            />
          </div>
        </Link>

        <div className="bg-white  py-6 rounded-[10px] px-4 flex flex-col gap-4">
          {/* <div className="flex items-end justify-end">
            <Image src="/Arrow - Up Circle.svg" alt="" width={30} height={30} />
          </div> */}

          {/* {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link href={item.href} key={item.name}>
                <div
                  className={`flex items-center gap-4 px-4 py-4 rounded hover:text-white cursor-pointer font-medium ${
                    isActive
                      ? "bg-[#543CDA] text-white"
                      : "text-[#543CDA] hover:bg-[#543CDA] hover:text-white"
                  }`}
                >
                  <span>
                    <Image
                      src={`${item.icon.toLowerCase()}${
                        isActive ? "-hover" : ""
                      }.svg`}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </span>
                  {item.name}
                </div>
              </Link>
            );
          })} */}

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

              <Link href="/payments-page">
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
              </Link>
            </ul>

            <div className="border-1 border-[#EAE8F7]"></div>

            <ul>
              <Link href="/settings-page">
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
              </Link>
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <Link href="/profile-page">
              <div className="flex items-center gap-4 border border-[#553bd96d] px-4 py-3 rounded-[7px]">
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
            </Link>

            <div className="flex items-center gap-4 px-4 py-4 border border-red-400 hover:bg-red-500 text-red-600 hover:text-white rounded-[5px] cursor-pointer group">
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
