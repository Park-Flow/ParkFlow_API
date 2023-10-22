import { Router } from 'express';

import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import * as cardController from '../controllers/cardController.js';
import * as cardSchema from '../schemas/cardSchema.js';

const cardRouter = Router();

cardRouter.post(
  '/createCard',
  validateSchemaMiddleware(cardSchema.cardSchema),
  cardController.createCardData,
);

export default cardRouter;
