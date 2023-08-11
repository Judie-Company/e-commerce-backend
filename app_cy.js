const express = require("express");
const app = express();

require("dotenv/config");

const api = process.env.API_URL;

// Middleware  --> previous body parser
app.use(express.json());

// 3-6 new code
app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: "Milo",
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
    console.log("Server is running http://localhost:3000");
});

//Create sample get request to route /
// http://localhost:3000/api/v1/products
/*
app.get('/',(req, res) => {
    res.send('Hello API !');
})
*/

// 3-5 new code
/*
app.get(api+'/products',(req, res) => {
    res.send('Hello API !');
})

app.listen(3000, ()=>{
    console.log(api);
    console.log("Server is running http://localhost:3000");
})
*/

// console.log("Hello World Good Morning");
