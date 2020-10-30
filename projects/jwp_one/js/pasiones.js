$(window).ready(function(){

	$(window).off("scroll");
	$(".menu a").off("click");
	$(".menuRes a").off("click");
	$(".here2").attr("class","here");
	$(window).off("resize");
	$(window).resize(function(){
		if ($(window).width() > 1125) {
			$(".menuRes").addClass("menuResDesactive");
    		$(".menuRes").removeClass("menuResActive");
    		$("body").css("overflow-y","auto");
		}
	});

	$(".menu a").click(function(){
		var aux = $(this).attr("href");
		redirectioner(aux);
		return false;
	});
	$(".menuRes a").click(function(){
		var aux = $(this).attr("href");
		redirectioner(aux);
		return false;
	});

	function redirectioner(href,e){
		$("#load").fadeIn(500);
		setTimeout(function(){
			$(location).attr('href',href); //--> Jquery
			//window.location.href = url    //--> JavaScript
		},600);
	};


	slide();
	function slide(){
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
		var prev = $('#btnPrev');
		var next = $('#btnNext');
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
	};

});