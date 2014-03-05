$(function () {
    $('section .item').each(function(index, item) {
        $(item).css('background-image', 'url(img/liesl/' + ((index % 11) + 1) + '.jpg)');
    });

    // Make left nav sticky
    var nav = $('.sidenav');
    var navTop = nav.offset().top;
    var navLeft = nav.offset().left;
    $(window).scroll(function() {
        var makeItStick = navTop < $(window).scrollTop();
        nav.toggleClass('stuck', makeItStick);
        nav.css('left', makeItStick ? navLeft : 0);
    });
});
