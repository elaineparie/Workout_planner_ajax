$(function () {
  $(".js-next").on("click", function(e) {
    e.preventDefault();
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.get("/routines/" + nextId + ".json", function(data) {
      $(".routineName").text(data["name"]);
      $(".routineKind").text(data["kind"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
  });
});
