import express from 'express'
import {authUser, registerUser} from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.route('/login').post(authUser);
userRouter.route('/').post(registerUser);

export default userRouter;