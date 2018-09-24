

$(function () {
  var memberId = parseInt($(".js-next").attr("data-member-id"));
  var prevId = parseInt($(".js-prev").attr("data-id"));
  var http = $.ajax({
      type:"HEAD",
      url: `/members/${memberId}/routines.json`,
      async: false
  })
    $.get(`/members/${memberId}/routines.json`, function(data) {
    // find the index of prevId in the routines index
    var routineIndex = data.map(function(routine){return routine.id}).indexOf(prevId)
    togglePrevLink(routineIndex)
    toggleNextLink(routineIndex, data)
})




  $(".js-next").on("click", function(e) {
    e.preventDefault();
    var http = $.ajax({
        type:"HEAD",
        url: "/routines.json",
        async: false
    })
      $.get("/routines.json", function(data) {
      var nextId = parseInt($(".js-next").attr("data-id"));
      var routineIndex = data.map(function(routine){return routine.id}).indexOf(nextId)
      // debugger to see why prev is not showing up
      if (routineIndex == 0){
        $(".js-prev").show()
      }
      if (routineIndex == data.length - 1){
        $(".js-next").hide()
      } else {
        $(".js-next").show()
        // debugger
      var nextIndex = routineIndex + 1
      var nextRoutine = data[nextIndex]
      var nextId = nextRoutine.id
      var routine = data[nextIndex]
      $(".routineName").text(routine["name"]);
      $(".routineKind").text(routine["kind"]);
      $(".delete-routine").val(routine["name"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", nextId);
    }
    });


  });


  $(".js-prev").on("click", function(e) {
    e.preventDefault();
    var memberId = parseInt($(".js-next").attr("data-member-id"));
    var http = $.ajax({
        type:"HEAD",
        url: `/members/${memberId}/routines.json`,
        async: false
    })
      $.get(`/members/${memberId}/routines.json`, function(data) {
        var prevId = parseInt($(".js-prev").attr("data-id"));
      // find the index of prevId in the routines index
      var routineIndex = data.map(function(routine){return routine.id}).indexOf(prevId)
      if (routineIndex == data.length - 1){
        $(".js-next").show()
      }
      if (routineIndex == 0){
        $(".js-prev").hide()
      } else {
        $(".js-prev").show()
      var prevIndex = routineIndex - 1
      var prevRoutine = data[prevIndex]
      var prevId = prevRoutine.id
      var routine = data[prevIndex]
      $(".routineName").text(routine["name"]);
      $(".routineKind").text(routine["kind"]);
      $(".delete-routine").val(routine["name"]);
      $(".js-prev").attr("data-id", prevId);
    }
  })
  })

});


function toggleNextLink(routineIndex, data){
  if (routineIndex == data.length - 1){
    $(".js-next").hide()
  } else {
    $(".js-next").show()
}
}


function togglePrevLink(routineIndex){
  if (routineIndex == 0){
    $(".js-prev").hide()
  } else {
    $(".js-prev").show()
  }
}
