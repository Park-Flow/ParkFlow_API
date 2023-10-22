import { Request, Response } from 'express';
import * as cardService from '../services/cardService.js';
import { dataCard } from '../repositories/cardRepository.js';

export async function createCardData(req: Request, res: Response) {
  const dataCard: dataCard = req.body;
  const card = await cardService.createCard(dataCard);
  res.status(201).send(card);
}
