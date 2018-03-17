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
         
         for (var i = 0; i < commentData.length; i++){
           // loop through returned data from database and create cards of user comments
           // commentSection div is div that will append to div already in html
           // div row id that will be added to is #userComments

           //this goes inside row
           var divWithColSizes = $('<div>');
           divWithColSizes.addClass('col-xs-12 col-sm-6 col-md-4');

           //this goes inside colsizes class div
           var divWithImageFlip = $('<div>');
           divWithImageFlip.addClass('image-flip');
           divWithImageFlip.attr("ontouchstart", "this.classList.toggle('hover');")
           
           // this goes inside image flip
           var divWithMainFlip = $('<div>');
           divWithMainFlip.addClass('mainflip');
                     
           
           //this goes inside mainflip
           var divWithFrontSide = $('<div>');
           divWithFrontSide.addClass('frontside');

           var divWithBackSide = $('<div>');
           divWithBackSide.addClass('backside');
           
           
           //this goes inside class frontside
          var divInsideFrontsideCard = $('<div>');
          divInsideFrontsideCard.addClass('card');
          

          var divInsideBacksideCard = $('<div>');
          divInsideBacksideCard.addClass('card');
          divWithColSizes.append(divWithImageFlip);
          divWithImageFlip.append(divWithMainFlip); 
          divWithMainFlip.append(divWithFrontSide);
          divWithMainFlip.append(divWithBackSide);
          divWithFrontSide.append(divInsideFrontsideCard);
          divWithBackSide.append(divInsideBacksideCard);

          //creating the front and back of the card divs
          var frontOfCard = $('<div>');
          var backOfCard = $('<div>');
          frontOfCard.addClass("card-body text-center");
          backOfCard.addClass("card-body text-center mt-4");
          divInsideFrontsideCard.append(frontOfCard);
          divInsideBacksideCard.append(backOfCard);

          //user Name to go on front of Card
          var userCommentName = $('<h4>');
          userCommentName.addClass('card-title');
          userCommentName.append(commentData[i].UserName);
          frontOfCard.append(userCommentName);
          

          //user rating to go on front of Card
          var userCommentStars = $('<p>');
          userCommentStars.addClass('card-text');
          userCommentStars.append("Rating: " + commentData[i].Stars);
          frontOfCard.append(userCommentStars);
          
          
          // append name and stars to header
          // commentSectionHeader.prepend(userCommentName);
          // commentSectionHeader.append(userCommentStars);

          // Body of the card
          // var commentSectionBody = $('<div>');
          // commentSectionBody.addClass('card-body text-center');
          // divInsideFrontsideCard.append(commentSectionBody);

          var userCommentBeer = $('<p>');
          userCommentBeer.addClass('card-text');
          userCommentBeer.append("Beer rated: " + commentData[i].Beer);
          backOfCard.append(userCommentBeer);
          
          var userCommentBrewery = $('<p>');
          userCommentBrewery.addClass('card-text');
          userCommentBrewery.append("Brewery rated: " + commentData[i].Brewery);
          backOfCard.append(userCommentBrewery);
          
          
          var userCommentComment = $('<p>');
          userCommentComment.addClass('card-text');
          userCommentComment.append("Comments: " + commentData[i].Comment);
          backOfCard.append(userCommentComment);
          
          $('#commentSection').prepend(divWithColSizes);
          //append Beer Brewery and Comment to Body
          // commentSectionBody.append(userCommentBrewery, userCommentBeer, userCommentComment);
          
          //divInsideFrontsideCard.append(userCommentName, userCommentBeer, userCommentBrewery, userCommentStars, userCommentComment);
          // var userComments = $('#userComments');
          // userComments.prepend(divInsideFrontsideCard);
          // $('.frontside').append(divInsideFrontsideCard);
          // $('.backside').append(divInsideBacksideCard);
         }
         
           
    });
  

    
    document.getElementById('ratingsForm').reset();
});




console.log(welcomeUser);

});

