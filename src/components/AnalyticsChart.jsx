import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Active", value: 5 },
  { name: "Expiring Soon", value: 2 },
  { name: "Expired", value: 1 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

function AnalyticsChart() {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default AnalyticsChart;