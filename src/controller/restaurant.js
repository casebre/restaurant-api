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

        restaurant.save(err => {
            if(err) {
                res.send(err);
            }

            res.json({ message: "Restaurant saved successfully" });
        });
    });

    api.get('/all', (req, res) => {
        // .find({}) -> no filters
        Restaurant.find({}, (err, restaurants) => {
            if(err) {
                res.send(err);
            } else {
                res.json(restaurants);
            }
        });
    });

    api.get('/:id', (req, res) => {
        // .find({}) -> no filters
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if(err) {
                res.send(err);
            } else {
                res.json(restaurant);
            }
        });
    });

    api.put('/:id', (req, res) => {
        // .find({}) -> no filters
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if(err) {
                res.send(err);
            } else {
                restaurant.name = req.body.name;
                restaurant.style = req.body.style;

                restaurant.save(err => {
                    if(err) {
                        res.send(err);
                    } else {
                        res.json({message: "Restaurant updated successfully!"});
                    }
                });
            }
        });
    });

    return api;
}
