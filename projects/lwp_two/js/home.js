$(document).ready(function(){

	var blockmouse_touch = true;
	var touch = true;

	$(window).keydown(function(e){
		var codigo = event.which || event.keyCode;
	    if (codigo == 27) {
	    	if ($(".menu").hasClass("active")) {$(".menu").fadeOut();$(".menu").removeClass("active");$(".btn_openmenu").removeClass("active");};
	    }

	    if (codigo == 38) {if (!blockmouse_touch) {content_desp_functions("up");}};
	    if (codigo == 40) {if (!blockmouse_touch) {content_desp_functions("down");}};
	});

	beforeload();

	function beforeload(){
		$(".beforeloadimg1").addClass("show");
		setTimeout(function(){
			$(".beforeloadimg2").addClass("show");
		},500);
		setTimeout(function(){
			$(".beforeloadimg3").addClass("show");
		},1000);
		setTimeout(function(){
			start_home();
		},2000);
	};

	function start_home(){
		$(".beforeloader").addClass("hide");
		setTimeout(function(){
			$(".beforeloader").remove();
			$(".navbar").addClass("active");
			$(".section_cont").eq(0).addClass("active");
			blockmouse_touch = false;
		},1000);
		$(".contenedor").addClass("active");
	};

	$(".contenedor_animate").ready(function(){
		var conts = $(".section_cont");
		var length = conts.length;
		var heightCNT = length * 100;
		var heightMCNT = 100/length;
		var html = "";

		$(".contenedor_animate").css("height",heightCNT+"%");
		conts.css("height",heightMCNT+"%");
		
		for (var i = 0; i < length; i++) {
			conts.eq(i).attr("id", "content-"+(i+1));
			var id_cnt = "#"+conts.eq(i).attr("id");
			html += '<li class="mncn-cn-contents" data-cont-work="'+id_cnt+'"></li>';
		}
		$(".opc_cont_animate").prepend(html);
	});




	setTimeout(function(){
		$(".mncn-cn-contents").eq(0).addClass("active");
		$(".mncn-cn-contents").click(function(){
			if ($(this).hasClass("active")) {
				return false;
			}
			var id1 = $(".mncn-cn-contents.active").attr("data-cont-work");
			var id2 = $(this).attr("data-cont-work");
			var index1 = $(id1).index();
			var index2 = $(id2).index();
			$(".mncn-cn-contents.active").removeClass("active");
			$(this).addClass("active");
			$(id1).removeClass("active");
			$(id2).addClass("active");
			var dir = "";
			if (index1 > index2) {
				dir = "down";
			}
			if (index2 > index1) {
				dir = "up";
			}
			animate_cnt_works(id2,dir);
		});
	},500);

	//ELECCIÓN DE DIRRECCIÓN
	var down=false;
	//var scrollLeft=0;
	//var scrollTop=0;
	//var x = 0;
	var y = 0;

	$('.contenedor').mousedown(function(e) {
		this.onselectstart=new Function ("return false");
		this.ondragstart=new Function ("return false");
		$(this).addClass("grabbing");
	    down = true;
	    //scrollLeft = this.scrollLeft;
	    //scrollTop = this.scrollTop;
	    //x = e.clientX;
	    y = e.clientY;
	}).mouseup(function() {
	    down = false;
	    $(this).removeClass("grabbing");
	}).mousemove(function(e) {
	    if (down) {
	    	var newy = e.clientY;
		    y = Math.round(y);
			newy = Math.round(newy);
		    if(y > newy){
		    	dir = "down";
			}else if(y < newy){
				dir = "up";
			}else{
				dir = "";
			}
			content_desp_functions(dir);
	    }
	}).mouseleave(function() {
	    down = false;
	    $(this).removeClass("grabbing");
	});

	$('.contenedor').on({ 'mousewheel': function(e) {
		var aux = e.originalEvent.wheelDelta/120;
		var dir = "";
		if (aux == 1) {
			dir = "up";
		}else{
			dir = "down";
		}
		content_desp_functions(dir);
	}}) 

	var ts;
	$(".contenedor").bind('touchstart', function (e){
	    ts = e.originalEvent.touches[0].clientY;
	});
	$(".contenedor").bind('touchend', function (e){
		var te = e.originalEvent.changedTouches[0].clientY;
		ts = Math.round(ts);
		te = Math.round(te);
		if(ts > te+5){
		    dir = "down";
		}else if(ts < te-5){
		    dir = "up";
		}else{
			dir = "";
		}
		content_desp_functions(dir);
	});

	function content_desp_functions(dir){
		if (!blockmouse_touch){
			blockmouse_touch = true;
			switch(dir){
				case "up":
					if ($(".section_cont").eq(0).hasClass("active")) {
						blockmouse_touch = false;
						return false;
					}else{
						var aux_id = "#"+$(".section_cont.active").prev().attr("id");
						animate_cnt_works(aux_id,dir);
						setTimeout(function(){
							blockmouse_touch = false;
						},600);
					}
				break;
				case "down":
					if ($(".section_cont").last().hasClass("active")) {
						blockmouse_touch = false;
						return false;
					}else{
						var aux_id = "#"+$(".section_cont.active").next().attr("id");
						animate_cnt_works(aux_id,dir);
						setTimeout(function(){
							blockmouse_touch = false;
						},600);
					}					
				break;
				default:
					blockmouse_touch = false;
					return false;
			};
		};
		return false;
	};
	function animate_cnt_works(id,dir){
		var index = $(id).index();
		var length = $(".section_cont").length;
		var heightNormal = $(".contenedor_animate").height()/length;
		var heightNew = heightNormal*index;
		$(".mncn-cn-contents").removeClass("active");
		$(".mncn-cn-contents[data-cont-work='"+id+"']").addClass("active");
		$(".section_cont.active").removeClass("active");
		setTimeout(function(){
			$(id).addClass("active");
		},600);
		switch(dir){
			case "up":
				$(".contenedor_animate").css("transform","translateY(-"+heightNew+"px)");
			break;
			case "down":
				$(".contenedor_animate").css("transform","translateY(-"+heightNew+"px)");
			break;
		};
	};

	var leng = $(".section_cont").length;
	var height = $(".contenedor_animate").height()/leng;
	var heightNuv = 0;
	$(window).resize(function(){
		setTimeout(function(){
			if (!blockmouse_touch) {
				var index = $(".section_cont.active").index();
				var length = $(".section_cont").length;
				var heightNormal = $(".contenedor_animate").height()/length;
				var heightNew = heightNormal*index;
				$(".contenedor_animate").css("transform","translateY(-"+heightNew+"px)");
			}
		},1000);
	});



});