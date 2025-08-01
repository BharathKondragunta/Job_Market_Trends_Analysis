import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ExperienceLevel } from '../types';

interface ExperienceLevelChartProps {
  data: ExperienceLevel[];
}

export function ExperienceLevelChart({ data }: ExperienceLevelChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="level" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="salary"
            stroke="#8884d8"
            fill="#8884d8"
            name="Salary"
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="jobCount"
            stroke="#82ca9d"
            fill="#82ca9d"
            name="Job Count"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}