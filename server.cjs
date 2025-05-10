const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

console.log("Loaded API KEY:", process.env.COINGECKO_API_KEY);

app.get('/api/market-chart', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
      params: {
        vs_currency: 'usd',
        days: '2',
      },
      headers: {
        
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching from CoinGecko:', error.message);
    console.error('Full error:', error.response?.data);
    res.status(500).json({ error: 'Failed to fetch market data' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
