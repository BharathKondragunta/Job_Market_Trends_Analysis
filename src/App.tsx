import React from 'react';
import { TrendChart } from './components/TrendChart';
import { SkillsChart } from './components/SkillsChart';
import { SalaryCard } from './components/SalaryCard';
import { RegionalChart } from './components/RegionalChart';
import { GrowthCard } from './components/GrowthCard';
import { ExperienceLevelChart } from './components/ExperienceLevelChart';
import { CompanyDistributionChart } from './components/CompanyDistributionChart';
import { CountryMarketCard } from './components/CountryMarketCard';
import { 
  jobTrends, 
  topSkills, 
  salaryRanges, 
  regionalSalaries, 
  growthRates,
  experienceLevels,
  companySizeDistribution,
  countryMarkets 
} from './data';
import { 
  BarChart2, 
  BrainCircuit, 
  TrendingUp, 
  MapPin,
  LineChart,
  Users,
  Building2,
  Globe
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <BrainCircuit className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">ML & Data Job Market Analysis</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-8">
          {/* Company Size Distribution */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Company Size Distribution</h2>
            </div>
            <CompanyDistributionChart data={companySizeDistribution} />
          </section>

          {/* Country Market Analysis */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Country Market Analysis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {countryMarkets.map((market) => (
                <CountryMarketCard key={market.country} data={market} />
              ))}
            </div>
          </section>

          {/* Job Trends Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Job Market Trends</h2>
            </div>
            <TrendChart data={jobTrends} />
          </section>

          {/* Regional Salary Comparison */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Regional Salary Comparison</h2>
            </div>
            <RegionalChart data={regionalSalaries} />
          </section>

          {/* Skills Growth Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <LineChart className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Skills Growth & Demand</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {growthRates.map((rate) => (
                <GrowthCard key={rate.skill} data={rate} />
              ))}
            </div>
          </section>

          {/* Experience Level Analysis */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Experience Level Analysis</h2>
            </div>
            <ExperienceLevelChart data={experienceLevels} />
          </section>

          {/* Skills Demand Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart2 className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Top Skills in Demand</h2>
            </div>
            <SkillsChart data={topSkills} />
          </section>

          {/* Salary Ranges Section */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Salary Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {salaryRanges.map((range) => (
                <SalaryCard key={range.role} data={range} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;