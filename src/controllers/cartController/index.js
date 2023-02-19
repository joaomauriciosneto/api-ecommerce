const User = require('../../models/User')
const Cart = require('../../models/Cart')
const { default: mongoose } = require('mongoose')

const CartController = {

    async createCard(req, res) {

        const bodyData = req.body
        const {user_id} = req.params

        try {

            // if(!mongoose.Types.ObjectId.isValid(user_id)) {
            //     return res.status(404).send({
            //         message: 'Usuário não encontrado!'
            //     })
            // }
            
            const createdCart = await Cart.create({...bodyData, userName: user_id})

            await createdCart.populate('products')

            return res.status(201).send({
                message: 'Cart criado com sucesso!',
                data: createdCart
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    async getUserCarts(req, res) {

        const {user_id} = req.params

        try {

            // if(!mongoose.Types.ObjectId.isValid(user_id)) {
            //     return res.status(404).send({
            //         message: 'Usuário não encontrado!'
            //     })
            // }

            const userCarts = await Cart.find({userName: user_id})
            .populate('userName').populate('products')

            return res.status(200).send({
                message: 'Listanto card...',
                data: userCarts
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    
    async getCart(req, res) {

        const {user_id, cart_id} = req.params

        try {

            // if(!mongoose.Types.ObjectId.isValid(user_id)) {
            //     return res.status(404).send({
            //         message: 'Usuário não econtrado!'
            //     })
            // }

            // if(!mongoose.Types.ObjectId.isValid(cart_id)) {
            //     return res.status(404).send({
            //         message: 'Produto não encontrado!'
            //     })
            // }

            const cart = await Cart.findById(cart_id)
            .populate('products')

            return res.status(200).send({
                message: 'Listando...',
                data: cart
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    }

}

module.exports = CartController