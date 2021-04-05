'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const { middleware: logRequests } = require('./shared/logger');
const { port } = require('./config');
const router = require('./router');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api/v1', logRequests, router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
