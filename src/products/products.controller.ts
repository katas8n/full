import { Request, Response } from 'express';
import {
    createProduct as createNewProduct,
    getAllProducts as getProudcts
} from './products.service';

export const getAllProducts = async (_: Request, res: Response) => {
    const products = await getProudcts();
    return res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
    const product = await createNewProduct(req.body);

    return res.status(201).json(product);
};
