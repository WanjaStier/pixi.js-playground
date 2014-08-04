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

    var logos = [];
    var amount = 10;

    var texture = PIXI.Texture.fromImage("../_assets/akqa_logo_white.png");


    for (var i = 0; i < amount; i++)  {

        var logo = new PIXI.Sprite(texture);

        //center anchor point so that objects scale from the center;
        logo.anchor.y = 0.5;
        logo.anchor.x = 0.5;

        logos.push(logo);

        logo.tint = Math.random()*0xffffff;
        logo.interactive = true;
        logo.buttonMode = true;

        logo.mouseover = onMouseOver;
        logo.mouseout = onMouseOut;
        logo.mousedown = onMouseDown;

        logo.position.x = Math.random()*WIDTH;
        logo.position.y = Math.random()*HEIGHT;

        stage.addChild(logo);

    }

    function onMouseOver( e ) {

        e.target.scale.x = e.target.scale.y = 1.3;
    }

    function onMouseOut(e ) {

        e.target.scale.x = e.target.scale.y = 1;
    }

    function onMouseDown( e ) {
        e.target.scale.x = e.target.scale.y = 0.7;
    }

    requestAnimFrame( animate );

    var maxScale = 5;
    var step = 0;
    var speed = 0.01;

    function animate() {

        stats.begin();

        requestAnimFrame( animate );

        renderer.render(stage);

        stats.end();
    }

    return app;
})(app || {} );