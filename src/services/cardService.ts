import * as dataUtils from './../utils/dataUtils.js';
import * as cardRepository from './../repositories/cardRepository.js';
import {
    conflictError,
    notFoundError,
    unauthorizedError,
  } from '../utils/errorUtils.js';

export async function createCard(cardData: cardRepository.dataCard) {
  const { securityNumber, number } = cardData;
  await getCardByHolder(number);
  cardData.securityNumber = dataUtils.encrypt(securityNumber);

  return await cardRepository.createCarddb(cardData);
}

async function getCardByHolder(number: string) {
    const card = await cardRepository.findCardByNumber(number);
    if (card) throw conflictError('Card already exists');
  
    return card;
  }