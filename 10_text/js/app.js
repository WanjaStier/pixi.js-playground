var app = (function(app){
   'use strict';


    var stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild( stats.domElement );


    var WIDTH   = document.body.clientWidth;
    var HEIGHT  = Math.max( window.innerHeight, document.body.clientHeight );

    //set up stage passing in background colour in hex format
    var stage = new PIXI.Stage(0);

    var renderer = PIXI.autoDetectRenderer( WIDTH,HEIGHT);

    document.body.appendChild(renderer.view);


    app.init = function() {

        var text = new PIXI.Text("I am a multiline\ntext field! Bam!", {font: "35px Bubblegum Sans", fill: "white", align: "left"});
        text.x = text.y = 200;

        var text2 = new PIXI.Text("I am also a multiline text field with wordWrap set to 'true'",

            {   font: "35px Audiowide",
                fill: '#ff00ff',
                align: "left",
                stroke: '#ffff00',
                strokeThickness: 5,
                wordWrap:true,
                wordWrapWidth: 300
            }
        );


        /**
         *  You can also set all these properties after instantiation:
         *
         *  text3.text = "I'm some more text";
         *  text.style.align = 'left';
         *  text.style.wordWrap = false;
         *
         * @type {b.Text}
         */
        var text3 = new PIXI.Text("My font size is the same but I'm scaled down by 50%",

            {   font: "35px Droid Sans",
                fill: '#ff0000',
                align: "center",

                wordWrap:true,
                wordWrapWidth: 300
            }
        );

        text2.x = text.x;
        text2.y = 300;

        text3.x = 400;
        text3.y = 500;
        text3.scale.x = text3.scale.y = 0.5;

        stage.addChild(text);
        stage.addChild(text2);
        stage.addChild(text3);
    }

    requestAnimFrame( animate );

    function animate() {

        stats.begin();

        requestAnimFrame( animate );

        renderer.render(stage);

        stats.end();
    }

    return app;

})(app || {} );