define(function(){
	//动物公共的方法
	function AnimalCommon(){
	};
	//寻找附近的东西，返回一个附近的坐标列表，由近及远
	AnimalCommon.findNear = function (x,y,dis){
		var arr = [];
		for(var i=0;i<dis;i++){
			for(var xIn = x -i;xIn < x+i;xIn++){
				for(var yIn = y -i;yIn < y+i;yIn++){
					//有了就不用放进去了
					if(this.hasInArr(arr,[xIn,yIn])){
						continue;
					}else{
						arr.push([xIn,yIn]);
					}
				}
			}
		}
		return arr;
	};
	//数组查重
	AnimalCommon.hasInArr = function (arr,index){
		for(var i=0;i<arr.length;i++){
			if(arr[i][0] == index[0] && arr[i][1] == index[1]){
				return true;
			}
		}
		return false;
	}
	return AnimalCommon;
});