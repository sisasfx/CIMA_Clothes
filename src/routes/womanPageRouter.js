//Import mainPageServices to use it's logic
const express = require("express");
const WomanProducts = require("../services/womanPageServices");

//Instance AllProducts class
const products = new WomanProducts();

//Route to module our API logic
const router = express.Router();

//Get all woman products
router.get('/',(request,  response)=>{
    products.find()
        .then(() =>{
            response.send(products);
        })
        .catch(() =>{
            console.log("WRONG CATCH REQUEST")
        })
});

//Get one woman product
router.get('/:id',(request,response)=>{
    products.findOne(request.params.id)
        .then(() =>{
            response.send(products);
        })
        .catch(() =>{
            console.log("Ups algo salio mal!")
        })
});

//Create one woman product
/*router.post('/',(request,response)=>{
    products.create(request.body.user,request.body.product, request.body.description,request.body.price)
        .then(() =>{
            response.json('Creado perfectamente');
        })
        .catch(() =>{
            response.json("Uop! algo salio mal");
        });
});*/

//Update one woman product
router.patch('/:id',(request,response)=>{
    products.update(request.params.id,request.body.user, request.body.product, request.body.description, request.body.price)
        .then(()=>{
            response.send(products);
        })
        .catch(() =>{
            response.send("Uop! algo salio mal!");
        })
});

//Delete one woman product
router.delete('/:id',(request,response)=>{
    products.delete(request.params.id)
        .then(() =>{
            response.json("Elemento borrado perfectamente")
        })
        .catch(e =>{
            response.json("Uops! algo salio mal");
            response.send(e);
        });
});

module.exports = router;