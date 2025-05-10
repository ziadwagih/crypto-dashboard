import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Market Cap", value: "$1.23T", change: "+3.2%" },
  { label: "24h Volume", value: "$92.8B", change: "-1.1%" },
  { label: "BTC Dominance", value: "52.3%", change: "+0.2%" },
  { label: "ETH Dominance", value: "17.8%", change: "-0.4%" },
];

const StatCard = ({ label, value, change }) => {
  const isPositive = change.startsWith("+");

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative bg-[#0f172a] border border-[#1e293b] rounded-xl p-5 shadow-lg overflow-hidden group"
    >
      {/* Reflection */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-10 transition pointer-events-none blur-md rounded-xl" />

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-blue-500/50 transition duration-300 pointer-events-none" />

      <div className="text-gray-400 text-sm font-sora mb-1">{label}</div>
      <div className="text-white text-xl font-orbitron">{value}</div>
      <div
        className={`mt-1 text-sm font-sora ${
          isPositive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto mt-12 px-4"
    >
      <h2 className="text-white text-2xl font-orbitron mb-6 text-center">
        Global Market Stats
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </motion.div>
  );
};

export default Stats;
