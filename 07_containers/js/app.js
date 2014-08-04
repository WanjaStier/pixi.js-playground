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

    //create main container
    var container = new PIXI.DisplayObjectContainer();

    //add container to the stage
    stage.addChild( container );

    var logos = [];
    var amount = 100;

    var texture = PIXI.Texture.fromImage("../_assets/akqa_logo_white.png");

    for (var i = 0; i < amount; i++)  {

        var logo = new PIXI.Sprite( texture );

        logo.anchor.y = 0.5;
        logo.anchor.x = 0.5;

        logos.push(logo);
        logo.scale.y =logo.scale.x = Math.random()*1;

        logo.tint = Math.random()*0xffffff;

        logo.position.x = Math.random()*800;
        logo.position.y = Math.random()*600;

        //this time we add our sprite to the container rather the stage
        container.addChild( logo );
    }

    requestAnimFrame( animate );

    var maxX = WIDTH - 800;
    var step = 0;
    var speed = 0.02;

    function animate() {

        stats.begin();

        requestAnimFrame( animate );

        //animate our container with all its children
        container.x = ( Math.sin( step++*speed ) +1 ) /2 * maxX;

        renderer.render(stage);

        stats.end();
    }

    return app;
})(app || {} );