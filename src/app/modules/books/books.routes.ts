import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './books.controller';
import { BookValidations } from './books.validations';

const router = express.Router();

router.post(
  '/create-book',
  validateRequest(BookValidations.create),
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.insertIntoDB
);
router.get('/', BookController.getAllFromDB);
router.get('/:id', BookController.getByIdFromDB);

router.get('/:categoryId/category', BookController.getBooksByCategoryId);

router.patch(
  '/:id',
  validateRequest(BookValidations.update),
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.updateIntoDB
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteFromDB);

export const BookRoutes = router;
