import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Bus = new Schema({
    city: { type: String },
    buses: [{ type: Number }]
})

export default mongoose.model('Bus', Bus, 'buses');