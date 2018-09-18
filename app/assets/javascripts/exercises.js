$(document).on("turbolinks:load", function () {
  $('.new_exercise').submit(function(event) {
    event.preventDefault();
    var values = $(this).serialize();
    $.post('/exercises.json', values).done(function(data) {
      var exercise = data;
       $("#exerciseName").text("Name: " + exercise["name"]);
       $("#exerciseSet").text("Sets: " + exercise["sets"]);
       $("#exerciseRep").text("Reps: " + exercise["reps"]);
       $("#exerciseWeight").text("Weight: " + exercise["lbs"]);
       });
  });
});
