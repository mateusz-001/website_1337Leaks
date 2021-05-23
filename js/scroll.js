function scroll(e) {

    var href = $(this).attr('href');
    
      e.preventDefault();

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 600);
  
    location.hash = href;
  
  };
  
  $('a[href*="#main"]').click(scroll); 
  $('a[href*="#about"]').click(scroll); 
  $('a[href*="#rules"]').click(scroll); 
  $('a[href*="#discord"]').click(scroll); 