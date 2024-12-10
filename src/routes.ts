import express, { Request, Response } from 'express';
import { createProduct, getAllProducts } from './products/products.controller';

const router = express.Router();

router.get(
    '/',
    (req: Request, res: Response): Promise<any> => getAllProducts(req, res)
);
router.post(
    '/',
    (req: Request, res: Response): Promise<any> => createProduct(req, res)
);
