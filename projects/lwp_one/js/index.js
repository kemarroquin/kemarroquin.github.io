$(window).ready(function(){

	$("#load").off();
	$(".dirLink").off();

	$("#load").ready(function(){
		$("#load").fadeOut(1000);
	});

	$(".dirLink").click(function(){
		var url = $(this).attr("data_href");
		$("#load").fadeIn(1000);
		setTimeout(function(){
			$(location).attr('href',url); //--> Jquery
			//window.location.href = url    //--> JavaScript
		},1100);
	});

});
