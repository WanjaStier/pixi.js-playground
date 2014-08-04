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

    var bgTexture = PIXI.Texture.fromImage('../_assets/background.jpg');
    var bg = new PIXI.Sprite( bgTexture );
    stage.addChild(bg);

    var bulgePinchFilter = new PIXI.BulgePinchFilter();


    requestAnimFrame( animate );

    var maxScale = 5;
    var step = 0;
    var speed = 0.01;


    function animate() {

        stats.begin();

        requestAnimFrame( animate );

        bg.filters = [bulgePinchFilter];

        renderer.render(stage);

        stats.end();
    }

    return app;
})(app || {} );