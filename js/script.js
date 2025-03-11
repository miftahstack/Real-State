 //  Sticky Header start 
 $(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  
  if(scrolling > 200){
      $('.navber').addClass('sticky_navbar');
  }
  else {
       $('.navber').removeClass('sticky_navbar');
  }
  }); 
  // Sticky Header end