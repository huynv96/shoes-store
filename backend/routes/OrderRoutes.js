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
            console.log(req.body);
            const order = new Order({
                user: req.user._id,
                orderItems,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice,
            });

            const createOrder = await order.save();
            res.status(201).json(createOrder);
        }
    }),
);


// USER ORDERS
orderRoute.get(
    '/',
    protect,
    asyncHandler(async (req, res) => {
        const order = await Order.find({user: req.user._id}).sort({_id:-1})
        res.json(order);                  
    })
);

//GET ORDER BY ID
orderRoute.get(
    '/:id',
    protect,
    asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id).populate(
            'user',
            'name email',
        );
        
        if(order){
            res.json(order);
        }
        else{
            res.status(404);
            throw new Error('Order not found');
        }
            
        
    })
);

//ORDER IS PAID
orderRoute.put(
    '/:id/pay',
    protect,
    asyncHandler(async (req, res) => {
        if(order){
            order.isPaid = true;
            order.paidAt = Date.now;
            orderRoute.paymentResult ={
                id: req.body.id,
                status: req.body.status,   
                update_time: req.body.update_time, 
                email_address: req.body.email_address, 
            };

            const updateOrder = (req, res) => { return stringify(req, res); };  //
        }
        else{
            res.status(404);
            throw new Error('Order not found');
        }
            
        
    })
);
export default orderRoute;
