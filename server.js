'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const server = express();
const PORT = process.env.PORT;

server.use(cors());
// Middleware to decode any request body to json(with Post req)
// server.use(express.json());

mongoose.connect(`${process.env.MONGO_SERVER}`);
const getGamesHandler = require(`./modules/game.js`)
const getAllGamesHandler= require(`./modules/allGame.js`)

server.get('/', homeHandler);
server.get('/getGame', getGamesHandler);
server.get('/store', getAllGamesHandler);
server.post('/addToFav', addBookHandler);
server.get('*', notFound);



function homeHandler(req, res) {
    res.status(200).send(`It's Working!`);
}


function notFound(req, res) {
    res.status(404).send(`404`);
}



server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})