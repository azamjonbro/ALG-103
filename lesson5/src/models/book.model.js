const mongoose = require("mongoose")

//bu mongooseni yana qaytandan chaqirish
// bu yerda yangi model yaratish uchun
const BooksSchema  = new mongoose.Schema({
 name:{
  require:true,// qatiy degani va yozilishi shart degani :)
  default:"Not Found 404", //agar qiymat kelmay qolsa boshlang'ich qiymat chiqadi :)
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

module.exports = mongoose.model("Books",BooksSchema) // mongodbdagi modelga nom berib biratolasi tashqariga export qilib yuborrganman