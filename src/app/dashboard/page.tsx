import Header from "@/components/dashBoardPage/header";
import Sidebar from "@/components/dashBoardPage/sidebar";
import StatsCards from "@/components/dashBoardPage/statsCards";
import ProjectCard from "@/components/dashBoardPage/projectCard";
import RecentActivity from "@/components/dashBoardPage/recentActivity";
import TodaysMeetings from "@/components/dashBoardPage/todaysMeetings";
import DeliverablesTable from "@/components/dashBoardPage/deliverablesTable";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#EAE8F7]">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <Header />

        <div className="flex flex-col gap-1 mb-8">
        <div className="text-xl font-semibold text-[#543CDA] flex items-center gap-3">
          <div className="bg-[#553BD9] rounded-full w-3 h-3"></div>
          Welcome, Tolu.
        </div>

        <p className="text-sm ml-6 text-gray-500">Here's what's happening today.</p>
        </div>

        <StatsCards />

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 space-y-4">
            <ProjectCard />
          </div>
          <RecentActivity />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <DeliverablesTable />
          </div>
          <TodaysMeetings />
        </div>
      </main>
    </div>
  );
}
