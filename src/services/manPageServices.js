const Model = require("../BBDD/model");


class manProducts{
    constructor() {
        this.manProducts = [];
    }
    async find(){
        this.manProducts = await Model.find({gender:"man"});
        return this.manProducts;
    }

   async findOne(id){
        this.manProducts = await Model.find({_id:id});

       for (let i = 0; i < this.manProducts.length ; i++) {
           if (this.manProducts[i].id === id) {
               this.manProducts = this.manProducts[i];
               return this.manProducts;
           }
       }

    }

    async update(id, changeUser, changeProduct, changeDescription, changePrice){
        let lista = await Model.find({_id:id});



        lista[0].user = changeUser;
        lista[0].product = changeProduct;
        lista[0].description = changeDescription;
        lista[0].price = changePrice;

        this.manProducts = lista;

        const myProduct = new Model(this.manProducts[0]);
        await myProduct.save()

        return this.manProducts;
    }

   async delete(id){
     await Model.deleteOne({_id: id});

    }
}

module.exports = manProducts;