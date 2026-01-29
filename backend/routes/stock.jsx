const express = require("express");
const axios = require("axios");
const router = express.Router();

const cache = {}; // FREE in-memory cache

router.get("/price/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  // ⏱️ 1 minute cache
  if (cache[symbol] && Date.now() - cache[symbol].time < 60000) {
    return res.json(cache[symbol].data);
  }

  try {
    const r = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "GLOBAL_QUOTE",
        symbol,
        apikey: process.env.ALPHA_VANTAGE_KEY,
      },
    });

    const q = r.data["Global Quote"];

    const cleanData = {
      symbol: q["01. symbol"],
      price: Number(q["05. price"]),
      change: q["09. change"],
      changePercent: q["10. change percent"],
    };

    // save to cache
    cache[symbol] = {
      data: cleanData,
      time: Date.now(),
    };

    res.json(cleanData);
  } catch (e) {
    // fallback to last cached data
    if (cache[symbol]) {
      return res.json(cache[symbol].data);
    }
    res.status(500).json({ error: "Stock API failed" });
  }
});

module.exports = router;
