const mongoose=require("mongoose");
const User=new mongoose.Schema({
    name:String,
    age:String,
});
module.exports=mongoose.model("shop",User);