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
export type CreateUser = Omit<User, 'id'> & { confirmPassword: string };

async function createUser(user: CreateUser) {
  await getUserByEmail(user.email);
  passwordMatch(user.password, user.confirmPassword);
  const salt = bcrypt.genSaltSync(10);
  delete user.confirmPassword;
  const hashedPassword = bcrypt.hashSync(user.password, salt);
  const createdUser = await userRepository.createUser({
    ...user,
    password: hashedPassword,
  });

  return createdUser;
}
function passwordMatch(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    throw unauthorizedError('Password mismatch');
  }
}

async function getUserByEmail(email: string) {
  const user = await userRepository.findUserByEmail(email);
  if (user) throw conflictError('Email already exists');

  return user;
}

async function login(login: LoginUser) {
  const user = await getUserOrFail(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

async function getUserOrFail(login: LoginUser) {
  const user = await userRepository.findUserByEmail(login.email);
  if (!user) throw unauthorizedError('Invalid credentials');

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid)
    throw unauthorizedError('Invalid credentials, password mismatch');

  return user;
}

const authService = {
  login,
  createUser,
};

export default authService;
