import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Municipality = new Schema({
    city: { type: String },
    name: { type: String }
})

export default mongoose.model('Municipality', Municipality, 'municipalities');