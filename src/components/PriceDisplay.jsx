import { formatCurrency, formatPercentage } from "../utils/formatting";

const PriceDisplay = ({ price, change, changePercent }) => (
  <div className="mt-10">
    <div className="flex items-baseline">
      <h1 className="text-[70px] font-normal text-[#1A2433] font-circular leading-[88.56px]">
        {formatCurrency(price)}
      </h1>
      <span className="ml-2 text-[24px] text-[#b5b7be] self-start mt-4 w-[49px] h-[30px] top-[77px] left-[337px] font-circular font-normal leading-[30.36px] text-left">
        USD
      </span>
    </div>
    <p
      className={`text-lg leading-[22.77px] mt-2 text-left font-circular font-normal ${
        change >= 0 ? "text-[#25A764]" : "text-red-500"
      }`}
    >
      {change >= 0 ? "+" : "-"}
      {formatCurrency(Math.abs(change))} ({formatPercentage(changePercent)})
    </p>
  </div>
);

export default PriceDisplay;
