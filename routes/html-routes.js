// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads landingPage.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landingPage.html"));
  });

  // search route loads search.html
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  // results route loads results.html
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
    // res.render("index");
  });
};
