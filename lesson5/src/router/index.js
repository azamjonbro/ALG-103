const { CreateBooks } = require("../controllers/books.controller");
const express = require("express");

const router = express.Router();

router.post("/create", CreateBooks); // Bu yerda funksiya kerak

module.exports = router;
