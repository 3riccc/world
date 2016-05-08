//配置路径
require.config({
　　　　paths: {
　　　　　　"World": "world.js",
　　　　　　"Grass": "grass.js"
　　　　}
　　});
//模块加载
require(['World', 'Grass'], function (World, Grass){
　　　　
　　});