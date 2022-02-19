import { Request, Response } from "express";
import User from '../models/user.model';

export class UserController {
   getUserByUsername = (req: Request, resp: Response) => {
        User.findOne({'username': req.body.username}, (err, user) => {
            if (err) console.log(err)
            else resp.json(user)
        })
   }

   getUserByEmail = (req: Request, resp: Response) => {
        User.findOne({'email': req.body.email}, (err, user) => {
            if (err) console.log(err)
            else resp.json(user)
        })
    }

    register = (req: Request, resp: Response) => {
        User.collection.insertOne(req.body, (err, user) => {
            if (err) console.log(err)
            else resp.json(user)
        })
    }

    changePassword = (req: Request, resp: Response) => {
        User.collection.updateOne({'username': req.body.username}, {$set: {'password': req.body.password}}, (err, user) => {
            if (err) console.log(err)
            else resp.json(user)
        })
    }

    editAdvertiserInfo = (req: Request, resp: Response) => {
        User.collection.updateOne({'username': req.body.username}, {$set: {
            'email': req.body.email,
            "phone": req.body.phone,
            "agency": req.body.agency
        }}, (err, user) => {
            if (err) console.log(err)
            else resp.json(user)
        })
    }

    addToFavourites = (req: Request, resp: Response) => {
        User.collection.updateOne({'username': req.body.username}, {$push: {'favourites': req.body.estate}}, (err, user) => {
            if (err) console.log(err)
            else resp.json(user)
        })
    }

    deleteFromFavourites = (req: Request, resp: Response) => {
        User.collection.updateOne({'username': req.body.username}, {$pull: {'favourites': req.body.estate}}, (err, user) => {
            if (err) console.log(err)
            else resp.json(user)
        })
    }

    getAllUsers = (req: Request, resp: Response) => {
        User.find({}, (err, users) => {
            if (err) console.log(err)
            else resp.json(users);
        })
    }

    acceptUser = (req: Request, resp: Response) => {
        User.collection.updateOne({'username': req.body.username}, {$set: {'state': 'registered'}}, (err, user) => {
            if (err) console.log(err)
            else resp.json(user);
        })
    }

    deleteUser = (req: Request, resp: Response) => {
        User.collection.deleteOne({'username': req.body.username}, (err, user) => {
            if (err) console.log(err)
            else resp.json(user);
        })
    }

    editUser = (req: Request, resp: Response) => {
        User.collection.updateOne({'username': req.body.prevUsername}, {
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
            if (err) console.log(err);
            else resp.json(user);
        });
    }
}