const db = require("../models");

module.exports = {

    add: function (req, res) {
        db.Playground
            .create({
                name: 'Test',
                lat: 29.7933554,
                lng: -95.41327129999999,
                outdoor: true,
                free: true,
                items: {
                    slides: true,
                    swings: {
                        exist: true,
                        infant: false
                    },
                    crafts: true,
                    games: true,
                    climbing: true,
                    splashpad: true
                }
            })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    findInBounds: function (req, res) {
        console.log(req.body)
        db.Playground.find({lat: {$lte:req.body.north, $gte:req.body.south}, lng: {$lte:req.body.east, $gte:req.body.west}})
        .then(data =>res.json(data))
    }
};