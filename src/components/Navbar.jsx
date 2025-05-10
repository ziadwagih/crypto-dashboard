import React from "react";
import { Bell, Search, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-30 bg-[#0f172a]/80 backdrop-blur-lg border-b border-white/10 px-4 md:px-8 h-[64px] flex items-center justify-between shadow-lg"
    >
      {/* Left: Search Bar */}
      <div className="relative w-full max-w-sm">
        <input
          type="text"
          placeholder="Search coins, wallets, charts..."
          className="w-full py-2.5 pl-11 pr-4 text-sm md:text-base bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all shadow-inner shadow-black/10"
        />
        <Search
          size={18}
          className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-white/50"
        />

        {/* Command palette shortcut */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 text-xs px-2 py-0.5 bg-white/5 text-white/40 rounded border border-white/10">
          ⌘<span className="opacity-70">K</span>
        </div>
      </div>

      {/* Right: Ticker + Icons */}
      <div className="flex items-center gap-6">
        {/* Fake token price ticker (you can replace with live API later) */}
        <div className="hidden lg:flex items-center gap-4 text-xs text-white/60 font-mono tracking-tight">
          <div className="flex items-center gap-1">
            <span className="text-green-400">BTC</span> $62,130
          </div>
          <div className="flex items-center gap-1">
            <span className="text-blue-400">ETH</span> $3,040
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">SOL</span> $148.90
          </div>
        </div>

        {/* Bell */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm shadow-md"
        >
          <Bell size={20} className="text-white" />
          <span className="absolute -top-1 -right-1 bg-cyan-400 text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-pulse">
            2
          </span>
        </motion.button>

        {/* Profile */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm shadow-md"
        >
          <UserCircle2 size={24} className="text-white" />
        </motion.button>
      </div>
    </motion.header>
  );
}

export default Navbar;
