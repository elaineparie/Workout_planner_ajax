$(function(){
$(".show_routines").on("click", function(e){
  e.preventDefault();
  var id = $(this).data("id");
   $.get("/members/" + id + ".json", function(json) {
     routines = json.routines
     var routinesList = ""
     routines.forEach(function(routine){
       routinesList += '<li>' + '<a href=/routines/' + routine.id + '>' + routine.name + '</a>' + '</li>'
     })
     $(".routines ol").append(routinesList)
   })
   });

})
