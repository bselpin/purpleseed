var vw = window.innerWidth
var vh = window.innerHeight
var dw = document.documentElement.clientWidth
var dh = document.documentElement.clientHeight
var bg1 = './images/img1.jpg'
var bg2 = './images/img2.jpg'
var disp = './images/clouds.jpg'
var main = document.getElementById('main')
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 }
var mains = document.getElementsByClassName('m')
var canScroll = false
var canvases = document.getElementsByClassName('canvas')

function displacementBg(img, id) {
    if(id === 2) {
        vh = vh*1.5
    }
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
        flag.height = vh - 100
        flag.x = -5
        flag.y = -200
    } else {
        flag.width = vw + 130
        flag.height = vh - 80
        flag.x = -70
        flag.y = -130
    }    

    const displacementSprite = PIXI.Sprite.from(disp);

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementFilter.padding = 0;

    displacementSprite.position = flag.position;

    app.stage.addChild(displacementSprite);

    flag.filters = [displacementFilter];

    displacementFilter.scale.x = 60;
    displacementFilter.scale.y = 120;

    app.ticker.add(() => {        
        displacementSprite.x++;
        if (displacementSprite.x > displacementSprite.width) {
            displacementSprite.x = 1
        }
    });
}
displacementBg(bg2, 2)

displacementBg(bg1, 1)


function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

function fullPage() {
    $('.content').on("mousewheel", function (e) {
        var sectionPos = parseInt($(this).attr("data-index"));
        if (e.originalEvent.wheelDelta >= 0) {
            $("html,body").stop().animate({ scrollTop: sectionPos - win_h }, 500);
            return false;
        } else if (e.originalEvent.wheelDelta < 0) {
            $("html,body").stop().animate({ scrollTop: sectionPos + win_h }, 500);
            return false;
        }
        detectService()
    });
}

console.log(window.pageYOffset)

if(window.pageYOffset >= 937) {
    main.addEventListener('wheel', liquidSlide);
    fullPage()
    for (var j = 0; j < canvases.length; j++) {
        canvases[j].style.display = 'none'
    }
    mains[0].style.display = 'none'
} else {

}

main.addEventListener('wheel', preventDefault, {passive: false});
main.addEventListener('wheel', liquidSlide);

function liquidSlide() {
    for(var i = 0; i < mains.length; i++) {
        (function(x) {
            setTimeout(function() {
                mains[x].classList.add('active')
            }, x+100);
        })(i)
        canScroll = true
    }

    setTimeout(() => {
        for(var j = 0; j < canvases.length; j++) {
            canvases[j].style.display = 'none'
        }
        fullPage()
        document.removeEventListener('wheel', preventDefault, { passive: false });
    }, 2000);
}

