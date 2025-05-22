const BooksModel = require("../models/book.model")
// model bu Mo'hriddin yani dastavshik tapichka 

const CreateBooks = (req, res) => {

  // bu yerda try  catchdan foydalanishiimdan maqsad aniq  meni shartlarimga mos kelsagina function ishlashi aks holda ishdan to'xtashi uchun ishlatilgan va bu yerda async holda malumotlar alishadi
  try {
    // bizga kelayozgan qiymatlar req(request => so'rov) ichida asosan req.body qismida bo'ladi
    // biz javob berishimiz esa res(response=> javob) qismida bo'ladi
    const {name, author, price, muqova, janr, writedAt , nashr, description, quantity } = req.body
    // keylariga asoslanib destruction qilib ajratib olyapman

    // let name = req.name
    // let author = req.author bu juda yomon usul sababi codelar ko'payadi hotira ortiqcha band bo'lib qoladi

    // heap bu =>  non-primitiv malumotlar saqlanadigan xotira
    // callstack => primitive malumolar saqlanadigan xotira yoki omborxona
    // primitive data typelari :
    // String,
    // Number => 2ni 53chi darajasining-1 idan keyingi qiymatlar big int hisoblanadi,
    // Bigint,
    // null => bu bosh object,
    // undefined => bu esa qiymati yoq data type yoki ozgaruvchi,
    // boolean => rost yoki yolg'on (true, false),
    // Symbol => unique malumootlarni yaratish data typesi


    // bu yerda agar qiymat kelmay qolsa iltimos to'ldiring so'zi yani tekshiruv 

    if(!name|| !author|| !price||!muqova||!janr|| !writedAt || !nashr || !description || !quantity ){
      //agar qaysidir qiymat kelmay qolsa uni to'ldirish shartligini korsatib beradi
     res.status(403).json({error:"Iltimos hamma qiymatlarni to'ldiring"})
     // bu yerda esa response send javobini qayttarmoqda
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

    // bu yerda ushbu objectga hamma qiymatlar yaratib olindi va uni mongodb ga saqlash uchun tayyorlandi
    BooksModel.create(obj)
    // bu yerda .create methodi mongodbga create qilish uchun ishlatilmoqda
    res.status(201).json({message:"Successfully mahsulotni qo'shdingiz"})
    // muvaffaqqiyatli qo'shganimiz haqida habar bermoqda
  } catch (error) {
    res.status(500).json({ error: error.message }); 
    // bu yerda esa har qanday trydan chiqib ketib qolsa qaytarib beradigan hatolik turi
  }
};

module.exports = { CreateBooks };

// bu yerda esa module tashqariga export qilib yuboriladi :)