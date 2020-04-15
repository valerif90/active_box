$ (function() {

           // fixed header
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.height();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function() {
        introH = intro.height();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });
        function checkScroll(scrollPos, introH) {
            if(scrollPos > introH) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        }



         // smooth scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');

        console.log(elementOffset);

        $('html, body').animate({
             scrollTop: elementOffset - 100
        }, 700);
    });

    

        // nav toggle
        navToggle.on('click', function(event) {
        event.preventDefault();
        nav.toggleClass('show');
    });
   
        // clients
    let slider = $('#testimonialsSlider');

   slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});