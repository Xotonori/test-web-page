$(document).load('ready',function () {

    const slideDownArrow = $('.slide-down-arrow');
    const dotsMenu = $('.dots-menu');
    const topMenu = $('.top');
    const subMenu = $('.sub');



    $(window).on('resize',function() {
        /*Анимация масштабирования контента */
        adaptiveSizeMainImages(faceMember);
        animationMenu();
    });


    const animationDotsMenu = () => {

        const removeStyleDots = () => {
            setTimeout(function () {
                $('.dot').attr('style', '');
            }, 700);
        };

        dotsMenu.on('mouseenter', function () {

            $('.dot:nth-child(1)').css({
                '-webkit-animation':  'growing 1s 1 ease-in-out',
                'animation':  'growing .5s 1 ease-in-out'
            });

            $('.dot:nth-child(2)').css({
                '-webkit-animation':  'growing 1s 1 ease-in-out .1s',
                'animation':  'growing .5s 1 ease-in-out .1s'
            });

            $('.dot:nth-child(3)').css({
                '-webkit-animation':  'growing 1s 1 ease-in-out .2s',
                'animation':  'growing .5s 1 ease-in-out .2s'
            });

            removeStyleDots();

        });

        dotsMenu.on('mouseleave', function () {

            $('.dot:nth-child(1)').css({
                '-webkit-animation':  'growing 1s 1 ease-in-out .2s',
                'animation':  'growing .5s 1 ease-in-out .2s'
            });

            $('.dot:nth-child(2)').css({
                '-webkit-animation':  'growing 1s 1 ease-in-out .1s',
                'animation':  'growing .5s 1 ease-in-out .1s'
            });

            $('.dot:nth-child(3)').css({
                '-webkit-animation':  'growing 1s 1 ease-in-out',
                'animation':  'growing .5s 1 ease-in-out'
            });

            removeStyleDots();

        });
    };


    const animationArrowMobileMenu = (arrowMouseover, arrowMouseout) => {

        slideDownArrow.on('mouseover', function () {
            $(this).stop().animate({
                left: arrowMouseover
            }, 200)
        });

        slideDownArrow.on('mouseout', function () {
            $(this).stop().animate({
                left: arrowMouseout
            }, 400)
        });
    };


    const removeStylesTopAndSub = (topMenu, subMenu, classTypeOfScreen) => {
        subMenu.removeClass(classTypeOfScreen);
        if (!subMenu.hasClass(classTypeOfScreen)) {
            subMenu.attr('style', '');
            topMenu.attr('style', '');
        }
    };


    const showAndHideSubMenuMobile = (classTypeOfScreen) => {
        $('.top > li > a').on('mouseover', function () {
            let thisSubmenu = $(this).parent().find('.' + classTypeOfScreen);
            thisSubmenu.stop().slideDown(400);
        });

        $('.top > li').on('mouseleave', function () {
            let thisSubmenu = $(this).find('.' + classTypeOfScreen);
            thisSubmenu.stop().slideUp(400);
        });
    };


    const animationMenu = () => {

        animationDotsMenu();

        if (window.innerWidth > 1024) {
            /*Изначальная позиция меню*/
            topMenu.stop().animate({
                top: 0,
                right: 0,
                display: 'block',
                opacity: 1
            }, 0);
        }

        if (window.innerWidth < 1024 && window.innerWidth > 480) {

            /*Изначальная позиция меню*/
            topMenu.stop().animate({
                right: '-400px',
                opacity: 0
            }, 0);

            animationArrowMobileMenu('270px', '260px');

            /*Анимация подменю планшет*/
            subMenu.addClass('tablet-visible');
            if (subMenu.hasClass('tablet-visible')) {

                /*Анимация разворачивания мобильного меню*/
                dotsMenu.on('click', function () {
                    $(this).parent().find('.top').stop().animate({
                        right: 0,
                        opacity: 1
                    }, 650)
                });

                /*Анимация сворачивания мобильного меню*/
                slideDownArrow.on('click', function () {
                    $(this).parent().stop().animate({
                        right: '-400px',
                        opacity: 0
                    }, 650)
                });

                showAndHideSubMenuMobile('tablet-visible');
            }

        } else {
            /*Возвращаем позиции и стили в исходное состояние при переходе на другую версию сайта*/
            removeStylesTopAndSub(topMenu, subMenu, 'tablet-visible');
            slideDownArrow.css({ left: '6%' });
        }

        if (window.innerWidth < 480) {

            /*Изначальная позиция меню*/
            topMenu.css({
                display: 'none',
                opacity: 1
            });

            animationArrowMobileMenu('8%', '6%');

            /*Анимация подменю смартфон*/
            subMenu.addClass('mobile-visible');
            if (subMenu.hasClass('mobile-visible')) {

                /*Анимация разворачивания сворачивания мобильного меню*/
                slideDownArrow.on('click', function () {
                    $(this).parent().stop().fadeOut()
                });

                dotsMenu.on('click', function () {
                    $(this).parent().find('.top').stop().fadeIn();
                });

                showAndHideSubMenuMobile('mobile-visible');

            }

        } else {
            /*Возвращаем позиции и стили в исходное состояние при переходе на другую версию сайта*/
            removeStylesTopAndSub(topMenu, subMenu, 'mobile-visible');
            slideDownArrow.css({ left: 260 });
        }
    };

    animationMenu();


/*Адаптивность изуальной состовляющей контента*/
    const faceMember = $('.face-member');
    const ratio = 1300/795;

    const adaptiveSizeMainImages = (faceMember) => {
        faceMember.height(faceMember.width() / ratio);
    };

    adaptiveSizeMainImages(faceMember);


/*Анимация текстовой состовляющей контента*/
    const companyMember = $('.company-member');

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