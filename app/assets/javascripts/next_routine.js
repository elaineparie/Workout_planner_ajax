
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
      var prevIndex = routineIndex

      var nextRoutine = data[nextIndex]
      var prevRoutine = data[prevIndex]
      var nextId = nextRoutine.id
      var prevId = prevRoutine.id
      var routine = data[nextIndex]
      $(".routineName").text(routine["name"]);
      $(".routineKind").text(routine["kind"]);
      $(".delete-routine").val("Delete " + routine["name"]);
      debugger
      routine["exercises"].forEach (function(exercise) {
          $("#exerciseName").text(exercise["name"])
          $("#link").html(`<a href=/routines/${routine.id}/exercises/${exercise.id}>View Exercise</a>`)
      })



      $(".js-next").attr("data-id", nextId);
    }
    });


  });

})
