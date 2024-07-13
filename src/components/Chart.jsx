import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
  return (
    <div className="w-full h-80 mt-4 relative">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <YAxis hide={true} domain={["dataMin - 1000", "dataMax + 1000"]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4B40EE"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <div
        className="absolute bg-[#4B40EE] text-white px-3 py-2 h-[33px] rounded flex items-center justify-center"
        style={{ right: 0, bottom: 0 }}
      >
        <span className="text-sm w-full text-center">
          {formatCurrency(data[data.length - 1]?.price)}
        </span>
      </div>
      <div className="absolute top-2 right-0 bg-[#1A243A] text-white px-3 py-2 h-[33px] rounded flex items-center justify-center">
        <span className="text-sm w-full text-center">
          {formatCurrency(data[0]?.price)}
        </span>
      </div>
    </div>
  );
};

export default Chart;
