import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import * as userRepository from '../repositories/userRepository.js';
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from '../utils/errorUtils.js';

export type LoginUser = Omit<User, 'id' | 'name'>;

async function login(login: LoginUser) {
  const user = await getUserOrFail(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

async function getUserOrFail(login: LoginUser) {
  const user = await userRepository.findUserByEmail(login.email);
  if (!user) throw unauthorizedError('Invalid credentials');

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw unauthorizedError('Invalid credentials');

  return user;
}

const authService = {
  login,
};

export default authService;
