import express from 'express';
import { EstateController } from '../controllers/estate.controller';

const estateRouter = express.Router();

estateRouter.route('/getAllCities').get((req, resp) => {
    new EstateController().getAllCities(req, resp);
})

estateRouter.route('/getAllMunicipalities').get((req, resp) => {
    new EstateController().getAllMunicipalities(req, resp);
})

estateRouter.route('/getAllLocations').get((req, resp) => {
    new EstateController().getAllLocations(req, resp);
})

estateRouter.route('/getAllBuses').get((req, resp) => {
    new EstateController().getAllBuses(req, resp);
})

estateRouter.route('/addEstate').post((req, resp) => {
    new EstateController().addEstate(req, resp);
})

estateRouter.route('/getAllEstates').get((req, resp) => {
    new EstateController().getAllEstates(req, resp);
})

estateRouter.route('/sellEstate').post((req, resp) => {
    new EstateController().sellEstate(req, resp);
})

estateRouter.route('/editEstate').post((req, resp) => {
    new EstateController().editEstate(req, resp);
})

export default estateRouter;