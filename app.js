
$(function (){

// ----------- buttons ----------- //
  $('.movies-area button').click(function() {
    var movieTitle = $(this).parent().children('input').first().serialize();
    var request = getMovie(movieTitle);
    request.done(function(response){
      showMovie(response);
    });
  });

  function getMovie(movieTitle) {
    return $.get('http://www.omdbapi.com/?' + movieTitle);

  }

  function showMovie(response) {
    console.log(response);
    console.log(response.Title);
    console.log(response.Year);
    console.log(response.Poster);
    console.log(response.Actors);
    console.log(response.Plot);
  }

});
