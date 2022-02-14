"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
class UserController {
    constructor() {
        this.getUserByUsername = (req, resp) => {
            user_model_1.default.findOne({ 'username': req.body.username }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    resp.json(user);
            });
        };
        this.getUserByEmail = (req, resp) => {
            user_model_1.default.findOne({ 'email': req.body.email }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    resp.json(user);
            });
        };
        this.register = (req, resp) => {
            user_model_1.default.collection.insertOne(req.body, (err, user) => {
                if (err)
                    console.log(err);
                else
                    resp.json(user);
            });
        };
        this.changePassword = (req, resp) => {
            user_model_1.default.collection.updateOne({ 'username': req.body.username }, { $set: { 'password': req.body.password } }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    resp.json(user);
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map