$(document).on("turbolinks:load", function () {
  $('.new_exercise').submit(function(event) {
    event.preventDefault();
    var values = $(this).serialize();
    $.post('/exercises.json', values).done(function(data) {
       });
  });
});
