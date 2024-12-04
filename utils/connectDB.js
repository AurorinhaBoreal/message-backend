const mongoose = require('mongoose');
const dotenv = require("dotenv")

function connectDB() {

    dotenv.config()

    mongoose.connect(process.env.MONGO_URL);
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', function callback(){
        console.log("Atlas mongoDB conectado!");
    });
}

module.exports = {
    connectDB: connectDB
}
