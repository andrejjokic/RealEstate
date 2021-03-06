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
        this.editAdvertiserInfo = (req, resp) => {
            user_model_1.default.collection.updateOne({ 'username': req.body.username }, { $set: {
                    'email': req.body.email,
                    "phone": req.body.phone,
                    "agency": req.body.agency
                } }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    resp.json(user);
            });
        };
        this.addToFavourites = (req, resp) => {
            user_model_1.default.collection.updateOne({ 'username': req.body.username }, { $push: { 'favourites': req.body.estate } }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    resp.json(user);
            });
        };
        this.deleteFromFavourites = (req, resp) => {
            user_model_1.default.collection.updateOne({ 'username': req.body.username }, { $pull: { 'favourites': req.body.estate } }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    resp.json(user);
            });
        };
        this.getAllUsers = (req, resp) => {
            user_model_1.default.find({}, (err, users) => {
                if (err)
                    console.log(err);
                else
                    resp.json(users);
            });
        };
        this.acceptUser = (req, resp) => {
            user_model_1.default.collection.updateOne({ 'username': req.body.username }, { $set: { 'state': 'registered' } }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    resp.json(user);
            });
        };
        this.deleteUser = (req, resp) => {
            user_model_1.default.collection.deleteOne({ 'username': req.body.username }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    resp.json(user);
            });
        };
        this.editUser = (req, resp) => {
            user_model_1.default.collection.updateOne({ 'username': req.body.prevUsername }, {
                $set: {
                    'username': req.body.username,
                    'firstname': req.body.firstname,
                    'lastname': req.body.lastname,
                    'email': req.body.email,
                    'password': req.body.password,
                    'city': req.body.city,
                    'area': req.body.area,
                    'birthday': req.body.birthday,
                    'phone': req.body.phone,
                    'agency': req.body.agency,
                    'license': req.body.license
                }
            }, (err, user) => {
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