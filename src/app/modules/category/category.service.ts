import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Category): Promise<Category> => {
  return await prisma.category.create({
    data,
  });
};

const getAllFromDB = async (): Promise<Category[]> => {
  return await prisma.category.findMany({
    include: {
      books: true,
    },
  });
};

const getByIdFromDB = async (id: string): Promise<Category | null> => {
  return await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });
};

export const CategoryService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
};
