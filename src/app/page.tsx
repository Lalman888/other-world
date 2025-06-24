import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import BetButton from "@/components/dashboard/main/bet-button";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main className="flex-1 bg-gray-900 flex flex-col justify-end">
          {/* Your main content will go here */}
          <div className="flex-1 p-6">
            <div className="text-white">
             
            </div>
          </div>
          
          {/* Bet Button at bottom */}
          <BetButton />
        </main>
      </div>
    </div>
  );
}
