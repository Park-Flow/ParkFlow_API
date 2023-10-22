import { Router } from 'express';

import userRouter from './userRouter.js';
import cardRouter from './cardRouter.js';


const router = Router();

router.use(userRouter);
router.use(cardRouter);

export default router;