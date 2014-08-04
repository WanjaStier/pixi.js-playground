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
    circle.anchor.x = circle.anchor.y = .5;


    //draw a circle
    circle.beginFill(0xff00ff,.5);
    circle.drawCircle(470, 200,100);
    circle.endFill();


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