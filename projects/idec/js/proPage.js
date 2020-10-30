$(window).ready(function(){

	$(".btnSlide label").click(function(){
		$(".imgSlide").fadeOut();
		var aux = $(this).attr("data_img");
		$("#"+aux).fadeIn();
	});

	$("#btnSize").click(function(){

		aux = $(this);

		$("html, body").animate({ scrollTop: 0 }, 600);
		if (aux.hasClass("sizee")) {
			aux.attr("class","icon-resized sized");
			$(".cntSlidFot").attr("class","cntSlidFot yesSize");
		}else{
			aux.attr("class","icon-resizee sizee");
			$(".cntSlidFot").attr("class","cntSlidFot noSize");
		}

	});

});