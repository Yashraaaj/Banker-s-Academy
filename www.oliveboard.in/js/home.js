var isnext = gq('next');
if (isnext != '0') {
    showLoginRegister();
}
var ww = $(window).width();
$(document).ready(function() {
    filtertabs(1);
});
(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollWidth > this.width();
    }
})(jQuery);
if ($("#obtabs-row").length) {
    var scrollres = $("#obtabs-row").hasScrollBar();
    if (ww >= 992) {
        if (scrollres) {
            $(".obtabs-outer").css("padding-left", "12px");
            $(".obtabs-outer").css("padding-right", "12px");
            $("#tabscrollarr-right").show();
        } else {
            $(".obtabs-outer").css("padding-left", "0");
            $(".obtabs-outer").css("padding-right", "0");
            $("#tabscrollarr-right").hide();
        }
    }
}
if ($("#popexams-row-scroll").length) {
    var scrollres = $("#popexams-row-scroll").hasScrollBar();
    if (ww >= 992) {
        if (scrollres) {
            $("#popex-tabarrows-right").css("display", "flex");
        } else {
            $("#popex-tabarrows-right").hide();
            $("#popexams-row-scroll").parent(".sec-scroll-group").css("padding-left", "0");
            $("#popexams-row-scroll").parent(".sec-scroll-group").css("padding-right", "0");
        }
    }
}

function obtabscroll(direction) {
    var container = document.getElementById('obtabs-row');
    scrollCompleted = 0;
    var slideVar = setInterval(function() {
        if (direction == 'left') {
            container.scrollLeft -= 30;
        } else {
            container.scrollLeft += 30;
        }
        scrollCompleted += 30;
        if (scrollCompleted >= 250) {
            window.clearInterval(slideVar);
        }
        var scrollwidth = $("#obtabs-row").get(0).scrollWidth;
        var scrollleft = $("#obtabs-row").scrollLeft();
        var elemwidth = $("#obtabs-row").width();
        var offset = 16;
        if (scrollleft <= 0) {
            $("#tabscrollarr-left").hide();
        } else {
            $("#tabscrollarr-left").css("display", "flex");
        }
        if (scrollwidth - scrollleft - elemwidth == offset) {
            $("#tabscrollarr-right").hide();
        } else {
            $("#tabscrollarr-right").css("display", "flex");
        }
    }, 50);
}

function obtabscroll1(direction) {
    var container = document.getElementById('popexams-row-scroll');
    scrollCompleted = 0;
    var slideVar = setInterval(function() {
        if (direction == 'left') {
            container.scrollLeft -= 30;
        } else {
            container.scrollLeft += 30;
        }
        scrollCompleted += 30;
        if (scrollCompleted >= 250) {
            window.clearInterval(slideVar);
        }
        var scrollwidth = $("#popexams-row-scroll").get(0).scrollWidth;
        var scrollleft = $("#popexams-row-scroll").scrollLeft();
        var elemwidth = $("#popexams-row-scroll").width();
        if (scrollleft <= 0) {
            $("#popex-tabarrows-left").hide();
        } else {
            $("#popex-tabarrows-left").css("display", "flex");
        }
        if (scrollwidth - scrollleft == elemwidth) {
            $("#popex-tabarrows-right").hide();
        } else {
            $("#popex-tabarrows-right").css("display", "flex");
        }
    }, 50);
}

function filtertabs(tabid) {
    $(".obtab-item").removeClass("active");
    $(".exgall").hide();
    $("#obtab-item-" + tabid).addClass("active");
    $("#exams-group-" + tabid).show();
}
$(".btn-viewmore").on("click", function() {
    $(this).parent(".sec-header-group").siblings(".togglecard-group").find(".togglecard").toggleClass("hide");
    if ($(this).hasClass("in")) {
        $(this).find(".txt-lessmore").html("View more");
        $(this).removeClass("in");
    } else {
        $(this).find(".txt-lessmore").html("View less");
        $(this).addClass("in");
    }
});
$(".btn-res-viewmore").on("click", function() {
    $(this).siblings(".togglecard-group").find(".togglecard").toggleClass("hide");
    if ($(this).hasClass("in")) {
        $(this).html("View more");
        $(this).removeClass("in");
    } else {
        $(this).html("View less");
        $(this).addClass("in");
    }
});
var slideIndex = 1;
displaySlide(slideIndex);

function moveSlides(n) {
    displaySlide(slideIndex += n);
    clearInterval(updateslider);
    updateslider = window.setInterval(function() {
        moveSlides(1);
    }, 6000);
}

function activeSlide(n) {
    displaySlide(slideIndex = n);
    clearInterval(updateslider);
    updateslider = window.setInterval(function() {
        moveSlides(1);
    }, 6000);
}

function displaySlide(n) {
    var i;
    var totalslides = document.getElementsByClassName("carousel-item");
    var totaldots = document.getElementsByClassName("uc-indicator");
    if (n > totalslides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = totalslides.length;
    }
    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none";
    }
    for (i = 0; i < totaldots.length; i++) {
        totaldots[i].className = totaldots[i].className.replace(" active", "");
    }
    totalslides[slideIndex - 1].style.display = "block";
    totaldots[slideIndex - 1].className += " active";
}
updateslider = window.setInterval(function() {
    moveSlides(1);
}, 5000);
if ((/Android|webOS|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    if ($('#open_app').length) {
        $(".openinapp").css("display", "flex");
    }
}
