//配置路径
require.config({
	paths: {
		"World": "world",
		"Grass": "grass",
		"Sheep": "sheep",
		"Wolf": "wolf",
		"Canvas": "canvas",
		"AnimalCommon": "AnimalCommon"
	}
});
//模块加载
require(['World', 'Grass','Wolf','Canvas'], function (World, Grass,Wolf,Canvas){
	var world = World.factory();
	world.init(1000,30,1);
	console.log(world);
	var canvas = Canvas.factory();
	canvas.init();
	canvas.initDraw();
});
