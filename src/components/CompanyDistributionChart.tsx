import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CompanySize } from '../types';

interface CompanyDistributionChartProps {
  data: CompanySize[];
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

export function CompanyDistributionChart({ data }: CompanyDistributionChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="range"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} companies`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}