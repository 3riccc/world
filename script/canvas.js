define([],function(){
	function Canvas () {
		this.canvas = null;
		this.ctx = null;
	}
	//初始化
	Canvas.prototype.init = function () {
		this.canvas = document.getElementById("land");
		this.ctx = this.canvas.getContext("2d");
		//画一个背景，沙土的颜色
		this.ctx.fillStyle = "#E5D1AC";
		this.ctx.fillRect(0,0,world.width,world.height);
	}
	//画所有的草
	Canvas.prototype.initDraw = function (){
		//画草
		for(var index in world.landRecordGrass){
			//解构赋值
			let x,y;
			[x,y] = [index.toString().split('-')[0],index.toString().split('-')[1]];
			this.ctx.fillStyle=this.getGreenColor(world.landRecordGrass[index]);
			this.ctx.fillRect(x-1,y-1,2,2);
		}
		//画羊，羊比较少，不用像草一样去复杂的优化性能，直接画就可以
		for(var i=0;i<world.sheepList.length;i++){
			let x = world.sheepList[i].x.toFixed(0);
			let y = world.sheepList[i].y.toFixed(0);
			this.ctx.fillStyle="red";
			this.ctx.fillRect(x-2,y-2,4,4);
		}
		//画狼，和画羊是一样的
		for(var i=0;i<world.wolfList.length;i++){
			let x = world.wolfList[i].x.toFixed(0);
			let y = world.wolfList[i].y.toFixed(0);
			this.ctx.fillStyle="blue";
			this.ctx.fillRect(x-2,y-2,4,4);
		}
	}
	//获取不同程度的绿色的颜色
	Canvas.prototype.getGreenColor = function(degree){
		switch(degree){
			case 1:
				return "#6BA535";
			case 2:
				return "#2C6202";
			default:
				return "#034901";
		}
	}
	Canvas.factory = function(){
		var canvas = new Canvas;
		return canvas;
	}
	return Canvas;
});