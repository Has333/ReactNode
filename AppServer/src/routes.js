import UserController from '../src/controllers/User.controller.js';
import { Router } from 'express';

export const routes = new Router();

routes.get('/users', UserController.listAll);

routes.post('/users', UserController.createUser);

routes.put('/users/:id', UserController.updateUserById);

routes.delete('/users/:id', UserController.deleteUserById);