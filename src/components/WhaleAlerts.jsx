import React, { useState } from "react";

const dummyAlerts = [
  {
    id: 1,
    wallet: "0x8f...a3f2",
    amount: 1450000,
    score: 92,
  },
  {
    id: 2,
    wallet: "0x6a...c7e4",
    amount: 870000,
    score: 76,
  },
  {
    id: 3,
    wallet: "0x9d...e1b8",
    amount: 2100000,
    score: 98,
  },
];

const WhaleAlerts = () => {
  const [showOnlyBig, setShowOnlyBig] = useState(false);

  const filteredAlerts = showOnlyBig
    ? dummyAlerts.filter((alert) => alert.amount > 1000000)
    : dummyAlerts;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white font-orbitron">
          Whale Alerts
        </h2>
        <label className="flex items-center gap-2 text-sora text-sm text-gray-300">
          <input
            type="checkbox"
            checked={showOnlyBig}
            onChange={() => setShowOnlyBig(!showOnlyBig)}
            className="accent-blue-500"
          />
          Show Only &gt; $1M
        </label>
      </div>

      <div className="grid gap-6">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <p className="text-white font-semibold text-lg font-sora">
                Wallet: <span className="text-blue-400">{alert.wallet}</span>
              </p>
              <span className="bg-purple-700 text-white text-xs px-3 py-1 rounded-full font-bold font-orbitron tracking-wide">
                WHALE SCORE: {alert.score}/100
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4 font-sora">
              Moved: <span className="text-green-400">${alert.amount.toLocaleString()}</span>
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-125 text-white font-sora px-4 py-2 rounded-xl text-sm font-semibold transition duration-300"
            >
              Track This Wallet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhaleAlerts;
