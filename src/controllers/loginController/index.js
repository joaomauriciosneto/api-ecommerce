const User = require('../../models/User');

const LoginController = {

    async createSession(req, res) {

        const {userName} = req.body

    try {

        const user = await User.findOne({userName})

        if(!user) {
            return res.status(404).send({
                message: 'Usuário não econtrado!'
            })
        }

        return res.status(200).send({
            message: 'Usuário logado!',
            data: user
        })
        
    } catch (error) {
        return res.status(500).json(error)
    }

    }

}

module.exports = LoginController