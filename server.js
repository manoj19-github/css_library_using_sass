const express=require("express")
const app=express()
const path=require("path")
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
  res.render(path.join(__dirname,"public"))
})
app.get("/container",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/container.html"))
})
app.get("/home",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/homePage.html"))
})
app.listen(4000,()=>console.log(`server is listening`))
