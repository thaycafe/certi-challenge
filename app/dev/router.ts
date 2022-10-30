/*******************************************************************************
 ** Copyright (c) Certi
 ** All rights reserved.
 ********************************************************************************/

import * as express from 'express';
import * as CT from './controller';
import { onNotFound } from './handlers';

export function setupRouter(): express.Router {
  const router = express.Router();

  // Add root route
  router.route('/').get((req, res) => res.status(200).json({ response: 'OK' }));

  // Add Endpoint
  router.route('/test').get(CT.test);

  // Add default NotFound (404) least
  router.use((req, res) => onNotFound(res));

  return router;
}

export default setupRouter;
