import { User } from '@prisma/client';
import prisma from '../configs/database.js';

export type dataUser = Omit<User, 'id'>;

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
};
