var vw = window.innerWidth
var vh = window.innerHeight
var dw = document.documentElement.clientWidth
var dh = document.documentElement.clientHeight
var bg1 = 'img1.jpg'
var bg2 = 'img2.jpg'
var disp = 'clouds.jpg'
var main = document.getElementById('main')

function displacementBg(img, id) {
    if(id === 2) {
        vh = vh*1.6
    }
    const app = new PIXI.Application({
        width: vw,
        height: vh,
        resolution: 1
    });
    var canvas = main.appendChild(app.view);

    if (id === 1) {
        canvas.className = 'canvas canvas01'
    } else {
        canvas.className = 'canvas canvas02'
    }    

    app.stage.interactive = true;

    console.log(vw, vh);
    console.log(dw, dh);

    const container = new PIXI.Container();
    app.stage.addChild(container);

    const flag = PIXI.Sprite.from(img);
    container.addChild(flag);
    flag.width = vw + 6
    flag.height = vh + 6
    flag.x = -3;
    flag.y = -3;

    const displacementSprite = PIXI.Sprite.from('clouds.jpg');
    // Make sure the sprite is wrapping.
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementFilter.padding = 0;

    displacementSprite.position = flag.position;

    app.stage.addChild(displacementSprite);

    flag.filters = [displacementFilter];

    displacementFilter.scale.x = 30;
    displacementFilter.scale.y = 60;

    app.ticker.add(() => {
        // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
        displacementSprite.x++;
        // Reset x to 0 when it's over width to keep values from going to very huge numbers.
        if (displacementSprite.x > displacementSprite.width) {
            displacementSprite.x = 1
        }
    });
}

displacementBg(bg1,1)
displacementBg(bg2,2)

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

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

document.addEventListener('wheel', preventDefault, {passive: false});