"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/getUserByUsername').post((req, resp) => {
    new user_controller_1.UserController().getUserByUsername(req, resp);
});
userRouter.route('/getUserByEmail').post((req, resp) => {
    new user_controller_1.UserController().getUserByEmail(req, resp);
});
userRouter.route('/register').post((req, resp) => {
    new user_controller_1.UserController().register(req, resp);
});
userRouter.route('/changePassword').post((req, resp) => {
    new user_controller_1.UserController().changePassword(req, resp);
});
userRouter.route('/editAdvertiserInfo').post((req, resp) => {
    new user_controller_1.UserController().editAdvertiserInfo(req, resp);
});
userRouter.route('/addToFavourites').post((req, resp) => {
    new user_controller_1.UserController().addToFavourites(req, resp);
});
userRouter.route('/deleteFromFavourites').post((req, resp) => {
    new user_controller_1.UserController().deleteFromFavourites(req, resp);
});
userRouter.route('/getAllUsers').get((req, resp) => {
    new user_controller_1.UserController().getAllUsers(req, resp);
});
userRouter.route('/acceptUser').post((req, resp) => {
    new user_controller_1.UserController().acceptUser(req, resp);
});
userRouter.route('/deleteUser').post((req, resp) => {
    new user_controller_1.UserController().deleteUser(req, resp);
});
userRouter.route('/editUser').post((req, resp) => {
    new user_controller_1.UserController().editUser(req, resp);
});
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map