const { ObjectId } = require('mongodb')
const { default: mongoose } = require('mongoose')
const Product = require('../../models/Product')
const User = require('../../models/User')

const ProductController = {

    async createProduct(req, res) {

        const bodyData = req.body
        const {user_id} = req.params

        try {

            if(!mongoose.Types.ObjectId.isValid(user_id)) {
                return res.status(404).send({
                    message: 'Usuário não encontrado!'
                })
            }

            const data = {userName: user_id, ...bodyData}

            const newProduct = await Product.create(data)
            await newProduct.populate('userName')

            return res.status(200).send({
                message: 'Produto cadastrado com sucesso!',
                data: newProduct
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    async getUserProducts(req, res) {

        const {user_id} = req.params

        try {

            if(!mongoose.Types.ObjectId.isValid(user_id)) {
                return res.status(404).send({
                    message: 'Usuário não cadastrado!'
                })
            }

            const productsUser = await Product.find({userName: user_id})
            
            if(productsUser.length === 0) {
                return res.status(400).send({
                    message: 'Usuário não possui produtos cadastrados!'
                })
            }

            return res.status(200).send({
                message: 'Listando...',
                data: productsUser
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    async updateProducts(req, res) {

        const bodyData = req.body
        const {user_id, product_id} = req.params

        try {

            if(!mongoose.Types.ObjectId.isValid(user_id)) {
                return res.status(404).send({
                    message: 'Usuário não encontrado!'
                })
            }

            if(!mongoose.Types.ObjectId.isValid(product_id)) {
                return res.status(404).send({
                    message: 'Id do produto não encontrado!'
                })
            }

            const updateProduct = await Product.findByIdAndUpdate(product_id, bodyData, {new: true})

            return res.status(200).send({
                message: 'Atualizando produto...',
                data: updateProduct
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    async deleteProduct(req, res) {

        const {user_id, product_id} = req.params

        try {

            if(!mongoose.Types.ObjectId.isValid(user_id)) {
                return res.status(404).send({
                    message: 'Usuário não encontrado!'
                })
            }

            if(!mongoose.Types.ObjectId.isValid(product_id)) {
                return res.status(404).send({
                    message: 'Id do produto não encontrado!'
                })
            }

            const deleteProduct = await Product.findByIdAndDelete(product_id)

            return res.status(200).send({
                message: 'Deletando produto...',
                data: deleteProduct
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    async getProducts(req, res) {

        try {

            const getProducts = await Product.find()

            return res.status(200).send({
                message: 'Listando todos os produtos...',
                data: getProducts
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    async getProductsById(req, res) {

        const {product_id} = req.params

        try {

            if(!mongoose.Types.ObjectId.isValid(product_id)) {
                return res.status(404).send({
                    message: 'Produto não encontrado!'
                })
            }

            const product = await Product.findById(product_id)

            return res.status(200).send({
                message: 'Listando produto...',
                data: product
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    }

}

module.exports = ProductController