function principal(){
	/*-------------------EFECTO SCROLL-----------------------------*/
	window.addEventListener("scroll",scrollefect);

	function scrollefect(){
		var papu =  window.pageYOffset;
		if (papu > 300) {
			/*
			document.getElementById("ancla").style.right = "10px";
			document.getElementById("ancla").style.opacity = "1";
			*/
			/*Efecto logo*/
			document.getElementById("logo1").style.opacity = "0";
			document.getElementById("logo1").style.width = "2px";
			document.getElementById("logo2").setAttribute('class','logo2v2');
			/*Efecto logo*/


		}else{
			/*
			document.getElementById("ancla").style.opacity = "0";
			document.getElementById("ancla").style.right = "-100px";
			*/
			/*Efecto logo*/
			document.getElementById("logo1").style.opacity = "1";
			document.getElementById("logo1").style.width = "180px";
			document.getElementById("logo2").setAttribute('class','logo2');
			/*Efecto logo*/
		}
	}
	/*-------------------EFECTO SCROLL-----------------------------*/
}

window.onload = principal();