import { OrderedBook } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createOrder = async (userId: string, orderedBooks: OrderedBook[]) => {
  const result = await prisma.order.create({
    data: {
      userId,
      orderedBooks: {
        create: orderedBooks.map(({ bookId, quantity }) => ({
          bookId,
          quantity,
        })),
      },
    },
    include: {
      orderedBooks: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Order not create');
  }
  return result;
};

export const OrderService = {
  createOrder,
};
