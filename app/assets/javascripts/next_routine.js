
function Exercise(id, name, sets, reps, lbs, routine_id){
  this.id = id
  this.name = name
  this.sets = sets
  this.reps = reps
  this.lbs = lbs
  this.routine_id = routine_id

  Exercise.prototype.format = function() {
    html = '<div class="exerciseList">'
    html += '<p class="exerciseName">' + this.name + ":" + "</p>"
    html += '<a href=/exercises/' + this.id +'>View Exercise</a>'
    html += '<p class="exerciseSets">' + "Sets: " + this.sets + "</p>"
    html += '<p class="exerciseReps">' + "Reps: " + this.reps + "</p>"
    html += '<p class="exerciseLbs">' + "Weight: " + this.lbs + "</p><br>"
    html += '</div>'
    return html
  }

 Exercise.prototype.exercise_routine_id = function() {
     html = '<input value=' + this.routine_id + ' type="hidden" name="exercise[routine_id]" id="exercise_routine_id">'
     return html
 }
}


function Routine(id, name){
  this.id = id
  this.name = name

  Routine.prototype.delete_routine = function() {
    html = '<div id="delete_form">'
    html += '<form action="/routines/' + this.id + '"accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="delete"><input type="hidden" name="authenticity_token" value="yHiJgpxUFFkg89i1FDsFDnmrKC6QlbzZiVe4UqQFsnXYb8Pd5BrPNfAv4U6vkt1Vqvv+pToOS0TKJ2stskUvyg==">'
    html += '<input type="submit" name="commit" value="Delete ' + this.name + '" class="delete-routine" data-disable-with="Delete"' + this.name + '></form>'
    html += '</div>'
    return html
  }
}

  const updateDelete = (routine) =>  {
    $(".delete-routine").val("Delete " + routine["name"]);
    var routineDelete = new Routine(routine["id"], routine["name"])
    $("#delete_routine").html(routineDelete.delete_routine())
  }

  const updateRoutineAttribs = (routine) =>  {$(".routineName").text(routine["name"]);
    $(".routineKind").text(routine["kind"])}

  const updateExercises = (routine) => {
    $("#exerciseContainer").empty()
    routine["exercises"].forEach (function(exercise) {
      var exercise = new Exercise(exercise["id"], exercise["name"], exercise["sets"], exercise["reps"], exercise["lbs"])
      $("#exerciseContainer").append(exercise.format())
    })}

  const updateExerciseForm = (routine, data) =>{
    let exercise = new Exercise(data["id"], data["name"], data["sets"], data["reps"], data["lbs"], routine.id)
    $("#exercise_routine_id").replaceWith(exercise.exercise_routine_id())
    routine["exercises"].push(exercise)
  }


    document.addEventListener("turbolinks:load", function() {
      var memberId = parseInt($(".js-next").attr("data-member-id"));
      var http = $.ajax({
          type:"HEAD",
          url: `/members/${memberId}/routines.json`,
          async: false
        })

      $(".js-next").on("click", function(e) {
        e.preventDefault();
        var memberId = parseInt($(".js-next").attr("data-member-id"));
          $.get(`/members/${memberId}/routines.json`, function(data) {
            var nextId = parseInt($(".js-next").attr("data-id"));
            var routineIndex = data.map(function(routine){return routine.id}).indexOf(nextId)
            if (routineIndex == data.length - 1){
              $(".js-next").hide()
            } else {
            $(".js-next").show()
              //get index of next routine
              var nextIndex = routineIndex + 1
              //get id of next routine
              var routine = data[nextIndex]
              var nextId = routine.id

            $(".js-next").attr("data-id", nextId);

             updateRoutineAttribs(routine)
             updateDelete(routine)
             updateExercises(routine)
             updateExerciseForm(routine, data)

      }
    });
  });
})
