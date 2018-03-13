// console.log("LOADED BEERS JS");

var request = require('request');

// // Search Button Click to then display the user search
$("#beerSearchTitle").on("click", function(event) {
	event.preventDefault();
	console.log("CLICKED");
  // get returned info from breweryDbApi
  var base = "http://api.brewerydb.com/v2";
  var beerName = document.getElementById('beerSearchInfo').value;
  var bts = beerName.split(' ').join('_');
  var type = "&type=beer";
  var key = "&key=d9e3c76540e2267dd4f9e09ede879957";
  var search = "/search?q=";
  var fullUrl = base + search + bts + type + key;

  request(fullUrl, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

});








//   // var beerMappingApi = "27be3f3d0eb10fc0eec138e6cbb4b8f8";
  
//   // var userSearch = $("#userBeerSearch").val();

//   // var beerMappingQueryURL = "http://beermapping.com/webservice/locquery/" + beerMappingApi + "/" + userSearch + "&s=json";
//   // var breweryDbURL = "http://api.brewerydb.com/v2/?key=" + breweryDbApi + "/" + userSearch;

//     // $.ajax({
//     //     url: fullUrl,
//     //     method: "GET"
//     //   })
//     //   .done(function(response) {

//     //    console.log(response)

//     //     for (i = 0; i < response.length; i++) {
//           // // userSearch Brewery Name
//           // console.log("NAME: " + response[i].name);

//           // // userSearch Brewery Map return
//           // console.log("BLOGMAP:" + response[i].blogmap);

//           // // userSearch Brewery Rating
//           // console.log("OVERALL: " + response[i].overall);

//           // // Find More information about this brewery
//           // console.log("REVIEWLINK:" + response[i].reviewlink);
          

//     //     }

//     //   });


