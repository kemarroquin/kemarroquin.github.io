$(window).ready(function(){

	$(window).scroll(function(){
	 	
	    var scroll = $(window).scrollTop();

	    if (scroll > 2) {
	    	$(".header").css("background","rgba(0,0,0,.7)");
	    }else{
	    	$(".header").css("background","rgba(0,0,0,0)");
	    }

	});

	$(".dirLink2").click(function(){
		var url = $(this).attr("data_href");
		window.open(url, '_blank');
	});

});