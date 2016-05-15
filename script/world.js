define(['Grass','Sheep','Wolf',"Canvas"],function(Grass,Sheep,Wolf,Canvas){
	var World = function (){
		//世界的面积
		this.width = 1200;
		this.height = 800;
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
		//土地上的哪个位置有东西的纪录，也就是不同地方的草浓度
		this.landRecordGrass = {};
	};
	// 每一个新生命都要在这个世界中注册
	World.prototype.register = function (life){
		//注册生命
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
			//羊的位置随机
			let sheepX = Math.floor(Math.random() * this.width);
			let sheepY = Math.floor(Math.random() * this.height);
			//生成羊
			let sheep = Sheep.factory(sheepX,sheepY,i);
			this.register(sheep);
		}
		//随机生成狼
		for(var i=0;i<wolfNum;i++){
			//狼的位置随机
			let wolfX = Math.floor(Math.random() * this.width);
			let wolfY = Math.floor(Math.random() * this.height);
			//生成狼
			let wolf = Wolf.factory(wolfX,wolfY,i);
			this.register(wolf);
		}
		//初始化世界的草浓度
		for(var i=0;i<this.grassList.length;i++){
			//通过四舍五入把每棵草取整方便画图和计算
			let xFixed = this.grassList[i].x.toFixed(0);
			let yFixed = this.grassList[i].y.toFixed(0);
			var property = xFixed + '-' + yFixed;
			//如果已经记录了这棵草，那么这里自加
			if(this.landRecordGrass.hasOwnProperty(property)){
				this.landRecordGrass[property] ++ ;
			}else{
				//没记录的话让这里有一个颗草
				this.landRecordGrass[property] = 1;
			}
		}

	};
	//世界的循环
	World.prototype.timeLoop = function (){
		//羊的循环
		for(var index of world.sheepList){
			index.timeLoop();
		}
		//下一帧的世界
		window.canvas.draw();
	}
	// 创造世界的工厂
	World.factory = function(){
		var world = new World;
		window.world = world;
		return world;
	}
	return World;
});