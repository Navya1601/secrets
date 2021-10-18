const express=require('express');
const ejs=require('ejs');
const app=express();
const mongoose=require('mongoose');
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/",function(req,res){
  res.render("index");
});
app.get("/register",function(req,res){
  res.render("login-register");
});
app.listen(3000,function(){
  console.log("Server is listening at port 3000");
})
