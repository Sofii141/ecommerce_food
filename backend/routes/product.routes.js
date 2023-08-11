import { Router } from "express";
import {uploadProduct, getProducts} from '../controllers/product.controller.js'

const router = Router(); 

router.post('/uploadProduct', uploadProduct);
router.get('/products', getProducts ); 

export default router; 