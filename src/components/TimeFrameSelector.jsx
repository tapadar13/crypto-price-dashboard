import { Maximize2, CirclePlus } from "lucide-react";

const TimeFrameSelector = ({ activeTimeFrame, onTimeFrameChange }) => {
  const timeFrames = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];
  return (
    <div className="flex items-center justify-between mt-14 font-circular font-normal">
      <div className="flex space-x-8 items-center">
        <button className="flex items-center space-x-2 text-[#6F7177]">
          <Maximize2
            width="24px"
            height="24px"
            // style={{ top: "330px", left: "60px", gap: "0px", opacity: "0px" }}
          />
          <span className="text-[18px] leading-[22.77px]">Fullscreen</span>
        </button>
        <button className="flex items-center space-x-2 text-[#6F7177]">
          <CirclePlus
            width="24px"
            height="24px"
            // style={{ top: "330px", left: "208px", gap: "0px", opacity: "0px" }}
          />
          <span className="text-[18px] leading-[22.77px]">Compare</span>
        </button>
      </div>
      <div className="flex space-x-1 bg-[#ffffff] rounded-md p-1">
        {timeFrames.map((tf) => (
          <button
            key={tf}
            className={`text-[18px] leading-[22.77px] px-3 py-1 rounded ${
              activeTimeFrame === tf
                ? "bg-[#4B40EE] text-white"
                : "text-[#6F7177]"
            }`}
            onClick={() => onTimeFrameChange(tf)}
          >
            {tf}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeFrameSelector;
