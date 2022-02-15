import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/getUserByUsername').post((req, resp) => {
    new UserController().getUserByUsername(req, resp)
})

userRouter.route('/getUserByEmail').post((req, resp) => {
    new UserController().getUserByEmail(req, resp)
})

userRouter.route('/register').post((req, resp) => {
    new UserController().register(req, resp)
})

userRouter.route('/changePassword').post((req, resp) => {
    new UserController().changePassword(req, resp)
})

userRouter.route('/editAdvertiserInfo').post((req, resp) => {
    new UserController().editAdvertiserInfo(req, resp)
})

export default userRouter;