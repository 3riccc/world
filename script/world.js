define(['Grass','Sheep','Wolf'],function(Grass,Sheep,Wolf){
	var World = function (){
		//世界的面积
		this.width = 10000;
		this.height = 10000;
		// 能源0——草赖以生存的能源
		this.zero = 100;
		// 能源1、2、3、4相互影响
		this.one = 100;
		this.two = 100;
		this.three = 100;
		//草的列表
		this.grassList = [];
		//羊的列表
		this.sheepList = [];
		//狼的列表
		this.wolfList = [];
	};
	// 每一个新生命都要在这个世界中注册
	World.prototype.register = function (life){
		switch(life.type){
			case "grass":
				this.grassList.push(life);
				break;
			case "sheep":
				this.sheepList.push(life);
				break;
			case "wolf":
				this.wolfList.push(life);
				break;
			default :
				break;
		}
	}
	/**
	 * 世界的初始化
	 * @param  {[type]} grassNum 草的数量
	 * @param  {[type]} sheepNum 羊的数量
	 * @param  {[type]} wolfNum  狼的数量
	 */
	World.prototype.init = function (grassNum , sheepNum ,wolfNum){
		//随机生成草
		for(var i=0;i<grassNum;i++){
			//草的位置随机
			let grassX = Math.floor(Math.random() * this.width);
			let grassY = Math.floor(Math.random() * this.height);
			// 生成草
			let grass = Grass.factory(grassX,grassY,i);
			// 在这个世界中注册
			this.register(grass);
		}
		//随机生成羊
		for(var i=0;i<sheepNum;i++){

		}
		//随机生成狼
		for(var i=0;i<wolfNum;i++){

		}
	}
	// 创造世界的工厂
	World.factory = function(){
		var world = new World;
		return world;
	}

	return World;
});