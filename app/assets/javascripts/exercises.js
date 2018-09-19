function Exercise(name, sets, reps, lbs){
  this.name = name
  this.sets = sets
  this.reps = reps
  this.lbs = lbs

  Exercise.prototype.format = function() {
 return `Name: ${this.name}, sets: ${this.sets}, reps: ${this.reps}, weight: ${this.lbs}`
 }
}


$(document).on("turbolinks:load", function () {
  $('.new_exercise').submit(function(event) {
    event.preventDefault();
    var values = $(this).serialize();
    $.post('/exercises.json', values).done(function(data) {
      $("#exercise_name").val("")
      $("#exercise_sets").val("")
      $("#exercise_reps").val("")
      $("#exercise_lbs").val("")
    let exercise = new Exercise(data["name"], data["sets"], data["reps"], data["lbs"])
    let formattedExercise = exercise.format()
    $("#exerciseName").append(formattedExercise)
  });
});
})
