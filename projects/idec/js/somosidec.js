$(window).ready(function(){

	$(".fondoSomos1").fadeIn();
	$("#cntS1").fadeIn();

	$(".btnSomos1").click(function(){

		$(".btnSomos1").removeClass("btnActive1");
		$(".btnSomos2").removeClass("btnActive2");
		$(this).addClass("btnActive1");
		$(".fondoSomos1").fadeIn();
		$(".fondoSomos2").fadeOut();
		$(".footer").removeClass("foot2");
		$(".footer").addClass("foot1");
		$(".contFoot2 a").removeClass("rs-foot2");
		$(".contFoot2 a").addClass("rs-foot1");

	});

	$(".btnSomos2").click(function(){

		$(".btnSomos1").removeClass("btnActive1");
		$(".btnSomos2").removeClass("btnActive2");
		$(this).addClass("btnActive2");
		$(".fondoSomos2").fadeIn();
		$(".fondoSomos1").fadeOut();
		$(".footer").removeClass("foot1");
		$(".footer").addClass("foot2");
		$(".contFoot2 a").removeClass("rs-foot1");
		$(".contFoot2 a").addClass("rs-foot2");

	});

	$("#btnS1").click(function(){
		var aux = $(window).width();
		if (aux > 695) {
			$("#cntS1").fadeIn();
			$("#cntS2").fadeOut();
			$("#cntS3").fadeOut();
			$("#cntS4").fadeOut();
		}else{
			$("#cntS1").show();
			$("#cntS2").hide();
			$("#cntS3").hide();
			$("#cntS4").hide();
		}
	});

	$("#btnS2").click(function(){
		var aux = $(window).width();
		if (aux > 695) {
			$("#cntS1").fadeOut();
			$("#cntS2").fadeIn();
			$("#cntS3").fadeOut();
			$("#cntS4").fadeOut();
		}else{
			$("#cntS1").hide();
			$("#cntS2").show();
			$("#cntS3").hide();
			$("#cntS4").hide();
		}
	});

	$("#btnS3").click(function(){
		var aux = $(window).width();
		if (aux > 695) {
			$("#cntS1").fadeOut();
			$("#cntS2").fadeOut();
			$("#cntS3").fadeIn();
			$("#cntS4").fadeOut();
		}else{
			$("#cntS1").hide();
			$("#cntS2").hide();
			$("#cntS3").show();
			$("#cntS4").hide();
		}
	});

	$("#btnS4").click(function(){
		var aux = $(window).width();
		if (aux > 695) {
			$("#cntS1").fadeOut();
			$("#cntS2").fadeOut();
			$("#cntS3").fadeOut();
			$("#cntS4").fadeIn();
		}else{
			$("#cntS1").hide();
			$("#cntS2").hide();
			$("#cntS3").hide();
			$("#cntS4").show();
		}
	});

});