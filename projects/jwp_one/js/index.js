$(window).ready(function(){

	loadUp();
	//Funciones Generales
	function loadUp(){
		$("#load").fadeOut(1000);
	}
	function loadDown(){
		$("#load").fadeIn(500);
	}

	$(window).keydown(function(e){
		var tecla = e.which;
		if (tecla == 27) {
			$(".menuRes").addClass("menuResDesactive");
    		$(".menuRes").removeClass("menuResActive");
    		$("body").css("overflow-y","auto");
    		closeModalFunction("pasion-p1");
    		closeModalFunction("pasion-p2");
    		closeModalFunction("pasion-p3");
		}
	});

	//Funciones Scroll Generales
	$(window).scroll(function(){
	 	
	    var scroll = $(window).scrollTop();

	    scrollMenu(scroll);
	    scrollRespMenu();

	});

	//Scroll para funciones del menú
	function scrollMenu(scroll){



		if (scroll <= 2) {
			$(".hest1").attr("style","");
		}else if(scroll > 2 && scroll < $("#cont3").offset().top){
			$(".hest1").css("background","rgba(0,0,0,.8)");
		}else if(scroll >= $("#cont3").offset().top && scroll <= $("#cont3").offset().top+2){
			$(".hest1").css("background","rgba(0,0,0,0)");
		}else if (scroll > $("#cont3").offset().top+2){
			$(".hest1").css("background","rgba(0,0,0,.8)");
		}

	};

	//Anclas menú
	$(".menu a").click(function(){

		var link = $(this);
		
        var anchor  = link.attr('href');
        $("html,body").stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
        $("body").css("overflow-y","auto");
        return false;

    });

    //Formulario
    $("#btnSendFrm").click(function(e){

    	e.preventDefault();

    });

    //Funciones menú
    $(".btnBar").click(function(){
    	$(".menuRes").addClass("menuResActive");
    	$(".menuRes").removeClass("menuResDesactive");
    	$("body").css("overflow-y","hidden");
    });
    $(".btnCloseMenu").click(function(){
    	$(".menuRes").addClass("menuResDesactive");
    	$(".menuRes").removeClass("menuResActive");
    	$("body").css("overflow-y","auto");
    });


    //Funciones menu responsive
    $(window).resize(function(){
		scrollMenu();
		scrollRespMenu();
		if ($(window).width() > 1125) {
			$(".menuRes").addClass("menuResDesactive");
    		$(".menuRes").removeClass("menuResActive");
    		$("body").css("overflow-y","auto");
		}
	});
	$(".cntMenusRes a").click(function(){

		var link = $(this);
		
        var anchor  = link.attr('href');
        $("html,body").stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
        $(".menuRes").addClass("menuResDesactive");
    	$(".menuRes").removeClass("menuResActive");
    	$("body").css("overflow-y","auto");
    	setTimeout(function(){
        	$(window).scroll(function(){   
			    scrollRespMenu();
			});
        },1100);
        return false;

    });
    scrollRespMenu();
    function scrollRespMenu(){
    	var div = $(".content");
	    var wind = $(window);
	    var aux;
    	for (var i = 0; i < div.length; i++) {
    		if (i < div.length - 1) {
    			if (wind.scrollTop() >= div.eq(i).offset().top && wind.scrollTop() < div.eq(i+1).offset().top) {
    				aux = div.eq(i).attr("id");
    				menuOpc(aux);
    			}
    		}else{
    			if (wind.scrollTop() >= div.eq(i).offset().top) {
    				aux = div.eq(i).attr("id");
    				menuOpc(aux);
    			}
    		}
    	}
    };
    function menuOpc(id){
		for (var i = 0; i < $(".cntMenusRes a").length; i++) {
			$(".cntMenusRes a").eq(i).removeClass("here");
		}
		$(".cntMenusRes a[href='#"+id+"']").addClass("here");
	};

	//Funciones modal pasiones
	$('.modalPasion').bind('mousewheel', function(e){
        if (e.originalEvent.wheelDelta/120 < 0) {
        	var aux = $(this).attr("id");
        	openModalFunctionInto(aux);
        }
    });
    $(".btnCloseModal").click(function(){
    	var aux = $(this).attr("idModalPasion");
    	closeModalFunction(aux);
    });
    function openModalFunction(id){
    	$("body").css("overflow-y","hidden");
    	$("#"+id).css("width","200%");
    	$("#"+id).css("opacity","1");
    	$("#"+id).focus();
    };
    function closeModalFunction(id){
    	$("body").css("overflow-y","auto");
    	$("#"+id).css("width","0px");
    	$("#"+id).css("opacity","0");
    	setTimeout(function(){
    		$("#"+id).css("margin-left","0%");
        	$(".btnCloseModal[idModalPasion='"+id+"']").css("right","51%");
    	},1100);
    }
    function openModalFunctionInto(id){
    	$("#"+id).css("margin-left","-100%");
        $(".btnCloseModal[idModalPasion='"+id+"']").css("right","1%");
    };

    $(".btnMdPasion").click(function(){
    	var aux = $(this).attr("idModalPasion");
    	openModalFunctionInto(aux);
    });
    $(".btnPasion").click(function(){
    	var aux = $(this).attr("typeToolPass");
    	if (aux == "openModal") {
    		var id = $(this).attr("idTypeToolPass");
    		openModalFunction(id);
    	}
    });
    $(".dirLink").click(function(){
		loadDown();
		var url = $(this).attr("idTypeToolPass");
		setTimeout(function(){
			$(location).attr('href',url); //--> Jquery
			//window.location.href = url    //--> JavaScript
		},600);
	});


	//Funciones de URL
	$(document).ready(function(){
		url = document.URL;
    	url = url.substring(0, url.indexOf('?'));
    	history.replaceState(null, "", url);
	});

});