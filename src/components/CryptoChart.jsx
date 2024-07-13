import { useState } from "react";
import useBitcoinData from "../hooks/useBitcoinData";
import PriceDisplay from "./PriceDisplay";
import TabMenu from "./TabMenu";
import TimeFrameSelector from "./TimeFrameSelector";
import Chart from "./Chart";

const CryptoChart = () => {
  const [activeTab, setActiveTab] = useState("Chart");
  const [timeFrame, setTimeFrame] = useState("1w");
  const { data, loading, error, LoadingComponent, ErrorComponent } =
    useBitcoinData(timeFrame);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <LoadingComponent />
      </div>
    );
  }
  if (error) return ErrorComponent;

  const currentPrice = data[data.length - 1]?.price || 0;
  const previousPrice = data[0]?.price || 0;
  const priceChange = currentPrice - previousPrice;
  const priceChangePercent = previousPrice
    ? (priceChange / previousPrice) * 100
    : 0;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-[#FFFFFF] w-[1000px] h-[789px] -top-2 -left-6 gap-0 opacity-1 shadow-lg rounded-lg">
        <PriceDisplay
          price={currentPrice}
          change={priceChange}
          changePercent={priceChangePercent}
        />
        <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />
        <TimeFrameSelector
          activeTimeFrame={timeFrame}
          onTimeFrameChange={setTimeFrame}
        />
        <Chart data={data} />
      </div>
    </div>
  );
};

export default CryptoChart;
