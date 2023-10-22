import Joi from 'joi';
import { LoginUser, CreateUser } from '../services/userService.js';

export const userLoginSchema = Joi.object<LoginUser>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const userCreateSchema = Joi.object<CreateUser>({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});
