

$(function () {
  $(".js-next").on("click", function(e) {
    e.preventDefault();
    var nextId = parseInt($(".js-next").attr("data-id"));
    var http = $.ajax({
        type:"HEAD",
        url: "/routines.json",
        async: false
    })
      $.get("/routines.json", function(data) {
      var routineIndex = data.map(function(routine){return routine.id}).indexOf(nextId)
      var nextIndex = routineIndex + 1
      var nextRoutine = data[nextIndex]
      var nextId = nextRoutine.id
      var routine = data[nextIndex]
      $(".routineName").text(routine["name"]);
      $(".routineKind").text(routine["kind"]);
      $(".delete-routine").val(routine["name"]);
      debugger
      // re-set the id to current on the link
      $(".js-next").attr("data-id", nextId);
    });


  });
});
