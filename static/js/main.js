
// Smooth scroll

$(document).ready(function(){
  
  $('a').on('click', function(event) {
    
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1200, function() {
      window.location.hash = hash;
    });
    
  }); 
});

// Toggle light and dark themes

$(document).ready(function () {

  "use strict";

  $(".nav .switch i").click(function () {

      //? worked with hassClass not attr

      if ($(".nav .switch i").hasClass('fa-toggle-off')) {
        $("link[href='static/css/light_theme.css']").replaceWith('<link rel="stylesheet" href="static/css/dark_theme.css">');
        $(".nav .switch i").removeClass('fa fa-toggle-off fa-lg'); // change the attr value
        $(".nav .switch i").addClass('fa fa-toggle-on fa-lg'); // change the attr value
      } else if ($(".nav .switch i").hasClass('fa-toggle-on')) {
        $("link[href='static/css/dark_theme.css']").replaceWith('<link rel="stylesheet" href="static/css/light_theme.css">');
        $(".nav .switch i").removeClass('fa fa-toggle-on fa-lg'); // change the attr value
        $(".nav .switch i").addClass('fa fa-toggle-off fa-lg'); 
      }

    });

});

