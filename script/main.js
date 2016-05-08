//配置路径
require.config({
	paths: {
		"World": "world",
		"Grass": "grass",
		"Sheep": "sheep",
		"Wolf":"wolf"
	}
});
//模块加载
require(['World', 'Grass'], function (World, Grass){
	var world = World.factory();
	console.log(world)
	world.init(6)


});
