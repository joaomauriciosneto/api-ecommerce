const { Router } = require('express');

const UserController = require('../controllers/userController')

const routes = Router();

routes.get('/', (req, res) => {
    res.json('Sivuquinha')
})

routes.post('/users', UserController.createUser);
routes.get('/users');
routes.get('/users/:user_id');
routes.post('/login');
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