import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RegionalSalary } from '../types';

interface RegionalChartProps {
  data: RegionalSalary[];
}

export function RegionalChart({ data }: RegionalChartProps) {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="mlEngineer" name="ML Engineer" fill="#8884d8" />
          <Bar dataKey="dataScientist" name="Data Scientist" fill="#82ca9d" />
          <Bar dataKey="dataAnalyst" name="Data Analyst" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}