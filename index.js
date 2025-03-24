import express from "express"
const app=express()
const PORT=8888
app.get("/",(req,res)=>{
    res.send("testing")
})
app.get("/products",(req,res)=>{
    res.send("testing")
})
app.listen(PORT,(err)=>{
    if (err) throw err
    console.log(`server is running on ${PORT}`)
})