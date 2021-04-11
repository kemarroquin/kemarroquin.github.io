$(window).ready(function(){

	//EXPERIENCIA PROFESIONAL

	$(".contEPSel").click(function(){

		$(".contEPSel").attr("focusact","0");
		$(this).attr("focusact","1");

		var id = $(this).attr("id");

		$(".cntEPInf").removeClass("EPIactive");
		$(".cntEPInf").addClass("EPIclose");
		$(".cntEPInf[forseeinf='"+id+"']").removeClass("EPIclose");
		$(".cntEPInf[forseeinf='"+id+"']").addClass("EPIactive");

		$('html, body').stop().animate({
            scrollTop: jQuery("#cntExpPro").offset().top - 100
        }, 500);

	});;

});