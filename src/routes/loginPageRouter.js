const express = require('express');
const router = express.Router();
const Login = require("../services/loginPageService");

const log = new Login();

router.post('/',(request,response)=>{

    log.findOne(request.body.username,request.body.password)
        .then((res) =>{
            response.send(res);
        })
        .catch(() =>{
            response.send("Error del catch");
        })
})

module.exports = router;