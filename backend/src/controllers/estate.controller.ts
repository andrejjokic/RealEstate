import { Request, Response } from "express";
import Estate from '../models/estate.model';
import City from '../models/city.model';
import Municipality from '../models/municipality.model';
import Location from '../models/location.model';
import Bus from '../models/bus.model';
import Agency from '../models/agency.model';

export class EstateController {
    getAllCities = (req: Request, resp: Response) => {
        City.find({}, (err, cities) => {
            if (err) console.log(err);
            else resp.json(cities);
        })
    }

    getAllMunicipalities = (req: Request, resp: Response) => {
        Municipality.find({}, (err, municipalities) => {
            if (err) console.log(err);
            else resp.json(municipalities);
        })
    }

    getAllLocations = (req: Request, resp: Response) => {
        Location.find({}, (err, locations) => {
            if (err) console.log(err);
            else resp.json(locations);
        })
    }

    getAllBuses = (req: Request, resp: Response) => {
        Bus.find({}, (err, buses) => {
            if (err) console.log(err);
            else resp.json(buses);
        })
    }

    addEstate = (req: Request, resp: Response) => {
        Estate.findOne({}).sort({'id': 'desc'}).limit(1).exec((err, estate) => {
            req.body.id = estate ? estate.toObject().id + 1 : 1;

            Estate.collection.insertOne(req.body, (err, estate) => {
                if (err) console.log(err);
                else resp.json(estate);
            })

        });
    }

    getAllEstates = (req: Request, resp: Response) => {
        Estate.find({}, (err, estates) => {
            if (err) console.log(err);
            else resp.json(estates);
        })
    }

    sellEstate = (req: Request, resp: Response) => {
        Estate.collection.updateOne({id: req.body.id}, {$set: {'sold': 1}}, (err, estate) => {
            if (err) console.log(err);
            else resp.json(estate);
        })
    }

    editEstate = (req: Request, resp: Response) => {
        Estate.collection.updateOne({id: req.body.id}, {
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
            if (err) console.log(err);
            else resp.json(estate);
        });
    }

    getAllAgencies = (req: Request, resp: Response) => {
        Agency.find({}, (err, agencies) => {
            if (err) console.log(err);
            else resp.json(agencies);
        })
    }

    addAgency = (req: Request, resp: Response) => {
        Agency.collection.insertOne(req.body, (err, agency) => {
            if (err) console.log(err);
            else resp.json(agency);
        })
    }
}