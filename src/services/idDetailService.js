const Model = require("../BBDD/idDetail");

class idProduct{
    constructor() {
        this.idProduct = [];
    }

    async findId(){
        this.idProduct = await Model.find();
        await Model.deleteMany();
        return this.idProduct;
    }

     add(id, gender){
        return new Promise((resolve, reject)=>{
            if(id === null){
                return reject("No hay id");
            }
            const info = {
                identificador: id,
                gender: gender
            }

            resolve(this.idProduct.push(id));
            const myId = new Model(info);
            myId.save()
            console.log(myId);
        })
    }
}

module.exports = idProduct;