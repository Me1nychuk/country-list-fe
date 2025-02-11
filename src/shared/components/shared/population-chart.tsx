import { Card, CardContent } from "@/shared/components/ui/card";
import { PopulationObj } from "@/shared/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface PopulationChartProps {
  data: PopulationObj[];
}

const PopulationChart: React.FC<PopulationChartProps> = ({ data }) => {
  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Population Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="year" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PopulationChart;
