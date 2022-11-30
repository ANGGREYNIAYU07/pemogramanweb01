(function (Rp) {
    "use strict";
    
    // Dropdown on mouse hover
    Rp(document).ready(function () {
        function toggleNavbarMethod() {
            if (Rp(window).width() > 768) {
                Rp('.navbar .dropdown').on('mouseover', function () {
                    Rp('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    Rp('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                Rp('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        Rp(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    Rp(window).scroll(function () {
        if (Rp(this).scrollTop() > 100) {
            Rp('.back-to-top').fadeIn('slow');
        } else {
            Rp('.back-to-top').fadeOut('slow');
        }
    });
    Rp('.back-to-top').click(function () {
        Rp('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Header slider
    Rp('.header-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Product Slider 4 Column
    Rp('.product-slider-4').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Slider 3 Column
    Rp('.product-slider-3').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Detail Slider
    Rp('.product-slider-single').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slider-single-nav'
    });
    Rp('.product-slider-single-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.product-slider-single'
    });
    
    
    // Brand Slider
    Rp('.brand-slider').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Review slider
    Rp('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Widget slider
    Rp('.sidebar-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Quantity
    Rp('.qty button').on('click', function () {
        var Rpbutton = Rp(this);
        var oldValue = Rpbutton.parent().find('input').val();
        if (Rpbutton.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    
    
    // Shipping address show hide
    Rp('.checkout #shipto').change(function () {
        if(Rp(this).is(':checked')) {
            Rp('.checkout .shipping-address').slideDown();
        } else {
            Rp('.checkout .shipping-address').slideUp();
        }
    });
    
    
    // Payment methods show hide
    Rp('.checkout .payment-method .custom-control-input').change(function () {
        if (Rp(this).prop('checked')) {
            var checkbox_id = Rp(this).attr('id');
            Rp('.checkout .payment-method .payment-content').slideUp();
            Rp('#' + checkbox_id + '-show').slideDown();
        }
    });
})(jQuery);

