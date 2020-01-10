var vw = window.innerWidth
var vh = window.innerHeight
var bg1 = 'img1.jpg'
var bg2 = 'img2.jpg'
var disp = 'clouds.jpg'

function displacementBg(img) {
    const app = new PIXI.Application({
        width: vw,
        height: vh,
        resolution: window.devicePixelRatio || 1
    });
    var canvas = document.body.appendChild(app.view);

    canvas.classList.add('canvas')

    app.stage.interactive = true;

    const container = new PIXI.Container();
    app.stage.addChild(container);

    const flag = PIXI.Sprite.from(img);
    container.addChild(flag);
    flag.x = 0;
    flag.y = 0;

    const displacementSprite = PIXI.Sprite.from('clouds.jpg');
    // Make sure the sprite is wrapping.
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementFilter.padding = 100;

    displacementSprite.position = flag.position;

    app.stage.addChild(displacementSprite);

    flag.filters = [displacementFilter];

    displacementFilter.scale.x = 60;
    displacementFilter.scale.y = 120;

    app.ticker.add(() => {
        // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
        displacementSprite.x++;
        // Reset x to 0 when it's over width to keep values from going to very huge numbers.
        if (displacementSprite.x > displacementSprite.width) {
            displacementSprite.x = 1;
        }
    });
}

displacementBg(bg1)
displacementBg(bg2)

