import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default({config, db}) => {
    let api = Router();

    // v1/restaurant/add
    api.post('/add', (req, res) => {
        let restaurant = new Restaurant();
        restaurant.name = req.body.name;
        restaurant.style = req.body.style;

        console.log("name: " + restaurant.name);
        console.log("name2: " + req.body.name);

        console.log("style: " + req.body.style);
        restaurant.save(err => {
            if(err) {
                res.send(err);
            }

            res.json({ message: "Restaurant saved successfully" });
        });
    });

    return api;
}
