// js typelari ikkita 
// 1- commonjs bu es6 dan oldin ishlatilgan import qilish va ishlatish usuli hisoblanadi
// 2- module bu esa es6 dan keyin ishlatiayotgan keng tarqalgan import qilish va ishlatish usuli

// ammo bizga hozirgacha qulay bolib kelgan usul bu commonjs

const express = require("express")

require("dotenv").config()


const app = express();
app.get("/",(req,res)=>{
 // console.log(req, res);
})
app.post("/products",(req, res)=>{
 console.log(req.body);
})
//portni tavsiya qilinadi  3000 chi portdan 9999 gacha yozishingiz tavsiya qilinadi
app.listen(process.env.PORT||3000,()=>{
 console.log(`server ishga tushdi ${process.env.PORT||3000}`);
})
//CRUD

// C -> create -> post
// R -> read -> get
// U -> update -> put
// D -> delete -> delete