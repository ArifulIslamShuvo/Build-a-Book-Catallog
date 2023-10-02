import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidations } from './categroy.validations';

const router = express.Router();

router.post(
  '/create-category',
  validateRequest(CategoryValidations.create),
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.insertIntoDB
);
router.get('/', CategoryController.getAllFromDB);

export const CategoriesRoutes = router;
