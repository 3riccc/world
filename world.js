function World(){
	this.width = 10000;
	this.height = 10000;
	// 能源0——草赖以生存的能源
	this.zero = 1;
	// 能源1、2、3、4相互影响
	this.one = 100;
};
// 创造一个世界
World.factory = function(){
	var world = new World;
	return world;
}


// 草
function Grass(){
	// 移动速度为0
	this.moveSpeed = 0;
	// 生命值
	this.hp = 1;
	// 年龄
	this.age = 1;
	// 营养价值
	this.value = 100;
};
// 草的生长
Grass.prototype.grow = function (){
	switch(true){
		// 对于年龄小于20的草，生长很快，营养价值比较低
		case this.age < 20:
			this.age ++;
			this.hp = this.hp + 3;
			this.value = 100;
			break;
		case this.age < 40:
			this.age ++;
			this.hp = this.hp + 2;
			this.value = 150;
			break;
		case this.age < 60:
			this.age ++;
			this.hp ++;
			this.value = 200;
			break;
		default:
			this.value = 150;
			this.age ++;
			this.hp --;
	}
}
// 草的繁殖
Grass.prototype.birth = function (){
	// 如果草的年龄够了40，则有可能繁殖

}
// 草的进化
Grass.prototype.evolution = function (){

}
// 草在一个时间单位做的事情
Grass.prototype.timeLoop = function (){
	this.evolution();
	this.birth();
	this.grow();
}
// 创造一颗草
Grass.factory = function (){
	var grass = new Grass;
	return grass;
}




// 草食动物
function Sheep(){
	// 进化

};
// 肉食动物
function C(){

};