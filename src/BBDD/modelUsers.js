const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://cima_admin:cima_admin@cima.etg2l.mongodb.net/CIMA_Clothes',{
    useNewUrlParser:true
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

const modelSchema = mongoose.model('Users',userSchema);

module.exports = modelSchema;