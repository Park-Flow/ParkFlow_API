import Joi from 'joi';
import { dataCard } from '../repositories/cardRepository';

export const cardSchema = Joi.object<dataCard>({
  userId: Joi.number().required(),
  number: Joi.string().required(),
  validade: Joi.string().required(),
  securityNumber: Joi.string().required(),
  holder: Joi.string().required(),
});
