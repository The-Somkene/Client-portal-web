import OnBoardingClient from "@/components/clientsPage/onBoardClient";
import Header from "@/components/dashBoardPage/header";
import Sidebar from "@/components/dashBoardPage/sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#EAE8F7]">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto gap-4">
        <Header />
        <OnBoardingClient /> 
      </main>
    </div>
  );
}
