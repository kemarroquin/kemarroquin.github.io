$(document).ready(function(){

	setTimeout(function(){
		$(".load").fadeOut();
	}, 300);


	//MENU Y HEADER

	$(".menubar").click(function(){
		OpenMenu();
	});

	$(".menuclose").click(function(){
		CloseMenu();
	});


	$(window).resize(function(){

		var aux = $(".menubar");

		if (aux.hasClass("menubarOff")) {
			if ($(this).width() > 1030) {
				$(".menu").addClass("menuExpand");
				$(".menu2").removeClass("menu2Expand");
			}else{
				$(".menu").removeClass("menuExpand");
				$(".menu2").addClass("menu2Expand");
			}
		}else{
			if ($(this).width() > 1030) {
				CloseMenu();
			}else{
				CloseMenu();
			}
		}

	});

	$(window).keydown(function(e){
		if (e.which == 27) {
			if ($(".menubar").hasClass("menubarOff")) {
				CloseMenu();
			}else{
				return false;
			}
		}
	});


	function OpenMenu(){

		$("body").css("overflow-y","hidden");
		var widthPant = $(window).width();

		$(".logo3").addClass("logo3off");
		$(".linkLogo").addClass("linkLogoExpand");
		setTimeout(function(){
			$(".logo3").fadeOut();
		}, 500);
		setTimeout(function(){
			$(".logo1").addClass("logo1on");
		}, 600);
		setTimeout(function(){
			$(".logo2").addClass("logo2on");
		}, 900);
		setTimeout(function(){

			if (widthPant > 1030) {
				$(".menu").addClass("menuExpand");
				$(".namePage").fadeOut();				
			}else{
				$(".menu2").addClass("menu2Expand");
			}

			$(".menubar").addClass("menubarOff");
			$(".contLogo2 p").addClass("pLogoOn");
		}, 1000);
		setTimeout(function(){
			$(".menuclose").addClass("menucloseOn");
		}, 1800);

	};

	function CloseMenu(){

		$("body").css("overflow-y","auto");

		var widthPant = $(window).width();

		setTimeout(function(){
			$(".logo1").removeClass("logo1on");
			$(".logo2").removeClass("logo2on");
			$(".contLogo2 p").removeClass("pLogoOn");
			$(".menuclose").removeClass("menucloseOn");
			$(".menubar").removeClass("menubarOff");
		}, 300);
		setTimeout(function(){
			$(".logo3").fadeIn();
			$(".logo3").removeClass("logo3off");
			if (widthPant > 1030) {
				$(".menu").removeClass("menuExpand");
				$(".namePage").fadeIn();		
			}else{
				$(".menu2").removeClass("menu2Expand");
				$(".namePage").fadeOut();
			}
		}, 600);
		
	};

	//REDIRECCIONAMIENTO

	$(".dirLink").click(function(){

		var url = $(this).attr("dirr");
		$(location).attr('href',url);

	});

});