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
}