define(function(){
	function Grass(x,y,id){
		//种类
		this.type = "grass";
		//id
		this.id = id;
		// 生命值
		this.hp = 1;
		// 年龄
		this.age = 1;
		// 营养价值
		this.value = 10;
		// 地理坐标
		this.x = x;
		this.y = y;
	};
	// 草的生长
	Grass.prototype.grow = function (){
		switch(true){
			// 对于年龄小于20的草，生长很快，营养价值比较低
			case this.age < 20:
				this.age ++;
				this.hp = this.hp + 3;
				this.value = 10;
				break;
			case this.age < 40:
				this.age ++;
				this.hp = this.hp + 2;
				this.value = 15;
				break;
			case this.age < 60:
				this.age ++;
				this.hp ++;
				this.value = 20;
				break;
			default:
				this.value = 15;
				this.age ++;
				this.hp --;
		}
	}
	// 草的繁殖
	Grass.prototype.birth = function (){
		// 如果草的年龄20-40，则有0.3的概率可能繁殖
		if(this.age > 20 && this.age < 40 && Math.random() < 0.3){
			//距离
			var dis = Math.floor(Math.random()*100);
			var grass = this.factory(this.x+dis,this.y+dis);
			world.register(grass);
		}
	}
	// 草的进化
	Grass.prototype.evolution = function (){

	}
	// 草在一个时间单位做的事情
	Grass.prototype.timeLoop = function (){
		this.grow();
		this.birth();
		this.evolution();
	}
	// 创造一颗草
	Grass.factory = function (x,y,id){
		var grass = new Grass(x,y,id);
		return grass;
	}
	return Grass;
});