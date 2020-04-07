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

export default getDays;
