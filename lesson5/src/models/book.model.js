const mongoose = require("mongoose")

const BooksSchema  = new mongoose.Schema({
 name:{
  require:true,
  default:"",
  type:String
 },
 description:String,
 author:String,
 writedAt:String,
 janr:Array,
 price:{
  default:0,
  type:Number
 },
 Muqova:String,
 Nashr:String,
 quantity:Number
})

module.exports = mongoose.model("Books",BooksSchema)

