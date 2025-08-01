import { Building2, Users, DollarSign, HomeIcon } from 'lucide-react';
import { CountryJobMarket } from '../types';

interface CountryMarketCardProps {
  data: CountryJobMarket;
}

export function CountryMarketCard({ data }: CountryMarketCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">{data.country}</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-indigo-600" />
          <div>
            <p className="text-sm text-gray-600">Companies</p>
            <p className="text-lg font-semibold">{data.companies.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-sm text-gray-600">Total Employees</p>
            <p className="text-lg font-semibold">{data.totalEmployees.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <DollarSign className="w-5 h-5 text-yellow-600" />
          <div>
            <p className="text-sm text-gray-600">Average Salary</p>
            <p className="text-lg font-semibold">${data.avgSalary.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <HomeIcon className="w-5 h-5 text-purple-600" />
          <div>
            <p className="text-sm text-gray-600">City Population</p>
            <p className="text-lg font-semibold">{data.cityPopulation.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}