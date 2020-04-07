const getDays = (period, days) => {
  switch (period) {
    case 'weeks':
      return days * 7;
    case 'months':
      return days * 30;
    default:
      return days;
  }
};

// Gets currently infected
const getCurrentlyInfected = (reportedCases, isSevere = false) => {
  const estimated = isSevere ? 50 : 10;
  return reportedCases * estimated;
};

const getNumber = (number) => {
  let result = number.toString();
  [result] = result.split('.');
  return Number(result);
};

// Gets infections by day
const getInfectionsByDay = (currentlyInfected, days) => {
  let factor = getNumber(days / 3);
  factor = 2 ** factor;

  return currentlyInfected * factor;
};

const getPercentOf = (num, percent) => (num * percent) / 100;

export {
  getDays, getCurrentlyInfected, getInfectionsByDay, getPercentOf
};
