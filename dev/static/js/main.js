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
            })
        });
    }
});