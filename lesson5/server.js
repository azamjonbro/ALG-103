// express o'zgaruvchisiga kutubxonadan kelgan functionlarni tenglab oldim
const express = require("express"); // commonjs bu yuklab olish va chaqirishni eski usuli 

// bu global object sifatida elon qilib qoyildi endi buni ishlatish uchun qasyidir o'zgaruvchiga tenglb function scopesi bilan ishlatib yuborish kerak
const mongoose = require("mongoose");
// bu mongoose mongodb ulanish uhcun va uni ichiga o'zgaruvchilar qo'shish uchun ishlatiladigan kutubhona 
// buni yuklab olish uchun npm i mongoose commandini yozib qoyish kerak
require("dotenv").config();
// bu dotenv kutubonasi hisoblanib uni esa npm i dotenv orqali yuklab olamiz va .config() bu process oqishi uchun to'g'rilab beradi
const app = express();

// tepada aytayotganimizdek expressni bitta ozgaruvchifa o'rab uni ishga tushrib yhubordik

const router = require("./src/router")
// router bu boshqaruv paneli hisoblanib uni biz bookni qaysi sahifadan request va responseni qabul qilishimizni aniqlash uchun  ishlatild

app.use(express.json());
// bu esa express.json() bizga kelgan har qanday requestni json yani odamlar o'qiy oladigan tilga aylantirib berish uchun hizmat qiladi app.use esa bundan foydalan buyrug'i
app.use("/api/books", router)
// bu yerda esa http://localhost:3500/api/books kelib qolsa bizga routerni ishlatib yuborishni buyurildi


console.log(process.env.PORT);


mongoose
  .connect(process.env.MONGO_URI) // bu yerda mongodb ni qaysidir db addressiga connection qilish kutilmoqda agar then da qiymat kelsa bizga true javob qaytib server ishga tushadi
  .then(() => {
   console.log("Mongodbga ulandi");
    app.listen(process.env.PORT, () => {
      console.log("server ishga tushdi http://localhost:" + process.env.PORT);
    });
  });
// keyuigi jsda esa mongodbga connection qilishni biz bitta config.js filega olib chiqib ketamiz.