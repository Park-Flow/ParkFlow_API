import { Request, Response } from 'express';
import { LoginUser } from '../services/userService.js';
import authService from '../services/userService.js';

export async function login(req: Request, res: Response) {
  const LoginUser: LoginUser = req.body;
  const token = await authService.login(LoginUser);
  res.status(200).send({ token });
}

export async function createUser(req: Request, res: Response) {
  const user = await authService.createUser(req.body);
  res.status(201).send(user);
}
