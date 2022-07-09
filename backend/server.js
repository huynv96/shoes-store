import express from "express";
import products from './data/Products.js';
import dotvenv from 'dotenv';
import connectDataBase from "./config/MongoDB.js"
import ImportData from "./seed/seed.js";
import productRoute from "./routes/ProductRoutes.js";
import { errorHandler } from "./middleware/Error.js";
import userRoute from "./routes/UserRoutes.js";
import orderRoute from "./routes/OrderRoutes.js";


dotvenv.config();
connectDataBase();
// LOAD PRODUCT FROM SERVER
const app = express();
app.use(express.json());
// app.get("/api/products",(req,res)=>{
//     res.json(products)
// })
// LOAD SINGLE PRODUCT FROM SERVER
// 

app.use('/api/import',ImportData);
app.use('/api/products',productRoute);
app.use('/api/users',userRoute);
app.use('/api/orders',orderRoute);
app.use('/api/congfig/paypal',(req,res) =>{res.send(process.env.PAYPAL_CLIENT_SECRET)});
// ERROR HANDLER
app.use(errorHandler);


const PORT = process.env.PORT ||1000;
app.listen(PORT,console.log(`Server running on port ${PORT}`))