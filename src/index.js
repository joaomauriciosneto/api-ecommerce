const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config()

const app = express();
const porta = 3333;

/*
 * Para eliminar warning em projetos com mongoose
 */
// mongoose.set("strictQuery", true);

// mongoose.connect(process.env.MONGO_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }, console.log('Connected to database'));

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(porta, () => {
    console.log(`Server running at port: ${porta}`);
})

require('./database/connection');