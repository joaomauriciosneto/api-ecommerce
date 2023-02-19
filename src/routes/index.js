const { Router } = require('express');

const UserController = require('../controllers/userController')
const LoginController = require('../controllers/loginController')

const routes = Router();

routes.post('/users', UserController.createUser);
routes.get('/users', UserController.getUsers);
routes.get('/users/:user_id', UserController.getUserById);

routes.post('/login', LoginController.createSession);

routes.post('/cart/:user_id')
routes.get('/cart/:user_id/:cart_id');
routes.get('/cart/:user_id');

routes.post('/products/:user_id');
routes.get('/products/:user_id');
routes.delete('/products/:user_id/:product_id');
routes.get('/products/:product_id');
routes.put('/products/:user_id/:product_id')
routes.get('/products')

module.exports = routes;