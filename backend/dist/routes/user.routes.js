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
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map