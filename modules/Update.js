'use strict'

const express = require('express');
const server = express();

const gameModel = require('./GameDb')
server.use(express.json());

function updateFavList(req, res) {
    let { email, id, title, thumbnail, short_description, game_url, didPlayed } = req.body;

    gameModel.findByIdAndUpdate(id, { didPlayed }, (error, updatedData) => {

        if (error) {
            console.log('Error with updating the data', error);
        }
        else {
            console.log(updatedData);
            gameModel.find({ email }, (function (error, allData) {
                if (error) {
                    console.log('Error with getting the data', error);
                }
                else {
                    console.log(allData);
                    res.send(allData);
                }
            }))
            res.send(updatedData);
        }
    })
}

module.exports = updateFavList
