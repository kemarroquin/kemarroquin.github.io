$(window).ready(function(){

	cambiarBG();

	function cambiarBG(){
		var obj = $(".titleService");
		var aux = obj.length;
		
		for (var i = 0; i < aux; i++) {
			var r = Math.floor((Math.random() * 50) + 0);
			var g = Math.floor((Math.random() * 150) + 60);
			var b = Math.floor((Math.random() * 50) + 0);
			var rgb = "rgb("+r+","+g+","+b+")";

			obj.eq(i).css("background",rgb);
		}

	}

});