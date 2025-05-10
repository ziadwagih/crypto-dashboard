import React, { useState } from "react";
import { motion } from "framer-motion";

const timeframes = ["1D", "1W", "1M", "1Y"];
const indicators = ["SMA 50", "RSI", "Volume"];

const ChartCard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D");
  const [activeIndicators, setActiveIndicators] = useState([]);

  const toggleIndicator = (indicator) => {
    setActiveIndicators((prev) =>
      prev.includes(indicator)
        ? prev.filter((i) => i !== indicator)
        : [...prev, indicator]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 shadow-lg max-w-6xl mx-auto mt-10"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-orbitron">BTC / USDT Chart</h2>
        <div className="flex gap-3">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-3 py-1 rounded-full text-sm font-sora ${
                selectedTimeframe === tf
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              } transition duration-300`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="relative bg-[#1e293b] h-64 rounded-xl flex items-center justify-center text-slate-400 text-sm mb-6">
        <span>Chart for {selectedTimeframe}</span>

        {/* Fake Indicator Overlays */}
        {activeIndicators.includes("SMA 50") && (
          <div className="absolute left-0 top-12 w-full h-[2px] bg-blue-400 opacity-50" />
        )}
        {activeIndicators.includes("RSI") && (
          <div className="absolute right-0 bottom-10 w-1/3 h-[3px] bg-green-400 opacity-50" />
        )}
        {activeIndicators.includes("Volume") && (
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-yellow-400/20 to-transparent" />
        )}
      </div>

      {/* Indicators Toggles */}
      <div className="flex gap-4 mb-6">
        {indicators.map((ind) => (
          <label key={ind} className="flex items-center gap-2 text-sm font-sora text-gray-300">
            <input
              type="checkbox"
              checked={activeIndicators.includes(ind)}
              onChange={() => toggleIndicator(ind)}
              className="accent-blue-500"
            />
            {ind}
          </label>
        ))}
      </div>

      {/* Liquidation Heatmap (Fake) */}
      <div className="mt-6">
        <h3 className="text-white font-sora mb-2">Liquidation Heatmap</h3>
        <div className="flex h-4 rounded overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 ${
                i % 3 === 0
                  ? "bg-red-500/60"
                  : i % 4 === 0
                  ? "bg-green-500/50"
                  : "bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ChartCard;
