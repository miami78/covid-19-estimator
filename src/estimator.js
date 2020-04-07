const reportedCases = 674;

// Challenge 1
const estimateCurrentlyInfected = reportedCases * 10;

const estimateProjectedInfections = reportedCases * 50;


const covid19ImpactEstimator = (data) => {
  const estimate = {
    estimateCurrentlyInfected,
    estimateProjectedInfections
  };

  return estimate({
    data,
    impact: {},
    severeImpact: {}
  });
};

export default covid19ImpactEstimator;
