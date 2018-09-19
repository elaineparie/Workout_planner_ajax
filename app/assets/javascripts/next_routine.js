

$(function () {
  $(".js-next").on("click", function(e) {
    e.preventDefault();
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    var http = $.ajax({
        type:"HEAD",
        url: "/routines/" + nextId + ".json",
        async: false
    })
    if(http.status == 200) {$.get("/routines/" + nextId + ".json", function(data) {
      $(".routineName").text(data["name"]);
      $(".routineKind").text(data["kind"]);
      $(".delete-routine").val(data["name"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
  }
  else {
    alert("The page you are trying to reach is not available.")
  }
  });
});
