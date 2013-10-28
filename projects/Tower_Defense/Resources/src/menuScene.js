var director = cc.Director.getInstance();
var winSize = cc.Director.getInstance().getWinSize();


var MyLayer = cc.Layer.extend({
    ctor:function() {
        this._super();
        cc.associateWithNative( this, cc.Layer );
    },

    init:function () {
        this._super();
        var helloworld = cc.LabelTTF.create("helloworld", "", 48);
        helloworld.setPosition(winSize.width / 2, winSize.height / 2);
        this.addChild(helloworld);
        var scene = cc.Scene.create();
        var layer = new gameMenu();
        scene.addChild(layer);
        director.replaceScene(scene);
        return true;
    }

});

var MyScene = cc.Scene.extend({
    ctor:function() {
        this._super();
        cc.associateWithNative( this, cc.Scene );
    },

    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});
