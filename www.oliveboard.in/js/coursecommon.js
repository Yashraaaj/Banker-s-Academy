$("#btn-loginsignup").on("click", function() {
    showLoginRegister();
});
$(".btn-showloginregister").on("click", function() {
    showLoginRegister();
});

function showLoginRegister() {
    boxurl = "";
    $("#display-register-text").html("Sign Up");
    $(".errormsg").html("");
    $("#modal-signup").addClass("is-active");
    $("#course-uemail").focus();
    showregloginpup = 0;
}

function showLoginRegisterwl() {
    boxurl = "";
    $("#display-register-text").html("Register for a Free Mock Test");
    $(".errormsg").html("");
    $("#modal-signup").addClass("is-active");
    $("#course-uemail").focus();
}

function oblsModalClose() {
    $("#modal-signup").removeClass("is-active");
    $("#modal-login").removeClass("is-active");
    $("#forgotpwd-group-abc").hide();
    $("#success-msg-group").hide();
    $("#obls-group2").css("display", "flex");
    $("#login-group-abc").css("display", "flex");
    $("#loginnext-group").hide();
    $("#coursein").hide();
    $("#coursein1").html("Next");
    $("#coursein1").show();
    $("#course-email").attr("readonly", false);
    $(".disable-loginemail").css("background-color", "#FFF");
    $("#course-email").css("background-color", "#FFF");
    $("#fpwd-success-msg-text").html("&nbsp;");
    $("#fpwd-success-msg-title").html("&nbsp;");
}
$(".modal-obls-close").on("click", function() {
    oblsModalClose();
});
$("#btn-show-modal-signup").on("click", function() {
    $("#modal-login").removeClass("is-active");
    $("#modal-signup").addClass("is-active");
    $("#course-uemail").focus();
});
$("#btn-show-modal-login").on("click", function() {
    $("#forgotpwd-group-abc").hide();
    $("#login-group-abc").css("display", "flex");
    $("#modal-signup").removeClass("is-active");
    $("#modal-login").addClass("is-active");
    $("#course-email").focus();
});
$(document).on('keydown', function(event) {
    if (event.key == "Escape") {
        oblsModalClose();
    }
});
$("#trigger-mitem").on("click", function() {
    if ($(this).hasClass("in")) {
        $("#dd-mitem-menu").slideUp("fast");
        $(this).removeClass("in");
    } else {
        $("#dd-mitem-menu").slideDown("fast");
        $(this).addClass("in");
    }
});
$(document).on("click", function(e) {
    if ($(e.target).closest('#trigger-mitem').length === 0) {
        $("#dd-mitem-menu").slideUp("fast");
        $("#trigger-mitem").removeClass("in");
    }
});
$(window).on("load", function() {
    $("#dmenu-catitems-2").css("display", "flex");
});
$(".dmenu-main-header").on("click", function() {
    var mid = $(this).attr("id").split("-");
    var catid = mid[3];
    $(".dmenu-catitems").hide();
    $("#dmenu-catitems-" + catid).css("display", "flex");
});
$("#ic-hamburger").on("click", function() {
    $("#dmenu-background").show();
    $("#dmenu-group").show();
});
$(".dmenu-catitem").on("click", function() {
    var mid = $(this).attr("id").split("-");
    var mblkid = mid[2];
    var catid = mid[3];
    $("#dmenu-main-conetnt").hide();
    $(".dmenu-subitems").hide();
    $("#dmenu-back").css("display", "flex");
    $("#dmenu-subitems-" + mblkid + "-" + catid).show();
    $("#dmenu-sub-content").show();
});
$("#dmenu-back").on("click", function() {
    $("#dmenu-sub-content").hide();
    $(this).hide();
    $("#dmenu-main-conetnt").show();
});
$("#dmenu-close").on("click", function() {
    $("#dmenu-group").hide();
    $("#dmenu-background").hide();
});
$("#dmenu-background").on("click", function() {
    $("#dmenu-group").hide();
    $("#dmenu-background").hide();
});
$(".footer-tab").on("click", function() {
    if ($(this).hasClass("in")) {
        $(this).next(".footer-group").removeClass("fg-active");
        $(this).children(".footer-tab-indicator").html('&plus;');
        $(this).removeClass("in");
    } else {
        $(this).next(".footer-group").addClass("fg-active");
        $(this).children(".footer-tab-indicator").html('&minus;');
        $(this).addClass("in");
    }
});
$("#mob-ic-search").on("click", function() {
    if ($(this).hasClass("in")) {
        $("#sec-search").slideUp("fast");
        $(".wrapper").animate({
            top: "0"
        }, 400);
        $(".sec-examdetails-tabs").animate({
            top: "48px;"
        }, 400);
        $(this).removeClass("in");
    } else {
        $("#sec-search").slideDown("fast");
        $(".wrapper").animate({
            top: "50px"
        }, 400);
        $(".sec-examdetails-tabs").animate({
            top: "98px"
        }, 400);
        $(this).addClass("in");
    }
});
$("#input-search").focus(function() {
    $("#obsearch-results-blk").slideDown("fast");
});
$(document).on("click", function(e) {
    if ($(e.target).closest('#input-search').length === 0) {
        $("#obsearch-results-blk").slideUp("fast");
        $("#input-search").val('');
        $("#obrelated-search-list").hide()
        $("#obsuggested-search-list").show();
    }
});
$("#input-search").keyup(function() {
    var kw = $(this).val().trim();
    if (kw != '') {
        $.get("/getsearch.php", {
            "s": kw
        }, function(data) {
            try {
                var data = JSON.parse(data);
                $("#obsuggested-search-list").hide();
                $("#obrelated-search-list").html(data['result']);
                $("#obrelated-search-list").show()
            } catch (e) {}
        });
    } else {
        $("#obrelated-search-list").hide()
        $("#obsuggested-search-list").show();
    }
});
$("#btn-forgotpwd").on("click", function() {
    $("#login-group-abc").hide();
    $("#forgotpwd-group-abc").css("display", "flex");
    $("#remail").focus();
});
$("#btn-fpwd-cancel").on("click", function() {
    $("#forgotpwd-group-abc").hide();
    $("#login-group-abc").css("display", "flex");
});
$(".btn-showloginregister1").on("click", function() {
    boxurl = $(this).attr("data-url");
    if (parseInt(islogin) >= 0) {
        window.open(boxurl, "_blank");
    } else {
        $(".errormsg").html("");
        $("#course-uemail").focus();
        $("#modal-signup").addClass("is-active");
        showregloginpup = 0;
    }
});
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}

function getCmatScore(email) {
    var rollnum = $('#rnumber').val();
    if (rollnum == '') {
        $('#rollMsg').html('Please Enter a roll number');
    } else {
        var params = {};
        params['roll'] = rollnum;
        params['email'] = email;
        var url = '/pyscripts/getcmatscore.py';
        $('#lrnumber').html('Please Wait..');
        $.post(url, params, function(data) {
            $('#cmatsc-data').show();
            $('#cmatsc-data').html(data);
            $('#rollMsg').hide();
            $('html').getNiceScroll().resize();
            $('#lrnumber').html('Submit');
        });
    }
}

function resetPassword() {
    var email = $("#remail").val();
    if (email != '') {
        var filter = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*?)\s*;?\s*)+/;
        if (!filter.test(email)) {
            $('.rePassMsg').html('Enter Valid Email Address');
        } else {
            var url = "/pyscripts/forgotpass.py";
            var params = {};
            params['email'] = email;
            $('#lreset').html('Please Wait...');
            $.post(url, params, function(data) {
                if (data.trim() == '0') {
                    $('.rePassMsg').html('Email ID not registered.');
                    $('#lreset').html('Submit');
                } else {
                    $("#fpwd-success-msg-title").html("Email Sent");
                    $("#fpwd-success-msg-text").html("Password reset details have been mailed to you.");
                    $("#obls-group2").hide();
                    $("#success-msg-group").css("display", "flex");
                    $('.rePassMsg').html('');
                    $('#lreset').html('Submit');
                }
            });
        }
    } else {
        $('.rePassMsg').html('Please Enter your email');
    }
}
$('#remail').keypress(function(e) {
    if (e.which == 13) {
        $("#lreset").trigger("click");
    }
});

function updatepassword(email, e) {
    var newpass = $('#updatepass').val();
    if (newpass == '') {
        $('#updMsg').html('Please Enter a Password');
    } else {
        var params = {};
        params['newpass'] = newpass;
        params['email'] = email;
        params['auth'] = e;
        var url = '/pyscripts/updatepassword.py';
        $('#updatesubmit').html('Please Wait..');
        $.post(url, params, function(data) {
            if (data.trim() == '0') {
                $('#updMsg').html('Invalid Passowrd/auth code.');
                $('#updatesubmit').html('Submit');
            } else {
                $("#fpwd-success-msg-title").html("Password Reset");
                $("#fpwd-success-msg-text").html("We have successfully reseted the password, please login again with the new password.");
                $("#resetpwd-group").hide();
                $("#updatepwd-success-msg-group").css("display", "flex");
                $('#updMsg').html('');
            }
        });
    }
}
$('#updatepass').keypress(function(e) {
    if (e.which == 13) {
        $("#updatesubmit").trigger("click");
    }
});

function gq(p) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == p) {
            return decodeURIComponent(pair[1]);
        }
    }
    return "0";
}

function courseInValidation(courseurl) {
    if (boxurl != "") {
        courseurl = boxurl;
    }
    var email = $("#course-email").val();
    var pwd = $("#course-password").val();
    var capt = $("#lcaptcha-code").val();
    if (email != '' && pwd != '' && capt != '') {
        var filter = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*?)\s*;?\s*)+/;
        if (!filter.test(email)) {
            $('.courseIn').html('Enter Valid Email Address');
        } else {
            $('.courseIn').html('');
            $('#coursein').html('Please Wait');
            var url = "/pyscripts/loginnext.php";
            var params = {};
            params['lemail'] = email;
            params['lpwd'] = pwd;
            params['lpwd1'] = capt;
            $.post(url, params, function(data) {
                if (data.trim() == '0') {
                    $('.courseIn').html('Invalid Credentials');
                    $('#coursein').html('Submit');
                } else {
                    var next = gq('next');
                    if (next == "0")
                        window.location = courseurl;
                    else
                        window.location = next;
                    $('.courseIn').html('');
                }
            });
        }
    } else {
        $('.courseIn').html('Fields cannot be empty');
    }
}
$('#course-password,#lcaptcha-code').keypress(function(e) {
    if (e.which == 13) {
        $("#coursein").trigger("click");
    }
});

function courseUpValidation(ref, course, courseurl) {
    if (boxurl != "") {
        courseurl = boxurl;
    }
    var email = $("#course-uemail").val();
    var pwd = $("#course-upassword").val();
    var mob = $('#course-uphone').val();
    if (email != '' && pwd != '' && mob != '') {
        var filter = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*?)\s*;?\s*)+/;
        if (!filter.test(email)) {
            $('.courseUp').html('Enter Valid Email Address');
        } else {
            var mfilter = /^\d{10}$/;
            if (!mfilter.test(mob)) {
                $('.courseUp').html('Enter Valid phone number');
            } else {
                $('#courseup').html('Please Wait');
                var url = "/pyscripts/courseregister.py";
                var params = {};
                params['e'] = email;
                params['p'] = pwd;
                params['m'] = mob;
                params['r'] = ref;
                params['c'] = course;
                $.post(url, params, function(data) {
                    if (data.trim() == '0') {
                        $('#courseup').html('REGISTER');
                        $('.courseUp').html('Email already registered');
                    } else {
                        var next = gq('next');
                        var nexturl = '';
                        if (next == "0")
                            nexturl = courseurl;
                        else
                            nexturl = next;
                        var googref = gq('ref');
                        if (typeof gtag_report_conversion === "function" && googref.startsWith("Goog")) {
                            gtag_report_conversion(nexturl);
                        } else {
                            window.location = nexturl;
                        }
                        $('.courseUp').html('');
                    }
                });
            }
        }
    } else {
        $('.courseUp').html('Fields cannot be empty');
    }
}
$('#course-uemail,#course-upassword,#course-uphone').keypress(function(e) {
    if (e.which == 13) {
        $("#courseup").trigger("click");
    }
});

function goto(url) {
    window.location = url;
}

function courseInValidation1() {
    var email = $("#course-email").val();
    if (email != '') {
        var filter = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*?)\s*;?\s*)+/;
        if (!filter.test(email)) {
            $('.courseIn').html('Enter Valid Email Address');
        } else {
            $('.courseIn').html('');
            $('#coursein1').html('Please Wait');
            params = {};
            params['email'] = email;
            $.post("/pyscripts/next.php", params, function(captchaurl) {
                $("#img-oblcaptcha").html("<img src='" + captchaurl + "' alt=''>");
                $("#course-email").attr("readonly", true);
                $(".disable-loginemail").css("background-color", "#F1F3F9");
                $("#course-email").css("background-color", "#F1F3F9");
                $("#course-email").siblings(".floating-label").hide();
                $("#loginnext-group").show();
                $("#coursein").show();
                $('#lemailnext').val(email);
                $('#coursein1').hide();
                $('.courseIn').html('');
                $("#course-password").focus();
            });
        }
    } else {
        $('.courseIn').html('Fields cannot be empty');
    }
}
$('#course-email').keypress(function(e) {
    if (e.which == 13) {
        $("#coursein1").trigger("click");
    }
});
$(".ob-inputfield").focusout(function() {
    var infval = $(this).val();
    if (infval != '') {
        $(this).next(".floating-label").css("top", "4px");
        $(this).next(".floating-label").css("font-size", "8px");
    } else {
        $(this).next(".floating-label").css("top", "19px");
        $(this).next(".floating-label").css("font-size", "12px");
    }
});
$(".ob-inputfield").focus(function() {
    $(this).next(".floating-label").css("top", "4px");
    $(this).next(".floating-label").css("font-size", "8px");
});

function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=.oliveboard.in";
}
var showregloginpup = 1;
$(window).load(function() {
    var isregcookie = document.cookie.indexOf("registerpopup");
    if (isregcookie == -1) {
        setTimeout(function() {
            if (showregloginpup) {
                showLoginRegisterwl();
            }
        }, 7000);
        setCookie('registerpopup', '1', 1);
    }
});