import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let restaurantSchema = new Schema({
    name: String,
    style: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
