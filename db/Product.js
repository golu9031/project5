const mongoose=require('mongoose');
const productSchema= new mongoose.Schema({
    name:String,
    age:String,
    sex:String,
    userId:String,
    address:String
});
module.exports = mongoose.model("products",productSchema);