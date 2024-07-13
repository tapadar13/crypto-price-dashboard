import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { formatCurrency } from "../utils/formatting";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E2B45] text-white p-2 rounded">
        <p className="text-sm">{formatCurrency(payload[0].value)}</p>
      </div>
    );
  }
  return null;
};

const Chart = ({ data }) => {
  const minPrice = Math.min(...data.map((item) => item.price));
  const maxPrice = Math.max(...data.map((item) => item.price));

  return (
    <div className="w-full h-80 mt-4 relative">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 100, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="date"
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={false}
            tick={false}
          />
          <YAxis hide={true} domain={[minPrice - 1000, maxPrice + 1000]} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={maxPrice} stroke="#E5E7EB" strokeDasharray="3 3" />
          <ReferenceLine y={minPrice} stroke="#E5E7EB" strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4B40EE"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
          <ReferenceLine
            x={data[0].date}
            stroke="#E5E7EB"
            strokeDasharray="3 3"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="absolute bg-[#4B40EE] text-white px-3 py-2 h-[33px] right-0 top-[100px] -translate-y-1/2 rounded flex items-center justify-center">
        <span className="text-sm w-full text-center">
          {formatCurrency(data[data.length - 1]?.price)}
        </span>
      </div>
      <div className="absolute top-0 right-0 bg-[#1A243A] text-white px-3 py-2 h-[33px] rounded flex items-center justify-center">
        <span className="text-sm w-full text-center">
          {formatCurrency(maxPrice)}
        </span>
      </div>
    </div>
  );
};

export default Chart;
