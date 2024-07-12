import { formatCurrency, formatPercentage } from "../utils/formatting";

const PriceDisplay = ({ price, change, changePercent }) => (
  <div className="mt-10 ml-10">
    <div className="flex items-baseline">
      <h1 className="text-7xl leading-tight font-normal text-[#1E2B45]">
        {formatCurrency(price)}
      </h1>
      <span className="ml-2 text-2xl text-[#6F7177]">USD</span>
    </div>
    <p
      className={`text-lg leading-snug ${
        change >= 0 ? "text-[#25A764]" : "text-red-500"
      }`}
    >
      {change >= 0 ? "+" : "-"}
      {formatCurrency(Math.abs(change))} ({formatPercentage(changePercent)})
    </p>
  </div>
);

export default PriceDisplay;
