$(window).ready(function(){

	miniSlide1();
	miniSlide2();
	miniSlide3();
	miniSlide4();

	function miniSlide1(){
		//guardar el slider en una variable y seccion en variable
		var slider = $('#Mslider1');
		var seccioner = $('.slider_c1');
		//buscar cantidad de secciones
		var seccion = slider.find('.slider_c1');
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
		var prev = $('#btnPrevC1');
		var next = $('#btnNextC1');
		//Movemos el ultimo seccion al primer lugar
		$('#Mslider1 .slider_c1:last').insertBefore('#Mslider1 .slider_c1:first');
		//le damos un margen negativo para ver el segundo elemento, que vendría a ser la primera imagen
		slider.css('margin-left', '-'+100+'%');


		//mover boton derecho
		function moverD() {
			$(slider).animate({
				marginLeft: '-'+200+'%'
			}, 700, function() {
				$('#Mslider1 .slider_c1:first').insertAfter('#Mslider1 .slider_c1:last');
				slider.css('margin-left', '-'+100+'%');
		  });
		}
		//mover boton derecho
		function moverI() {
			$(slider).animate({
				marginLeft: 0
			}, 700, function() {
				$('#Mslider1 .slider_c1:last').insertBefore('#Mslider1 .slider_c1:first');
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

	function miniSlide2(){
		//guardar el slider en una variable y seccion en variable
		var slider = $('#Mslider2');
		var seccioner = $('.slider_c2');
		//buscar cantidad de secciones
		var seccion = slider.find('.slider_c2');
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
		var prev = $('#btnPrevC2');
		var next = $('#btnNextC2');
		//Movemos el ultimo seccion al primer lugar
		$('#Mslider2 .slider_c2:last').insertBefore('#Mslider2 .slider_c2:first');
		//le damos un margen negativo para ver el segundo elemento, que vendría a ser la primera imagen
		slider.css('margin-left', '-'+100+'%');


		//mover boton derecho
		function moverD() {
			$(slider).animate({
				marginLeft: '-'+200+'%'
			}, 700, function() {
				$('#Mslider2 .slider_c2:first').insertAfter('#Mslider2 .slider_c2:last');
				slider.css('margin-left', '-'+100+'%');
		  });
		}
		//mover boton derecho
		function moverI() {
			$(slider).animate({
				marginLeft: 0
			}, 700, function() {
				$('#Mslider2 .slider_c2:last').insertBefore('#Mslider2 .slider_c2:first');
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

	function miniSlide3(){
		//guardar el slider en una variable y seccion en variable
		var slider = $('#Mslider3');
		var seccioner = $('.slider_c3');
		//buscar cantidad de secciones
		var seccion = slider.find('.slider_c3');
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
		var prev = $('#btnPrevC3');
		var next = $('#btnNextC3');
		//Movemos el ultimo seccion al primer lugar
		$('#Mslider3 .slider_c3:last').insertBefore('#Mslider3 .slider_c3:first');
		//le damos un margen negativo para ver el segundo elemento, que vendría a ser la primera imagen
		slider.css('margin-left', '-'+100+'%');


		//mover boton derecho
		function moverD() {
			$(slider).animate({
				marginLeft: '-'+200+'%'
			}, 700, function() {
				$('#Mslider3 .slider_c3:first').insertAfter('#Mslider3 .slider_c3:last');
				slider.css('margin-left', '-'+100+'%');
		  });
		}
		//mover boton derecho
		function moverI() {
			$(slider).animate({
				marginLeft: 0
			}, 700, function() {
				$('#Mslider3 .slider_c3:last').insertBefore('#Mslider3 .slider_c3:first');
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

	function miniSlide4(){
		//guardar el slider en una variable y seccion en variable
		var slider = $('#Mslider4');
		var seccioner = $('.slider_c4');
		//buscar cantidad de secciones
		var seccion = slider.find('.slider_c4');
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
		var prev = $('#btnPrevC4');
		var next = $('#btnNextC4');
		//Movemos el ultimo seccion al primer lugar
		$('#Mslider4 .slider_c4:last').insertBefore('#Mslider4 .slider_c4:first');
		//le damos un margen negativo para ver el segundo elemento, que vendría a ser la primera imagen
		slider.css('margin-left', '-'+100+'%');


		//mover boton derecho
		function moverD() {
			$(slider).animate({
				marginLeft: '-'+200+'%'
			}, 700, function() {
				$('#Mslider4 .slider_c4:first').insertAfter('#Mslider4 .slider_c4:last');
				slider.css('margin-left', '-'+100+'%');
		  });
		}
		//mover boton derecho
		function moverI() {
			$(slider).animate({
				marginLeft: 0
			}, 700, function() {
				$('#Mslider4 .slider_c4:last').insertBefore('#Mslider4 .slider_c4:first');
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