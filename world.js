function World(){
	this.width = 10000;
	this.height = 10000;
	// 能源1
	this.zero = 1;
	// 能源2、3、4相互影响
	this.one = 100;
	this.two = 200;
	this.three = 100;
};

// 草
function Grass(){
	// 草，移动速度为0
	this.moveSpeed = 0;
};
// 创造一颗草
Grass.factory = function (){
	var grass = new Grass;
	return grass;
}
// 草的繁殖
Grass.prototype.birth = function (){

}
// 草的进化
Grass.prototype.evolution = function (){

}




// 草食动物
function B(){
	// 进化

};
// 肉食动物
function C(){

};