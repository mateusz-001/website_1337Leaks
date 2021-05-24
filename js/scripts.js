$(document).ready(function(){
    $(".textbox").hide(0).delay(100).fadeIn(750)
    $(".burger").hide(0).delay(100).fadeIn(750)
    $(".fa-arrow-down").hide(0).delay(100).fadeIn(750)
    $(".leaks").hide(0).delay(100).fadeIn(750)

    $(".burger").on("click", function () {
        $(".fas, aside").toggleClass("show");
    })
    $("nav button").on("click", function () {
        $(".fas, aside").removeClass("show");
    })

    function scroll(e) {
        const href = $(this).attr('href');
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
});
