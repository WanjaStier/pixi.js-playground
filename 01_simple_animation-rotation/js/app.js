var app = (function(app){
   'use strict';


    var WIDTH = document.body.clientWidth;
    var HEIGHT = Math.max( window.innerHeight, document.body.clientHeight );

    //set up stage passing in background colour in hex format
    var stage = new PIXI.Stage(0xffffff);

    var renderer = PIXI.autoDetectRenderer( WIDTH,HEIGHT);

    document.body.appendChild(renderer.view);

    var texture = PIXI.Texture.fromImage("../_assets/akqa_logo.png");

    var logo = new PIXI.Sprite(texture);


    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;


    logo.position.x = (WIDTH/2) - (logo.width/2);
    logo.position.y = (HEIGHT/2) - (logo.height/2);

    stage.addChild(logo);



    requestAnimFrame( animate );

    function animate() {

        requestAnimFrame( animate );

        logo.rotation += 0.01;

        renderer.render(stage);

    }

    return app;
})(app || {} );