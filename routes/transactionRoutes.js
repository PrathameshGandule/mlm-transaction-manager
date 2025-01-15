import express from 'express';
import { purchaseProduct } from '../controllers/purchaseController.js';
import { validateAndFetchPurchaseData } from '../middlewares/purchaseMiddleware.js';

const router = express.Router();

// POST /api/purchase
router.post('/purchase', validateAndFetchPurchaseData, purchaseProduct);

export default router;
