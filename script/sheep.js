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
			ranRange = 10,
			//距离多近的羊会产生影响
			sheepDis = 10;
		var proportion = {
			ran : 50,
			grass : 30,
			sheep : 30,
			wolf : 200,
			//上一刻的速度
			speedBefor : 30
		}
		//计算一个比重的总和，尽情修改proportion中的比重，这个总和会自动生成
		proportion.sum = 0;
		for(var index in proportion){
			if(index == "sum"){
				continue;
			}
			proportion.sum += proportion[index];
		}

		//第一因素，随机数
		var ranX = Math.random() * ranRange - (ranRange / 2);
		var ranY = Math.random() * ranRange - (ranRange / 2);



		//第二因素，附近的草
		var nearArr = AnimalCommon.findNear(this.x,this.y,10);
		//最近的草的列表
		var nearGrassList = [];
		for(let index of nearArr){
			if(world.landRecordGrass.hasOwnProperty(index[0]+'-'+index[1])){
				nearGrassList.push([index[0],index[1],world.landRecordGrass[index[0]+'-'+index[1]]]);
			}
		}
		//根据附近的草来算哪个方向比较好
		var grassX = 0;
		var grassY = 0;
		for(let index of nearGrassList){
			grassX += index[0] - this.x;
			grassY += index[1] - this.y;
		}
		//nearArr置空，因为下面还要用
		nearArr = [];
		//nearGrassList置空，为了节省内存
		nearGrassList = null;



		//第三因素 附近的羊，这个算法现在是错的，根据的应该是附近的最多六只羊的速度方向，而不是相对位置
		nearArr = AnimalCommon.findNear(this.x,this.y,10);
		var nearSheepList = [],
			sheepX = 0,
			sheepY = 0;
		for(let index of world.sheepList){
			if(Math.abs(index.x - this.x) < sheepDis && Math.abs(index.y - this.y) < sheepDis){
				nearSheepList.push([index.moveX,index.moveY]);
			}
		}
		for(let index of nearSheepList){
			sheepX += index[0];
			sheepY += index[1];
		}
		nearArr = []
		nearSheepList = null;



		//第四因素，附近的狼，这些因素先放下，先让羊尝试动起来
		nearArr = [this.x,this.y,40];
		var nearWolfList = [],
			wolfX = 0,
			wolfY = 0;

		//确定最终的移动方向
		this.moveX = (grassX * proportion.grass + sheepX * proportion.sheep + ranX * proportion.ran)/proportion.sum * 10;
		this.moveY = (grassX * proportion.grass + sheepY * proportion.sheep + ranY * proportion.ran)/proportion.sum * 10;
	},
	//移动
	Sheep.prototype.move = function (){
		this.x += this.moveX;
		this.y += this.moveY;
	}
	//一个时间单位中，羊会做的事情
	Sheep.prototype.timeLoop = function(){
		this.movePrepare();
		this.move();
	}
	// 创造一头羊
	Sheep.factory = function (x,y,id){
		var sheep = new Sheep(x,y,id);
		return sheep;
	}
	return Sheep;
});