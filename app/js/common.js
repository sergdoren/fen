function menu(_menu, _cls) {
    var menu = $(_menu),
        cls = _cls;

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
        menu('.header__nav', 'header__nav_open');
    });
    
    $('.menu__bottom-href-burger').on('click', function () {
        menu('.menu__bottom','menu__bottom_open');
    })
});