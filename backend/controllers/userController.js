import asyncHandler from 'express-async-handler'
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc     Register new User
//@route    POST /api/users
//@access   Pubic
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, secretKey} = req.body;

    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(400);
        throw new Error('User Already exists with this email');
    }

    const user = await User.create({
        name,
        email,
        password,
        secretKey
    });

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error(`Invalid user data`)
    }
});

//@desc     Auth user & get token
//@route    POST /api/users/login
//@access   Pubic
const authUser = asyncHandler(async (req, res) => {
    const {email, password, secretKey} = req.body;

    const user = await User.findOne({email});

    if (secretKey !== user.secretKey){
        res.status(401);
        throw new Error('Invalid Secret Key');
    }

    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw  new Error('Invalid email or password')
    }
});

export {registerUser, authUser};