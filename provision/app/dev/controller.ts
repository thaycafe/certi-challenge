/*******************************************************************************
 ** Copyright (c) Certi
 ** All rights reserved.
 ********************************************************************************/

import { onError, onSuccess } from './handlers';

// (GET) /test
export async function test(req, res) {
  try {
    onSuccess(res, {
      ok: true
    });
  } catch (err) {
    onError(res, err);
  }
}