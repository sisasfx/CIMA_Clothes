//Import mainPageServices to use it's logic
const express = require("express");
const path = require("path");
const fs = require('fs');

//Route to module our API logic
const router = express.Router();

router.get("/:id",(request, response)=>{
    let file = request.params.id;
    let path_file = "src/public/uploads/"+file+".jpg";
    console.log(file);
    console.log(path_file)
    fs.exists(path_file, (exists => {
        if(exists){
            response.sendFile(path.resolve(path_file));
        }
    }))
});

module.exports = router;