$(document).ready(function(){

	setTimeout(function(){
		$(".navbar").addClass("active");
	},500);
	start();
	function start(){
		var html_opc = "";
		for (var i = 0; i < $(".sections").length; i++) {
			$(".sections").eq(i).attr("id","sections"+(i+1));
			html_opc += "<li><a href='#sections"+(i+1)+"' class='enlace_opc'></a></li>";
		}
		$(".opc_cont_animate_about").append(html_opc);

		setTimeout(function(){
			$(".enlace_opc").eq(0).addClass("active");
			$(".enlace_opc").click(function(e){
				e.preventDefault();
				$(".enlace_opc").removeClass("active");
				$(this).addClass("active");
				var target = $( $(this).attr('href') );
			    if( target.length ) {
			        event.preventDefault();
			        $('html').animate({
			            scrollTop: target.offset().top
			        }, 500);
			    }
			});
		},500);

	};


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

	

});