/*******************************************************************************
 ** Copyright (c) Certi
 ** All rights reserved.
 ********************************************************************************/

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import setupRouter from './router';

const app = express();

var corsOptions = { origin: '*' };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '1mb' }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

// simple route
app.use('/', setupRouter());

// set port, listen for requests
require('dotenv').config({ example: '../.env' }); // npm install dotenv
const PORT = process.env.CERTIIO_PORT || 3008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
