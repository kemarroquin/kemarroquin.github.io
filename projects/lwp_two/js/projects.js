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


	$(document).keydown(function(e){
		var tecla = e.which || e.keyCode;
		if (tecla == 27) {
			if ($(".nav_content").hasClass("active")) {
				content_nav_functions();
			}
			if ($(".modalPrj").hasClass("active")) {
				closemodalprj();
			}
		}
	});

	var blockmodalprj = false;
	$(".seeprj").click(function(){
		$(this).addClass("active");
		var ident = $(this).attr("data-modal");
		showModalPrj(ident);
	});
	$(".prevBtnMprj,.nextBtnMprj").click(function(){
		if (!blockmodalprj) {
			var ident = $(this).attr("data-modal");
			showModalPrj(ident);
		}
	});
	var prj = $(".modalPrj").attr("data-modal");

	function showModalPrj(ident){
		if (!blockmodalprj) {
			blockmodalprj = true;
			var src = "";
			var name = "";
			switch(prj){
				case "1":
					src = "img/branding/";
					name = src+ident+".png";
				break;
				case "2":
					src = "img/editorial/";
					name = src+ident+".png";
				break;
				case "3":
					src = "img/ilustracion/";
					name = src+ident+".png";
				break;
				default:
					return false;
			}
			if (!$(".modalPrj").hasClass("active")) {
				$(".modalPrj").addClass("active");
				$(".modalPrj").fadeIn(500);
			}
			blockmodalprj = false;
			loadfunct_toolsModalprj(ident);
			loadProject(name);
		}
	};

	function loadfunct_toolsModalprj(ident){
		if(ident == 0){
			return false;
		}
		var length = $(".cntPrj").length;
		var next = 0;
		var prev = 0;
		if (parseInt(ident) == 1) {
			prev = length;
		}else{
			prev = parseInt(ident) - 1;
		}
		if (parseInt(ident) == length) {
			next = 1;
		}else{
			next = parseInt(ident) + 1;
		}
		$(".prevBtnMprj").attr("data-modal",prev);
		$(".nextBtnMprj").attr("data-modal",next);
	};

	function loadProject(name){
		$("#imgMPRJ").hide();
		$(".loader-prj").css("display","flex");
		var timeWait = 0;
		if ($("#imgMPRJ").hasClass("active")) {
			timeWait = 800;
		}else{
			$("#imgMPRJ").addClass("active");
			timeWait = 2000;
		}
		var cache = "?"+Date.now();
		setTimeout(function(){
			$("#imgMPRJ") //Hide it
	        .one('load', function() { //Set something to run when it finishes loading
	        	$(".loader-prj").css("display","none");
	          	$(this).show(); //Fade it in when loaded
	          	$(".cntImgMPrj").focus();
	        })
	        .attr('src', name+cache) //Set the source so it begins fetching
	        .each(function() {
	          	//Cache fix for browsers that don't trigger .load()
	          	if(this.complete) $(this).trigger('load');
	        });
		},timeWait);
	};

	$(".bg-closeM-prj,.closeBtnMprj").click(function(){
		closemodalprj();
	});

	function closemodalprj(){
		$("#imgMPRJ").attr("src","");
		$("#imgMPRJ").removeClass("active");
		$(".prevBtnMprj").attr("data-modal","");
		$(".nextBtnMprj").attr("data-modal","");
		$(".modalPrj").removeClass("active");
		$(".modalPrj").hide();
		blockmodalprj = true;
		setTimeout(function(){
			blockmodalprj = false;
		},500);
	};
	

});