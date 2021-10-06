const axios = require('axios');

// http://localhost:3001/getGame?category=shooter
function getAllGamesHandler(req, res) {
        
    let gameURL = `https://www.freetogame.com/api/games`;
    // console.log(gameURL);
    axios.get(gameURL).then(dataResult => {

        let gamesArray = dataResult.data.map(item => {
            return item;
        })
        res.send(gamesArray);

    }).catch(error => {
        res.send(error);
    });
}

module.exports = getAllGamesHandler;