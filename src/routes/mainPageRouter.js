//Import express module
const express = require('express');

//Import mainPageServices to use it's logic
const AllProducts = require('../services/mainPageServices');
const {static} = require("express");
const serveStatic = require("serve-static");

//Instance AllProducts class
const products = new AllProducts();

//Route to module our API logic
const router = express.Router();


//Get all Products
router.get('/',(request, response)=>{
    products.find()
        .then(() =>{
            response.send(products);
        })
        .catch(e =>{
            request.send(e);
        })
});

//Delete one product
router.delete('/:id',(request,response)=>{
    products.delete(request.params.id)
        .then(() =>{
            response.json("Borrado correctamente")
        })
        .catch(e => {
            response.json("Ups algo salio mal");
            response.send(e);
        })
});

module.exports = router;




