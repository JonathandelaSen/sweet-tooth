import { Router } from 'express';
import UsersGetController from './UsersGetController';

export const register = (app: Router) => {
  const getController = new UsersGetController();
  app.get('/users', getController.run.bind(getController));
};