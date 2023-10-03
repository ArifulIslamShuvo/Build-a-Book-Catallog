import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OrderController } from './orders.controller';
import { OrderValidations } from './orders.validations';
const router = express.Router();

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(OrderValidations.create),
  OrderController.createOrder
);
router.get('/', auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllFromDB);

// Get all Orders for a Specific Customer
router.get(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.getCustomerOrders
);

export const OrderRoutes = router;
