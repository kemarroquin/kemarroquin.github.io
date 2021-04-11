$(window).ready(function(){

	$("#reload").fadeOut(1000);

	$(window).resize(function(){
		var w = $(window).width();

		if (w > 800) {
			closeMenuResp();
		}
	});

	$("#btnRespMenu").click(function(){
		openMenuResp();
	});
	$("#btnCloseMenuRes").click(function(){
		closeMenuResp();
	});

	function openMenuResp(){
		$(".menuResp").fadeIn();
		$("body").css("overflow-y","hidden");
	};
	function closeMenuResp(){
		$(".menuResp").fadeOut();
		$("body").css("overflow-y","auto");
	};


	//MENU OPCIONES
	$(".data_href").click(function(e){
		url = $(this).attr("data_href");
		url = url.trim();
		if (url === "") {
			return false;
		}else{
			$("#reload").fadeIn(1000);
			setTimeout(function(){
				location.href = url;
			},1100);
		}
	});

	$(".data_href,.data_href2").mousedown(function(e){
		if (e.which == 2) {
			url = $(this).attr("data_href");
			url = url.trim();
			if (url === "") {
				return false;
			}else{
				window.open(url, '_blank');
				return false;
			}
		}
	});

	$(".data_href2").click(function(){
		url = $(this).attr("data_href");
		url = url.trim();
		if (url === "") {
			return false;
		}else{
			window.open(url, '_blank');
			return false;
		}
	});

});