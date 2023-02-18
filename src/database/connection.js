const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose.set("strictQuery", true);

const connect = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.pypbuzy.mongodb.net/?retryWrites=true&w=majority`)

    const connection = mongoose.connection;

    connection.on('error', () => {
        console.error('Erro ao conectar com o MongoDB');
    })

    connection.on('open', () => {
        console.log('Conectado ao MongoDB');
    })
}

connect();

module.exports = mongoose;