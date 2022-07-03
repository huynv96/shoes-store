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
            throw new Error('Invalid login');
        }
    }),
);

//PROFILE
userRoute.get(
    '/profile',
    protect,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
            });
        }
        else{
            res.status(401);
            throw new Error('User Not Found');
        }
    }),
);
export default userRoute;
