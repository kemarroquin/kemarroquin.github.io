$(window).ready(function(){

	$(window).scroll(function(){
	 	
	    var scroll = $(window).scrollTop();

	    if (scroll > 2) {
	    	$(".header").css("background","rgba(255,255,255,.7)");
	    }else{
	    	$(".header").css("background","rgba(255,255,255,0)");
	    }

	});

	$(window).keydown(function(e){
		var tecla = e.which;
		if (tecla == 27) {
			closeModalGal();
		}
	});

	$(".dirLink2").click(function(){
		var url = $(this).attr("data_href");
		window.open(url, '_blank');
	});

	$(".imgGale").click(function(e){
		var img = e.target.src;
		$(".imgModalGal").attr("src",img);
		openModalGal();
	});
	$(".closeModalGal").click(function(){
		closeModalGal();
	});

	function openModalGal(){
		$(".modalGaleria").fadeIn();
		$("body").css("overflow-y","hidden");
	};
	function closeModalGal(){
		$(".modalGaleria").fadeOut();
		$("body").css("overflow-y","auto");
	};

});