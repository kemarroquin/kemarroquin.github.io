$(window).ready(function(){

	setTimeout(function(){
		$(".load").fadeOut();
	}, 300);


	//MENU Y HEADER

	$(".menubar").click(function(){
		OpenMenu();
	});

	$(".menuclose").click(function(){
		CloseMenu();
	});


	$(window).resize(function(){

		var aux = $(".menubar");

		if (aux.hasClass("menubarOff")) {
			if ($(this).width() > 1030) {
				$(".menu").addClass("menuExpand");
				$(".menu2").removeClass("menu2Expand");
			}else{
				$(".menu").removeClass("menuExpand");
				$(".menu2").addClass("menu2Expand");
			}
		}else{
			if ($(this).width() > 1030) {
				CloseMenu();
			}else{
				CloseMenu();
			}
		}

	});

	$(window).keydown(function(e){
		if (e.which == 27) {
			if ($(".menubar").hasClass("menubarOff")) {
				CloseMenu();
			}else{
				return false;
			}
		}
	});


	function OpenMenu(){

		$("body").css("overflow-y","hidden");
		var widthPant = $(window).width();

		$(".logo3").addClass("logo3off");
		$(".linkLogo").addClass("linkLogoExpand");
		setTimeout(function(){
			$(".logo3").fadeOut();
		}, 500);
		setTimeout(function(){
			$(".logo1").addClass("logo1on");
		}, 600);
		setTimeout(function(){
			$(".logo2").addClass("logo2on");
		}, 900);
		setTimeout(function(){

			if (widthPant > 1030) {
				$(".menu").addClass("menuExpand");				
			}else{
				$(".menu2").addClass("menu2Expand");
			}

			$(".menubar").addClass("menubarOff");
			$(".contLogo2 p").addClass("pLogoOn");
		}, 1000);
		setTimeout(function(){
			$(".menuclose").addClass("menucloseOn");
		}, 1800);

	};

	function CloseMenu(){

		$("body").css("overflow-y","auto");

		var widthPant = $(window).width();
		$(".linkLogo").removeClass("linkLogoExpand");

		setTimeout(function(){
			$(".logo1").removeClass("logo1on");
			$(".logo2").removeClass("logo2on");
			$(".contLogo2 p").removeClass("pLogoOn");
			$(".menuclose").removeClass("menucloseOn");
			$(".menubar").removeClass("menubarOff");
		}, 300);
		setTimeout(function(){
			$(".logo3").fadeIn();
			$(".logo3").removeClass("logo3off");
			if (widthPant > 1030) {
				$(".menu").removeClass("menuExpand");				
			}else{
				$(".menu2").removeClass("menu2Expand");
			}
		}, 600);
		
	};

// SLIDER


//guardar el slider en una variable y seccion en variable
var slider = $('#slider');
var seccioner = $('.slider_cont');
//buscar cantidad de secciones
var seccion = slider.find('.slider_cont');
//contar el numero de secciones
var n = seccion.length;
//ancho del slider
var ws = 100 * n;
//ancho para cada seccion del slider
var anc = 100/n;
for (var i = 0; i < n; i++) {
	seccioner.eq(i).css('width',anc+'%');
}
//definir el ancho de slider
slider.css('width', ws+'%');
//almacenar botones
var prev = $('#btn-prev');
var next = $('#btn-next');
//Movemos el ultimo seccion al primer lugar
$('#slider .slider_cont:last').insertBefore('#slider .slider_cont:first');
//le damos un margen negativo para ver el segundo elemento, que vendría a ser la primera imagen
slider.css('margin-left', '-'+100+'%');


//mover boton derecho
function moverD() {
	$(slider).animate({
		marginLeft: '-'+200+'%'
	}, 700, function() {
		$('#slider .slider_cont:first').insertAfter('#slider .slider_cont:last');
		slider.css('margin-left', '-'+100+'%');
  });
}
//mover boton derecho
function moverI() {
	$(slider).animate({
		marginLeft: 0
	}, 700, function() {
		$('#slider .slider_cont:last').insertBefore('#slider .slider_cont:first');
		slider.css('margin-left', '-'+100+'%');
  });
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
next.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

prev.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();


	$(".dirLink").click(function(){

		var url = $(this).attr("dirr");
		$(location).attr('href',url); //--> Jquery
		//window.location.href = url    //--> JavaScript

	});

	
});