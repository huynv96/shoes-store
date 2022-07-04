import express, { request } from 'express';
import asyncHandler from 'express-async-handler';
import protect from '../middleware/AuthMiddleware.js';
import Order from './../models/OrderModel.js';
const orderRoute = express.Router();

//ORDER
orderRoute.post(
    '/',
    protect,
    asyncHandler(async (req, res) => {
        const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } =
            req.body;
            
        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error('No order items');
            return;
        } else {
            const order = new Order({
                user: req.user._id,
                orderItems: req.body.orderItems,
                shippingAddress: req.body.shippingAddress || orderRoute.shippingAddress,
                paymentMethod: req.body.paymentMethod || orderRoute.paymentMethod,
                itemsPrice: req.body.itemsPrice || orderRoute.itemsPrice,
                taxPrice: req.body.taxPrice || orderRoute.taxPrice,
                shippingPrice: req.body.shippingPrice || orderRoute.shippingPrice,
                totalPrice: req.body.totalPrice || orderRoute.totalPrice,
            });
            console.log(order)
            // const order = new Order({
            //     user:req.user._id,
            //     orderItems,                
            //     shippingAddress,
            //     paymentMethod,
            //     itemsPrice,
            //     taxPrice,
            //     shippingPrice,
            //     totalPrice,
            // });
            
            const createOrder = await order.save();
            res.status(201).json(createOrder);
        }
    }),
);


export default orderRoute;
