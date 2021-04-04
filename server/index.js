'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const { port } = require('./config');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
