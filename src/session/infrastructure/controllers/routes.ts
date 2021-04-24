import { Router } from 'express';
import SingUpController from './SingUpController';

export const register = (app: Router) => {
  const signUpController = new SingUpController();
  app.get('/signup', signUpController.run.bind(signUpController));
};