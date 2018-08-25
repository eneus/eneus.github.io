//------------------------------------------------------------------------
// InstaFeed.js Methods -->
//------------------------------------------------------------------------
$(document).ready(function($) {
    
    var instafeedId = $("#instafeed");
    if ( $( "#instafeed" ).length ) {
        var feed = new Instafeed({
            get: 'user',
            userId: '5949033596',
            resolution: 'standard_resolution',
            template: '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject"><a href="{{image}}" itemprop="contentUrl" class="thumbnail-img" data-size="{{width}}x{{height}}"><img src="{{image}}" alt="{{caption}}" itemprop="thumbnail" class="image activator"/></a><figcaption itemprop="caption description">{{caption}}</figcaption></figure>',
            accessToken: '5949033596.6d865ac.eb2e0457c3b742e7a526e06fa92345ca'
        });
        feed.run();
    }


    if (is_touch_device())
    {
        $('.full-screen-scroll article').css('opacity', '1', '!important');
    }

    var ua = navigator.userAgent.toLowerCase();
    if ((ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1) || is_touch_device())
    {

        $("html").css('overflow', 'auto');

        $(".scroll-top").click(function () {
            $('html, body').animate({scrollTop: 0}, 2000);
            return false;
        });

    } else
    {
        $("html, .menu-left-part, #cbp-bislideshow.scroll").niceScroll({cursorcolor: "#5B5B5B", scrollspeed: 100, mousescrollstep: 80, cursorwidth: "12px", cursorborder: "none", cursorborderradius: "0px"});

        //Scroll Top animation
        $(".scroll-top").click(function () {
            $("html").getNiceScroll(0).doScrollTop(0);
        });

        $(".sidebar").mouseover(function () {
            $(".menu-left-part").getNiceScroll().resize();
        });
    }


    //Placeholder show/hide
    $('input, textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    });
    $('input, textarea').blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });


// preload the images
    $('#cbp-bislideshow.scroll').imagesLoaded(function () {
        var count = 0;
        var scrollItemWidth = $('.cbp-bislideshow.scroll li').outerWidth();
        $('#cbp-bislideshow.scroll').children('li').each(function () {
            var $item = $(this);
            $item.css({'left': count * scrollItemWidth});
            count++;
        });
    });

    //Fix for default menu
    $('.default-menu ul').addClass('main-menu sm sm-clean');

});


$(window).on("load", function (e) {

    $(".blog-item-holder").hover(function () {
        $(".blog-item-holder").not(this).addClass('blur');
    },
    function ($) {
        $(".blog-item-holder").removeClass('blur');
    });


    //Set menu
    $('.main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
        markCurrentItem: true
    });


    //Set each image slider
    $(".image-slider").each(function () {
        var id = $(this).attr('id');
        if (window[id + '_pagination'] == 'true')
        {
            var pagination_value = '.' + id + '_pagination';
        } else
        {
            var pagination_value = false;
        }

        var auto_value = window[id + '_auto'];
        if (auto_value == 'false')
        {
            auto_value = false;
        } else {
            auto_value = true;
        }

        var hover_pause = window[id + '_hover'];
        if (hover_pause == 'true')
        {
            hover_pause = 'resume';
        } else {
            hover_pause = false;
        }

        var speed_value = window[id + '_speed'];

        $('#' + id).carouFredSel({
            responsive: true,
            width: 'variable',
            auto: {
                play: auto_value,
                pauseOnHover: hover_pause
            },
            pagination: pagination_value,
            scroll: {
                fx: 'crossfade',
                duration: parseFloat(speed_value)
            },
            swipe: {
                onMouse: true,
                onTouch: true
            },
            items: {
                height: 'variable'
            }
        });
    });

    $('.carousel_pagination').each(function () {
        var pagination_width = $(this).width();
        var windw_width = $('.image-slider-wrapper').width();
        $(this).css("margin-left", (windw_width - pagination_width) / 2);
    });


    //Show-Hide header sidebar
    $('#toggle').on("click", multiClickFunctionStop);
    
    //Fix for sidebar height
    $("#sidebar").css('minHeight', $("#content").outerHeight());

    $('.doc-loader').fadeOut('fast');
});


$(window).resize(function () {

    //Fix for sidebar height
        $("#sidebar").css('minHeight', $("#content").outerHeight());
    
        $('.menu-left-part.open').width($('.sidebar.open').width() - $('.menu-right-part.open').width());
    
        var count = 0;
        var scrollItemWidth = $('.cbp-bislideshow.scroll li').outerWidth();
        $('#cbp-bislideshow.scroll').children('li').each(function () {
            var $item = $(this);
            $item.css({'left': count * scrollItemWidth});
            count++;
        });
    
        $('.carousel_pagination').each(function () {
            var pagination_width = $(this).width();
            var windw_width = $('.image-slider-wrapper').width();
            $(this).css("margin-left", (windw_width - pagination_width) / 2);
        });
    
    });
    
//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------


var multiClickFunctionStop = function (e) {
    e.preventDefault();
    $('#toggle').off("click");
    $('#toggle').toggleClass("on");
    $('html, body, .sidebar, .menu-left-part, .menu-right-part').toggleClass("open");
    $('.menu-left-part').width('320px');
    $('.menu-left-part.open').width($('.sidebar.open').width() - $('.menu-right-part.open').width());
    $('#toggle').on("click", multiClickFunctionStop);
};

function is_touch_device() {
    return !!('ontouchstart' in window);
}

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > 700) {
        $('.scroll-top').fadeIn(500);
    } else
    {
        $('.scroll-top').fadeOut(500);
    }
});
