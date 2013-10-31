var director = cc.Director.getInstance();
var winSize = cc.Director.getInstance().getWinSize();

var layer_zOrder={bg:0, middle:10,front:100};
var MyLayer = cc.Layer.extend({
    spriteSheet:null,
    ctor:function() {
        this._super();
        cc.associateWithNative( this, cc.Layer );
    },

    init:function () {
        this._super();
        //var helloworld = cc.LabelTTF.create("helloworld", "", 48);
        /*helloworld.setPosition(winSize.width / 2, winSize.height / 2);
        this.addChild(helloworld,0);
          var scene = cc.Scene.create();
        var layer = new gameMenu();
        scene.addChild(layer);
        director.replaceScene(scene);*/
        cc.SpriteFrameCache.getInstance().addSpriteFrames("mainscene1-hd.plist");
        //this.spriteSheet = cc.SpriteBatchNode.create("mainscene1-hd.pvr.ccz");
        //this.addChild(this.spriteSheet);
        //bacground
        var bg = cc.Sprite.createWithSpriteFrameName("mainbg.png");
        bg.setPosition(winSize.width / 2, winSize.height / 2);
        // spriteSheet.addChild(bg); error
        this.addChild(bg);
          //game_logo
          var logo = cc.Sprite.createWithSpriteFrameName("mainbg_CN.png");
          logo.setPosition(winSize.width / 2, winSize.height / 2);
          this.addChild(logo,4);
          //bird
          var bird = cc.Sprite.createWithSpriteFrameName("bird.png");
          bird.setPosition(winSize.width / 6, winSize.height / 1.3);
          this.addChild(bird);
          //carrot
          var carrot = cc.Sprite.createWithSpriteFrameName("carrot.png");
          carrot.setPosition(winSize.width / 2, winSize.height / 1.7);
          this.addChild(carrot,2);
          //carrot_leaf1
          var leaf1 = cc.Sprite.createWithSpriteFrameName("leaf-1.png");
          leaf1.setPosition(winSize.width / 2.35, winSize.height / 1.3);
          this.addChild(leaf1);
          //carrot_leat2
          var leaf2 = cc.Sprite.createWithSpriteFrameName("leaf-2.png");
          leaf2.setPosition(winSize.width / 2.055, winSize.height / 1.255);
          this.addChild(leaf2,1);
          //carrot_leaf3
          var leaf3 = cc.Sprite.createWithSpriteFrameName("leaf-3.png");
          leaf3.setPosition(winSize.width / 1.755, winSize.height / 1.3);
          this.addChild(leaf3);
          //setting_btn
          var setting = cc.Sprite.createWithSpriteFrameName("btn_setting_normal.png");
          var settingSelected = cc.Sprite.createWithSpriteFrameName("btn_setting_pressed.png");
          var btnSetting = cc.MenuItemSprite.create(setting,
                                             settingSelected);
          var menuSetting = cc.Menu.create(btnSetting);
          menuSetting.setPosition(winSize.width / 5,winSize.height / 3);
          this.addChild(menuSetting);
          //adventure_btn
          var adventure = cc.Sprite.createWithSpriteFrameName("btn_adventure_normal_CN.png");
          var adventureSelected = cc.Sprite.createWithSpriteFrameName("btn_adventure_pressed_CN.png");
          var btnAdventure= cc.MenuItemSprite.create(adventure,
                                               adventureSelected,
                                               this.onAdventure,
                                               this);
          //boss_btn
          var boss = cc.Sprite.createWithSpriteFrameName("btn_adventure_normal_CN.png");
          var bossSelected = cc.Sprite.createWithSpriteFrameName("btn_adventure_pressed_CN.png");
          var btnBoss = cc.MenuItemSprite.create(boss,
                                               bossSelected);
          //nest_btn
          var nest = cc.Sprite.createWithSpriteFrameName("btn_adventure_normal_CN.png");
          var nestSelected = cc.Sprite.createWithSpriteFrameName("btn_adventure_pressed_CN.png");
          var btnNest = cc.MenuItemSprite.create(nest,
                                               nestSelected);
          var menuPattern= cc.Menu.create(btnAdventure,btnBoss,btnNest);
          menuPattern.setPosition(winSize.width / 2,winSize.height / 8);
          menuPattern.alignItemsHorizontallyWithPadding(0.3);
          this.addChild(menuPattern);
        return true;
    },
  onAdventure:function(sender)
  {
  var scene = cc.Scene.create();
  var layer = new gameMenu();
  scene.addChild(layer);
  director.replaceScene(layer);
   },

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
