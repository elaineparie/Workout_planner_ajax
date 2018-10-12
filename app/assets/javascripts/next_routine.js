
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

  Routine.prototype.edit_routine = function() {
    html = '<a href="/routines/' + this.id + '/edit">Edit Routine</a>'
    return html
  }
}

  const updateDeleteButton = (routine) =>  {
    $(".delete-routine").val("Delete " + routine["name"]);
  }

  const updateDeleteForm = (routine) => {
    routine = new Routine (routine.id)
     $('#delete_form').attr('actions',`/routines/${routine.id}`)
     $('#delete_form').attr('action',`/routines/${routine.id}`)
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

  const updateEdit = (routine) =>  {routine = new Routine(routine.id)
  $("#edit_routine").html(routine.edit_routine())}


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
             updateDeleteButton(routine)
             updateExercises(routine)
             updateExerciseForm(routine, data)
             updateEdit(routine)
             updateDeleteForm(routine)

      }
    });
  });
})
