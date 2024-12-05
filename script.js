


$(document).ready(function() {
    // Fade in the banner on page load
    $('#firstBanner').fadeIn(1500);

    // Slide in the partners section with a delay
    $('.partenaire').each(function(index) {
        $(this).delay(index * 300).fadeIn(1500);
    });

    // Slide in and fade in the advantages section
    $('#avantagesCntnt').hide().fadeIn(1500);

    // Scroll-triggered animations
    $(window).on('scroll', function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        $('.avantage').each(function() {
            var offset = $(this).offset().top;
            if (offset < scrollTop + windowHeight) {
                $(this).animate({ opacity: 1, left: '0px' }, 1000);
            }
        });
    });

    // Toggle FAQ questions
    $('.jsButton').click(function() {
        var content = $(this).closest('.question').find('.jsP');
        content.slideToggle(500);
        var buttonText = $(this).text() === '+' ? '-' : '+';
        $(this).text(buttonText);
    });
    $('#result').fadeIn(1000);
    $('#progDesc').hide().slideDown(1500);

    // Animate the footer section when scrolling to the bottom
    $(window).scroll(function() {
        var bottomOffset = $(document).height() - $(window).scrollTop() - $(window).height();
        if (bottomOffset < 50) {
            $('#footer').fadeIn(1500);
        }
    });
});
$(window).on('scroll', function() {
    $('.avantagesBody .avantage').each(function() {
        var elementTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();
        
        if (elementTop < windowBottom) {
            $(this).animate({ opacity: 1, left: '0' }, 1000);
        }
    });
});