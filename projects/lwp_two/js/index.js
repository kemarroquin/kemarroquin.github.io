$(document).ready(function(){
	loader();
	function loader(){
		$(".logosvg1").addClass("show");
		setTimeout(function(){
			$(".logosvg2").addClass("show");
		},700);
		setTimeout(function(){
			$(".logosvg3").addClass("show");
		},1400);
		setTimeout(function(){
			$(".logosvg4").addClass("show");
		},2100);
		setTimeout(function(){
			$(".logo2").addClass("show");
		},3000);
		setTimeout(function(){
			terminateloader();
		},4500);
	};

	function terminateloader(){
		$(".animcnt").fadeIn(500);
		setTimeout(function(){
			$(".loader").remove();
			location.href ="home.html";
		},700);
	};
});