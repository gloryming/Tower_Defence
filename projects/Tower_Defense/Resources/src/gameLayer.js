// jianghao
var gameMenu = cc.Layer.extend({
	ctor:function(){
		this._super();
        //this.init();
	},

	init:function(){
		var hellogameMenu = cc.LabelTTF.create("gameMenu", "", 48);
		hellogameMenu.setPosition(500, 320);
		this.addChild(hellogameMenu);
		return true;
	}
});