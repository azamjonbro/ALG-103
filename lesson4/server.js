const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config()

const token = process.env.BOTTOKEN

let  bot = new TelegramBot(token,{polling:true})

let randomNumber
function random  (){
 randomNumber= Math.floor(Math.random()*10)
}

bot.on('message',(msg)=>{
 let chatID = msg.chat.id
 if(msg.text=="/start"){
  bot.sendMessage(chatID, `Assalomu alaykum <b><i>${msg.from.first_name}</i></b>, Bizdan nima xizmat shef`,
  {
   parse_mode: "HTML",
   reply_markup:{
    keyboard:[
     [
      {text:"📦 Mahsulotlar",callback_data:"product"},
      {text:"🎉 Mahsulotlaringiz",callback_data:"shop"}

     ],
     [
      {text:"🫀 Hisob",callback_data:"xistory"},
      {text:"❤️‍🩹 Tarix",callback_data:"data"}
     ],
     [
      {text:"O'yin o'ynash", callback_data:"o'yin"}
     ],
    ],resize_keyboard:true
   }
  }
 )
 }
 else if(msg.text =="O'yin o'ynash"){
  random()
  bot.sendMessage(chatID, "Hozir bir son o'ylayman siz uni topasiz")
  console.log(randomNumber);
 }
 else if(msg.text== randomNumber){
  bot.sendMessage(chatID,"Og'a sizdan zo'ri yo'q")
 }
 else if(msg.text !== randomNumber){
  bot.sendMessage(chatID,"Og'a meni aldamang")
 }

})
