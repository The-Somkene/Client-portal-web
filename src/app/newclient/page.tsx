import ClientData from "@/components/clientsPage/clientsData";
import OnBoardingClient from "@/components/clientsPage/onBoardClient";
import Header from "@/components/dashBoardPage/header";
import Sidebar from "@/components/dashBoardPage/sidebar";
import AddTeamMembers from "@/components/newClientPage/addTeamMembers";
import ClientInfo from "@/components/newClientPage/clientInfo";
import Deliverables from "@/components/newClientPage/deliverables";
import Meetings from "@/components/newClientPage/meetings";
import MileStone from "@/components/newClientPage/mileStone";
import ProjectInfo from "@/components/newClientPage/projectInfo";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#EAE8F7]">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto gap-4">
        <Header />
        <ClientInfo /> 
        <ProjectInfo />
        <AddTeamMembers />
         <MileStone />
        <Deliverables />
        <Meetings />
        <ClientData />
        <OnBoardingClient />
      </main>
    </div>
  );
}
