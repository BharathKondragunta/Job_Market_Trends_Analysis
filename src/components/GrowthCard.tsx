import { TrendingUp } from 'lucide-react';
import { GrowthRate } from '../types';

interface GrowthCardProps {
  data: GrowthRate;
}

export function GrowthCard({ data }: GrowthCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-6 h-6 text-purple-600" />
        <h3 className="text-lg font-semibold">{data.skill}</h3>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">YoY Growth</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: `${data.growth}%` }}
            />
          </div>
          <p className="text-sm font-medium text-gray-900 mt-1">{data.growth}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Demand Score</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${data.demandScore}%` }}
            />
          </div>
          <p className="text-sm font-medium text-gray-900 mt-1">{data.demandScore}/100</p>
        </div>
      </div>
    </div>
  );
}