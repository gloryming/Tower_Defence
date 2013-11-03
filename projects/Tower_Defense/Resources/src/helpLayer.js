
//back:zOrder=0   background
//middle:zOrder=1  menu
//font:zOrder=2
var helpLayer = cc.Layer.extend({
           ctor:function(){
           this._super();
           this.init();
           },
                               
           init:function(){
           this._super();
           //background_Help
           var bgHelp = cc.Sprite.createWithSpriteFrameName("help_bg.png");
           bgHelp.setPosition(winSize.width / 2, winSize.height / 2);
           this.addChild(bgHelp,0);
           /*//background_statics
           var bgStatics = cc.Sprite.createWithSpriteFrameName("statistics_bg.png");
           bgStatics.setPosition(winSize.width / 2, winSize.height / 2);
           bgStatics.setVisible(false);
           this.addChild(bgStatics,0);
           //background_statics
           var bgCredits = cc.Sprite.createWithSpriteFrameName("credits_bg.png");
           bgCredits.setPosition(winSize.width / 2, winSize.height / 2);
           bgCredits.setVisible(false);
           this.addChild(bgCredits,0);*/
           //help_btn
           var home = cc.Sprite.createWithSpriteFrameName("help_home_normal.png");
           var homeSelected = cc.Sprite.createWithSpriteFrameName("help_home_pressed.png");
           var btnHome = cc.MenuItemSprite.create(home,
                                                     homeSelected,
                                                     this.onHome,
                                                     this);

                               
           //btn_help
           var help = cc.Sprite.createWithSpriteFrameName("tips_normal_CN.png");
           var helpSelected = cc.Sprite.createWithSpriteFrameName("tips_selected_CN.png");
           var helpDisabled = cc.Sprite.createWithSpriteFrameName("tips_selected_CN.png");
           var btnHelp = cc.MenuItemSprite.create(help,
                                                    helpSelected,
                                                    helpDisabled,
                                                    function(sender){
                                                    btnHelp.setEnabled(false);
                                                    btnMonster.setEnabled(true);
                                                    btnTower.setEnabled(true);
                                                   /* bgOptions.setVisible(true);
                                                    bgStatics.setVisible(false);
                                                    bgCredits.setVisible(false);*/
                                                    },
                                                  this);
           btnHelp.setEnabled(false);
            //btn_monster
           var monster = cc.Sprite.createWithSpriteFrameName("monster_normal_CN.png");
           var monsterSelected = cc.Sprite.createWithSpriteFrameName("monster_selected_CN.png");
           var monsterDisabled = cc.Sprite.createWithSpriteFrameName("monster_selected_CN.png");
           var btnMonster = cc.MenuItemSprite.create(monster,
                                                    monsterSelected,
                                                    monsterDisabled,
                                                    function(sender){
                                                    btnHelp.setEnabled(true);                                                      
                                                    btnMonster.setEnabled(false);
                                                    btnTower.setEnabled(true);
                                                   /* bgOptions.setVisible(false);
                                                    bgStatics.setVisible(true);
                                                    bgCredits.setVisible(false);*/
                                                    },
                                                    this);
           //btn_tower
           var tower = cc.Sprite.createWithSpriteFrameName("tower_normal_CN.png");
           var towerSelected = cc.Sprite.createWithSpriteFrameName("tower_selected_CN.png");
           var towerDisabled = cc.Sprite.createWithSpriteFrameName("tower_selected_CN.png");
           var btnTower = cc.MenuItemSprite.create(tower,
                                                    towerSelected,
                                                    towerDisabled,
                                                    function(sender){
                                                    btnHelp.setEnabled(true);                                                      
                                                    btnMonster.setEnabled(true);
                                                    btnTower.setEnabled(false);
                                                  /*bgOptions.setVisible(false);
                                                    bgStatics.setVisible(false);
                                                    bgCredits.setVisible(true);*/
                                                    },
                                                    this);

           var menuHelp = cc.Menu.create(btnHome,btnHelp,btnMonster,btnTower);
           menuHelp.setPosition(winSize.width / 16,winSize.height / 1.088);
           btnHelp.setPosition(winSize.width / 3.8,0);
           btnMonster.setPosition(winSize.width / 3.8 + btnHelp.getContentSize().width,0);
           btnTower.setPosition(winSize.width / 3.8 + btnMonster.getContentSize().width*2,0);
           this.addChild(menuHelp,1);
           return true;
         },
         onHome:function(sender)
         {
               var scene =new MyScene();
               director.replaceScene(cc.TransitionSlideInB.create(0.3, scene));
         }
    });