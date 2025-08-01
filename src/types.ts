export interface JobTrend {
  month: string;
  mlJobs: number;
  dataJobs: number;
}

export interface SkillDemand {
  name: string;
  value: number;
}

export interface SalaryRange {
  role: string;
  min: number;
  max: number;
  median: number;
}

export interface RegionalSalary {
  region: string;
  mlEngineer: number;
  dataScientist: number;
  dataAnalyst: number;
}

export interface GrowthRate {
  skill: string;
  growth: number;
  demandScore: number;
}

export interface ExperienceLevel {
  level: string;
  salary: number;
  jobCount: number;
}

export interface CompanyAnalysis {
  country: string;
  totalCompanies: number;
  avgEmployees: number;
  techCompanies: number;
  cityPopulation: number;
}

export interface CompanySize {
  range: string;
  count: number;
  percentage: number;
}

export interface CountryJobMarket {
  country: string;
  companies: number;
  totalEmployees: number;
  avgSalary: number;
  cityPopulation: number;
}