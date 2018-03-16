console.log("LOADED BEERS JS");

glbBrews = [];

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

          glbBrews = [];
        	for (i = 0; i < response.length; i++) {
            glbBrews[i] = response[i];
          	// userSearch Brewery Name
          	console.log("NAME: " + response[i].name);

          	// userSearch Brewery Map return
          	console.log("BLOGMAP:" + response[i].blogmap);

          	// userSearch Brewery Rating
          	console.log("OVERALL: " + response[i].overall);

          	// Find More information about this brewery
          	console.log("REVIEWLINK:" + response[i].reviewlink);
          
          	var btn = "<center><button type='button' class='btn goldColor' data-number=" + i + " data-toggle='modal' data-target='#breweryInfo' name='"  + response[i].name + "' id=button" + i + ">" + "<h4>" + response[i].name + "</h4>" + "\n" + "</button></center>";
          	// $("<button>").attr('margin', '10');
          	$("#returnedBreweryInfoBtn").append(btn);

            // onclick event to display modal with information on the onclick
            $("#button" + i).on("click", function(e){
              // clear the modal HTML from the ID
              $(".modal-body").html('');
              // console.log($(this).attr('data-number'));
              
              // Appending code to modal title
              console.log(glbBrews[$(this).attr('data-number')].name);
              $(".modal-title").html("<center><h3>" + glbBrews[$(this).attr('data-number')].name + "</h3></center>");

              // appending code to the 
              $(".modal-body").append("<h4>Address:</h4>");
              $(".modal-body").append(glbBrews[$(this).attr('data-number')].street + "<br>" + glbBrews[$(this).attr('data-number')].city + ", " + glbBrews[$(this).attr('data-number')].state + " " + glbBrews[$(this).attr('data-number')].zip);
              $(".modal-body").append("<h4>Phone Number:</h4>" + glbBrews[$(this).attr('data-number')].phone);
              $(".modal-body").append("<h4>Website: </h4>" +" <a href='http://"+ glbBrews[$(this).attr('data-number')].url + "' target=_blank>" + glbBrews[$(this).attr('data-number')].url + "</a>");
              $(".modal-body").append("<h4>Review Link: </h4>" +" <a href='http://"+ glbBrews[$(this).attr('data-number')].reviewlink + "' target=_blank>" + glbBrews[$(this).attr('data-number')].reviewlink + "</a>");
            
          }); 

      }
	});
 	
  }
});



