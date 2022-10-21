//Import mainPageServices to use it's logic
const KidsProducts = require('../services/kidsPageServices');
const express = require("express");

//Instance AllProducts class
const product = new KidsProducts();

//Route to module our API logic
const router = express.Router();

//Get all kids products
router.get('/',(request,  response)=>{
    product.find()
        .then(() =>{
            response.send(product);
        })
        .catch(() =>{
            console.log("WRONG CATCH REQUEST")
        })
});

//Get one kids product
router.get('/:id',(request,response)=>{
    product.findOne(request.params.id)
        .then(() =>{
            response.send(product);
        })
        .catch(() =>{
            console.log("Ups algo salio mal!")
        })
});

//Create one kids product
/*router.post('/',(request,response)=>{
    product.create(request.body.user,request.body.product, request.body.description,request.body.price)
        .then(() =>{
            response.json('Creado perfectamente');
        })
        .catch(() =>{
            response.json("Uop! algo salio mal");
        });
});*/

//Update one kids product
router.patch('/:id',(request,response)=>{
    product.update(request.params.id,request.body.user, request.body.product, request.body.description, request.body.price)
        .then(()=>{
            response.send(product);
        })
        .catch(() =>{
            response.send("Algo salio mal");
        })
});

//Delete one kids product
router.delete('/:id',(request,response)=>{
    product.delete(request.body.id)
        .then(() =>{
            response.json("Elemento borrado perfectamente")
        })
        .catch(e =>{
            response.json("Uop! algo salio mal");
            response.send(e);
        });
});

module.exports = router;