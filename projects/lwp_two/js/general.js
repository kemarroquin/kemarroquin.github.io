$(document).ready(function(){

	$(window).keydown(function(e){
		var codigo = event.which || event.keyCode;

	    if (codigo == 27) {
	    	if ($(".menu").hasClass("active")) {$(".menu").fadeOut();$(".menu").removeClass("active");$(".btn_openmenu").removeClass("active");};
	    }
	});

	$(".animcnt").fadeOut(1000);

	$(".enlace").click(function(e){
		var href = $(this).attr("data_href");
		$(".animcnt").fadeIn(600);
		setTimeout(function(){
			location.href = href;
		},700);
	});

	$(".btn_openmenu").click(function(){
		$(this).toggleClass("active");
		if ($(".btn_openmenu").hasClass("active")) {
			$(".menu").fadeIn();
			$(".menu").addClass("active");
		}else{
			$(".menu").fadeOut();
			$(".menu").removeClass("active");
		}
	});

});