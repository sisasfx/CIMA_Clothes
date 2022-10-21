const express = require("express");
const multer = require('multer');
const path = require("path");
const Products = require('../services/addProductService');

const model = require("../BBDD/model");

const products = new Products();
const router = express.Router();
/*THE ORIGINAL CODE THAT SAVES THE IMG TO FOLDER UPLOAD*/
// const upload = multer({
//     dest:"src/public/uploads"
// });

/* CHANGES SEEN IN A BLOG ABOUT MULTER */
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'src/public/uploads')
    },
    filename: function (req,file,cb){
        cb(null,Date.now() +".jpg")
    }
});

const upload = multer({storage:storage})

router.post('/', upload.single("file"),(request,response)=>{
    console.log(request.file);
    products.create(request.file,request.body.user,request.body.email, request.body.gender, request.body.product,request.body.description,request.body.price)
        .then(()=>{
            response.send(products);
            console.log("todo bien")
        })
        .catch((err)=>{
            console.error(err);
            response.send(err + " algo salio mal");
        })
});

module.exports = router;