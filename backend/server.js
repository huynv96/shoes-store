import express from "express";
import products from './data/Products.js';
import dotvenv from 'dotenv';
import connectDataBase from "./config/MongoDB.js"
dotvenv.config();
connectDataBase();
// LOAD PRODUCT FROM SERVER
const app = express();
app.get("/api/products",(req,res)=>{
    res.json(products)
})
// LOAD SINGLE PRODUCT FROM SERVER
app.get("/api/products/:id",(req,res)=>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})
const PORT = process.env.PORT ||1000;
app.listen(PORT,console.log(`Server running on port ${PORT}`))