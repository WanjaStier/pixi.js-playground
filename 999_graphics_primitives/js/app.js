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

    //set up stage passing in background colour in hex format
    var stage = new PIXI.Stage(0);

    var renderer = PIXI.autoDetectRenderer( WIDTH,HEIGHT);

    document.body.appendChild(renderer.view);


    //instantiate a Graphics object
    var circle = new PIXI.Graphics();

    stage.addChild(circle);

    //draw a circle
    circle.beginFill(0xff00ff);
    circle.drawCircle(0, 0,100);
    circle.endFill();

    circle.x = circle.y = 300;


    //drawing multiple primitives into a Graphics object
    var graphics = new PIXI.Graphics();
        graphics.beginFill(0xffff00);
        graphics.drawRect(400,100,100,100);
        graphics.beginFill(0x336699);
        graphics.drawEllipse(200,200,100,50);
        graphics.endFill();

    stage.addChild( graphics );

    requestAnimFrame( animate );


    var maxScale = 3;
    var step = 0;
    var speed = 0.01;

    function animate() {

        stats.begin();

        requestAnimFrame( animate );

        circle.scale.x = circle.scale.y = ( Math.sin( step++*speed ) +1 ) /2 * maxScale;

        renderer.render(stage);

        stats.end();
    }

    return app;
})(app || {} );