const Model = require("../BBDD/model");

class addProductService{
    constructor(){
        this.Products = [];
    }

    create(file, user,email,gender, product, description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null || gender === null|| price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }
            console.log(file);

            const fullInfo = {
                file: file.filename,
                user: user,
                email: email,
                gender:gender,
                product: product,
                description: description,
                price: price
            }

            resolve( this.Products.push(fullInfo));
            let myProduct = new Model(fullInfo);
            console.log(myProduct)
            myProduct.save();
        });
    }
}

module.exports = addProductService;