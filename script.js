

$(".sliderNav li").click(function() {
    $(".sliderNav li").removeClass("sliderNavLiActive");
    $(this).addClass('sliderNavLiActive');

    switch ($(this).attr("id")) {

        case "first":

            $(".mainSlider").animate({
                left: "0"
            }, 300)

            break;

        case "second":

            $(".mainSlider").animate({
                left: "-100%"
            }, 300)

            break;

        case "third":

            $(".mainSlider").animate({
                left: "-200%"
            }, 300)

            break;

        case "fourth":

            $(".mainSlider").animate({
                left: "-300%"
            }, 400)

    }

});


// slider //

var width = $(".sliderContainer").width();

$(".sliderContainer__slides").width(width * $(".sliderContainer__slides>li").length);

$(".sliderContainer__slides").css("left", -width);
$(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');

function nextSlide() {
    $(".sliderContainer__slides").stop(true, true).animate({
        "margin-left": -width
    }, 800, function() {
        $(".sliderContainer__slides>li:first-child").appendTo('.sliderContainer__slides');
        $(".sliderContainer__slides").css("margin-left", 0);

    });
}


function prevSlide() {
    $(".sliderContainer__slides").stop(true, true).animate({
        "margin-left": width
    }, 800, function() {
        $(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');
        $(".sliderContainer__slides").css("margin-left", 0);
    });
}

$(".sliderContainer__buttons_next").click(nextSlide);
$(".sliderContainer__buttons_prev").click(prevSlide);


// End of slider //


setInterval (function(){

    function fadeSwitchElements(id1, id2)
    {
        var element1 = $('#' + id1);
        var element2 = $('#' + id2);

        if(element1.is(':visible'))
        {
            element1.fadeToggle(200, function() {
                element2.fadeToggle(200);
            });
        }
        else
        {
            element2.fadeToggle(200, function() {
                element1.fadeToggle(200);
            });
        }
    }
    fadeSwitchElements('a','b');

}, 5000)


    // function fadeSwitchElements(id1, id2)
    // {
    //     var element1 = $('#' + id1);
    //     var element2 = $('#' + id2);
    //
    //     if(element1.is(':visible'))
    //     {
    //         element1.fadeToggle(500, function() {
    //             element2.fadeToggle(500);
    //         });
    //     }
    //     else
    //     {
    //         element2.fadeToggle(500, function() {
    //             element1.fadeToggle(500);
    //         });
    //     }
    // }


var scrollUpElem = $('.scrollUp');
var coordinatesOfMainSlider = $('.mainSlider');

scrollUpElem.click(function () {
    $('body').animate({
        scrollTop: $(".headerContainer").offset().top
    }, 1000);
});

window.addEventListener("scroll", function(){
    var clientTop =  coordinatesOfMainSlider.get(0).getBoundingClientRect().bottom;

    if (clientTop<0){
        scrollUpElem.fadeIn();
            }
        else {
        scrollUpElem.fadeOut();
    }
});


$('.logoMenu').click(function () {
    $('.animateMenu').animate({
        left: "0"
    }, 100)
});


$('.close').click(function () {
    $('.animateMenu').animate({
        left: "-500px"
    }, 100)
});


$(".showCatalog").hover(function(){
    $('.s').css("transform", "rotate(180deg)");
}, function(){
    $('.s').css("transform", "rotate(0deg)");
});


