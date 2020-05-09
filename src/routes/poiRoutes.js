const express = require('express');
const debug = require('debug')('app:poiRoutes');

const poiRouter = express.Router();

function router() {
    poiRouter.route('/')
        .get((req, res) => {
            debug('poiRouter...');
            res.redirect('https://maps.googleapis.com/maps/api/place/textsearch/json?query=SuraKoreanRestaurant&key=AIzaSyCdj1_BDkG85qRAPlY9L93f4DVV4EQ5DOQ');
        });
    return poiRouter;
}

module.exports = router();
