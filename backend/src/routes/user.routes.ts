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

userRouter.route('/addToFavourites').post((req, resp) => {
    new UserController().addToFavourites(req, resp)
})

userRouter.route('/deleteFromFavourites').post((req, resp) => {
    new UserController().deleteFromFavourites(req, resp)
})

userRouter.route('/getAllUsers').get((req, resp) => {
    new UserController().getAllUsers(req, resp)
})

userRouter.route('/acceptUser').post((req, resp) => {
    new UserController().acceptUser(req, resp)
})

userRouter.route('/deleteUser').post((req, resp) => {
    new UserController().deleteUser(req, resp)
})

userRouter.route('/editUser').post((req, resp) => {
    new UserController().editUser(req, resp)
})

export default userRouter;