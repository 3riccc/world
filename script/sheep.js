define(function(){
	function Sheep(x,y){

	};
	// 创造一头羊
	Sheep.factory = function (){
		var sheep = new Sheep();
		return sheep;
	}
	return Sheep;
});