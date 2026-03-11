$(document).ready(function() {
    // Force play hero video (muted for autoplay compliance)
    const $heroVideo = $('.hero-video');
    $heroVideo.prop('muted', true);
    $heroVideo[0].play().catch(function(e) {
        console.log('Hero video autoplay failed:', e);
    });

    // Hero Section Full Height (your original logic, cleaned up)
    function setHeroHeight() {
        var windowH = $(window).height();
        var wrapperH = $('.hero').height();
        if (windowH > wrapperH) {
            $('.hero').css({'height': windowH + 'px'});
        }
    }

    setHeroHeight(); // Initial call

    $(window).resize(function() {
        var windowH = $(window).height();
        var wrapperH = $('.hero').height();
        var truecontentH = $('#truecontent').height();
        if (windowH > truecontentH) {
            setHeroHeight();
        }
    });
});