$(window).ready(function(){


	$(".btnLogo").click(function(){

		var page = $(window).width();

		if (page > 1120) {
			if ($(this).hasClass("menuShow")) {
				$(this).removeClass("menuShow");
				$(this).addClass("menuHide");
			}else{
				$(this).removeClass("menuHide");
				$(this).addClass("menuShow");
			}
		}
		menuFucnt();

	});

	$(".btnRespMenu").click(function(){
		$(".menu2").fadeOut();
	});



	$(".load").ready(function(){
		$(".load").css("width","0px");
		$(".load").css("opacity","0");
	});

	

	$(".btnFind").click(function(){
		$(".search").fadeIn();
	});
	$(".closeSearch").click(function(){
		$(".search").fadeOut();
	});



	function menuFucnt(){

		var page = $(window).width();
		var aux = $(".btnLogo").eq(0);

		if (page > 1120) {
			if (aux.hasClass("menuShow")) {
				$(".menu").slideDown();
				setTimeout(function(){
				}, 1000);
			}else{
				$(".menu").slideUp();
				setTimeout(function(){			
				}, 1000);
			}
		}else{
			$(".menu2").fadeIn();
		}
	};

	$(window).resize(function(){

		var page = $(window).width();

		if (page > 1120) {
			$(".menu").slideDown();
			$(".menu2").fadeOut();
		}else{
			$(".btnLogo").removeClass("menuHide");
			$(".btnLogo").addClass("menuShow");
		}

	});


});