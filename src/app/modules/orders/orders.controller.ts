import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './orders.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { orderedBooks } = req.body;
  const { id: userId } = req.user as { id: string };
  const result = await OrderService.createOrder(userId, orderedBooks);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders fetched successfully!',
    data: result,
  });
});
// const getCustomerOrders = catchAsync(async (req: Request, res: Response) => {
//   const { id: userId } = req.user as { id: string };
//   const result = await OrderService.getCustomerOrders(userId);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Customer orders retrieved successfully',
//     data: result,
//   });
// });

const getCustomerOrders = catchAsync(async (req: Request, res: Response) => {
  const { id: userId } = req.user as { id: string };
  const result = await OrderService.getCustomerOrders(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer orders retrieved successfully',
    data: result,
  });
});
export const OrderController = {
  createOrder,
  getAllFromDB,
  getCustomerOrders,
};
