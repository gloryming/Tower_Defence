
//back:zOrder=0   background musicMenu
//middle:zOrder=1  menu
//font:zOrder=2
var settingLayer = cc.Layer.extend({
           ctor:function(){
           this._super();
           this.init();
           },
                               
           init:function(){
           this._super();
           //background_Options
           var bgOptions = cc.Sprite.createWithSpriteFrameName("setting_bg.png");
           bgOptions.setPosition(winSize.width / 2, winSize.height / 2);
           this.addChild(bgOptions,0);
           
           //toggleBtn_bgMusic
           var bgMusicOnSprite = cc.Sprite.createWithSpriteFrameName("bgmusic_on_CN.png");
           var bgMusicOnSprite2 = cc.Sprite.createWithSpriteFrameName("bgmusic_on_CN.png");
           var bgMusicOn = cc.MenuItemSprite.create(bgMusicOnSprite,bgMusicOnSprite2);
           var bgMusicOffSprite = cc.Sprite.createWithSpriteFrameName("bgmusic_off_CN.png");
           var bgMusicOffSprite2 = cc.Sprite.createWithSpriteFrameName("bgmusic_off_CN.png");
           var bgMusicOff = cc.MenuItemSprite.create(bgMusicOffSprite,bgMusicOffSprite2);
           //只能加入MenuItem,不能直接加入Sprite 
           var btnBgMusic = cc.MenuItemToggle.create(bgMusicOn,
                                                     bgMusicOff,
                                                     this.isBgMusicOn,
                                                     this);
           //label_bgMusic
           var label_bgMusic = cc.LabelBMFont.create("music", "Abadi40-hd.fnt" );
           label_bgMusic.setScale(0.6);
           label_bgMusic.setPosition(winSize.width / 1.6, winSize.height / 1.4);
           bgOptions.addChild(label_bgMusic,1);
           var menuMusic = cc.Menu.create(btnBgMusic);
           menuMusic.setPosition(winSize.width / 1.6, winSize.height / 1.6);
           bgOptions.addChild(menuMusic,1);
           //background_statics
           var bgStatics = cc.Sprite.createWithSpriteFrameName("statistics_bg.png");
           bgStatics.setPosition(winSize.width / 2, winSize.height / 2);
           bgStatics.setVisible(false);
           this.addChild(bgStatics,0);
           //background_statics
           var bgCredits = cc.Sprite.createWithSpriteFrameName("credits_bg.png");
           bgCredits.setPosition(winSize.width / 2, winSize.height / 2);
           bgCredits.setVisible(false);
           this.addChild(bgCredits,0);
           //home_btn
           var home = cc.Sprite.createWithSpriteFrameName("setting_home_normal.png");
           var homeSelected = cc.Sprite.createWithSpriteFrameName("setting_home_pressed.png");
           var btnHome = cc.MenuItemSprite.create(home,
                                                     homeSelected,
                                                     this.onHome,
                                                     this);

                               
           //btn_option
           var option = cc.Sprite.createWithSpriteFrameName("options_normal_CN.png");
           var optionSelected = cc.Sprite.createWithSpriteFrameName("options_selected_CN.png");
           var optionDisabled = cc.Sprite.createWithSpriteFrameName("options_selected_CN.png");
           var btnOption = cc.MenuItemSprite.create(option,
                                                    optionSelected,
                                                    optionDisabled,
                                                    function(sender){
                                                    btnOption.setEnabled(false);
                                                    btnStatic.setEnabled(true);
                                                    btnCredit.setEnabled(true);
                                                    bgOptions.setVisible(true);
                                                    bgStatics.setVisible(false);
                                                    bgCredits.setVisible(false);
                                                    },
                                                  this);
           btnOption.setEnabled(false);
            //btn_static
           var static = cc.Sprite.createWithSpriteFrameName("statistics_normal_CN.png");
           var staticSelected = cc.Sprite.createWithSpriteFrameName("statistics_selected_CN.png");
           var staticDisabled = cc.Sprite.createWithSpriteFrameName("statistics_selected_CN.png");
           var btnStatic = cc.MenuItemSprite.create(static,
                                                    staticSelected,
                                                    staticDisabled,
                                                    function(sender){
                                                    btnOption.setEnabled(true);                                                      
                                                    btnStatic.setEnabled(false);
                                                    btnCredit.setEnabled(true);
                                                    bgOptions.setVisible(false);
                                                    bgStatics.setVisible(true);
                                                    bgCredits.setVisible(false);
                                                    },
                                                    this);
           //btn_credit
           var credit = cc.Sprite.createWithSpriteFrameName("credits_normal_CN.png");
           var creditSelected = cc.Sprite.createWithSpriteFrameName("credits_selected_CN.png");
           var creditDisabled = cc.Sprite.createWithSpriteFrameName("credits_selected_CN.png");
           var btnCredit = cc.MenuItemSprite.create(credit,
                                                    creditSelected,
                                                    creditDisabled,
                                                    function(sender){
                                                    btnOption.setEnabled(true);                                                      
                                                    btnStatic.setEnabled(true);
                                                    btnCredit.setEnabled(false);
                                                    bgOptions.setVisible(false);
                                                    bgStatics.setVisible(false);
                                                    bgCredits.setVisible(true);
                                                    },
                                                    this);

           var menuSetting = cc.Menu.create(btnHome,btnOption,btnStatic,btnCredit);
           menuSetting.setPosition(winSize.width / 16,winSize.height / 1.08);
           btnOption.setPosition(winSize.width / 4.5,0);
           btnStatic.setPosition(winSize.width / 4.5 + btnOption.getContentSize().width,0);
           btnCredit.setPosition(winSize.width / 4.5 + btnCredit.getContentSize().width*2,0);
           this.addChild(menuSetting,1);
           return true;
         },
         onHome:function(sender)
         {
               var scene =new MyScene();
               director.replaceScene(cc.TransitionSlideInB.create(0.3, scene));
         },
         isBgMusicOn:function(sender)
         {
                 if (audioEngine.isMusicPlaying()) {
                      audioEngine.pauseMusic();
                  }
                  else {
                      audioEngine.resumeMusic();
                  }
         },
         isEffectMusicOn:function()
         {
         }
    });