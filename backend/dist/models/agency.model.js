"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Agency = new Schema({
    name: {
        type: String
    },
    pib: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Agency', Agency, 'agencies');
//# sourceMappingURL=agency.model.js.map