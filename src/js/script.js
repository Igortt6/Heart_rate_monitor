$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

   
    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
                $('.catalog-item__content-hiden').eq(i).toggleClass('catalog-item__content-hiden_active')
            })
        })
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modals

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    })
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow'); 
    })

    $('.button_mini').each(function(i) {
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    })
    
    //Validation forms
    
  function falidateForm(form) {
      $(form).validate({
        rules: {
            // simple rule, converted to {required:true}
            name: {
                required: true,
                minlength: 2,
                name: true
              },
            phone: {
                required: true,
                minlength: 6,
                phone: true
              },
            email: {
              required: true,
              email: true,
            }
        },
        messages: {
            name: {
                required:"Пожалуйста, напишите Ваше имя",
                minlength: jQuery.validator.format("Должно быть как минимум {0}  символов!")
            },
            phone: {
                required:"Заполните ваш номер телефона",
                minlength: jQuery.validator.format("Должно быть как минимум {0}  символов!")
            },
            email: {
                required: "Нам нужен ваша почта, что бы связаться с Вами",
                email: "Ваш email адрес должен быть в формате имя@домин.com"
                
            }
        }
    })
    }
    falidateForm('#consultation-form');
    falidateForm('#consultation form');
    falidateForm('#order form');

    //Smooth scroll top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.arrow-up').fadeIn();
        } else {
            $('.arrow-up').fadeOut();
        } 
    });

    new WOW().init();
});

