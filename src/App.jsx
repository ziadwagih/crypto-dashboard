import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TopMovers from './components/TopMovers'; // ✅ Correct import
import Hero from './components/Hero';
import Stats from './components/Stats';
import ChartCard from './components/ChartCard';
import WhaleAlerts from './components/WhaleAlerts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] text-white antialiased">
      {/* Sidebar + TopMovers Stack */}
      <div className="hidden lg:flex flex-col">
        <Sidebar />
        <div className="px-2 mt-4 w-[240px]">
          <TopMovers />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 relative overflow-hidden font-sora">
        <Navbar />

        <main className="flex-1 pt-[80px] px-4 md:px-8 space-y-10 overflow-y-auto scrollbar-none">
          <Hero />
          <Stats />
          <ChartCard />
          <WhaleAlerts />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
