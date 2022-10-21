const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//mongodb+srv://cima_admin:cima_admin@cima.etg2l.mongodb.net/CIMA_Clothes?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://cima_admin:cima_admin@cima.etg2l.mongodb.net/CIMA_Clothes',{
    useNewUrlParser:true
});

const Schema = mongoose.Schema;

const mySchema = new Schema({
    identificador: String,
    gender: String
})

const modelSchema = mongoose.model('idDetail', mySchema);

module.exports = modelSchema;