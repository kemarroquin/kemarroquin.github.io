$(window).ready(function(){

	$(window).scroll(function(){
	 	
	    var scroll = $(window).scrollTop();

	    if (scroll > 2) {
	    	$(".header").css("background","rgba(255,255,255,.7)");
	    }else{
	    	$(".header").css("background","rgba(255,255,255,0)");
	    }

	});

	$(".dirLink2").click(function(){
		var url = $(this).attr("data_href");
		window.open(url, '_blank');
	});

});