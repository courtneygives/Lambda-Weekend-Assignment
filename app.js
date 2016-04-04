
$(function (){

  // ----------- buttons ----------- //
  $('.movies-area button.add-button').click(function() {
    var area = $(this).parent();
    var movieTitle = area.children('input').first().serialize();
    var request = getMovie(movieTitle);
    $(this).prop('disabled', true);
    $(this).parent().children('button.clear-button').prop('disabled', false);
    request.done(function(response){
      showMovie(response, area);

    });
  });

  $('.movies-area button.clear-button').click(function() {
    $(this).prop('disabled', true);
    $(this).parent().children('ul').empty();
    $(this).parent().children('img').remove();
    $(this).parent().children('h1').empty();
    $(this).parent().children('button.add-button').prop('disabled', false);
  });


    function getMovie(movieTitle) {
      return $.get('http://www.omdbapi.com/?' + movieTitle);

    }

    function showMovie(response, area) {
      area.children('h1').append(response.Title);
      area.children('ul').append('<li><h2>' + response.Year + '</h2></li>');
      area.children('ul').append('<li>' + response.Actors + '</li>');
      area.children('ul').append('<li>' + response.Plot + '</li>');
      area.append('<img src="' + response.Poster + '" alt="Movie Poster" />');
    }

  });
