console.log("LOADED BEERS JS");

// // Search Button Click to then display the user search
$("#breweryMappingBtn").on("click", function(event) {
	event.preventDefault();
	console.log("CLICKED");
	$("#returnedBreweryInfoBtn").html('');
  	
  	var userSearch = $("#brewerySearchInfo").val();
  	var beerMappingApi = "27be3f3d0eb10fc0eec138e6cbb4b8f8";
	var beerMappingQueryURL = "http://beermapping.com/webservice/locquery/" + beerMappingApi + "/" + userSearch + "&s=json";

	if (userSearch == ""){
		console.log("NO SEARCH");
	}else{
		$.ajax({
    	url: beerMappingQueryURL,
    	method: "GET"
  		})
      	.done(function(response) {

       		console.log(response);

        	for (i = 0; i < response.length; i++) {
          	// userSearch Brewery Name
          	console.log("NAME: " + response[i].name);

          	// userSearch Brewery Map return
          	console.log("BLOGMAP:" + response[i].blogmap);

          	// userSearch Brewery Rating
          	console.log("OVERALL: " + response[i].overall);

          	// Find More information about this brewery
          	console.log("REVIEWLINK:" + response[i].reviewlink);
          
          	var btn = "<center><button id=button" + i + ">"+ "<h4>" + response[i].name + "</h4>" + "\n" + "</button></center>";
          	$("<button>").attr('margin', '10');
          	$("#returnedBreweryInfoBtn").append(btn);
          	}

          	// for (k = 0; k < response.length; k++){
          		
          	// 	$("#button" + k).on("click", function(e){
          			
          	// 	})
          	// }
        // }

      });
	}
 	
});








;

//   // var breweryDbURL = "http://api.brewerydb.com/v2/?key=" + breweryDbApi + "/" + userSearch;




