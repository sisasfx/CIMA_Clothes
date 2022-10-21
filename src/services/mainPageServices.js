const Model = require("../BBDD/model");


class AllProducts{
    constructor() {
       this.allProducts = []
    }

    async find(){
     this.allProducts = await Model.find();
    }

  async findMan(){
        const manProd = new ManProducts();
        this.allProducts.push(await manProd.find())
        return this.allProducts;
  }

  async findWoman(){
        const womProd = new WomanProducts();
        this.allProducts.push(await womProd.find());
        return this.allProducts
  }

  async findKids(){
        const kProd = new KidProducts();
        this.allProducts.push(await kProd.find());
        return this.allProducts;
  }

  async delete(id){
        await Model.deleteOne({_id:id});
  }
}

module.exports = AllProducts;
