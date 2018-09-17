$(function(){
$(".show_routines").on("click", function(e){
  e.preventDefault();
  var id = $(this).data("id");
   $.get("/members/" + id + ".json", function(json) {
     routines = json.routines
     var routinesList = ""
     routines.forEach(function(routine){
       routinesList += '<li>' + routine.name + '</li>'
     })
     $(".routines ol").append(routinesList)
   })
   });



})
