function include(uri, callback) {
    var script = document.createElement("script");
    script.src = uri;
    script.onload = callback;
    document.head.appendChild(script);
}
include('static/js/vendor/jquery.min.js', function (){
    if($('.slider')){
        include('static/js/vendor/slick.js', function (){
            $('#storiesSlider').slick({
                infinite: false,
                slidesToShow: 3,
                arrows: false,
                dots: true,
                responsive: [{

                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
            $('#testimonialsSlider').slick({
                infinite: false,
                slidesToShow: 2,
                arrows: false,
                dots: true,
                centerPadding: '17px',
                responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
            $('#tariffsSlider').slick({
                infinite: false,
                slidesToShow: 3,
                arrows: false,
                dots: true,
                centerPadding: '16px',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
            }).on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });
        });
        if($('.video')){
            function videoControll(){
                if($(this).hasClass("paused")){
                    this.getElementsByTagName('video')[0].play();
                    $(this).addClass("played").removeClass("paused");
                } else if($(this).hasClass("played")){
                    this.getElementsByTagName('video')[0].pause();
                    $(this).addClass("paused").removeClass("played");
                }
            }
            $('.video').click(videoControll);
        }
    }
});