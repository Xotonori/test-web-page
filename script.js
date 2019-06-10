$(document).on('ready',function () {

    /*Создаем переменные для динамичного масштабирования*/
    const k = 1300/795;
    let faceMember = $('.face-member');
    let slideDownArrow = $('.slide-down-arrow');
    let dotsMenu = $('.dots-menu');
    faceMember.height(faceMember.width() / k);


    $(window).on('resize',function() {

        /*Анимация масштабирования контента */
        faceMember.height(faceMember.width() / k);
        animationMenu();

    });


    const animationMenu = () => {

        /*Для разрешений больше 1024px*/
        if (window.innerWidth > 1024) {
            /*Изначальная позиция мобильного меню*/
            $('.top').stop().animate({
                top: 0,
                right: 0,
                display: 'block',
                opacity: 1
            }, 0);
        }


        /*Для разрешений меньше 1024px*/
        if (window.innerWidth < 1024 && window.innerWidth > 480) {

            /*Изначальная позиция мобильного меню*/
            $('.top').stop().animate({
                right: '-400px',
                opacity: 0
            }, 0);

            /*Анимация стрелки для сворачивания мобильного меню*/
            slideDownArrow.on('mouseover', function () {
                $(this).stop().animate({
                    left: '270px'
                }, 200)
            });

            slideDownArrow.on('mouseout', function () {
                $(this).stop().animate({
                    left: '260px'
                }, 400)
            });


            /*Анимация разворачивания сворачивания мобильного меню*/
            slideDownArrow.on('click', function () {
                $(this).parent().stop().animate({
                    right: '-400px',
                    opacity: 0
                }, 650)
            });


            dotsMenu.on('click', function () {
                $(this).parent().find('.top').stop().animate({
                    right: 0,
                    opacity: 1
                }, 650)
            });


            /*Анимация подменю планшет*/
            $('.sub').addClass('tablet-visible');
            if ($('.sub').hasClass('tablet-visible')) {

                /*Показываем подменю*/
                $('.top > li > a').on('mouseover', function () {
                    let thisSubmenu = $(this).parent().find('.tablet-visible');
                    thisSubmenu.stop().slideDown(400);
                });

                /*Скрываем подменю*/
                $('.top > li').on('mouseleave', function () {
                    let thisSubmenu = $(this).find('.tablet-visible');
                    thisSubmenu.stop().slideUp(400);
                });
            }


        } else {

            /*Убираем артефакты при переходе на другую версию сайта*/
            $('.sub').removeClass('tablet-visible');
            if (!$('.sub').hasClass('tablet-visible')) {
                $('.sub').attr('style', '');
                $('.top').attr('style', '');
            }


            slideDownArrow.css({
                left: '6%'
            });

        }



        /*Для разрешений меньше 480px*/
        if (window.innerWidth < 480) {

            $('.top').css({
                display: 'none',
                opacity: 1
            });

            /*Анимация подменю смартфон*/
            $('.sub').addClass('mobile-visible');
            if ($('.sub').hasClass('mobile-visible')) {

                /*Показываем подменю*/
                $('.top > li > a').on('mouseover', function () {
                    let thisSubmenu = $(this).parent().find('.mobile-visible');
                    thisSubmenu.stop().slideDown(400);
                });

                /*Скрываем подменю*/
                $('.top > li').on('mouseleave', function () {
                    let thisSubmenu = $(this).find('.mobile-visible');
                    thisSubmenu.stop().slideUp(400);
                });

                /*Анимация разворачивания сворачивания мобильного меню*/
                slideDownArrow.on('click', function () {
                    $(this).parent().stop().fadeOut()
                });

                dotsMenu.on('click', function () {
                    $(this).parent().find('.top').stop().fadeIn();
                });
            }

            /*Анимация стрелки для сворачивания мобильного меню*/
                slideDownArrow.on('mouseover', function () {
                    $(this).stop().animate({
                        left: '8%'
                    }, 200)
                });

                slideDownArrow.on('mouseout', function () {
                    $(this).stop().animate({
                        left: '6%'
                    }, 400)
                });

        } else {

            /*Убираем артефакты при переходе на другую версию сайта*/
            $('.sub').removeClass('mobile-visible');
            if (!$('.sub').hasClass('mobile-visible')) {
                $('.sub').attr('style', '');
                $('.top').attr('style', '');
            }

            slideDownArrow.css({
                left: 260
            });


        }



















    };

    animationMenu();







/*Анимация текстовой состовляющей контента*/
    let companyMember = $('.company-member');
    companyMember.on('click',function () {

        let thisName = $(this).find('.name');
        let otherNames = $(this).parent().find('.name').not(thisName);
        let thisDescription = $(this).find('.description');
        let otherDescription = $(this).parent().find('.description').not(thisDescription);


        if (thisDescription.css('display') === 'none') {

            thisDescription.stop().slideDown(500);
            otherDescription.stop().slideUp(500);
            thisName.stop().animate({
                bottom: '-100px'
            }, 500);
            otherNames.stop().animate({
                bottom: '22px'
            }, 500);

        } else {

            thisDescription.stop().slideUp(500);
            thisName.stop().animate({
                bottom: '22px'
            }, 500);
        }
    });




























});