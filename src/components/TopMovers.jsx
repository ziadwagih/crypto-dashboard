// src/components/TopMovers.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiArrowDownRight, FiLock } from "react-icons/fi";

const gainers = [
  { name: "SOL", change: "+5.2%", color: "green", spark: "M0,10 C5,2 10,8 15,4 20,6 25,0 30,5" },
  { name: "AVAX", change: "+4.6%", color: "green", spark: "M0,10 C5,5 10,6 15,2 20,4 25,3 30,6" },
  { name: "RNDR", change: "+4.1%", color: "green", spark: "M0,10 C5,8 10,2 15,6 20,4 25,5 30,2" },
  { name: "MATIC", change: "+3.8%", color: "green", spark: "M0,10 C5,3 10,6 15,4 20,2 25,6 30,1" },
  { name: "LINK", change: "+3.5%", color: "green", spark: "M0,10 C5,4 10,6 15,2 20,3 25,2 30,6" },
];

const losers = [
  { name: "DOGE", change: "-6.1%", color: "red", spark: "M0,2 C5,5 10,4 15,8 20,6 25,10 30,7" },
  { name: "ADA", change: "-5.8%", color: "red", spark: "M0,1 C5,4 10,3 15,7 20,5 25,9 30,6" },
  { name: "FLOKI", change: "-5.2%", color: "red", spark: "M0,3 C5,6 10,4 15,9 20,7 25,10 30,8" },
  { name: "PEPE", change: "-4.9%", color: "red", spark: "M0,2 C5,5 10,6 15,10 20,9 25,10 30,7" },
  { name: "SHIB", change: "-4.5%", color: "red", spark: "M0,1 C5,4 10,5 15,9 20,7 25,10 30,6" },
];

export default function TopMovers() {
  const [tab, setTab] = useState("gainers");
  const movers = tab === "gainers" ? gainers : losers;

  return (
    <div className="hidden lg:block w-[280px] px-4 pt-6 font-sora text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="font-orbitron text-lg flex items-center gap-2">
          Top Movers
          <FiLock className="text-pink-400" title="Premium Feature" />
        </div>
        <span className="text-xs italic text-gray-400">Refreshing in 5s...</span>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setTab("gainers")}
          className={`px-3 py-1 text-sm rounded-full font-medium ${
            tab === "gainers"
              ? "bg-gradient-to-r from-green-500 to-teal-500 text-black shadow-md"
              : "bg-gray-800 hover:bg-gray-700 text-gray-300"
          }`}
        >
          Gainers
        </button>
        <button
          onClick={() => setTab("losers")}
          className={`px-3 py-1 text-sm rounded-full font-medium ${
            tab === "losers"
              ? "bg-gradient-to-r from-red-500 to-pink-500 text-black shadow-md"
              : "bg-gray-800 hover:bg-gray-700 text-gray-300"
          }`}
        >
          Losers
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-3"
        >
          {movers.map((coin, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl p-3 shadow-lg border border-white/5"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold">{coin.name}</span>
                <span
                  className={`text-sm font-medium ${
                    coin.color === "green" ? "text-green-400" : "text-red-400"
                  } flex items-center gap-1`}
                >
                  {coin.change}
                  {coin.color === "green" ? (
                    <FiArrowUpRight />
                  ) : (
                    <FiArrowDownRight />
                  )}
                </span>
              </div>
              <svg
                viewBox="0 0 30 10"
                className="w-full h-6 mt-1"
                preserveAspectRatio="none"
              >
                <path
                  d={coin.spark}
                  fill="none"
                  stroke={coin.color === "green" ? "#4ade80" : "#f87171"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="text-[10px] text-gray-500 mt-4 text-right">
        Data sourced from CoinGecko
      </div>
    </div>
  );
}
