var breweryDbApiKey = "27be3f3d0eb10fc0eec138e6cbb4b8f8";
var userSearch = "tampa";
var queryURL = "http://beermapping.com/webservice/locquery/" + breweryDbApiKey + "/" + userSearch + "&s=json";
 
// Landing page onclick to take display differnt ROUTE to the ratings and out Home page
$("#HOME BUTTON CLICK ID FORM TIM").on("click", function() {

  
});


// Search Button Click to then display the user search
$("#SEARCH BUTTON CLICK ID FORM TIM").on("click", function() {

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
          
        var results = response.data;

        console.log(response);
       
        // for (var i = 0; i < results.length; i++) {
        //     // test the return
        //     console.log(results[i]);

        //     // display search items in appending to each other based on TIMS code
        //     var resultsTitle = results[i].
        // }

      });
});
