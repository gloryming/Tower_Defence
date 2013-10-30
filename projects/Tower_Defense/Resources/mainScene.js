/***
 Created by Yiming 2013.10.28
 
 
 
 
 ***/


require("jsb.js");

var appFiles = [
    'src/resource.js',
    'src/menuScene.js',
    'src/gameLayer.js'
];

cc.dumpConfig();

for( var i=0; i < appFiles.length; i++) {
    require( appFiles[i] );
}

var director = cc.Director.getInstance();
director.setDisplayStats(true);

// set FPS. the default value is 1.0/60 if you don't call this
director.setAnimationInterval(1.0 / 60);

// create a scene. it's an autorelease object
var myScene = new MyScene();

// run
director.runWithScene(myScene);

