const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');

require('dotenv').config();

const port = process.env.PORT || 2021;

const app = express();
app.disable('x-powered-by');

app.listen(port,
  () => debug(`Server is running in ${chalk.magentaBright(`localhost:${port}`)}`));
