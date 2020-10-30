$(document).ready(function(){

	setTimeout(function(){
		$(".navbar").addClass("active");
	},500);


	//OBJETOS PERSIGUIENDO
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

	function moveBackground() {
	  x += (lFollowX - x) * friction;
	  y += (lFollowY - y) * friction;
	  
	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

	  $('.movemouse').css({
	    '-webit-transform': translate,
	    '-moz-transform': translate,
	    'transform': translate
	  });
	  window.requestAnimationFrame(moveBackground);
	}

	//ARASTRAR CON MOUSE EL SCROLL
	visP();
	function visP(){
	var down=false;
	var scrollLeft=0;
	var scrollTop=0;
	var x = 0;
	var y = 0;

	$("html").mousedown(function(e) {
		this.onselectstart=new Function ("return false");
		this.ondragstart=new Function ("return false");
		$(this).css("cursor","grabbing");
	    down = true;
	    //scrollLeft = this.scrollLeft;
	    scrollTop = this.scrollTop;
	    //x = e.clientX;
	    y = e.clientY;
	}).mouseup(function(){
		down = false;
	    $(this).css("cursor","grab");
	}).mousemove(function(e) {
	    if (down) {
	       //this.scrollLeft = scrollLeft + x - e.clientX;
	       this.scrollTop = scrollTop + y - e.clientY;
	    }
	    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (10 * lMouseY) / 100;
	}).mouseleave(function() {
	    down = false;
	});
	}

	moveBackground();



	$("#bntmailto").click(function(){
		var input = $("#mailto");
		var mail = input.val();
		var expe = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if (mail.trim().length == 0) {
			input.val("");
			input.attr("placeholder","Ingrese un correo");
			setTimeout(function(){
				input.attr("placeholder","E-mail");
			},1000);
			return false;
		}
		if (!expe.test(mail.trim())) {
			input.val("");
			input.attr("placeholder","Formato Incorrecto");
			setTimeout(function(){
				input.attr("placeholder","E-mail");
			},1000);
			return false;
		}
		$(".modalform").fadeIn();
	});

	$(".closefrm, .btnform button, .closeform").click(function(e){
		closeFRM();
		e.preventDefault();
	});

	function closeFRM(){
		$(".formulario input").val("");
		$(".formulario textarea").val("");
		$(".modalform").fadeOut();
	};
	

});