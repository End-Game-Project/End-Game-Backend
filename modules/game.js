const axios = require('axios');

// http://localhost:3001/getGame?category=shooter
function getGamesHandler(req, res) {
    console.log('/getGame');
    
    let searchQuerey = req.query.category;
    let gameURL = `https://www.freetogame.com/api/games?category=${searchQuerey}`;
    console.log(gameURL);
    axios.get(gameURL).then(dataResult => {

        let gamesArray = dataResult.data.map(item => {
            return item;
        })
        res.send(gamesArray);

    }).catch(error => {
        res.send(error);
    });
}


module.exports = getGamesHandler;