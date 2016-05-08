function World(){
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
// 创造一个世界
World.factory = function(){
	var world = new World;
	return world;
}
// 导出
module.exports = World;
