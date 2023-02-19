const Middlewares = {

    authentication(req, res, next) {

        const {authentication} = req.headers
        const {user_id} = req.params

        if(!authentication) {
            return res.status(404).send({
                message: 'Token não informado!'
            })
        }

        if(authentication !== user_id) {
            return res.status(401).send({
                message: 'Não autorizado!'
            })
        }       

        next()

    }

}

module.exports = Middlewares