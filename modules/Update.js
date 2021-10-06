'use strict'

const express = require('express');
const server = express();

const gameModel = require('./GameDb')
server.use(express.json());

function updateFavList(req, res) {
    let { email, id, title, thumbnail, short_description, game_url, didPlayed } = req.body;

    console.log("anyhtingggggggggggggggg"+email);
    gameModel.findByIdAndUpdate(id, { didPlayed }, (error, updatedData) => {

        if (error) {
            console.log('Error with updating the data', error);
        }
        else {
            // console.log("updateddddddddddd"+updatedData);
            gameModel.find({ email: email }, (function (error, allData) {

                if (error) {
                    console.log('Error with getting the data', error);
                }
                else {
                    // console.log("commmm",allData);
                    res.json(allData);
                }
            }))
            // console.log("hiiiiiiiiiiiiiiiiiiii",updatedData);
            // res.send(updatedData);
        }
    })
}

module.exports = updateFavList
