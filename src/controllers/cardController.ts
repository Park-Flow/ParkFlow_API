import { Request, Response } from 'express';
import * as cardService from '../services/cardService.js';

export async function createCardData(req: Request, res: Response) {
  let dataCard = req.body;
  const userId = Number(res.locals.user.id)
  dataCard = {...dataCard, userId}
  const card = await cardService.createCard(dataCard);
  res.status(201).send(card);
}
