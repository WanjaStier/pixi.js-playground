var app = (function(app){
   'use strict';


    var WIDTH = document.body.clientWidth;
    var HEIGHT = Math.max( window.innerHeight, document.body.clientHeight );

    //set up stage passing in background colour in hex format
    var stage = new PIXI.Stage(0xffffff);

    var renderer = PIXI.autoDetectRenderer( WIDTH,HEIGHT);

    document.body.appendChild(renderer.view);

    var logos = [];
    var amount = 100;

    var texture = PIXI.Texture.fromImage("../_assets/akqa_logo_white.png");

    for (var i = 0; i < amount; i++)  {

        var logo = new PIXI.Sprite(texture)//, {x:0, y:0, width:26, height:37});

        logo.anchor.y = 0.5;
        logo.anchor.x = 0.5;

        logos.push(logo);
        logo.scale.y = 1;

        logo.tint = Math.random()*0xffffff;

        logo.position.x = Math.random()*WIDTH;
        logo.position.y = Math.random()*HEIGHT;

        stage.addChild(logo);

    }

    requestAnimFrame( animate );

    var maxScale = 1;
    var step = 0;
    var speed = 0.05;


    var steps = [];

    for (var i = 0; i < logos.length; i++)  {
        steps.push( Math.ceil(Math.random()*250));
    }

    function animate() {

        requestAnimFrame( animate );

        for (var i = 0; i < logos.length; i++)  {

            var logo = logos[i];

            logo.scale.x = logo.scale.y = ( Math.sin( steps[i]++*speed ) +1 ) /2 * maxScale;

        }


        renderer.render(stage);

    }

    return app;
})(app || {} );