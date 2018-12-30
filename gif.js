const request = require("request");

const getGifs = (search, cb) => {

    const api_key = 'siIyo4w5mg0REENX76Sr57QTgkt3BWvY';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`;

    request(url, function (error, response, body){
        let data = JSON.parse(body).data;
        const gifArray = [];
        data.forEach(currentGif => {
            const url = currentGif.images.original.url;
            gifArray.push(url);
        });

        cb(gifArray);
    })
    
}

module.exports = {
    getGifs
}