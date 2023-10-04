import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import { userLoginSchema, userCreateSchema } from '../schemas/userSchema.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';

const userRouter = Router();

userRouter.post(
  '/login',
  validateSchemaMiddleware(userLoginSchema),
  userController.login,
);
userRouter.post(
  '/signup',
  validateSchemaMiddleware(userCreateSchema),
  userController.createUser,
);

export default userRouter;
