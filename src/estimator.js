import {
  getDays, getCurrentlyInfected, getInfectionsByDay, getPercentOf
} from './utils';

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
  const xcurrentlyInfected = getCurrentlyInfected(reportedCases, true);

  const infectionsByRequestedTime = getInfectionsByDay(currentlyInfected, days);
  const xInfectionsByRequestedTime = getInfectionsByDay(xcurrentlyInfected, days);

  const severeCasesByRequestedTime = getPercentOf(infectionsByRequestedTime, 15);
  const xSevereCasesByRequestedTime = getPercentOf(xInfectionsByRequestedTime, 15);

  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime
  };
  const severeImpact = {
    currentlyInfected: xcurrentlyInfected,
    infectionsByRequestedTime: xInfectionsByRequestedTime,
    severeCasesByRequestedTime: xSevereCasesByRequestedTime
  };
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
