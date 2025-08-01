import { DollarSign } from 'lucide-react';
import { SalaryRange } from '../types';

interface SalaryCardProps {
  data: SalaryRange;
}

export function SalaryCard({ data }: SalaryCardProps) {
  const formatSalary = (amount: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="w-6 h-6 text-green-600" />
        <h3 className="text-lg font-semibold">{data.role}</h3>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Salary Range:</p>
        <p className="text-xl font-bold text-gray-900">
          {formatSalary(data.min)} - {formatSalary(data.max)}
        </p>
        <p className="text-sm text-gray-600">Median Salary:</p>
        <p className="text-lg font-semibold text-gray-900">{formatSalary(data.median)}</p>
      </div>
    </div>
  );
}