const reportedCases = 674;

// Challenge 1
const estimateCurrentlyInfected = reportedCases * 10;

const estimateProjectedInfections = reportedCases * 50;

const currentlyInfected30 = estimateCurrentlyInfected * 1024;

const projectedInfections30 = estimateProjectedInfections * 1024;

const infectionsByRequestedTime = projectedInfections30 + currentlyInfected30;

const covid19ImpactEstimator = (data) => {
  const estimate = {
    estimateCurrentlyInfected,
    estimateProjectedInfections,
    infectionsByRequestedTime
  };

  return estimate({
    data,
    impact: {},
    severeImpact: {}
  });
};

export default covid19ImpactEstimator;
