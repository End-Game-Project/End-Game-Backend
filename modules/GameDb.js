'use strict'

const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({
    // email: this.state.email,
    // id: this.props.element1.id,
    // title:this.props.element1.title,
    // thumbnail:this.props.element1.thumbnail,
    // short_description:this.props.element1.short_description,
    // game_url:this.props.element1.game_url
    email:String,
    id:Number,
    title:String,
    thumbnail:String,
    short_description:String,
    game_url:String
})
const gameModel = mongoose.model('game', gameSchema)

module.exports = gameModel;