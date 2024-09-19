$(function(){
    $('.header__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrTop.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
        fade: true,
        responsive: [{
            breakpoint: 361,
            settings: {
                fade: false,
                dots: false,
                arrow: false,
                autoplay: true,
                autoplaySpeed: 2000,

            }
        }]

        

    });
    
    $('.product__name').slick({
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        //arrows: false,
        //fade: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>'
   
    });
    $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    //dots: true,
    //centerMode: true,
    fade: true,
    arrows: false
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list-active');
    });

});