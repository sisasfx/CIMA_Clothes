const express = require('express');
const router = express.Router();
const Users = require("../services/usersLoginService");

const user = new Users();

router.get('/',(request ,response)=>{
    user.find()
        .then(()=>{
            response.send(user);
        })
        .catch(() =>{
            response.send("Error!")
        })
});

router.get('/:id',(request, response)=>{
    user.findOne(request.params.id)
        .then(() =>{
            response.send(user);
        })
        .catch(() =>{
            response.send("Error!")
        })
});

router.post('/',(request,response)=>{
    let username = request.body.username;
    let email = request.body.email;
    let password = request.body.password;
    user.create(username, email,password)
        .then(()=>{
            response.send("Creado correctamente");
        })
        .catch(()=>{
            response.send("Uoooops error");
        })

})
router.patch('/:id',(request, response)=>{
    user.update(request.params.id, request.body.username,request.body.email,request.body.password)
        .then(()=>{
            response.send(user);
        })
        .catch(() =>{
            response.send("Algo salio mal");
        })
});

router.delete('/:id',(request,response)=>{
    user.delete(request.params.id)
        .then(()=>{
            response.send("Borrado perfectamente");
        })
        .catch(()=>{
            response.send("Error!");
        })
})

module.exports = router;