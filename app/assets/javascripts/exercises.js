function Exercise(name, sets, reps, lbs){
  this.id = id
  this.name = name
  this.sets = sets
  this.reps = reps
  this.lbs = lbs

  Exercise.prototype.format = function() {
 return `Name: ${this.name}, sets: ${this.sets}, reps: ${this.reps}, weight: ${this.lbs}`
 }
}

document.addEventListener("turbolinks:load", function () {
  $('.new_exercise').submit(function(event) {
    event.preventDefault();
    var values = $(this).serialize();
    $.post('/exercises.json', values).done(function(data) {
      $("#exercise_name").val("")
      $("#exercise_sets").val("")
      $("#exercise_reps").val("")
      $("#exercise_lbs").val("")
      $(".submit_button").prop('disabled', false)
    let exercise = new Exercise(data["id"], data["name"], data["sets"], data["reps"], data["lbs"])
    let formattedExercise = exercise.format()
    var exerciseList = ""
        exerciseList += '<p>' + formattedExercise + '</p>'
    $("#exercise_list").append(exerciseList)
  });
});
})
