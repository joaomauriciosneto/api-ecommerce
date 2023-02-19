const { Router } = require('express');

const UserController = require('../controllers/userController')
const LoginController = require('../controllers/loginController')
const ProductController = require('../controllers/productController')
const CartController = require('../controllers/cartController')
const Middlewares = require('../middlewares');
const { authentication } = require('../middlewares');

const routes = Router();

routes.post('/users', UserController.createUser);
routes.get('/users', UserController.getUsers);
routes.get('/users/:user_id', UserController.getUserById);
routes.delete('/users/:user_id', UserController.deleteUser);

routes.post('/login', LoginController.createSession);

routes.post('/carts/:user_id', authentication, CartController.createCard)
routes.get('/carts/:user_id/:cart_id', authentication, CartController.getCart);
routes.get('/:user_id/carts', authentication, CartController.getUserCarts);

routes.get('/products/:product_id', ProductController.getProductsById);
routes.post('/products/:user_id', authentication,  ProductController.createProduct);
routes.get('/:user_id/products', ProductController.getUserProducts);
routes.delete('/products/:user_id/:product_id', authentication, ProductController.deleteProduct);
routes.put('/products/:user_id/:product_id', authentication, ProductController.updateProducts)
routes.get('/products', ProductController.getProducts)

module.exports = routes;