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

function init() {
    fullPage()

    displacementBg(bg2, 2)

    displacementBg(bg1, 1)

    window.addEventListener("scroll", function () {
        yOffset = window.pageYOffset
        windowTop()
    })

    if (window.pageYOffset >= 937) {
        liquidSlide()
    }
}

function windowTop() {
    if (yOffset <= dh/4) {
        reverseSlide()
    } else if (yOffset >= 1) {
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
    $('.content').on("mousewheel", function (e) {
        var sectionPos = parseInt($(this).attr("data-index"));
        if (e.originalEvent.wheelDelta >= 0) {
            $("html,body").stop().animate({ scrollTop: sectionPos - win_h }, 850, 'easeInOutCubic');
            return false;
        } else if (e.originalEvent.wheelDelta < 0) {
            $("html,body").stop().animate({ scrollTop: sectionPos + win_h }, 850, 'easeInOutCubic');
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
    }, 1500);
}

function reverseSlide() {
    for (var j = 0; j < canvases.length; j++) {
        canvases[j].style.display = 'block'
    }

    setTimeout(() => {
        for (var l = 0; l < canvases.length; l++) {
            canvases[l].style.display = 'block'
        }
    }, 1000);

    mains[0].classList.remove('active')

    setTimeout(function() {
        for (var k = mains.length - 1; k > -1; k--) {
            (function (_k) {
                if (_k > -1) {
                    setTimeout(function () {
                        mains[_k].classList.remove('active')
                    }, _k + 100);
                }
            })(k)
        }
    },200)
}

init()
