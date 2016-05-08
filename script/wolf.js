define(function(){
	function Wolf(x,y,id){
		//种类
		this.type = "wolf";
		//id
		this.id = id;
		//移动方向
		this.moveX = 0;
		this.moveY = 0;
	};
	// 创造一头羊
	Wolf.factory = function (x,y,id){
		var wolf = new Wolf(x,y,id);
		return wolf;
	}
	return Wolf;
});