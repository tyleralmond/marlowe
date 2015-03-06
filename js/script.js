////FADE ONLOAD////

$(function() {
    // $(".bg-main").delay(100).fadeIn(1000)
    $(".bg-main").delay(100).css("opacity","0").animate({opacity: 1}, 1000);
    $("#collection-accessories").delay(700).fadeIn(1000)
});


////FULL SCREEN BG////

$(function() {
    // You need to specify the size of your background image here (could be done automatically by some PHP code)
    var FullscreenrOptions = {  width: 1920, height: 1080, bgID: '.bgimg' };
    // This will activate the full screen background!
    jQuery.fn.fullscreenr(FullscreenrOptions);
});


////TEXT FADE - HOME PAGE////

(function() {
    var quotes = $('#home h2');
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .delay(1000)
            .fadeIn(2000)
            .delay(1000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();    
})();


////NANO SCROLLER////

$(function() {
    $(".nano").nanoScroller();
});

////CarouFredSel////

$(window).load(function() {
    $("#thumbs").carouFredSel({
        synchronise: ['#images', false, true],
        width: "100%",
        height: 145,
        items: {
            // width: 95,
            height: 145,
            visible: 19
            // start: 13
        },
        scroll: {
            items: 1,
            pauseOnHover: true
        },
        auto: false,
        debug: true,
        prev: {
            button: "#prev-thumbs",
            key: "left"
        },
        next: {
            button: "#next-thumbs",
            key: "right"
        }
    });

    $('#images').carouFredSel({
        auto: false,
        items: 1,
        scroll: {
            fx: 'fade'
        }
    });
    
    // $('#images').carouFredSel({
    //     auto: false,
    //     responsive: true,
    //     items: {
    //         visible: 1,
    //         height: "46%"
    //     },
    //     scroll: {
    //         fx: 'crossfade'
    //     }
    // });
});


////Collections - Pre-Loader////

$(document).ready(function() {
    $('#collection').jpreLoader();
});


////Home Nav - Img Hover////

// $(function () {

//     $('#brand-nav').hover(function () {
//         $('#bgimg').fadeOut('fast', function () {
//             $('#bgimg').attr( 'src', 'img/bg-brand.jpg' );
//             $('#bgimg').fadeIn('slow');
//         });
//     }, function () {
//         $('#bgimg').fadeOut('fast', function () {
//             $('#bgimg').attr('src', 'img/bg-home.jpg' );
//             $('#bgimg').fadeIn('slow');
//         });
//     });
//     $('#collection-nav').hover(function () {
//         $('#bgimg').fadeOut('fast', function () {
//             $('#bgimg').attr( 'src', 'img/bg-accessories.jpg' );
//             $('#bgimg').fadeIn('slow');
//         });
//     }, function () {
//         $('#bgimg').fadeOut('fast', function () {
//             $('#bgimg').attr('src', 'img/bg-home.jpg' );
//             $('#bgimg').fadeIn('slow');
//         });
//     });
//     $('#boutiques-nav').hover(function () {
//         $('#bgimg').fadeOut('fast', function () {
//             $('#bgimg').attr( 'src', 'img/bg-boutiques.jpg' );
//             $('#bgimg').fadeIn('slow');
//         });
//     }, function () {
//         $('#bgimg').fadeOut('fast', function () {
//             $('#bgimg').attr('src', 'img/bg-home.jpg' );
//             $('#bgimg').fadeIn('slow');
//         });
//     });
//     $('#contact-nav').hover(function () {
//         $('#bgimg').fadeOut('fast', function () {
//             $('#bgimg').attr( 'src', 'img/bg-contact.jpg' );
//             $('#bgimg').fadeIn('slow');
//         });
//     }, function () {
//         $('#bgimg').fadeOut('fast', function () {
//             $('#bgimg').attr('src', 'img/bg-home.jpg' );
//             $('#bgimg').fadeIn('slow');
//         });
//     });        

// });


// $(function() {
//     $('#brand-nav').hoverIntent(function() {
//         $('.bg-brand').stop().fadeIn(600);
//     },
//     function() {
//         $('.bg-brand').delay(500).fadeOut();
//     });
//     $('#collection-nav').hoverIntent(function() {
//         $('.bg-collection').stop().fadeIn(600);
//     },
//     function() {
//         $('.bg-collection').delay(500).fadeOut();
//     });
//     $('#boutiques-nav').hoverIntent(function() {
//         $('.bg-boutiques').stop().fadeIn(600);
//     },
//     function() {
//         $('.bg-boutiques').delay(500).fadeOut();
//     });
//     $('#contact-nav').hoverIntent(function() {
//         $('.bg-contact').stop().fadeIn(600);
//     },
//     function() {
//         $('.bg-contact').delay(500).fadeOut();
//     });              
// }); 


$(function() {

    function brandIn()
    {
        $('.bg-brand').animate({opacity: 1}, 600)
    }
    function brandOut()
    {
        $('.bg-brand').animate({opacity: 0})
    }
    function collectionIn()
    {
        $('.bg-collection').animate({opacity: 1}, 600)
    }
    function collectionOut()
    {
        $('.bg-collection').animate({opacity: 0})
    }
    function boutiquesIn()
    {
        $('.bg-boutiques').animate({opacity: 1}, 600)
    }
    function boutiquesOut()
    {
        $('.bg-boutiques').animate({opacity: 0})
    }
    function contactIn()
    {
        $('.bg-contact').animate({opacity: 1}, 600)
    }
    function contactOut()
    {
        $('.bg-contact').animate({opacity: 0})
    }

    $('#brand-nav').hoverIntent({over: brandIn,  timeout: 600, out: brandOut});
    $('#collection-nav').hoverIntent({over: collectionIn,  timeout: 600, out: collectionOut});
    $('#boutiques-nav').hoverIntent({over: boutiquesIn,  timeout: 600, out: boutiquesOut});
    $('#contact-nav').hoverIntent({over: contactIn,  timeout: 600, out: contactOut});

});

