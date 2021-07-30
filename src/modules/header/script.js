$(document).ready(function() {
    var burgerIcon = $('.header .nav__burger');
    var closeIcon = $('.header .nav__close');
    var navContainer = $('.header .nav');
    burgerIcon.on('click', function() {
        navContainer.addClass('nav-show');
    });
    closeIcon.on('click', function() {
        navContainer.removeClass('nav-show');
    });

    $(document).mouseup(function (event){
        if (!navContainer.is(event.target) && navContainer.has(event.target).length === 0) {
                navContainer.removeClass('nav-show');
        }
    });
});