const Model = require("../BBDD/model");

class WomanProducts{
    constructor() {
        this.womanProducts = [];
    }

  /*  create(user, product,gender, description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null ||price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }
            const id = this.womanProducts.length + 1
            const fullInfo = {
                id : id,
                user: user,
                gender: gender,
                product: product,
                description: description,
                price: price
            }

            resolve( this.womanProducts.push(fullInfo));
            const myProduct = new Model(fullInfo);
            myProduct.save();
        });
    }*/

    async find(){
        this.womanProducts = await Model.find({gender:"woman"});

        return this.womanProducts;
    }

    async findOne(id){
        this.womanProducts = await Model.find({_id:id});

        for (let i = 0; i < this.womanProducts.length ; i++) {
            if (this.womanProducts[i].id === id ) {
                this.womanProducts = this.womanProducts[i];
                return this.womanProducts;
            }
        }
    }

    async update(id,changeUser, changeProduct, changeDescription, changePrice){
        let lista = await Model.find({_id:id});
        lista[0].user = changeUser;
        lista[0].product = changeProduct;
        lista[0].description = changeDescription;
        lista[0].price = changePrice;

        this.womanProducts = lista;

        const myProduct = new Model(this.womanProducts[0]);
        await myProduct.save()

        return this.womanProducts;
    }

    async delete(id){
        await Model.deleteOne({_id: id});
    }
}
module.exports = WomanProducts;