$(function(){

    //ここにスクリプトを書く
    $('.slider').slick({
        asNavFor:'.thumb',
        autoplay:false,
        autoplayspeed:5000,
        dots:true,
    });

    $('.thumb').slick({
        asNavFor:'.slider',
        focusOnSelect: false,
        slidesToShow:1,
        slidesToScroll:1
    });




})
    