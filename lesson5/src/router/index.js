const { CreateBooks } = require("../controllers/books.controller");
// bu yerda bitta crate uchun function yozlgan va uni bu yerga chaqirib qoyilgan
const express = require("express");

const router = express.Router();

router.post("/create", CreateBooks); // bu yerda qachonki
// htt://localhost:3500/api/books/create manziliga post methodi kelsagina createBook function ishga tushadi hatoki get kelib qolsa ham ishlamaydi

module.exports = router; // bu tashqariga export qilishning yangi usuli


// export default biz back end codelarni bunday holda export qila olmaymiz shuning uchun biz module.export holda export qilamiz
