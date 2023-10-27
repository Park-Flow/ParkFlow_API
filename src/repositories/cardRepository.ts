import { Card } from '@prisma/client';
import prisma from '../configs/database.js';

export type dataCard = Omit<Card, 'id'>;

export const createCarddb = async (data: dataCard) => {
  return await prisma.card.create({
    data,
  });
};

export const findCardByNumber = async (number: string) => {
    return await prisma.card.findFirst({
        where: {
            number,
        },
    });
};

export const getAllCardsByUser = async (userId: number) => {
    return await prisma.card.findMany({
        where: {
            userId,
        }
    })
}