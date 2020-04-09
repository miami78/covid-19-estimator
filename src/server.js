import app from './app';

require('dotenv').config({ path: `${__dirname}/.env` });

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
  app.listen(port);
}
