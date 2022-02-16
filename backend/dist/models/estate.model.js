"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Estate = new Schema({
    id: { type: Number },
    name: { type: String },
    type: { type: String },
    city: { type: String },
    municipality: { type: String },
    location: { type: String },
    street: { type: String },
    price: { type: Number },
    area: { type: Number },
    rooms: { type: String },
    floor: { type: Number },
    totalFloors: { type: Number },
    description: { type: String },
    constructionYear: { type: String },
    state: { type: String },
    heating: { type: String },
    parking: { type: Number },
    characteristics: [{ type: String }],
    monthlyFee: { type: Number },
    images: [{ type: String }],
    buses: [{ type: Number }],
    sold: { type: Number },
    lastModified: { type: String },
    advertiserFirstname: { type: String },
    advertiserLastname: { type: String },
    advertiserPhone: { type: String },
    advertiserLicense: { type: String },
    agencyName: { type: String },
    agencyPIB: { type: String },
    agencyCity: { type: String },
    agencyAddress: { type: String },
    agencyPhone: { type: String }
});
exports.default = mongoose_1.default.model("Estate", Estate, "estates");
//# sourceMappingURL=estate.model.js.map