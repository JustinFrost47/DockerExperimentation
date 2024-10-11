// routes/phoneRoutes.ts
import { Router } from 'express';
import sampleController from '../controllers/sampleController';

const router = Router();

router.get('/', sampleController.greet);

export default router ;
