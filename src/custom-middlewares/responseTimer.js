import support from '../helper/operationSupport';

const { toServerLog, getDuration } = support;

const responseTime = (req, res, next) => {
  const startTime = process.hrtime();

  res.on('finish', () => {
    toServerLog(`${req.method}    ${req.baseUrl ? req.baseUrl : ''}${req.path}   ${res.statusCode}   ${getDuration(startTime)}ms`);
  });

  next();
};

export default responseTime;
