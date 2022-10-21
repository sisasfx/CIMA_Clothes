const Model = require("../BBDD/model");

class kidsProduct{
    constructor() {
        this.kidsProducts = [];
    }

    async find(){
        this.kidsProducts = await Model.find({gender :"kid"});
        return this.kidsProducts;
    }

    async findOne(id){
        this.kidsProducts = await Model.find({_id:id});

        for (let i = 0; i < this.kidsProducts.length ; i++) {
            if (this.kidsProducts[i].id === id) {
                this.kidsProducts = this.kidsProducts[i];
                return this.kidsProducts;
            }
        }
    }

   async update(id, changeUser, changeProduct, changeDescription, changePrice){
        let lista = await Model.find({_id:id});

        lista[0].user = changeUser;
        lista[0].product = changeProduct;
        lista[0].description = changeDescription;
        lista[0].price = changePrice;

        this.kidsProducts = lista;

        const myProduct = new Model(this.kidsProducts[0]);
        await myProduct.save()

        return this.kidsProducts;
    }

    async delete(id){
        await Model.deleteOne({_id:id});
    }
}
module.exports = kidsProduct;