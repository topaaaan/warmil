$(document).ready(function () {
    $(window).scroll(function () {
        // ubah bg navbar
        var wScroll = $(this).scrollTop();
        if (wScroll >= 100) {
            $(".navbar").addClass("mobile-bg");
        } else {
            $(".navbar").removeClass("mobile-bg");
        }

        // menu
        if (wScroll > $('#header').offset().top) {
            $('.nav1').addClass('aktif');
            $('.nav2').removeClass('aktif');
            $('.nav3').removeClass('aktif');
            $('.nav4').removeClass('aktif');
            $('.aktif span').css({ "left": "20px" });
        }

        // menu
        if (wScroll > $('#menu').offset().top - 90) {
            $('.nav1').removeClass('aktif');
            $('.nav2').addClass('aktif');
            $('.nav3').removeClass('aktif');
            $('.nav4').removeClass('aktif');
            $('.aktif span').css({ "left": "148px" });
        }
    });

    // toggle navbar
    $(".menu-btn").on('click', function () {
        $(".menu-btn").toggleClass("open");
    });

    // event pada saat link di klik
    $('.page-scroll').on('click', function (e) {
        // ambil isi href
        var tujuan = $(this).attr('href');
        // tangkap elemen yang bersangkutan
        var elemenTujuan = $(tujuan);
        // pindahkan scroll
        $("html").animate({
            scrollTop: (elemenTujuan.offset().top - 80)
        }, 1250, 'easeInOutCubic');
        // mematikan href
        e.preventDefault();
    });

    $('.myslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('.pic-menu').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 420,
                settings: {
                    arrows: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 376,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.tutup').click(function () {
        // $('.tutup').addClass('minggir');
        // $('.po-button').addClass('besar');
        $(this).css({ "transform": "translateX(-100%)" });
        // $('.po-button').css({ "transform": "scale(1.1)" });
    });
    $('.fa-trash-alt').click(function () {
        // $('.tutup').removeClass('minggir');
        // $('.po-button').removeClass('besar');
        $(".tutup").css({ "transform": "translateX(0%)" });
    });

});