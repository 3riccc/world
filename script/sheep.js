define(["AnimalCommon"],function(AnimalCommon){
	function Sheep(x,y,id){
		//种类
		this.type = "sheep";
		//这个动物初始的位置和id，id永远不变，直到死亡
		this.x = x;
		this.y = y;
		this.id = id;
		// 劳累指数，劳累指数影响速度，劳累指数越高，速度越慢，当劳累指数为100时，速度为0.
		this.tired = 0;
		// 移动速度为10
		this.speed = 10;
		// 生命值
		this.hp = 1;
		// 年龄
		this.age = 1;
		// 营养价值
		this.value = 1000;
		//移动方向
		this.moveX = 0;
		this.moveY = 0;
		//危险程度,影响行动方向
		this.feelDanger = 0;
		//愉悦程度，这取决于附近有没有草
		this.feelPlease = 0;
	};
	/**
	 * 让羊跑准备跑起来，这非常有趣，羊的移动有6个决定因素
	 * 1.随机数
	 * 2.附近的草
	 * 3.附近的狼
	 * 4.身边的六只羊
	 * 5.上一刻的速度方向，一般来说，如果附近没草也没狼，羊通常会一直向前走以避免在原地转圈子
	 * 6.羊会尽量让自己距离其他的羊保持安全距离，既不太远也不太近
	 * @return {[type]} [description]
	 */
	Sheep.prototype.movePrepare = function (){
		//预定义一些参数
		//草距离多近时会对羊有影响
		var grassDis = 10,
			//狼距离多近时会对羊有影响
			wolfDis = 100,
			//随机数的大小
			ranRange = 10;

		//第一因素，随机数
		var ranX = Math.random() * ranRange - (ranRange / 2);
		var ranY = Math.random() * ranRange - (ranRange / 2);
		//第二因素，附近的草
		var nearArr = AnimalCommon.findNear(this.x,this.y,10);
		
		for(let index of nearArr){
			if(world.landRecordGrass.hasOwnProperty(index[x]+'-'+index[y])){

			}
		}
		// var grsEfectX = 0,
		// 	grsEfectY = 0;
		// for(var i=0; i < world.grassList.length; i++){
		// 	//横向和纵向的距离
		// 	let disX = world.grassList[i].x - this.x;
		// 	let disY = world.grassList[i].y - this.y;
		// 	if(Math.abs(disX) < grassDis && Math.abs(disY) < grassDis){
		// 		grsEfectX = grsEfectX * i + disX;
		// 		grsEfectY = grsEfectY * i + disY;
		// 	}
		// }
	}
	// 创造一头羊
	Sheep.factory = function (x,y,id){
		var sheep = new Sheep(x,y,id);
		return sheep;
	}
	return Sheep;
});