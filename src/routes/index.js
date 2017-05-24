import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import restaurant from '../controller/restaurant'

let router = express();

//connect to db
initializeDb(db => {
    // internal middleware
    router.use(middleware({config, db}));

    //api routes v1
    // restaurant meant to be a controller (like MVC)
    router.use('/restaurant', restaurant({ config, db }));
});

export default router;
