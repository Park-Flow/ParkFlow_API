import joi from 'joi';
import { LoginUser, CreateUser } from '../services/userService.js';

export const userLoginSchema = joi.object<LoginUser>({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

export const userCreateSchema = joi.object<CreateUser>({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  confirmPassword: joi.string().valid(joi.ref('password')).required(),
});
