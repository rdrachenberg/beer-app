console.log("LOADED BEERS JS")

var breweryDbApiKey = "27be3f3d0eb10fc0eec138e6cbb4b8f8";

// CANHGE TO USER SEARCH INPUT
var userSearch = "orlando";

var queryURL = "http://beermapping.com/webservice/locquery/" + breweryDbApiKey + "/" + userSearch + "&s=json";
 
// Landing page onclick to take display differnt ROUTE to the ratings and out Home page
// $("#HOME BUTTON CLICK ID FORM TIM").on("click", function() {

  
// });


// Search Button Click to then display the user search
$("#test").on("click", function(event) {
	event.preventDefault();
	console.log("CLICK");

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {

      	console.log(response)

        for (i = 0; i < response.length; i++) {
        	
        	// userSearch Brewery Name
        	console.log("NAME: " + response[i].name);

        	// userSearch Brewery Map return
        	console.log("BLOGMAP:" + response[i].blogmap);

        	// userSearch Brewery Rating
        	console.log("OVERALL: " + response[i].overall);

        	// Find More information about this brewery
        	console.log("REVIEWLINK:" + response[i].reviewlink);

        }

      });
});
