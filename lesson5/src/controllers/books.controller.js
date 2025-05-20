const BooksModel = require("../models/book.model")
const CreateBooks = (req, res) => {
  try {
    console.log(req.body);
    const {name, author, price, muqova, janr, writedAt , nashr, description, quantity } = req.body

    if(!name|| !author|| !price||!muqova||!janr|| !writedAt || !nashr || !description || !quantity ){
     res.status(403).json({error:"Iltimos hamma qiymatlarni to'ldiring"})
    }
    const obj = {
     name,
     description,
     price,
     author, 
     muqova,
     janr, 
     writedAt,
     nashr, 
     quantity
    }
    BooksModel.create(obj)
    res.status(201).json({message:"Successfully mahsulotni qo'shdingiz"})
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

module.exports = { CreateBooks };