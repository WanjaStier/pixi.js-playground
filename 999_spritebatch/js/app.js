var app = (function(app){
   'use strict';


    var stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild( stats.domElement );

    var WIDTH = document.body.clientWidth;
    var HEIGHT = Math.max( window.innerHeight, document.body.clientHeight );
    var NUM_PARTICLES = 40000;

    //set up stage passing in background colour in hex format
    var stage = new PIXI.Stage(0);

    var renderer = PIXI.autoDetectRenderer( WIDTH,HEIGHT);

    document.body.appendChild(renderer.view);

    var container = new PIXI.SpriteBatch();
    stage.addChild(container)



    var i = 0;
    for( ; i < NUM_PARTICLES ; i++) {


        var s = new PIXI.Sprite.fromImage('../_assets/particle.png');
        s.x = Math.random()*WIDTH;
        s.y = Math.random()*HEIGHT;

        s.ox = s.x;
        s.oy = s.y;

        container.addChild(s);

    }



    requestAnimFrame( animate );


    function getDistance(x1, y1, x2, y2) {
        var dx = x1-x2;
        var dy = y1-y2;
        return Math.sqrt(dx * dx + dy * dy);
    }


    //force
    var repMultiplier = 30000000;

    var forceRadius = 3;

    var restoreSpeedX = 0.06;
    var restoreSpeedY = 0.07;

    var maxRepulsionForce = 100;





    function animate() {

        stats.begin();

        requestAnimFrame( animate );

        //circle.scale.x = circle.scale.y = ( Math.sin( step++*speed ) +1 ) /2 * maxScale;

        var i = 0;

        var mousePos = stage.getMousePosition();

        var my = mousePos.y;
        var mx = mousePos.x;


        for( ; i < NUM_PARTICLES ; i++) {

            var child = container.getChildAt(i);

            var ax = child.x;
            var ay = child.y;
            var ox = child.ox;
            var oy = child.oy;
            var d = getDistance(mx, my, ax, ay);
            var repulsion = repMultiplier;

            for (var j = 0; j<forceRadius; j++) {
                repulsion /= d;
            }

            repulsion = Math.min(maxRepulsionForce, repulsion);
            var angle1 = Math.atan2(ay-my, ax-mx);
            var xspeed = repulsion*Math.cos(angle1)+(ox-ax)*restoreSpeedX;
            var yspeed = repulsion*Math.sin(angle1)+(oy-ay)*restoreSpeedY;
            // if not cacheAsBitmap, x, y can be float points,
            // looks smooth
            child.x = child.x+xspeed;
            child.y = child.y+yspeed;

        }
        renderer.render(stage);

        stats.end();
    }

    return app;
})(app || {} );