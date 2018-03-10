
var breweryDbApiKey = a33c19bd014beef6a399d2811d6c62c3;

// Query to return multiple location serches to display on Tims Beer HTML div
var location = $('TIM FORM ID NAME FOR SEARCH).val();
var queryURL = "http://beermapping.com/webservice/locquery/API_KEY/" + location + breweryDbApiKey;

// Home Click to show Beer Interactions/Ratings HTML
$("TIM ID FOR HOME BUTTON").on("click", function(){

	// Run a code to display the Beer ratings/ Interactions HTML
	
});





// Search button to HTML AJAX Call
$("TIM ID FOR SEARCH BUTTON").on("click", function(){
	$.ajax({
  		url: queryURL,
  		method: "GET"
		}).done(function(response) {
    		
    		var results = response.data;

    		for (var i = 0; i < results.length; i++) {
      		
      		// display the location to the html form tims code

    		}
  		});		
});

