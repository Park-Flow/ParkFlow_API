import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import { userLoginSchema } from '../schemas/userSchema.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';

const userRouter = Router();

userRouter.post(
  '/login',
  validateSchemaMiddleware(userLoginSchema),
  userController.login,
);

export default userRouter;
