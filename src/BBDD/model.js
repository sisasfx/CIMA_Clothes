const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//mongodb+srv://cima_admin:cima_admin@cima.etg2l.mongodb.net/CIMA_Clothes?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://cima_admin:cima_admin@cima.etg2l.mongodb.net/CIMA_Clothes',{
    useNewUrlParser:true
});

const Schema = mongoose.Schema;

const mySchema = new Schema({
    file : String,
    user: {
        type:String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    product: {
        type: String,
        require: true
    },
    description: String,
    price: Number,
});

const modelSchema = mongoose.model('Productos', mySchema);

module.exports = modelSchema;