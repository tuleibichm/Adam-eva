function include(uri, callback) {
    var script = document.createElement("script");
    script.src = uri;
    script.onload = callback;
    document.head.appendChild(script);
}
include('static/js/vendor/jquery.min.js', function (){
    include('static/js/vendor/jquery-ui.min.js', function (){

        /* range slider */
        (function () {
            var el = $('.ageSlider'),
                min = el.data("min") || 0,
                max = el.data("max") || 10;
            el.slider({
                max: max,
                min: min,
                range: true,
                values: [ min, max ],
                slide: function( event, ui ) {
                    $(".ui-fromAge").text(ui.values[ 0 ]);
                    $(".ui-toAge").text(ui.values[ 1 ]);
                },
                create: function ( event, ui ) {
                    $(".ui-fromAge").text(min);
                    $(".ui-toAge").text(max);
                }
            });
        })();

        $( "select.field" ).selectmenu();
        $( ".accordion" ).accordion({
            heightStyle: 'content',
            collapsible: true,
            active: false
        });
    });



    $('.openMenu').click(function () {
        $(this).siblings('nav').show(300);
    });
    $('.closeMenu').click(function () {
       $(this).closest('nav').hide(300);
    });

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
                centerPadding: '16px',
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
            $('#seenSlider').slick({
                infinite: false,
                slidesToShow: 6,
                arrows: false,
                dots: true,
                centerPadding: '16px',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5
                    }
                },
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2
                        }
                    }]
            });
        });
    }
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
    if($('.modal')){
        var btnOpen = $('.modalOpen');
        btnOpen.click(function () {
            var modalData = $(this).data("modal");
            $('.' + modalData).fadeIn(300);
            return false;
        });

        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".modal__box"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".modal").fadeOut(300);
                return false;
            }
        });
        $('.close').click(function () {
            $(".modal").fadeOut(300);
            return false;
        });
        $(document).keydown(function(e) {
            if( e.keyCode === 27 ) {
                $(".modal").fadeOut(300);
                return false;
            }
        });
    }
    if($('.percentLine')){
        $('.percentLine span').css("width", $('.percentLine').data("percent") + "%");
    }

    if($('.forMoreText')){
        var btnMore = document.createElement('button');
        $(btnMore).addClass('button button-more');
        $('.forMoreText').parent().append(btnMore);
        $(btnMore).click(function () {
            $(this).siblings('.forMoreText').toggleClass('fullHeight');
            $(this).toggleClass('fullHeight');
        });
    }

    function successMessage(text) {
        if($('.successMessage')){
            $('.successMessage').remove();
        }
        var successMessage = document.createElement('div');
        successMessage.classList.add('successMessage');
        document.body.appendChild(successMessage);
        $('.successMessage').text(text).fadeIn(500);
        setTimeout(function () {
            $('.successMessage').fadeOut(500);
            $('.successMessage').remove();
        }, 5000);
    }

    function setListener() {
        $('#sendLetter').click(function () {
            successMessage("Email successfully sent");
        });
        $('#sendGift').click(function () {
            successMessage("Gift successfully sent");
        });
        $('#addToFavorite').click(function () {
            successMessage("Your request has been accepted. We will contact you in advance for further details.");
        });
    }
    setListener();

});