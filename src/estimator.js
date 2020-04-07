import { getDays, getCurrentlyInfected, getInfectionsByDay } from './utils';

const inputData = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (data = inputData) => {

  const {
    periodType, reportedCases, timeToElapse
  } = data;

  const days = getDays(periodType, timeToElapse);

  const currentlyInfected = getCurrentlyInfected(reportedCases);
  const estimateProjectedInfections = getCurrentlyInfected(reportedCases, true);

  const infectionsByRequestedTime = getInfectionsByDay(currentlyInfected, days);
  const estimateInfectionsByRequestedTime = getInfectionsByDay(estimateProjectedInfections, days);

  const impact = {
    currentlyInfected,
    infectionsByRequestedTime
  };

  return {
    data,
    impact
  };
};

export default covid19ImpactEstimator;
