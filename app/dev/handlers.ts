/*******************************************************************************
 ** Copyright (c) Certi
 ** All rights reserved.
 ********************************************************************************/

import { Response } from 'express';

export function onSuccess(res: Response, data?: object, log = true): void {
  res.status(200).json(data);
}

export function onNotFound(res: Response): void {
  res.status(404).json({ error: 'NotFound' });
}

export function onError(res: Response, error: Error): void {
  res.status(500).json(error);
}
