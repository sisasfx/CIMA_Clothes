const express = require('express');
const identificador = require("../services/idDetailService");

const id = new identificador();

const router = express.Router();

//get
router.get("/",(request, response)=>{
    id.findId()
        .then(()=>{
            response.send(id)
        })
        .catch(err=>{
            console.log(err);
        })
})

//post
router.post("/",(request, response)=>{
    id.add(request.body.identificador, request.body.gender)
        .then(()=>{
            response.send(id)
        })
        .catch(() =>{
            console.log("Algo va mal id no guardado")
        })
})

module.exports = router;