import express from "express";
import products from './data/Products.js';

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
app.listen(5000,console.log("server running...."))