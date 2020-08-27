const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const authR=require('./route/router')
const postRoute=require('./route/post')
require('dotenv').config();

const app=express();

app.use(cors());


mongoose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true,
        useUnifiedTopology:true 
    
    } ,()=>
     console.log("connected")
);
app.use(express.json())
app.use('/api/user',authR);
app.use('/api/post',postRoute);
const Port=process.env.Port || 5000;

app.listen(Port,()=>{
    console.log("server is running");
})

