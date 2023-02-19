const { Router } = require('express');

const UserController = require('../controllers/userController')
const LoginController = require('../controllers/loginController')
const ProductController = require('../controllers/productController')

const routes = Router();

routes.post('/users', UserController.createUser);
routes.get('/users', UserController.getUsers);
routes.get('/users/:user_id', UserController.getUserById);
routes.delete('/users/:user_id', UserController.deleteUser);

routes.post('/login', LoginController.createSession);

routes.post('/cart/:user_id')
routes.get('/cart/:user_id/:cart_id');
routes.get('/cart/:user_id');

routes.get('/products/:product_id', ProductController.getProductsById);
routes.post('/products/:user_id', ProductController.createProduct);
routes.get('/:user_id/products', ProductController.getUserProducts);
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct);
routes.put('/products/:user_id/:product_id', ProductController.updateProducts)
routes.get('/products', ProductController.getProducts)

module.exports = routes;