'use strict';

require('express-async-errors');
require('dotenv').config();
const auth = require('./shared/auth');
const cors = require('cors');
const database = require('./shared/database');
const errorHandler = require('./shared/errors/errorHandler');
const express = require('express');
const helmet = require('helmet');
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

database.initialize();
