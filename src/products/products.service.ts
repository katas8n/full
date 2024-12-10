import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducts = () => {
    prisma.product.findMany();
};

export const createProduct = (data: {
    name: string;
    price: number;
    description: string;
    discount: number;
}) => {
    prisma.product.create({ data });
};
