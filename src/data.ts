import { JobTrend, SkillDemand, SalaryRange, RegionalSalary, GrowthRate, ExperienceLevel } from './types';

export const jobTrends: JobTrend[] = [
  { month: 'Jan', mlJobs: 1500, dataJobs: 2000 },
  { month: 'Feb', mlJobs: 1600, dataJobs: 2100 },
  { month: 'Mar', mlJobs: 1750, dataJobs: 2300 },
  { month: 'Apr', mlJobs: 1900, dataJobs: 2500 },
  { month: 'May', mlJobs: 2100, dataJobs: 2700 },
  { month: 'Jun', mlJobs: 2300, dataJobs: 2900 }
];

export const topSkills: SkillDemand[] = [
  { name: 'Python', value: 85 },
  { name: 'TensorFlow', value: 65 },
  { name: 'PyTorch', value: 60 },
  { name: 'SQL', value: 75 },
  { name: 'Scikit-learn', value: 70 }
];

export const salaryRanges: SalaryRange[] = [
  { role: 'ML Engineer', min: 90000, max: 180000, median: 130000 },
  { role: 'Data Scientist', min: 85000, max: 170000, median: 120000 },
  { role: 'Data Analyst', min: 65000, max: 120000, median: 85000 }
];

export const regionalSalaries: RegionalSalary[] = [
  { region: 'San Francisco', mlEngineer: 165000, dataScientist: 150000, dataAnalyst: 95000 },
  { region: 'New York', mlEngineer: 155000, dataScientist: 140000, dataAnalyst: 90000 },
  { region: 'Seattle', mlEngineer: 150000, dataScientist: 135000, dataAnalyst: 85000 },
  { region: 'Boston', mlEngineer: 140000, dataScientist: 130000, dataAnalyst: 80000 },
  { region: 'Austin', mlEngineer: 130000, dataScientist: 120000, dataAnalyst: 75000 }
];

export const growthRates: GrowthRate[] = [
  { skill: 'Deep Learning', growth: 85, demandScore: 95 },
  { skill: 'NLP', growth: 75, demandScore: 88 },
  { skill: 'Computer Vision', growth: 70, demandScore: 85 },
  { skill: 'MLOps', growth: 90, demandScore: 92 },
  { skill: 'Data Engineering', growth: 65, demandScore: 80 }
];

export const experienceLevels: ExperienceLevel[] = [
  { level: 'Entry Level', salary: 85000, jobCount: 1200 },
  { level: 'Mid Level', salary: 120000, jobCount: 2500 },
  { level: 'Senior Level', salary: 160000, jobCount: 1800 },
  { level: 'Lead/Manager', salary: 200000, jobCount: 800 }
];

export const companySizeDistribution: CompanySize[] = [
  { range: 'Small (<1000)', count: 245, percentage: 24.5 },
  { range: 'Medium (1000-10000)', count: 412, percentage: 41.2 },
  { range: 'Large (10000-50000)', count: 256, percentage: 25.6 },
  { range: 'Enterprise (>50000)', count: 87, percentage: 8.7 }
];

export const countryMarkets: CountryJobMarket[] = [
  {
    country: 'USA',
    companies: 428,
    totalEmployees: 8500000,
    avgSalary: 95000,
    cityPopulation: 678972
  },
  {
    country: 'China',
    companies: 89,
    totalEmployees: 3200000,
    avgSalary: 45000,
    cityPopulation: 21766000
  },
  {
    country: 'India',
    companies: 156,
    totalEmployees: 2800000,
    avgSalary: 35000,
    cityPopulation: 32941000
  },
  {
    country: 'UK',
    companies: 112,
    totalEmployees: 1200000,
    avgSalary: 75000,
    cityPopulation: 9748000
  },
  {
    country: 'Germany',
    companies: 78,
    totalEmployees: 980000,
    avgSalary: 82000,
    cityPopulation: 3574000
  }
];