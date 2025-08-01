import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { JobTrend } from '../types';

interface TrendChartProps {
  data: JobTrend[];
}

export function TrendChart({ data }: TrendChartProps) {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="mlJobs" stroke="#8884d8" name="ML Jobs" />
          <Line type="monotone" dataKey="dataJobs" stroke="#82ca9d" name="Data Jobs" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}