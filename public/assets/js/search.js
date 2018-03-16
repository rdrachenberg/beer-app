//google maps API code
function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 28.538336, lng: -81.379234},
      zoom: 13,
      mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  } //end of google maps funtion
  
  
  $(function() { //document ready

var userFromLandingPage = localStorage.getItem("storedFromLandingPage")
 
var welcomeUser = userFromLandingPage;

var welcomeUserDiv = $('<div>');
var welcomeUserGreeting = $('<h1>');




welcomeUserDiv.addClass("loggedInUser");
    console.log("loggedInUser");
$('#welcomeUser').append(welcomeUserDiv);
// welcomeUserDiv.append(userFromLandingPage);
welcomeUserDiv.append(welcomeUserGreeting);
welcomeUserGreeting.append('Welcome ' + userFromLandingPage);

$('#ratingName').val(userFromLandingPage);

  
$('#ratingSubmitButton').on("click", function(event){
    event.preventDefault();
    var userNameRating = $('.loggedInUser').text();
    var userBeerRating = $('#ratingBeer').val().trim();
    var userBreweryRating = $('#ratingBrewery').val().trim();
    var userStarRating = $('#ratingStar').val().trim();
    var userCommentRating = $('#ratingComment').val().trim();

    var comment = {
        'UserName': userFromLandingPage,
        'Beer': userBeerRating,
        'Brewery': userBreweryRating,
        'Stars' : userStarRating,
        'Comment':userCommentRating
    }

    $.post('/api/posts', comment), function(data){
        console.log(data);
       };
       
    $.get('/api/posts').then(function(commentData){
         console.log(commentData);
         console.log(commentData.Brewery);
         for (var i = 0; i < commentData.length; i++){
          console.log(commentData)
          var commentSection = $('<div>');
          commentSection.addClass('col-md-3 commentSectionClass hoverable');
          var userCommentName = $('<p>');
          var userCommentBeer = $('<p>');
          var userCommentBrewery = $('<p>');
          var userCommentStars = $('<p>');
          var userCommentComment = $('<p>');
          userCommentName.append("Name: " + commentData[i].UserName);
          userCommentBeer.append("Beer rated: " + commentData[i].Beer);
          userCommentBrewery.append("Brewery rated: " + commentData[i].Brewery);
          userCommentStars.append("Rating: " + commentData[i].Stars);
          userCommentComment.append("Comments: " + commentData[i].Comment);
          commentSection.append(userCommentName, userCommentBeer, userCommentBrewery, userCommentStars, userCommentComment);
          var userComments = $('#userComments');
          userComments.prepend(commentSection);
         }
         
           
    });
  

    
    document.getElementById('ratingsForm').reset();
});




console.log(welcomeUser);

});

