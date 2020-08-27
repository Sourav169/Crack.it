const express=require('express');
const product=require('./productlist')

const app=express();
app.get('/api/product',(req,res)=>{
    res.send(product.product);
})
const Port=process.env.Port || 8000;
app.listen(Port,()=>{
    console.log("server is running");
})