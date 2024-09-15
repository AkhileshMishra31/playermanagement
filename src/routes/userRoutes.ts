// src/routes/postRoutes.ts
import { Router, Request, Response } from 'express';
import { user_controller } from '../controllers/users.controller';


const router: Router = Router();

router.post('/signup', user_controller.signup);

export default router;