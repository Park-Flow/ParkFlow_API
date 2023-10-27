import { Router } from 'express';

import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import { validateToken } from '../middlewares/validateToken.js';
import * as cardController from '../controllers/cardController.js';
import * as cardSchema from '../schemas/cardSchema.js';

const cardRouter = Router();

cardRouter.post(
  '/card',
  validateToken,
  validateSchemaMiddleware(cardSchema.cardSchema),
  cardController.createCardData,
);

export default cardRouter;
