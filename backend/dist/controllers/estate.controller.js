"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstateController = void 0;
const estate_model_1 = __importDefault(require("../models/estate.model"));
const city_model_1 = __importDefault(require("../models/city.model"));
const municipality_model_1 = __importDefault(require("../models/municipality.model"));
const location_model_1 = __importDefault(require("../models/location.model"));
const bus_model_1 = __importDefault(require("../models/bus.model"));
const agency_model_1 = __importDefault(require("../models/agency.model"));
class EstateController {
    constructor() {
        this.getAllCities = (req, resp) => {
            city_model_1.default.find({}, (err, cities) => {
                if (err)
                    console.log(err);
                else
                    resp.json(cities);
            });
        };
        this.getAllMunicipalities = (req, resp) => {
            municipality_model_1.default.find({}, (err, municipalities) => {
                if (err)
                    console.log(err);
                else
                    resp.json(municipalities);
            });
        };
        this.getAllLocations = (req, resp) => {
            location_model_1.default.find({}, (err, locations) => {
                if (err)
                    console.log(err);
                else
                    resp.json(locations);
            });
        };
        this.getAllBuses = (req, resp) => {
            bus_model_1.default.find({}, (err, buses) => {
                if (err)
                    console.log(err);
                else
                    resp.json(buses);
            });
        };
        this.addEstate = (req, resp) => {
            estate_model_1.default.findOne({}).sort({ 'id': 'desc' }).limit(1).exec((err, estate) => {
                req.body.id = estate ? estate.toObject().id + 1 : 1;
                estate_model_1.default.collection.insertOne(req.body, (err, estate) => {
                    if (err)
                        console.log(err);
                    else
                        resp.json(estate);
                });
            });
        };
        this.getAllEstates = (req, resp) => {
            estate_model_1.default.find({}, (err, estates) => {
                if (err)
                    console.log(err);
                else
                    resp.json(estates);
            });
        };
        this.sellEstate = (req, resp) => {
            estate_model_1.default.collection.updateOne({ id: req.body.id }, { $set: { 'sold': 1 } }, (err, estate) => {
                if (err)
                    console.log(err);
                else
                    resp.json(estate);
            });
        };
        this.editEstate = (req, resp) => {
            estate_model_1.default.collection.updateOne({ id: req.body.id }, {
                $set: {
                    'type': req.body.type,
                    'name': req.body.name,
                    'city': req.body.city,
                    'municipality': req.body.municipality,
                    'location': req.body.location,
                    'street': req.body.street,
                    'area': req.body.area,
                    'rooms': req.body.rooms,
                    'constructionYear': req.body.constructionYear,
                    'state': req.body.state,
                    'heating': req.body.heating,
                    'floor': req.body.floor,
                    'totalFloors': req.body.totalFloors,
                    'parking': req.body.parking,
                    'monthlyFee': req.body.monthlyFee,
                    'price': req.body.price,
                    'description': req.body.description,
                    'characteristics': req.body.characteristics,
                    'buses': req.body.buses,
                    'lastModified': req.body.lastModified
                }
            }, (err, estate) => {
                if (err)
                    console.log(err);
                else
                    resp.json(estate);
            });
        };
        this.getAllAgencies = (req, resp) => {
            agency_model_1.default.find({}, (err, agencies) => {
                if (err)
                    console.log(err);
                else
                    resp.json(agencies);
            });
        };
        this.addAgency = (req, resp) => {
            agency_model_1.default.collection.insertOne(req.body, (err, agency) => {
                if (err)
                    console.log(err);
                else
                    resp.json(agency);
            });
        };
    }
}
exports.EstateController = EstateController;
//# sourceMappingURL=estate.controller.js.map