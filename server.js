'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const StoreModel = require('./moduls/')
const mongoose = require('mongoose')
const server = express();
const PORT = process.env.PORT;

server.use(cors());

// mongodb://localhost:27017

// Middleware to decode any request body to json(with Post req)
server.use(express.json());

mongoose.connect(`${process.env.MONGO_SERVER}`);
const getGamesHandler = require(`./modules/game.js`)
const getAllGamesHandler= require(`./modules/allGame.js`)
const {AddToFavHandler,getGamesFavHandler} = require(`./modules/AddToFav.js`)
const DeleteFromFav = require(`./modules/DeleteFromFav`);
const updateFavList = require(`./modules/Update`);


server.get('/', homeHandler);
server.get('/getGame', getGamesHandler);
server.get('/store', getAllGamesHandler);
server.post('/addToFav', AddToFavHandler);
server.get('/getFav', getGamesFavHandler);
server.delete('/deleteGame', DeleteFromFav);
server.put('/updateList', updateFavList);

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