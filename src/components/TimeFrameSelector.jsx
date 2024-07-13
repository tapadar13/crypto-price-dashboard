const TimeFrameSelector = ({ activeTimeFrame, onTimeFrameChange }) => {
  const timeFrames = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex space-x-4 items-center">
        <button className="flex items-center space-x-2 text-[#6F7177]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3h18v18H3V3z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 9H3M21 15H3M12 3v18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[18px] leading-[22.77px]">Fullscreen</span>
        </button>
        <button className="flex items-center space-x-2 text-[#6F7177]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3h5v5M9 21H4v-5M21 3l-7 7M3 21l7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[18px] leading-[22.77px]">Compare</span>
        </button>
      </div>
      <div className="flex space-x-1 bg-[#F2F2F7] rounded-md p-1">
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
