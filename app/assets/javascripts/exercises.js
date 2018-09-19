function Exercise(name, sets, reps, lbs){
  this.name = name
  this.sets = sets
  this.reps = reps
  this.lbs = lbs

  Exercise.prototype.format = function() {
 return `Name: ${this.name}, sets: ${this.sets}, reps: ${this.reps}, weight: ${this.lbs}`
 }
}

function Workout(routine_id, exercise_id){
  this.routine_id = routine_id
  this.exercise_id = exercise_id
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
    let workout = new Workout(parseInt($(".js-next").attr("data-id")), data["id"])
    debugger
    let formattedExercise = exercise.format()
    $("#exerciseName").append(formattedExercise)
  });
});
})
