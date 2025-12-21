import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [selectedUID, setSelectedUID] = useState(null);

  const openBuyWindow = (uid) => {
    setSelectedUID(uid);
    setIsBuyOpen(true);
  };

  const openSellWindow = (uid) => {
    setSelectedUID(uid);
    setIsSellOpen(true);
  };

  const closeBuyWindow = () => setIsBuyOpen(false);
  const closeSellWindow = () => setIsSellOpen(false);

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        openSellWindow,
        closeBuyWindow,
        closeSellWindow,
      }}
    >
      {children}
      {isBuyOpen && <BuyActionWindow uid={selectedUID} />}
      {isSellOpen && <SellActionWindow uid={selectedUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
