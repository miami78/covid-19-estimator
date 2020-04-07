/* eslint-disable max-len */
import {
  getDays, getCurrentlyInfected, getInfectionsByDay, getPercentOf, getDollarsInFlight, getAvailableHospitalBeds
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
    periodType, reportedCases, timeToElapse, region, totalHospitalBeds 
  } = data;

  const days = getDays(periodType, timeToElapse);

  const currentlyInfected = getCurrentlyInfected(reportedCases);
  const xcurrentlyInfected = getCurrentlyInfected(reportedCases, true);

  const infectionsByRequestedTime = getInfectionsByDay(currentlyInfected, days);
  const xInfectionsByRequestedTime = getInfectionsByDay(xcurrentlyInfected, days);

  const severeCasesByRequestedTime = getPercentOf(infectionsByRequestedTime, 15);
  const xSevereCasesByRequestedTime = getPercentOf(xInfectionsByRequestedTime, 15);

  const hospitalBedsByRequestedTime = getAvailableHospitalBeds(totalHospitalBeds, 35) - severeCasesByRequestedTime;
  const xHospitalBedsByRequestedTime = getAvailableHospitalBeds(totalHospitalBeds, 35) - xSevereCasesByRequestedTime;

  const casesForICUByRequestedTime = getPercentOf(infectionsByRequestedTime, 5);
  const xCasesForICUByRequestedTime = getPercentOf(xInfectionsByRequestedTime, 5);

  const casesForVentilatorsByRequestedTime = getPercentOf(infectionsByRequestedTime, 2);
  const xCasesForVentilatorsByRequestedTime = getPercentOf(xInfectionsByRequestedTime, 2);

  const dollarsInFlight = getDollarsInFlight(infectionsByRequestedTime, days, region);
  const xDollarsInFlight = getDollarsInFlight(xInfectionsByRequestedTime, days, region);

  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    casesForICUByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
  const severeImpact = {
    currentlyInfected: xcurrentlyInfected,
    infectionsByRequestedTime: xInfectionsByRequestedTime,
    severeCasesByRequestedTime: xSevereCasesByRequestedTime,
    casesForICUByRequestedTime: xCasesForICUByRequestedTime,
    hospitalBedsByRequestedTime: xHospitalBedsByRequestedTime,
    casesForVentilatorsByRequestedTime: xCasesForVentilatorsByRequestedTime,
    dollarsInFlight: xDollarsInFlight

  };
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
