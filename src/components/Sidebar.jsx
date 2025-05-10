import React, { useState } from 'react';
import {
  Home,
  BarChart,
  PieChart,
  Activity,
  Settings,
  Lock,
  Menu,
  X
} from 'lucide-react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <Home size={20} />, label: 'Home' },
    { icon: <BarChart size={20} />, label: 'Overview' },
    { icon: <PieChart size={20} />, label: 'Analytics' },
    { icon: <Activity size={20} />, label: 'Activity' },
  ];

  return (
    <>
      {/* Hamburger */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded bg-[#0d111c] border border-white/10 shadow-md text-white hover:bg-white/10 transition-all duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-30 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static transition-transform duration-300 ease-in-out
        w-64 bg-[#0d111c] text-white py-8 px-4 flex flex-col justify-between border-r border-white/10 shadow-2xl`}
      >
        {/* Top Section */}
        <div className="space-y-12">
          {/* Logo */}
          <div className="text-center md:text-left text-2xl font-bold tracking-widest text-gradient bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] bg-clip-text text-transparent font-orbitron">
            CryptoDash
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3 text-sm md:text-base font-sora">
            {navItems.map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-4 group relative pl-2 pr-4 py-2 rounded-lg hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-accent rounded-r-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="p-2 rounded-md group-hover:bg-accent/10 transition-all">
                  {icon}
                </div>
                <span className="hidden md:inline">{label}</span>
              </a>
            ))}

            {/* Premium Locked */}
            <div className="flex items-center gap-4 pl-2 pr-4 py-2 rounded-lg opacity-40 cursor-not-allowed">
              <div className="p-2 rounded-md bg-white/5">
                <Lock size={20} />
              </div>
              <span className="hidden md:inline">Premium</span>
            </div>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="space-y-6 mt-10 font-sora text-sm">
          {/* API Connected */}
          <div className="flex items-center gap-3 text-green-400">
            <div className="relative">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 block animate-ping absolute top-0 left-0 opacity-75"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 relative"></span>
            </div>
            <span className="hidden md:inline">API Connected</span>
          </div>

          {/* API Credits Meter */}
          <div className="space-y-1">
            <p className="text-gray-400 hidden md:block">API Credits: <span className="text-white">248 / 500</span></p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 w-[49.6%] animate-pulse rounded-full" />
            </div>
          </div>

          {/* Settings */}
          <a
            href="#"
            className="flex items-center gap-4 group relative pl-2 pr-4 py-2 rounded-lg hover:text-accent hover:bg-accent/10 transition-all duration-300"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-accent rounded-r-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="p-2 rounded-md group-hover:bg-accent/10 transition-all">
              <Settings size={20} />
            </div>
            <span className="hidden md:inline">Settings</span>
          </a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
