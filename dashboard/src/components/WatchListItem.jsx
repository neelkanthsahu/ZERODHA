import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import WatchListActions from "./WatchListActions";

/**
 * Toggle live data here
 */
const USE_LIVE_DATA = true;

/**
 * Enable live price only for this stock (FREE-tier safe)
 */
const ENABLE_LIVE_FOR = "RELIANCE";

/**
 * Alpha Vantage symbol mapping (Indian stocks need exchange suffix)
 */
const SYMBOL_MAP = {
  RELIANCE: "RELIANCE.BSE",
  INFY: "INFY.BSE",
  TCS: "TCS.BSE",
  HUL: "HINDUNILVR.BSE",
};

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);
  const [livePrice, setLivePrice] = useState(stock.price);

  const generalContext = useContext(GeneralContext);

  // allow live data only for selected stock
  const isLiveAllowed =
    stock.name
      ?.toUpperCase()
      .trim()
      .includes(ENABLE_LIVE_FOR);

  useEffect(() => {
    console.log(
      "LIVE CHECK:",
      USE_LIVE_DATA,
      isLiveAllowed,
      stock.name
    );

    if (!USE_LIVE_DATA || !isLiveAllowed) return;

    const fetchPrice = async () => {
      try {
        const symbolToFetch =
          SYMBOL_MAP[stock.name] || stock.name;

        const res = await axios.get(
          `http://localhost:3002/api/stocks/price/${symbolToFetch}`
        );

        if (res.data?.price !== null) {
          setLivePrice(res.data.price);
        }
      } catch (err) {
        // fallback to dummy price
        setLivePrice(stock.price);
      }
    };

    // initial fetch
    fetchPrice();

    // refresh every 60 seconds (FREE-tier safe)
    const interval = setInterval(fetchPrice, 60000);

    return () => clearInterval(interval);
  }, [stock.name, stock.price, isLiveAllowed]);

  // decide which price to show
  const priceToShow =
    USE_LIVE_DATA && isLiveAllowed
      ? livePrice
      : stock.price;

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">
          <span className="percent">
            {stock.percent}
          </span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">
            ₹ {priceToShow}
          </span>
        </div>
      </div>

      {showActions && (
        <WatchListActions uid={stock.name} />
      )}
    </li>
  );
};

export default WatchListItem;
