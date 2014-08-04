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

    var texture = PIXI.Texture.fromImage("../_assets/akqa_logo_gradient.png");

    var bgTexture = PIXI.Texture.fromImage('../_assets/background.jpg');

    var bg = new PIXI.Sprite( bgTexture );

    stage.addChild(bg);


    /**
     * // the various blend modes supported by pixi
         PIXI.blendModes = {
        NORMAL:0,
        ADD:1,
        MULTIPLY:2,
        SCREEN:3,
        OVERLAY:4,
        DARKEN:5,
        LIGHTEN:6,
        COLOR_DODGE:7,
        COLOR_BURN:8,
        HARD_LIGHT:9,
        SOFT_LIGHT:10,
        DIFFERENCE:11,
        EXCLUSION:12,
        HUE:13,
        SATURATION:14,
        COLOR:15,
        LUMINOSITY:16
};
     */
    for (var i = 0; i < amount; i++)  {

        var logo = new PIXI.Sprite(texture);

        logo.anchor.y = 0.5;
        logo.anchor.x = 0.5;

        logos.push(logo);
        logo.scale.y = 1;

      //  logo.tint = Math.random()*0xffffff;
        logo.blendMode = PIXI.blendModes.ADD//5//Math.floor(Math.random()*15)

        logo.position.x = Math.random()*WIDTH;
        logo.position.y = Math.random()*HEIGHT;


        stage.addChild(logo);

    }

    requestAnimFrame( animate );

    var maxScale = 5;
    var step = 0;
    var speed = 0.01;


    var steps = [];

    for (var i = 0; i < logos.length; i++)  {
        steps.push( Math.ceil(Math.random()*1000));
    }

    function animate() {

        stats.begin();

        requestAnimFrame( animate );

       /* for (var i = 0; i < logos.length; i++)  {

            var logo = logos[i];

            logo.scale.x = logo.scale.y = ( Math.sin( steps[i]++*speed ) +1 ) /2 * maxScale;

        }*/

        renderer.render(stage);

        stats.end();
    }

    return app;
})(app || {} );