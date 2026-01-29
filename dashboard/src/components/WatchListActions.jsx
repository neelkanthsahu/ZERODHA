import React, { useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import GeneralContext from "./GeneralContext";

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
        <button
          className="buy"
          onClick={() => generalContext.openBuyWindow(uid)}
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
        <button
          className="sell"
          onClick={() => generalContext.openSellWindow(uid)}
        >
          Sell
        </button>
      </Tooltip>

      <Tooltip title="Analytics (A)" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>

      <Tooltip title="More" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};

export default WatchListActions;
