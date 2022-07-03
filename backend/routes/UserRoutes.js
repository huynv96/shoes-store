import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/UserModel.js';
import generateToken from '../ultils/generateToken.js';
import protect from '../middleware/AuthMiddleware.js';
const userRoute = express.Router();

//LOGIN
userRoute.post(
    '/login',
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        if (user && (await user.comparePassword(password))) {
            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                createdAt: user.createdAt,
            });
        } else {
            res.status(401);
            throw new Error('Invalid Email or Password');
        }
    }),
);

//PROFILE
userRoute.get(
    '/profile',
    protect,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id)
        if(user){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
            });
        }
        else{
            res.status(404);
            throw new Error('User Not Found');
        }
    }),
);

//REGISTER
userRoute.post(
    '/',
    asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        }
        const user = await User.create({
            name,
            email,
            password,
        });
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                createdAt: user.createdAt,
            });
        } else {
            res.status(400);
            throw new Error('Invalid User Data');
        }
    }),
);

//UPDATE USER
userRoute.put(
    '/profile',
    protect,
    asyncHandler(async (req, res) => {
        
        const user = await User.findById(req.user._id).select('+password');
        console.log(req.body.password);
        if(user){
            user.name = req.body.name || userRoute.name
            user.email = req.body.email || userRoute.email
            if(req.body.password){
                user.password = req.body.password;
            }
            const updateUser = await user.save();
            res.json({
                _id: updateUser._id,
                name: updateUser.name,
                email: updateUser.email,
                isAdmin: updateUser.isAdmin,
                token: generateToken(updateUser._id),
                createdAt: updateUser.createdAt,
            })
        }
        else{
            res.status(404);
            throw new Error('User not found');
        }
    }),
);
export default userRoute;
