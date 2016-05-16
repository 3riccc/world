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
	window.world = World.factory();
	world.init(5000,1,1);
	console.log(world);
	window.canvas = Canvas.factory();
	canvas.init();
	canvas.initDraw();
	setInterval(function(){
		world.timeLoop();
	},500)
});
