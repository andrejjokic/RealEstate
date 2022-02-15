"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const estate_controller_1 = require("../controllers/estate.controller");
const estateRouter = express_1.default.Router();
estateRouter.route('/getAllCities').get((req, resp) => {
    new estate_controller_1.EstateController().getAllCities(req, resp);
});
estateRouter.route('/getAllMunicipalities').get((req, resp) => {
    new estate_controller_1.EstateController().getAllMunicipalities(req, resp);
});
estateRouter.route('/getAllLocations').get((req, resp) => {
    new estate_controller_1.EstateController().getAllLocations(req, resp);
});
estateRouter.route('/getAllBuses').get((req, resp) => {
    new estate_controller_1.EstateController().getAllBuses(req, resp);
});
estateRouter.route('/addEstate').post((req, resp) => {
    new estate_controller_1.EstateController().addEstate(req, resp);
});
estateRouter.route('/getAllEstates').get((req, resp) => {
    new estate_controller_1.EstateController().getAllEstates(req, resp);
});
estateRouter.route('/sellEstate').post((req, resp) => {
    new estate_controller_1.EstateController().sellEstate(req, resp);
});
estateRouter.route('/editEstate').post((req, resp) => {
    new estate_controller_1.EstateController().editEstate(req, resp);
});
estateRouter.route('/getAllAgencies').get((req, resp) => {
    new estate_controller_1.EstateController().getAllAgencies(req, resp);
});
exports.default = estateRouter;
//# sourceMappingURL=estate.routes.js.map