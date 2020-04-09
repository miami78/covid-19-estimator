/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';

import routes from './routes';
import requestLogger from './middleware';

require('dotenv').config({ path: `${__dirname}/.env` });

const port = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(requestLogger);

routes(app);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* eslint-disable-next-line */
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: {
      message: err.message
    }
  });
});


if (process.env.NODE_ENV === 'development') {
  app.listen(port);
  console.log('app is running on port ', port);
}

export default app;
