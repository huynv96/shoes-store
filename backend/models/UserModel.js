import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please Enter Your Password'],
            minLength: [8, 'Password should be greater than 8 characters'],
            select: false,
        },
        isAdmin: {
            type: Boolean,
            require: true,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

// Compare Password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
const User = mongoose.model('User', userSchema);

export default User;
