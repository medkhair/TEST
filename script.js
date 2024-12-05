


$(document).ready(function() {
    $('#firstBanner').fadeIn(1500);

    $('.partenaire').each(function(index) {
        $(this).delay(index * 300).fadeIn(1500);
    });
    $('#avantagesCntnt').hide().fadeIn(1500);
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
    $('.jsButton').click(function() {
        var content = $(this).closest('.question').find('.jsP');
        content.slideToggle(500);
        var buttonText = $(this).text() === '+' ? '-' : '+';
        $(this).text(buttonText);
    });
    $('#result').fadeIn(1000);
    $('#progDesc').hide().slideDown(1500);
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
