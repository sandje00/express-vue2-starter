'use strict';

require('express-async-errors');
require('dotenv').config();
const auth = require('./shared/auth');
const cors = require('cors');
const database = require('./shared/database');
const express = require('express');
const helmet = require('helmet');
const { INTERNAL_SERVER_ERROR } = require('./shared/errors/status');
const { middleware: logRequests } = require('./shared/logger');
const { port } = require('./config');
const router = require('./router');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(auth.initialize());
app.use('/api/v1', logRequests, router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  return err.status
    ? res.status(err.status).json({ error: err.message })
    : res.status(INTERNAL_SERVER_ERROR)
      .json({ error: 'Something went wrong' });
}

database.initialize();
