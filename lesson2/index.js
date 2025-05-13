"use strict" // bu strict mode hisoblanib bu qorovul rejimga o'tadi
require("dotenv").config()

console.log(process.env.SARDORBEK);
let filename = process.mainModule.filename
let newsplitrout =filename.split("/")
let path = newsplitrout.at(newsplitrout.length-2)
let sardorbek = process.env.SARDORBEK
console.log(sardorbek);

if(path=="lesson2"){
 console.log("Va nihoyat biz methodlarni qoldan kelganicha unutdik");
}
else{
 console.log("Bugun biz dars o'tmimiz shekilli");
 
}
console.log(path);





console.log("salom");
console.log("salom bolalar");


