
$('#work').on('hover', function(){
    console.log("Work hoverd");
});
$(document).ready(function() {
    $('#work').hover(function() {
     $('.dropdown').stop(true, true).slideDown(200);
    }, function() {
     $('.dropdown').stop(true, true).slideUp(200);
    }); 
   });