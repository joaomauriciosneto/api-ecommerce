const { default: mongoose } = require('mongoose');
const User = require('../../models/User');

const UserController = {

    async createUser(req, res) {
        const bodyData = req.body;

        try{

            const userExist = await User.findOne({
                userName: bodyData.userName
            })

            if(userExist) {
                return res.status(400).send({
                    message: 'Usuário já existente!'
                })
            }

            const newUser = await User.create(bodyData);

            return res.status(200).json(newUser)
        }
        catch(error) {
            return res.status(500).json(error);
        }
    },

    async getUsers(req, res) {

        try {

            const users = await User.find()

            return res.status(200).json(users);
            
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    async getUserById(req, res) {
        const {user_id} = req.params;

        try {

            if(!mongoose.Types.ObjectId.isValid(user_id)) {
                return res.status(404).send({
                    message: 'Usuário não encontrado!'
                })
            }

            const user = await User.findById(user_id)

            return res.status(200).json(user);
            
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    async deleteUser(req, res) {

        const {user_id} = req.params

        try {

            if(!mongoose.Types.ObjectId.isValid(user_id)) {
                return res.status(404).send({
                    message: 'Usuário não encontrado!'
                })
            }

            const deleteUser = await User.findByIdAndDelete(user_id)

            return res.status(200).send({
                message: 'Deletando usuário...',
                data: deleteUser
            })
            
        } catch (error) {
            return res.status(500).json(error)
        }

    }

}

module.exports = UserController;