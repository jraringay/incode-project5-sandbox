$(document).ready(function() {
  let api = 'https://api.themoviedb.org/3/search/movie';
  let apiKey = '6c0856c8aca4264172f895e370451731';
  let language = "en-US";

  $('#searchBtn').click(() => {
    let query = $('#searchBar').val()
    $.getJSON(api + '?api_key=' + apiKey + '&language=' + language + '&query=' + query)
    .done(data => {
      console.log(data)
      $.each(data.results, (i, item) => {
        $('#list').append('<li>' + item.title + '</li>')
      })
    })
  })

});