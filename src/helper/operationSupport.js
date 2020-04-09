import fs from 'fs';
import constants from './constants';

const { nanosecondsInASecond, nanosecondsInAMillisecond, getLogDate } = constants;

const toServerLog = (logInput) => {
  const line = `${logInput}
`;
  fs.appendFile(`./logs/request-response/${getLogDate()}.txt`, line, (err) => {
    if (err) throw err;
  });
};

const getDuration = (start) => {
  const duration = process.hrtime(start);

  // in milliseconds
  return (duration[0] * nanosecondsInASecond + duration[1]) / nanosecondsInAMillisecond;
};

export default {
  toServerLog,
  getDuration
};
