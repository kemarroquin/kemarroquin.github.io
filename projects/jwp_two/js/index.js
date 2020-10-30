$(document).ready(function(){

	//LOADER
	var blocked_click = true;
	var blockmodalprj = true;
	var blockmouse_touch = true;
	setTimeout(function(){
		loaderppal();
	},500);
	function loaderppal(){
		$(".contloader-image").addClass("active");
		setTimeout(function(){
			$("#loader").addClass("removed");
		},3100);
		setTimeout(function(){
			$("#loader").fadeOut(500);
		},3700);
		setTimeout(function(){
			$("#loader").remove();
			blocked_click = false;
			blockmodalprj = false;
			blockmouse_touch = false;
		},4300);
	};

	// FUNCIONES CON LAS TECLAS

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
		if (!$(".project-cont").hasClass("active") && !$(".nav_content").hasClass("active")) {
			if (tecla == 38) {
				content_desp_functions("up");
			}
			if (tecla == 40) {
				content_desp_functions("down");
			}
		}
		if ($(".modalPrj").hasClass("active")) {
			if (tecla == 37) {
				$(".prevBtnMprj").trigger("click");
			}
			if (tecla == 39) {
				$(".nextBtnMprj").trigger("click");
			}
		}
	});


	//HEADER

	$('#bars-btn,#mclose-btn').click(function(e){content_nav_functions();});
    $(".nav_bg_back").click(function(){content_nav_functions();});
    function content_nav_functions(){
    	$(".nav_content").toggleClass("active");
        if ($(".nav_content").hasClass("active")) {
        	$(".bars").hide();
        	$(".logores").addClass("desactive");
        	$(".nav_bg_back").fadeIn();
        	$(".mclose").show();
        	if (!$(".contenedor").hasClass("movedl")) {
        		setTimeout(function(){
	        		$(".contenedor").toggleClass("moved");
	        	},200);
        	}
        }else{
        	$(".bars").show();
        	$(".logores").removeClass("desactive");
        	$(".nav_bg_back").fadeOut();
        	$(".mclose").hide();
        	if (!$(".contenedor").hasClass("movedl")) {
        		$(".contenedor").toggleClass("moved");
        	}
        }
        if ($(".nav_cnt").hasClass("active")) {
        	$(".nav_cnt").removeClass("active");
        }else{
        	setTimeout(function(){
        		$(".nav_cnt").toggleClass("active");
        		$(".cnt-nvcnt:not(.cnt-nvcnt.active)").hide();
	        },500);
        }
    }


	$(".link-menu-nav-content").click(function(e){
		if ($(this).hasClass("active")) {
			return false;
		}
		aux = $(this).attr("href");
		$(".link-menu-nav-content").removeClass("active");
		$(this).addClass("active");

		$(".cnt-nvcnt.active").removeClass("active");
		$(aux).show();
		setTimeout(function(){
			$(aux).addClass("active");
		},100);
		setTimeout(function(){
			$(".cnt-nvcnt:not(.cnt-nvcnt.active)").hide();
		},500);
		e.preventDefault();
	});

	$(".link-home, .link-home-res").click(function(e){
		$("#mclose-btn").trigger("click");
		reset_show_work();
		reset_animate_cnt_works();
		closemodalprj();
		blocked_click = true;
		blockmodalprj = true;
		blockmouse_touch = true;
		setTimeout(function(){
			blocked_click = false;
			blockmodalprj = false;
			blockmouse_touch = false;
		},1000);
		e.preventDefault();
	});


	//CONTENEDORES/PROJECTS FUNCTIONS

	$(".contenedores_animate").ready(function(){
		var conts = $(".contenedores");
		var length = conts.length;
		var heightCNT = length * 100;
		var heightMCNT = 100/length;
		var html = "";

		$(".contenedores_animate").css("height",heightCNT+"%");
		conts.css("height",heightMCNT+"%");
		
		for (var i = 0; i < length; i++) {
			conts.eq(i).attr("id", "content-"+(i+1));
			var id_cnt = "#"+conts.eq(i).attr("id");
			html += '<li class="mncn-cn-contents"><span class="mn-cn-contents" data-cont-work="'+id_cnt+'"></span></li>';
		}
		$(".menu-cont-ul").prepend(html);

		for (var i = 0; i < length; i++) {
			html = '<button class="btn_show_work_prj jr-icon-right" data-show-project="#project-cnt'+(i+1)+'"></button>';
			$(".cnt_cat_work").eq(i).find(".cnt_seclto_ccw").append(html);
		}
	});

	$(".project-cont").ready(function(){
		var proj = $(".project-cnt");
		var length = proj.length;

		for (var i = 0; i < length; i++) {
			$(proj).eq(i).attr("id","project-cnt"+(i+1));
		}
		generatePrjFCN();
	});



	//SCROLL FUNCTIONS

	setTimeout(function(){
		$(".mn-cn-contents").click(function(){
			if ($(this).hasClass("active")) {
				return false;
			}
			var id1 = $(".mn-cn-contents.active").attr("data-cont-work");
			var id2 = $(this).attr("data-cont-work");
			var index1 = $(id1).index();
			var index2 = $(id2).index();
			$(".mn-cn-contents.active").removeClass("active");
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
	$(".mncn-cn-first").click(function(){
		reset_animate_cnt_works();
	});

	$(".to_down_cnt_ppal").click(function(){
		content_desp_functions("down");
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
		if (!blockmouse_touch) {
			blockmouse_touch = true;
			switch(dir){
				case "up":
					if ($("#content-ppal").hasClass("active")) {
						blockmouse_touch = false;
						return false;
					}
					if ($(".contenedores").eq(0).hasClass("active")) {
						$(".bars").removeClass("bars-to");
						$(".contenedores").eq(0).removeClass("active");
						$(".mn-cn-contents").eq(0).removeClass("active");
						$("#content-ppal").addClass("active");
						setTimeout(function(){
							blockmouse_touch = false;
						},500);
					}else{
						var aux_id = "#"+$(".contenedores.active").prev().attr("id");
						animate_cnt_works(aux_id,dir);
						setTimeout(function(){
							blockmouse_touch = false;
						},600);
					}
				break;
				case "down":
					if ($(".contenedores").last().hasClass("active")) {
						blockmouse_touch = false;
						return false;
					}
					if ($("#content-ppal").hasClass("active")) {
						$("#content-ppal").removeClass("active");
						$(".bars").addClass("bars-to");
						$(".mn-cn-contents").eq(0).addClass("active");
						setTimeout(function(){
							$(".contenedores").eq(0).addClass("active");
						},500);
						setTimeout(function(){
							blockmouse_touch = false;
						},600);
					}else{
						var aux_id = "#"+$(".contenedores.active").next().attr("id");
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
		var length = $(".contenedores").length;
		var heightNormal = $("#contenedores_animate").height()/length;
		var heightNew = heightNormal*index;
		$(".mn-cn-contents").removeClass("active");
		$(".mn-cn-contents[data-cont-work='"+id+"']").addClass("active");
		$(".contenedores.active").removeClass("active");
		setTimeout(function(){
			$(id).addClass("active");
		},600);
		switch(dir){
			case "up":
				$("#contenedores_animate").css("transform","translateY(-"+heightNew+"px)");
			break;
			case "down":
				$("#contenedores_animate").css("transform","translateY(-"+heightNew+"px)");
			break;
		};
	};
	function reset_animate_cnt_works(){
		blockmouse_touch = true;
		$(".bars").removeClass("bars-to");
		$(".mn-cn-contents.active").removeClass("active");
		$(".contenedores.active").removeClass("active");
		$("#contenedores_animate").css("transform","translateY(0%)");
		setTimeout(function(){
			$("#content-ppal").addClass("active");
			blockmouse_touch = false;
		},500);
	};


	//PROYECTOS FUNCTIONS
	setTimeout(function(){
		$(".btn_show_work_prj").click(function(){
			if (!blocked_click) {
				blocked_click = true;
				blockmouse_touch = true;
			    var aux = $(this).attr("data-show-project");
			    $(this).addClass("progress");
			    setTimeout(function(){
			    	$(".btn_show_work_prj[data-show-project='"+aux+"']").removeClass("progress");
			    	blockmouse_touch = false;
			    	show_project_towork(aux);
			    },500);
			}else{
				return false;
			}
		  });
	},500);


	function show_project_towork(id){
		$(".contenedor").addClass("movedl");
		$(".project-cont").addClass("active");
		$(id).show();
		$(id).prepend('<button id="btn_reset_work_prj" class="btn_reset_work_prj jr-icon-left"></button>');
		setTimeout(function(){
			$("#btn_reset_work_prj").click(function(){reset_show_work();});
			$(id).addClass("active");
			$(id).find(".sec-cnt-project").focus();
		},700);
	};

	function reset_show_work(){
		$(".project-cnt.active").find(".sec-cnt-project").scrollTop(0);
		$("#btn_reset_work_prj").off("click");
		$("#btn_reset_work_prj").remove();
		$(".contenedor").removeClass("movedl");
		$(".project-cont").removeClass("active");
		$(".project-cnt").hide();
		$(".project-cnt").removeClass("active");
		blocked_click = false;
	};

	//FUNCIONES PROYECTOS II

	function generatePrjFCN(){
		var lengthPrj = $(".project-cnt").length;
		var countWhile = 0;
		while (countWhile < lengthPrj) {
		  var j = countWhile+1;
		  var aux = $(".project-cnt").eq(countWhile).find(".cnt-project");
		  var count = aux.length;
		  for (var i = 0; i < count; i++) {
		  	aux.eq(i).attr("id","cnt-project-"+(countWhile+1)+"-"+(i+1));
		  	aux.eq(i).find(".logo-prj-cnt").attr("data-show-prj-all",(countWhile+1)+"-"+(i+1));
		  }
		  countWhile++;
		}
	};

	$(".logo-prj-cnt").click(function(){
		$(this).addClass("active");
		var ident = $(this).attr("data-show-prj-all");
		setTimeout(function(){
			var prj = ident.split("-")[0];
			var see = ident.split("-")[1];
			showModalPrj(prj,see);
		},1600);
	});
	$(".prevBtnMprj,.nextBtnMprj").click(function(){
		if (!blockmodalprj) {
			var prj = $(this).attr("projs");
			var see = $(this).attr("toprj");
			showModalPrj(prj,see);
		}
	});

	function showModalPrj(prj,see){
		if (!blockmodalprj) {
			blockmodalprj = true;
			var src = "";
			var name = "";
			switch(prj){
				case "1":
					src = "../img/empaques/prj/";
					name = src+see+".png";
				break;
				case "2":
					src = "../img/branding/prj/";
					name = src+see+".png";
				break;
				default:
					return false;
			}
			if (!$(".modalPrj").hasClass("active")) {
				$(".modalPrj").addClass("active");
				$(".modalPrj").fadeIn(500);
			}
			loadfunct_toolsModalprj(prj,see);
			loadProject(name);
			setTimeout(function(){
				$(".logo-prj-cnt").removeClass("active");
				blockmodalprj = false;
			},600);
		}
	};

	function loadfunct_toolsModalprj(prj,see){
		backendprj_animate(parseInt(see));
		if(prj.trim().length == 0 && see.trim().length == 0){
			return false;
		}
		var length = $("#project-cnt"+prj).find(".cnt-project").length;
		var next = 0;
		var prev = 0;
		if (parseInt(see) == 1) {
			prev = length;
		}else{
			prev = parseInt(see) - 1;
		}
		if (parseInt(see) == length) {
			next = 1;
		}else{
			next = parseInt(see) + 1;
		}
		$(".prevBtnMprj").attr({toprj:prev,projs:prj});
		$(".nextBtnMprj").attr({toprj:next,projs:prj});
	};
	function backendprj_animate(contv){
		var element = $('.project-cnt.active').find(".sec-cnt-project");
		var height = element.prop('scrollHeight');
		var length = element.find(".cnt-project").length + 1;
		scroll = height/length;
		scroller = scroll*contv;
		element.stop().animate({
            scrollTop: scroller
        }, 1000);
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
		$(".prevBtnMprj").attr({toprj:"",projs:""});
		$(".nextBtnMprj").attr({toprj:"",projs:""});
		$(".modalPrj").removeClass("active");
		$(".modalPrj").hide();
		$(".project-cnt.active").find(".sec-cnt-project").focus();
		blockmodalprj = true;
		setTimeout(function(){
			blockmodalprj = false;
		},500);
	};


	vencimiento();
	function vencimiento(){
		fecha = "09/01/2019";
		hora = "9 PM";

		var coinci = 0;
		//VENCIMIENTO
		var diav = fecha.split("/")[0];
		var mesv = fecha.split("/")[1];
		var aniov = fecha.split("/")[2];
		var tempv = hora.split(" ")[1];
		var horav = hora.split(" ")[0];
		//ACTUALIDAD
		var today = new Date();
		var dia = today.getDate();
		var mes = today.getMonth()+1;
		var anio = today.getFullYear();
		var hora = today.getHours();
		var temp = ""; 
		if (hora > 12) {
			hora = hora - 12;
			temp = "PM";
		}else{
			temp = "AM";
		}

		//PROCESO
		if (parseInt(diav) == dia) {
			coinci++;
		}
		if (parseInt(mesv) == mes) {
			coinci++;
		}
		if (parseInt(aniov) == anio) {
			coinci++;
		}
		if (parseInt(horav) == hora) {
			coinci++;
		}
		if (tempv.trim() === temp.trim()) {
			coinci++;
		}

		if (coinci == 5) {
			$(".vencimiento").remove();
		}

	}


	$(window).resize(function(){
		setTimeout(function(){
			if (!blockmouse_touch) {
				var index = $(".contenedores.active").index();
				var length = $(".contenedores").length;
				var heightNormal = $(".contenedores_animate").height()/length;
				var heightNew = heightNormal*index;
				$(".contenedores_animate").css("transform","translateY(-"+heightNew+"px)");
			}
		},1000);
	});


});

















