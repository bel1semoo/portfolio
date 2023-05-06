var typed = new Typed(".text", {
   strings: ["Frontend Developer", "Designer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

function toggleAbout() {
    var aboutSection = document.querySelector('.about');
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
}


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});