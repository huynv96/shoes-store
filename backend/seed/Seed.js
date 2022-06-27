import express from 'express';
import User from '../models/UserModel.js';
import users from '../data/Users.js';

import Product from '../models/ProductModel.js';
import products from '../data/Products.js';

const ImportData = express.Router();
ImportData.post('/user',async(req,res)=>{
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({importUser});
});

ImportData.post('/products',async(req,res)=>{
    await Product.remove({});
    const importProduct = await Product.insertMany(products);
    res.send({importProduct});
});
export default ImportData;