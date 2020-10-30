$(window).ready(function(){

	//GENERAL
	$("#load").ready(function(){
		$("#load").fadeOut(800);
	});
	$(".dirLink").click(function(){
		var url = $(this).attr("data_href");
		$("#load").fadeIn(600);
		setTimeout(function(){
			$(location).attr('href',url); //--> Jquery
			//window.location.href = url    //--> JavaScript
		},600);
	});
	$(window).keydown(function(e){
		var tecla = e.which;
		if (tecla == 27) {
			closeMenuRes();
		}
	});
	$(window).resize(function(){
		if ($(window).width() > 800) {
			closeMenuRes();
		}
	});

	//HEADER
	$("#btnHeadBar").click(function(){
		openMenuRes();
	});
	$("#btnCloseMenuRes").click(function(){
		closeMenuRes();
	});
	function openMenuRes(){
		$(".menuRes").fadeIn();
		$("body").css("overflow-y","hidden");
	};
	function closeMenuRes(){
		$(".menuRes").fadeOut();
		$("body").css("overflow-y","auto");
	};

});