import { Session } from '@prisma/client';
import prisma from '../configs/database.js';

export type dataSession = Omit<Session, 'id'>;

export const create = async (data: dataSession) => {
  return await prisma.session.create({
    data,
  });
};
