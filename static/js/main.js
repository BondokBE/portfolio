
$(document).ready(function(){
  
  $('.nav .links a').on('click', function(event) {
    
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1200, function() {
      window.location.hash = hash;
    });
    
  }); 
});