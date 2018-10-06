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
}

function Routine(id, name){
  this.id = id
  this.name = name

    Routine.prototype.exercise_form = function() {
      html = '<div id="exerciseForm">'
      html += '<form class="new_exercise" action="/exercises" accept-charset="UTF-8" method="post">'
      html += '<input name="utf8" type="hidden" value="✓">'
      html += '<input type="hidden" name="authenticity_token" value="ZawYj7LHmiRZfFRC4qfs7r5e405Th3Z3uUgT84zNhajqbt++5SG9cJw/GcRvdC8A0eNNmD10WWwBUlf8e0ysWQ==">'
      html += '<label for="exercise_name">Name</label><br>'
      html += '<input type="text" name="exercise[name]" id="exercise_name"><br>'
      html += '<label for="exercise_sets">Sets</label><br>'
      html += '<input type="text" name="exercise[sets]" id="exercise_sets"><br>'
      html += '<label for="exercise_reps">Reps</label><br>'
      html += '<input type="text" name="exercise[reps]" id="exercise_reps"><br>'
      html += '<label for="exercise_lbs">Lbs</label><br>'
      html += '<input type="text" name="exercise[lbs]" id="exercise_lbs"><br>'
      html += '<input value=' + this.id + ' type="hidden" name="routine_id" id="routine_id">'
      html += '<input type="submit" name="commit" value="submit" class="submit_button" data-disable-with="submit">'
      html += '</form></div>'
      return html
    }
}

document.addEventListener("turbolinks:load", function() {
  var memberId = parseInt($(".js-next").attr("data-member-id"));
  var prevId = parseInt($(".js-prev").attr("data-id"));
  var http = $.ajax({
      type:"HEAD",
      url: `/members/${memberId}/routines.json`,
      async: false
  })
    $.get(`/members/${memberId}/routines.json`, function(data) {
    var routineIndex = data.map(function(routine){return routine.id}).indexOf(prevId)
})




  $(".js-next").on("click", function(e) {
    e.preventDefault();
    var memberId = parseInt($(".js-next").attr("data-member-id"));
    var http = $.ajax({
        type:"HEAD",
        url: `/members/${memberId}/routines.json`,
        async: false
    })
      $.get(`/members/${memberId}/routines.json`, function(data) {
      var nextId = parseInt($(".js-next").attr("data-id"));
      var routineIndex = data.map(function(routine){return routine.id}).indexOf(nextId)
      if (routineIndex == 0){
        $(".js-next").show()
      }
      if (routineIndex >= 0){
        $(".js-prev").show()
      }
      if (routineIndex == data.length - 1){
        $(".js-next").hide()
      } else {
        $(".js-next").show()
      var nextIndex = routineIndex + 1

      var nextRoutine = data[nextIndex]
      var nextId = nextRoutine.id
      var routine = data[nextIndex]
      $(".routineName").text(routine["name"]);
      $(".routineKind").text(routine["kind"]);
      $(".delete-routine").val("Delete " + routine["name"]);
      // clear exerciseContainer
      $('#exerciseContainer2').hide()
      $(".js-next").attr("data-id", nextId);
          $("#exerciseContainer").empty()
      routine["exercises"].forEach (function(exercise) {
        debugger
        var exercise = new Exercise(exercise["id"], exercise["name"], exercise["sets"], exercise["reps"], exercise["lbs"])
        $("#exerciseContainer").append(exercise.format())

          // $(".exerciseName").text(exercise["name"])
          // $(".link").html(`<a href=/routines/${routine.id}/exercises/${exercise.id}>View Exercise</a>`)
          // $(".exerciseSets").text("Sets: " + exercise["sets"])
          // $(".exerciseReps").text("Reps: " + exercise["reps"])
          // $(".exerciseLbs").text("Weight: " + exercise["lbs"])
      })

      $(".new_exercise").empty()

      var routine = new Routine(routine["id"], routine["name"])
      $("#exerciseForm").append(routine.exercise_form())
      $('.new_exercise').submit(function(event) {
          event.preventDefault();
          debugger
          var id = $(this).data("id");
            var values = $(this).serialize();
          $.post('/exercises.json', values).done(function(data) {
            debugger


      let exercise_two = new Exercise(data["id"], data["name"], data["sets"], data["reps"], data["lbs"], routine.id)
          let formattedExercise = exercise_two.format()
        var exerciseList = ""
                exerciseList += '<li>' + formattedExercise + '</li>'
            $("#exercise_list").append(exerciseList)

              })


    })
      }
        });
  });

})
