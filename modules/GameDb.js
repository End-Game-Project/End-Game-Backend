'use strict'

const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({
    
})
const favGames = mongoose.model('game', gameSchema)

module.exports = favGames;