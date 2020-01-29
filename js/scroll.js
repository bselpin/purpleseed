var vw = window.innerWidth
var vh = window.innerHeight*1.6 - 150
var dh = document.documentElement.clientHeight
var bg1 = './images/img01.jpg'
var bg2 = './images/img02.jpg'
var disp = './images/clouds.jpg'
var main = document.getElementById('main')
var mains = document.getElementsByClassName('m')
var canvases = document.getElementsByClassName('canvas')
var yOffset

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function init() {
    var isMobile = isMobileDevice()
    
    if(!isMobile) {
        fullPage()
    }

    swipers()

    displacementBg(bg2, 2)

    displacementBg(bg1, 1)

    window.addEventListener("scroll", function () {
        yOffset = window.pageYOffset
        windowTop()
    })

    if (window.pageYOffset >= dh/2) {
        liquidSlide()
    }

    tabsController()
}

function windowTop() {
    if (yOffset <= 11) {
        reverseSlide()
    } else if (yOffset >= 10) {
        liquidSlide()
    }
}

function displacementBg(img, id) {
    const app = new PIXI.Application({
        width: vw,
        height: vh,
        resolution: 1
    });
    var canvas = main.appendChild(app.view);

    if (id === 1) {
        canvas.className = 'canvas canvas01 m'
    } else {
        canvas.className = 'canvas canvas02 m'
    }    

    app.stage.interactive = true;

    const container = new PIXI.Container();
    app.stage.addChild(container);

    const flag = PIXI.Sprite.from(img);
    container.addChild(flag);
    if(id === 2) {
        flag.width = vw
        flag.height = vh
        flag.x = -5
        flag.y = 0
    } else {
        flag.width = vw + 130
        flag.height = vh
        flag.x = -70
        flag.y = 0
    }    

    const displacementSprite = PIXI.Sprite.from(disp);

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementFilter.padding = 0;

    displacementSprite.position = flag.position;

    app.stage.addChild(displacementSprite);

    flag.filters = [displacementFilter];

    displacementFilter.scale.x = 40;
    displacementFilter.scale.y = 80;

    app.ticker.add(() => {        
        displacementSprite.x++;
        if (displacementSprite.x > displacementSprite.width) {
            displacementSprite.x = 1
        }
    });
}

function fullPage() {
    $('.content').on("wheel", function (e) {
        var sectionPos = parseInt($(this).attr("data-index"));
        if (e.originalEvent.wheelDelta >= 0) {
            $("html,body").stop().animate({ scrollTop: sectionPos - win_h }, 900, 'easeInOutCubic');
            return false;
        } else if (e.originalEvent.wheelDelta < 0) {
            $("html,body").stop().animate({ scrollTop: sectionPos + win_h }, 900, 'easeInOutCubic');
            return false;
        }
    });
}

function liquidSlide() {
    for(var i = 0; i < mains.length; i++) {
        (function(x) {
            setTimeout(function() {
                mains[x].classList.add('active')
            }, x+100);
        })(i)
    }

    setTimeout(() => {
        for(var j = 0; j < canvases.length; j++) {
            canvases[j].style.display = 'none'
        }
    }, 1400);
}

function reverseSlide() {
    for (var j = 0; j < canvases.length; j++) {
        canvases[j].style.display = 'block'
    }

    setTimeout(() => {
        for (var l = 0; l < canvases.length; l++) {
            canvases[l].style.display = 'block'
        }
    }, 1300);

    mains[0].classList.remove('active')

    setTimeout(function() {
        for (var k = mains.length - 1; k > -1; k--) {
            mains[k].classList.remove('active')
        }
    },500)
}

function swipers() {
    new WOW({
        boxClass: 'wow',
        offset: 0,
        mobile: true,
        live: true,
    }).init();
    // Swipers

    new Swiper('.swiper-tabs-mobile01', {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 20,
        initialSlide: 0,
        scrollbar: {
            el: '.swiper-scrollbar-01',
            draggable: true,
        },
    });

    new Swiper('.swiper-tabs-mobile02', {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 20,
        initialSlide: 0,
        scrollbar: {
            el: '.swiper-scrollbar-02',
            draggable: true,
        },
    });

    new Swiper('.swiper-tabs-mobile03', {
        slidesPerView: 1.2,
        speed: 500,
        spaceBetween: 20,
        initialSlide: 0,
        scrollbar: {
            el: '.swiper-scrollbar-03',
            draggable: true,
        },
    });

    new Swiper('.swiper-client-pc', {
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-client-next',
            prevEl: '.swiper-client-prev',
        },
    });

    new Swiper('.swiper-client-mobile', {
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination-client',
            type: 'bullets',
        },
    });

    new Swiper('.swiper-reference', {
        slidesPerView: 1.6,
        navigation: {
            nextEl: '.swiper-ref-next',
            prevEl: '.swiper-ref-prev',
        },
        loop: true,
        centeredSlides: true,
        watchOverflow: true,
        initialSlide: 0,
        loopAdditionalSlides: 1
    });

    new Swiper('.swiper-reference-mobile', {
        slidesPerView: 1.5,
        spaceBetween: 40,
        loop: true,
        centeredSlides: true,
        initialSlide: 0,
        loopAdditionalSlides: 1,
    });

    new Swiper('.swiper-reference-text', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-ref-next',
            prevEl: '.swiper-ref-prev',
        },
        loop: true,
        centeredSlides: true,
        watchOverflow: true,
        initialSlide: 0,
        loopAdditionalSlides: 1
    });

    new Swiper('.swiper-project-pc', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-prj-next',
            prevEl: '.swiper-prj-prev',
        },
        loop: true,
        centeredSlides: true,
        speed: 500,
        simulateTouch: false
    });

    new Swiper('.swiper-project-mobile', {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        speed: 500,
        pagination: {
            el: '.swiper-pagination-project',
            type: 'bullets',
        },
    });



    new Swiper('.swiper-project-title', {
        direction: 'vertical',
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-prj-next',
            prevEl: '.swiper-prj-prev',
        },
        observer: true,
        observeParents: true,
        loop: true,
        speed: 500,
        simulateTouch: false
    });
}

init()

window.addEventListener('load', function () {
    console.log('jobs done');  
    alert('done')  
})

