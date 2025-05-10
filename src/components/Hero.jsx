import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    async function fetchBTC() {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await res.json();
        setBtcPrice({
          price: data.bitcoin.usd.toLocaleString(),
          change: data.bitcoin.usd_24h_change.toFixed(2),
        });
      } catch (err) {
        console.error('BTC fetch failed', err);
      }
    }

    fetchBTC();
    const interval = setInterval(fetchBTC, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center px-4 md:px-12 py-12 bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#0f172a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] top-10 left-10 bg-accent opacity-20 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute w-[300px] h-[300px] bottom-10 right-10 bg-cyan-500 opacity-10 blur-2xl rounded-full animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-orbitron tracking-wide leading-tight bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Dominate the Market<br />
          with Real-Time Crypto Intelligence
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-white/90 font-sora"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {btcPrice ? (
            <span className="text-white/70 font-semibold">
              BTC: ${btcPrice.price}{" "}
              <span
                className={`${
                  btcPrice.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {btcPrice.change >= 0 ? '▲' : '▼'} {btcPrice.change}%
              </span>
            </span>
          ) : (
            'Fetching BTC price...'
          )}
        </motion.p>

        <motion.p
          className="mt-4 text-base md:text-lg text-white/70 font-sora max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Your all-in-one crypto dashboard for deep analytics, market insights,
          whale alerts, and real-time monitoring. Designed for traders who demand elite performance.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#"
            className="bg-accent text-black font-bold py-3 px-6 rounded-xl shadow-xl hover:brightness-110 hover:scale-105 transition-transform duration-300"
          >
            Launch Dashboard
          </a>
          <a
            href="#"
            className="border border-white/10 text-white py-3 px-6 rounded-xl hover:bg-white/10 transition duration-300"
          >
            Learn More
          </a>
        </motion.div>

        {/* Used by logos */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
  
          
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
