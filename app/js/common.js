function menu(menu, cls) {
    var menu = $('.header__nav'),
        cls = 'header__nav_open';

    if(menu.hasClass(cls)){
        menu.removeClass(cls)
    }else{
        menu.addClass(cls);
    }
}

$().ready(function () {
    $('.carousel').carousel({
        interval: 2000
    });

    $('.header__nav-burger').on('click', function () {
        menu($('.header__nav'), 'header__nav_open');
    })
});