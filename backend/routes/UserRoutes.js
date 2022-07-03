import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';

const userRoute = express.Router();

//LOGIN
userRoute.post(
    '/login',
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({email}).select("+password");
        console.log(user);
        if (user && (await user.comparePassword(password))) {
            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: null,
                createdAt: user.createdAt,
            });
        }
        else {
            res.status(401);
            throw new Error('Invalid login');
        }
    })
)

export default userRoute;
