'use strict'

const express = require('express');
const server = express();

const gameModel = require('./GameDb')
server.use(express.json());

// http://localhost:3002/getFav?email
function getGamesFavHandler(req, res) {
    let UserEmail = req.query.email;
    console.log("UserEmail");
    gameModel.find({
        email: UserEmail
    }, function (error, allData) {
        if (error) {
            console.log('Error with getting the data',
                error);
        } else {
            console.log(allData);
            res.send(allData);
        }
    })
}

async function AddToFavHandler(req, res) {
    console.log(req.body)

    let { email, id, title, thumbnail, short_description, game_url } = req.body;

    await gameModel.create(req.body);

    gameModel.find({ email: email })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(500).send("error there is no recived data");
        });
}

module.exports = { AddToFavHandler, getGamesFavHandler };