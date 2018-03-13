var db = require("../models");
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('5e42197c1955ab50b208c667777a5993');

module.exports = function(app) {
  app.get("/api/beer", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Beer.findAll({
      include: [db.Post],
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  app.get("/api/beer/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    // brewdb.beer.getById("avMkil", {}, callback);
    // callback = JSON.parse(body);
    db.Beer.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbBeer) {
      // profile = JSON.parse(body);
      res.json(dbBeer);
    });
       
  });

  app.post("/api/beer", function(req, res) {
    db.Beer.create(req.body).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  app.delete("/api/beer/:id", function(req, res) {
    db.Beer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

};
