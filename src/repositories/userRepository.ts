import { User } from '@prisma/client';
import prisma from '../configs/database.js';

export type dataUser = Omit<User, 'id'>;

export const createUser = async (data: dataUser) => {
  return await prisma.user.create({
    data,
  });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
};
