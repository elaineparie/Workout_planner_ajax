function Exercise(id, name, sets, reps, lbs){
  this.id = id
  this.name = name
  this.sets = sets
  this.reps = reps
  this.lbs = lbs

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
      debugger
          $("#exerciseContainer").empty()
      routine["exercises"].forEach (function(exercise) {
        var exercise = new Exercise(exercise["id"], exercise["name"], exercise["sets"], exercise["reps"], exercise["lbs"])
        $("#exerciseContainer").append(exercise.format())

          // $(".exerciseName").text(exercise["name"])
          // $(".link").html(`<a href=/routines/${routine.id}/exercises/${exercise.id}>View Exercise</a>`)
          // $(".exerciseSets").text("Sets: " + exercise["sets"])
          // $(".exerciseReps").text("Reps: " + exercise["reps"])
          // $(".exerciseLbs").text("Weight: " + exercise["lbs"])
      })




    }
    });


  });

})
