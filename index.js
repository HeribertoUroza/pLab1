const math = require("./math");
const express = require("express");
const req = require("request");
const getGifs = require("./gif")

const app = express();
const port = 3002;


// console.log(math.add(1, 2))
// console.log("hi")


app.get('/', (request, response) => {
    response.send(`<h1>Welcome to the homepage</h1>`)

});

app.get('/math/add', (request, response) => {
    allNums = 0;

    arr = Object.values(request.query)

    for (let i = 0; i < arr.length; i++) {

        allNums += parseInt(arr[i])
        //console.log(request.query)        
    }

    if (Number.isNaN(allNums)) {
        response.send(
            {
                error: 'You passed a non-number value into the parameters.'
            }
        )


    } else {response.send({
        input: request.query,
        sumString: arr.join(" + "),
        sum: allNums,
    })}

});

app.get('/math/multiply', (request, response) => {
    allNums = 1;

    arr = Object.values(request.query)

    for (let i = 0; i < arr.length; i++) {

        allNums *= parseInt(arr[i])
    }

    if (Number.isNaN(allNums)) {

        response.send(
            {
                error: 'You passed a non-number value into the parameters.'
            }
        )
        
    } else {response.send({
        input: request.query,
        productString: arr.join(" * "),
        product: allNums,
    })}


});

app.get("/gif", (request,response)=> {
    let search = request.query.search
    getGifs.getGifs(search, (gifs)=>{
        response.send(gifs)
    })

    
});

app.listen(port, () => {
    console.log("Local Server is Active")
});

