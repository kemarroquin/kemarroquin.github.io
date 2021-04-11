$(window).ready(function(){

	$("#reload").fadeOut(1000);
	setTimeout(function(){
		$("#imgLoad2").css("width","100%");
		$("#imgLoad4").css("width","100%");

		setTimeout(function(){
			$("#reload").fadeIn(1000);
			setTimeout(function(){
				window.location.href = "home.html";
			},800);
		},4700);
	},800);

});