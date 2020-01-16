/*============================
NAVBAR
============================*/
$(document).ready(function () {
    $('#rightSide').scroll(function () {
        scroll = $('#rightSide').scrollTop();
        if (scroll > 100) {
            $('.site-header').css({"position":"fixed"});
            $('.site-header').css({"width":"50%"});
            $('.site-header').css({"top":"0"});
            $('.site-header').css({"background":"#fff"});
        } else {
            $('.site-header').css({"position":"relative"});
            $('.site-header').css({"background":"transparent"});
            $('.site-header').css({"width":"100%"});
        }
    })
})