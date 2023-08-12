// console.log("hello world");
const express = require("express");
const app = express();

require("dotenv/config");

const api = process.env.API_URL;

//Middleware --> previous body parser
app.use(express.json());
// http://localhost:3000/api/v1/products
//Create a sample get request to route /

// 3-5 code
/*
app.ge(api+'/products', (req, res) =>{
    res.send ('hello API !');
})

app. listen(3000, ()=>{
    console.log(api);
    console. log ('server is running http://localhost:3000');
})
*/


// 3-6 code edited code
app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: "hair dresser",
        image: "some_url",
    };

    res.send(product);
});

// sample post request
app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
});

app.listen(3000, () => {
    console.log(api);
    console.log("server is running http://localhost:3000");
});
