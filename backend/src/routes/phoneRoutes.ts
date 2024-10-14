// routes/phoneRoutes.ts
import { Router } from 'express';
import sampleController from '../controllers/sampleController';
import { mobileController } from '../controllers/mobileController';

const router = Router();

router.get('/', mobileController.getAllMobiles)
router.get('/:id', mobileController.getMobileByID)
router.post('/', mobileController.addMobileEntry);
router.patch('/increaseStock/', mobileController.increaseStock)
router.patch('/decreaseStock/', mobileController.decreaseStock)
router.delete('/:id', mobileController.deleteMobileByID)

export default router ;
