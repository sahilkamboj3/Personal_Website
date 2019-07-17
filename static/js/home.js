//Scrolling Animation


function jump(h){
    var top = document.querySelector("." + h).offsetTop;
    window.scrollTo(0,top).animate();
}

$(document).ready(function(){
    $(window).scroll(function(){
        $('.me').css("opacity", 1 - $(window).scrollTop() / 700)
    })
})