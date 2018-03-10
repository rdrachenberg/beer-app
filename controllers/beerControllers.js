var express = require("express");

var router = express.Router();
var beer = require("../models/beer.js");

// get route -> index
router.get("/", function (req, res) {
    res.redirect("/beer");
});

router.get("/beer", function (req, res) {
    // express callback response by calling beer.selectAllbeer
    beer.all(function (beerData) {
        // wrapper for orm.js that using MySQL query callback will return beer_data, render to index with handlebar
        res.render("index", { beer_data: beerData });
    });
});

// post route -> back to index
router.post("/beer/create", function (req, res) {
    // takes the request object using it as input for buger.addbeer
    beer.create(req.body.beer_name, function (result) {
        // wrapper for orm.js that using MySQL insert callback will return a log to console,
        // render back to index with handle
        console.log(result);
        res.redirect("/");
    });
});

// put route -> back to index
router.put("/beer/:id", function (req, res) {
    beer.update(req.params.id, function (result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
    });
});

module.exports = router;
