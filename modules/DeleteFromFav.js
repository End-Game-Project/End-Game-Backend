'use strict'
const express = require('express');
const server = express();
const gameModel = require('./GameDb')

function DeleteFromFav(req, res) {
    let gameId = req.query.gameId;
    let email = req.query.email;

    gameModel.deleteOne({
        _id: gameId
    }).then(()=> {
        gameModel.find({
            email
        }, (function (error,
            allData) {
            if (error) {
                console.log('Error with getting the data',
                    error);
            }
            else {
                console.log(allData);
                res.send(allData);
            }
        }))
    })
}

module.exports = DeleteFromFav;