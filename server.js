import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import connectDb from './src/db/connectDb.js';



const app=express();
app.use(cors());
dotenv.config();



const port=3000;
app.get('/',(req,res)=>{
    res.send("Hello Buddy! , This is our first page")
})
app.listen(port,()=>{
    connectDb();
    console.log(`server is running at port ${port}`)
});