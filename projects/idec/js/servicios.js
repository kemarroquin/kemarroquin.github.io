$(window).ready(function(){

	$(".btnPassSer").click(function(){
		showService($(this).attr("for"));
	});

	function showService(id){

		var aux = $(window).width();
		$(".cntService").removeClass("cntSerB");
		$(".cntService").removeClass("cntSerG");
		$(".footer").removeClass("foot1");
		$(".footer").removeClass("foot2");
		
		if (id == "btnPassSer1") {
			$(".cntService").addClass("cntSerB");
			if (aux > 955) {
				$(".cntInfoSer1").fadeIn();
				$(".cntInfoSer2").fadeOut();
				$(".cntInfoSer3").fadeOut();
			}else{
				$(".cntInfoSer1").show();
				$(".cntInfoSer2").hide();
				$(".cntInfoSer3").hide();
			}
			$(".fondoService1").fadeIn();
			$(".fondoService2").fadeOut();
			$(".fondoService3").fadeOut();
			$(".footer").addClass("foot2");
		}else if(id == "btnPassSer2"){
			$(".cntService").addClass("cntSerG");
			if (aux > 955) {
				$(".cntInfoSer2").fadeIn();
				$(".cntInfoSer1").fadeOut();
				$(".cntInfoSer3").fadeOut();
			}else{
				$(".cntInfoSer2").show();
				$(".cntInfoSer1").hide();
				$(".cntInfoSer3").hide();
			}
			$(".fondoService2").fadeIn();
			$(".fondoService1").fadeOut();
			$(".fondoService3").fadeOut();
			$(".footer").addClass("foot1");
		}else if(id == "btnPassSer3"){
			$(".cntService").addClass("cntSerB");
			if (aux > 955) {
				$(".cntInfoSer3").fadeIn();
				$(".cntInfoSer1").fadeOut();
				$(".cntInfoSer2").fadeOut();
			}else{
				$(".cntInfoSer3").show();
				$(".cntInfoSer1").hide();
				$(".cntInfoSer2").hide();
			}
			$(".fondoService3").fadeIn();
			$(".fondoService1").fadeOut();
			$(".fondoService2").fadeOut();
			$(".footer").addClass("foot2");
		}

	};

});