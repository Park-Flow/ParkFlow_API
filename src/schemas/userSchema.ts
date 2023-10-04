import joi from 'joi';
import { LoginUser } from '../services/userService.js';

export const userLoginSchema = joi.object<LoginUser>({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});
