function FuncPpal(){

	/*LO PRINCIPAL*/



	var r = 0;//Variable que contabiliza el numero de usuarios registrados
	var usuario = JSON.parse(localStorage.getItem('usuario'));

	localStorage.removeItem('usuario');
	localStorage.setItem('usuario', JSON.stringify(usuario));
	// Si no existe historial, creamos un array sin contenido
	if (usuario === null) {
		usuario = [];
	}
	r = usuario.length;
	function cuenta () {
		this.nombre ;
		this.apellidos ;
		this.mail;
		this.pass;
		this.direccion;
		this.pregunta;
		this.respuesta;
		this.dui;
		this.nit;
		this.celular;
		this.fech_nacimiento;
		this.efectivo;
		this.nombre_cuentabanc = [];
		this.numero_cuentabanc = [];
		this.saldo_cuentabanc = [];
		this.nombre_tarjetacredito = [];
		this.numero_tarjetacredito = [];
		this.saldo_tarjetacredito = [];
		this.interes_tarjetacredito = [];
		this.vencimiento_tarjetacredito = [];
		this.cr = 0;//Variable que contabiliza las cuentas bancarias registradas por el usuario
		this.tcr = 0;
		this.nombre_ingresosperiodicos = [];
		this.tipo_ingresosperiodicos = [];
		this.sueldo_ingresosperiodicos = [];
		this.fecha_ingresosperiodicos = [];
		this.formapago_ingresosperiodicos = [];
		this.cuenta_ingresosperiodicos = [];
		this.historial_ingresosperiodicos = [];
		this.hist_index = 0;
		this.ipc = 0;
		this.motivo_otrosingresos = [];
		this.monto_otrosingresos = [];
		this.fecha_otrosingresos = [];
		this.cuenta_otrosingresos = [];
		this.oic = 0;
		this.banco_prestamos = [];
		this.numero_prestamos = [];
		this.monto_prestamos = [];
		this.meses_prestamos = [];
		this.interes_prestamos =[];
		this.total_prestamos = [];
		this.cuotascanceladas_prestamos = [];
		this.cuota_prestamos =[];
		this.saldo_prestamos = [];
		this.vencimiento_prestamos = [];;
		this.pc = 0;
		this.nombregastop_gastosp = [];
		this.montogastop_gastosp = [];
		this.fechagastop_gastosp = [];
		this.tipogastop_gastosp = [];
		this.intipogastop_gastosp = [];
		this.historial_gastosp = "";//Dato Nuevo ************************************************
		this.eliminado_gastosp = false;//Dato Nuevo ************************************************
		this.intervalo_gastosp = [];
		this.cgp = 0;
		this.nombregasto_gastos = [];
		this.montogasto_gastos = [];
		this.fechagasto_gastos = [];
		this.tipogasto_gastos = [];
		this.categoriagasto_gastos = [];
		this.cgn = 0;
		this.configDias = 0;
		this.balance_minimo = 0;
		this.balance_general;
		this.sesion;
		this.primera_vez;
	};
 
	document.getElementById("AceptarPV").addEventListener("click",  AceptarPV);
	function AceptarPV(){
		var pv_efecti = document.getElementById("PV_efectivo");
		var valPV = document.getElementById("valPV");

		if (pv_efecti.value === "" || pv_efecti.value.replace(/ /g, '') === '') {
			pv_efecti.value = "";
			pv_efecti.focus();
			pv_efecti.style.border = "1px solid red";
			pv_efecti.setAttribute("placeholder","Ingrese el efectivo");
			return false;
		}else{
			pv_efecti.style.border = "1px solid darkgreen";
			pv_efecti.setAttribute("placeholder","00.00");
		}
		for (var i = 0; i < r; i++) {
			if (usuario[i].sesion === true) {
				if (usuario[i].cr === 0) {
					alert("Ingrese al menos una cuenta (Obligatorio)");
					document.getElementById("pv_CPV1").focus();
					return false;
				}
				if (usuario[i].primera_vez === true) {
					document.getElementById("modal_firstVez").style.left="0px";
				}
				usuario[i].balance_general = 0;
				for (var j = 0; j < usuario[i].cr; j++) {
					usuario[i].balance_general += "+"+usuario[i].saldo_cuentabanc[j];
				}
				var total = usuario[i].balance_general;
				var bTotal = eval(total);
				usuario[i].balance_general = bTotal.toFixed(2);
				document.getElementById("balance_mio").innerHTML = "";
				document.getElementById("balance_mio").innerHTML = "$"+bTotal.toFixed(2);
				document.getElementById("modal_firstVez").style.left = "-150%";
				usuario[i].primera_vez = false;
				pv_efecti.disabled = false;
				valPV.disabled = false;
				pv_efecti.value = "";
				document.getElementById("addCPV").value = "Agregar (0)";

				localStorage.removeItem('usuario');
				localStorage.setItem('usuario', JSON.stringify(usuario));
				inicio_sesion()
			}else{
				document.getElementById("principal").style.display = "block";
				document.getElementById("nombre_user_header").innerHTML = "";
				document.getElementById("efectivo_mio").innerHTML = "";
				document.getElementById("balance_mio").innerHTML = "";
			}
		}
		localStorage.removeItem('usuario');
		localStorage.setItem('usuario', JSON.stringify(usuario));
	}

	document.getElementById("valPV").addEventListener("click",  valPV);
	function valPV(){

		var pv_efecti = document.getElementById("PV_efectivo");
		var valPV = document.getElementById("valPV");
		expDEC = /\d+(\.\d{1,2})?/;
		expINT = /[0-9]{1,}/;

		if (pv_efecti.value === "" || pv_efecti.value.replace(/ /g, '') === '') {
			pv_efecti.value = "";
			pv_efecti.focus();
			pv_efecti.style.border = "1px solid red";
			pv_efecti.setAttribute("placeholder","Ingrese el efectivo");
			return false;
		}else{
			pv_efecti.style.border = "1px solid darkgreen";
			pv_efecti.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (!expDEC.test(pv_efecti.value) || !expINT.test(pv_efecti.value)) {
			pv_efecti.value = "";
			pv_efecti.focus();
			pv_efecti.style.border = "1px solid red";
			pv_efecti.setAttribute("placeholder","Ingrese numeros validos");
			return false;
		}else{
			pv_efecti.style.border = "1px solid darkgreen";
			pv_efecti.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		for (var i = 0; i < r; i++) {
			if (usuario[i].sesion === true) {
				usuario[i].efectivo = pv_efecti.value;
				document.getElementById("efectivo_mio").innerHTML = "$"+usuario[i].efectivo;
				usuario[i].primera_vez = false;
				pv_efecti.disabled = true;
				valPV.disabled = true;
			}
		}
		localStorage.removeItem('usuario');
		localStorage.setItem('usuario', JSON.stringify(usuario));
	}

	document.getElementById("addCPV").addEventListener("click",  addCPV);
	function addCPV(){

		var pv_CPV1 = document.getElementById("pv_CPV1");
		var pv_CPV2 = document.getElementById("pv_CPV2");
		var pv_CPV3 = document.getElementById("pv_CPV3"); 
		expDEC = /\d+(\.\d{1,2})?/;
		expINT = /[0-9]{1,}/;
        
		if (pv_CPV1.value === "" || pv_CPV1.value.replace(/ /g, '') === '') {
			pv_CPV1.value = "";
			pv_CPV1.focus();
			pv_CPV1.style.border = "1px solid red";
			pv_CPV1.setAttribute("placeholder","Ingrese el banco");
			return false;
		}else{
			pv_CPV1.style.border = "1px solid darkgreen";
			pv_CPV1.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (pv_CPV2.value === "" || pv_CPV2.value.replace(/ /g, '') === '') {
			pv_CPV2.value = "";
			pv_CPV2.focus();
			pv_CPV2.style.border = "1px solid red";
			pv_CPV2.setAttribute("placeholder","Ingrese el efectivo");
			return false;
		}else{
			pv_CPV2.style.border = "1px solid darkgreen";
			pv_CPV2.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (!expINT.test(pv_CPV2.value)) {
			pv_CPV2.value = "";
			pv_CPV2.focus();
			pv_CPV2.style.border = "1px solid red";
			pv_CPV2.setAttribute("placeholder","Ingrese numeros enteros");
			return false;
		}else{
			pv_CPV2.style.border = "1px solid darkgreen";
			pv_CPV2.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (pv_CPV3.value === "" || pv_CPV3.value.replace(/ /g, '') === '') {
			pv_CPV3.value = "";
			pv_CPV3.focus();
			pv_CPV3.style.border = "1px solid red";
			pv_CPV3.setAttribute("placeholder","Ingrese el efectivo");
			return false;
		}else{
			pv_CPV3.style.border = "1px solid darkgreen";
			pv_CPV3.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (!expDEC.test(pv_CPV3.value) || !expINT.test(pv_CPV3.value)) {
			pv_CPV3.value = "";
			pv_CPV3.focus();
			pv_CPV3.style.border = "1px solid red";
			pv_CPV3.setAttribute("placeholder","Ingrese numeros validos");
			return false;
		}else{
			pv_CPV3.style.border = "1px solid darkgreen";
			pv_CPV3.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (pv_CPV3.value != "") {
			for (var i = 0; i < r; i++) {
				if (usuario[i].sesion === true) {
					usuario[i].nombre_cuentabanc[usuario[i].cr] = pv_CPV1.value;
					usuario[i].numero_cuentabanc[usuario[i].cr] = pv_CPV2.value;
					usuario[i].saldo_cuentabanc[usuario[i].cr] = pv_CPV3.value;
					usuario[i].cr +=1;
					document.getElementById("addCPV").value = "Agregar ("+usuario[i].cr+")";
					pv_CPV1.value = "";
					pv_CPV2.value = "";
					pv_CPV3.value = "";
					return 0;
				}
			}
			localStorage.removeItem('usuario');
			localStorage.setItem('usuario', JSON.stringify(usuario));
		};
	}
	function new_cuentaahorro(){
		var pv_CPV1 = document.getElementById("newCA_nombre");
		var pv_CPV2 = document.getElementById("newCA_numero");
		var pv_CPV3 = document.getElementById("newCA_saldo"); 
		var expDEC = /\d+(\.\d{1,2})?/;
		var expINT = /[0-9]{1,}/;
        
		if (pv_CPV1.value === "" || pv_CPV1.value.replace(/ /g, '') === '') {
			pv_CPV1.value = "";
			pv_CPV1.focus();
			pv_CPV1.style.border = "1px solid red";
			pv_CPV1.setAttribute("placeholder","Ingrese el banco");
			return false;
		}else{
			pv_CPV1.style.border = "1px solid darkgreen";
			pv_CPV1.setAttribute("placeholder","Example Bank");
		}
		if (pv_CPV2.value === "" || pv_CPV2.value.replace(/ /g, '') === '') {
			pv_CPV2.value = "";
			pv_CPV2.focus();
			pv_CPV2.style.border = "1px solid red";
			pv_CPV2.setAttribute("placeholder","Ingrese el efectivo");
			return false;
		}else{
			pv_CPV2.style.border = "1px solid darkgreen";
			pv_CPV2.setAttribute("placeholder","########");
		}
		if (!expINT.test(pv_CPV2.value)) {
			pv_CPV2.value = "";
			pv_CPV2.focus();
			pv_CPV2.style.border = "1px solid red";
			pv_CPV2.setAttribute("placeholder","Ingrese numeros enteros");
			return false;
		}else{
			pv_CPV2.style.border = "1px solid darkgreen";
			pv_CPV2.setAttribute("placeholder","########");
		}
		if (pv_CPV3.value === "" || pv_CPV3.value.replace(/ /g, '') === '') {
			pv_CPV3.value = "";
			pv_CPV3.focus();
			pv_CPV3.style.border = "1px solid red";
			pv_CPV3.setAttribute("placeholder","Ingrese el efectivo");
			return false;
		}else{
			pv_CPV3.style.border = "1px solid darkgreen";
			pv_CPV3.setAttribute("placeholder","00.00");
		}
		if (!expDEC.test(pv_CPV3.value) || !expINT.test(pv_CPV3.value)) {
			pv_CPV3.value = "";
			pv_CPV3.focus();
			pv_CPV3.style.border = "1px solid red";
			pv_CPV3.setAttribute("placeholder","Ingrese numeros validos");
			return false;
		}else{
			pv_CPV3.style.border = "1px solid darkgreen";
			pv_CPV3.setAttribute("placeholder","00.00");
		}
		if (pv_CPV3.value != "") {
			for (var i = 0; i < r; i++) {
				if (usuario[i].sesion === true) {
					usuario[i].nombre_cuentabanc[usuario[i].cr] = pv_CPV1.value;
					usuario[i].numero_cuentabanc[usuario[i].cr] = pv_CPV2.value;
					usuario[i].saldo_cuentabanc[usuario[i].cr] = pv_CPV3.value;
					usuario[i].cr +=1;
					alert("Cuenta de ahorros registrada exitosamente!");

					usuario[i].balance_general = 0;
					for (var j = 0; j < usuario[i].cr; j++) {
						usuario[i].balance_general += parseFloat(usuario[i].saldo_cuentabanc[j]);
					}
					var total = usuario[i].balance_general;
					var bTotal = eval(total);
					usuario[i].balance_general = bTotal.toFixed(2);
					usuario[i].primera_vez = false;
					document.getElementById("balance_mio").innerHTML = "";	
					document.getElementById("balance_mio").innerHTML = "$"+bTotal.toFixed(2);

			        //Mostrando cuentas de ahorro
					var div_cuentas = "<div class='cont_tuscuentasdeahorro'>\n"
					for (var u = 0; u < usuario[i].cr; u++) {
						div_cuentas += "<div class='tuscuentasdeahorro' id='idCn"+ eval(u+1) +"'>\n";
						div_cuentas += "<h6 class='CAth'>\nBanco: " + usuario[i].nombre_cuentabanc[u] + "\n</h6>\n</tr>\n";
						div_cuentas += "<p class='CAtd'>\n# de cuenta: " + usuario[i].numero_cuentabanc[u] + "\n</p>\n";
						div_cuentas += "<p class='CAtdlast'>\nSaldo actual: $" + usuario[i].saldo_cuentabanc[u] + "</p>\n";
						div_cuentas += "</div>\n"
					}
					div_cuentas += "</div>\n"
					document.getElementById("cuentas_exist").innerHTML = "";
					document.getElementById("cuentas_exist").innerHTML = div_cuentas;
					
				}
			}
			
			localStorage.removeItem('usuario');
			localStorage.setItem('usuario', JSON.stringify(usuario));
			
		};

	}

	function inicio_sesion(){
		for (var i = 0; i < r; i++) {
			if (usuario[i].sesion === true) {
				document.getElementById("principal").style.display = "none";
				document.getElementById("secundario").style.left = "0px";
				document.getElementById("nombre_user_header").innerHTML = usuario[i].nombre;
				document.getElementById("efectivo_mio").innerHTML = "$"+usuario[i].efectivo;
				if (usuario[i].primera_vez === true) {
					document.getElementById("modal_firstVez").style.left="0px";
				}else{
					usuario[i].balance_general = 0;
					for (var j = 0; j < usuario[i].cr; j++) {
						usuario[i].balance_general += parseFloat(usuario[i].saldo_cuentabanc[j]);
					}
					var total = usuario[i].balance_general;
					var bTotal = eval(total);
					usuario[i].balance_general = bTotal.toFixed(2);
					usuario[i].primera_vez = false;
					document.getElementById("balance_mio").innerHTML = "$"+bTotal.toFixed(2);


					
					//Mostrando Cuentas de Ahorros Disponibles (Ingresos Periodicos)
					mostrar_cuentas();
					//Mostrando Historial de Ingresos Periodicos
					mostrar_historialIP();

					mostrar_sueldos();

					mostrar_remesas();

					mostrar_nombresIP()

					mostrando_otrosingresos()

					mostrando_prestamos()

					SeeAllInfoUser();

					BalanceGeneral();

				} 
			}else{
				document.getElementById("principal").style.display = "block";
				document.getElementById("secundario").style.left = "-150%";
				document.getElementById("nombre_user_header").innerHTML = "";
				document.getElementById("efectivo_mio").innerHTML = "";
			}
		}
		localStorage.removeItem('usuario');
		localStorage.setItem('usuario', JSON.stringify(usuario));
	}

	document.getElementById("close_logut").addEventListener("click", close_logut);
	function close_logut(){
		for (var i = 0; i < r; i++){
			if (usuario[i].sesion === true) {
				usuario[i].sesion = false;
				localStorage.removeItem('usuario');
				localStorage.setItem('usuario', JSON.stringify(usuario));
				inicio_sesion();
			}
		}
	}

	document.getElementById("forgot_pass").addEventListener("click", forgot_pass);
	function forgot_pass(){
		document.getElementById("modal_recupC").style.left = "0px";
		document.getElementById("login_func").checked = false;
		document.getElementById("principal").style.overflowY="hidden";
		document.getElementById("principal").style.height="100vh";
	}
	document.getElementById("formRC").addEventListener("reset", cancelRC);
	function cancelRC(){
		document.getElementById("modal_recupC").style.left = "-100%";
		document.getElementById("RC_email").value = "";
		document.getElementById("RC_Qemail").value = "";
		document.getElementById("RC_Iemail").value = "";
		document.getElementById("principal").style.overflowY="auto";
		document.getElementById("principal").style.height="auto";
		document.getElementById("RC_email").value = "";
		document.getElementById("RC_email").disabled = false;
		document.getElementById("valRC").disabled = false;
		document.getElementById("RC_email").innerHTML = "";
		document.getElementById("RC_Qemail").value = "";
	}

	document.getElementById("valRC").addEventListener("click", valRC);
	function valRC(){//Validar recordar contraseña
		var email = document.getElementById("RC_email");
		var Vemail = document.getElementById("RC_email").value;
		for (var i = 0; i < r; i++){
			if (usuario[i].mail === Vemail) {
				var preg = usuario[i].pregunta;
				Vemail = "";
				email.disabled = true;
				alert(preg)
				document.getElementById("valRC").disabled = true;
				document.getElementById("RC_Iemail").innerHTML = preg;
				document.getElementById("RC_Qemail").focus();
			}else{
				Vemail = "";
				email.setAttribute("placeholder", "Usuario incorrecto");
				email.focus();
				return false;
			}
		}
	}
	document.getElementById("valRCc").addEventListener("click", valRCc);
	function valRCc(){

		var email = document.getElementById("RC_Qemail");
		var Vemail = document.getElementById("RC_Iemail").innerHTML;
		var Remail = document.getElementById("RC_Qemail").value;

		if (Remail != "") {
			for (var i = 0; i < r; i++){
				if (usuario[i].pregunta === Vemail){
					var respC = usuario[i].respuesta;
					if (respC === Remail) {
						var contraRC = usuario[i].pass;
						alert("Su contraseña es...  " + contraRC);
						cancelRC();
					}else{
						Remail = "";
						email.setAttribute("placeholder", "Incorrecto");
						email.focus();
						return false;
					}
				}
			}
		}else{
			email.style.border = "1px solid red";
			email.focus();
			email.setAttribute("placeholder", "Ingrese plox")
		}
	}

	/*LO PRINCIPAL*/

	
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

	/*-------------------BOTON ANCLA-----------------------------*/
	/*
	document.getElementById("ancla").addEventListener("click", hola);
	function holitas(){
			var scrolito = "-"+window.pageYOffset;
			window.scrollBy(0,scrolito)
		}
	function hola(){
		holitas();
	}
	*/
	/*-------------------BOTON ANCLA-----------------------------*/

	/*-------------------REGISTRO-----------------------------*/
	document.getElementById("registro").addEventListener("click", registro_open);
	document.getElementById("close_modal_reg").addEventListener("click", closeModalReg);

	function registro_open(){
		document.getElementById("modal_registro").style.left = "0";
		document.getElementById("modal_registro").style.opacity = "1";
	}
	function closeModalReg(){
		document.getElementById("modal_registro").style.left = "-100%";
		document.getElementById("modal_registro").style.opacity = "0";
	}
					/*VALIDACION*/
	document.getElementById("btn_reg").addEventListener("click", val_reg);

	function val_reg(){
		usuario[r] = new cuenta();
		var reg_nombre = document.getElementById("reg_nombre");
		var reg_apellido = document.getElementById("reg_apellido");
		var reg_email = document.getElementById("reg_email");
		var reg_pass = document.getElementById("reg_pass");
		var reg_pass2 = document.getElementById("reg_pass2");
		var reg_dir = document.getElementById("reg_dir");
		var reg_preguntas = document.getElementById("reg_preguntas");
		var reg_resp = document.getElementById("reg_resp");
		var reg_dui = document.getElementById("reg_dui");
		var reg_nit= document.getElementById("reg_nit");
		var reg_cel = document.getElementById("reg_cel");
		var reg_date = document.getElementById("reg_date");
		var expEM = /\w+@\w+\.+[a-z]/;
		var expDUI = /^\d{8}-\d{1}$/;
		var expNIT = /^\d{4}-\d{6}-\d{3}-\d{1}$/
		var expCel = /^\d{4}-\d{4}$/;
		var today = new Date();

		if (reg_nombre.value === "" || reg_nombre.value.replace(/ /g, '') === '') {
			reg_nombre.value = "";
			reg_nombre.focus();
			reg_nombre.style.border = "1px solid red";
			reg_nombre.setAttribute("placeholder","Ingrese sus nombres");
			return false;
		}else{
			reg_nombre.style.border = "1px solid darkgreen";
			reg_nombre.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (reg_apellido.value === "" || reg_apellido.value.replace(/ /g, '') === '') {
			reg_apellido.value = "";
			reg_apellido.focus();
			reg_apellido.style.border = "1px solid red";
			reg_apellido.setAttribute("placeholder","Ingrese sus apellidos");
			return false;
		}else{
			reg_apellido.style.border = "1px solid darkgreen";
			reg_apellido.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (reg_email.value === "" || reg_email.value.replace(/ /g, '') === '') {
			reg_email.value = "";
			reg_email.focus();
			reg_email.style.border = "1px solid red";
			reg_email.setAttribute("placeholder","Ingrese su correo");
			return false;
		}else{
			reg_email.style.border = "1px solid darkgreen";
			reg_email.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (!expEM.test(reg_email.value)) {
			reg_email.value = "";
			reg_email.focus();
			reg_email.style.border = "1px solid red";
			reg_email.setAttribute("placeholder","Formato incorrecto");
			return false;
		}else{
			reg_email.style.border = "1px solid darkgreen";
			reg_email.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		for (var i = 0; i < r; i++) {
           	if(usuario[i].mail === reg_email.value){
	            reg_email.value = "";
				reg_email.focus();
				reg_email.style.border = "1px solid red";
				reg_email.setAttribute("placeholder","Ya existe este correo");
				return false;
            }else{
				reg_email.style.border = "1px solid darkgreen";
				reg_email.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
			}
        }
		if (reg_pass.value === "" || reg_pass.value.replace(/ /g, '') === '') {
			reg_pass.value = "";
			reg_pass.focus();
			reg_pass.style.border = "1px solid red";
			reg_pass.setAttribute("placeholder","Ingrese la contraseña");
			return false;
		}else{
			reg_pass.style.border = "1px solid darkgreen";
			reg_pass.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
			var nMay = 0, nMin = 0, nNum = 0, nSim = 0;
			var tx = reg_pass.value;
			var t1 = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
			var t2 = "abcdefghijklmnñopqrstuvwxyz"
			var t3 = "0123456789"
			var t4 = "|°¬!#$%&/()=?¡¿'´+*¨{}[]-.,;:_^`~"
			for (i=0;i<tx.length;i++) {
				if ( t1.indexOf(tx.charAt(i)) != -1 ) {nMay++;}
				if ( t2.indexOf(tx.charAt(i)) != -1 ) {nMin++;}
				if ( t3.indexOf(tx.charAt(i)) != -1 ) {nNum++;}
				if ( t4.indexOf(tx.charAt(i)) != -1 ) {nSim++;}
			}
		}
		if ( nMay<=0 || nMin<=0 || nNum<=0 || nSim<=0 ) {
			reg_pass.value = "";
			reg_pass.focus();
			reg_pass.style.border = "1px solid red";
			reg_pass.setAttribute("placeholder","Formato Incorrecto");
			alert("Debe ingresar al menus una letra mayusculas\nuna minuscula, un simbolo y un digito");
			return false;
		}
		else {
			reg_pass.style.border = "1px solid darkgreen";
			reg_pass.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (reg_pass.value.length < 8) {
			reg_pass.value = "";
			reg_pass.focus();
			reg_pass.style.border = "1px solid red";
			reg_pass.setAttribute("placeholder","Minimo 8 caracteres");
			return false;
		}else{
			reg_pass.style.border = "1px solid darkgreen";
			reg_pass.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (reg_pass.value != reg_pass2.value) {
			reg_pass2.value = "";
			reg_pass2.focus();
			reg_pass2.style.border = "1px solid red";
			reg_pass2.setAttribute("placeholder","No coincide");
			return false;
		}else{
			reg_pass2.style.border = "1px solid darkgreen";
			reg_pass2.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (reg_dir.value === "" || reg_dir.value.replace(/ /g, '') === '') {
			reg_dir.value = "";
			reg_dir.focus();
			reg_dir.style.border = "1px solid red";
			reg_dir.setAttribute("placeholder","Ingrese su direccion");
			return false;
		}else{
			reg_dir.style.border = "1px solid darkgreen";
			reg_dir.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		var indice_preg_reg = reg_preguntas.selectedIndex;
		if (indice_preg_reg.value == "" || indice_preg_reg == 0) {
			reg_preguntas.focus();
			reg_preguntas.style.border = "1px solid red";
			alert("Elija una opción")
			return false;
		}else{
			reg_preguntas.style.border = "1px solid darkgreen";
		}
		if (reg_resp.value === "" || reg_resp.value.replace(/ /g, '') === '') {
			reg_resp.value = "";
			reg_resp.focus();
			reg_resp.style.border = "1px solid red";
			reg_resp.setAttribute("placeholder","Ingrese la respuesta");
			return false;
		}else{
			reg_resp.style.border = "1px solid darkgreen";
			reg_resp.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (reg_dui.value === "" || reg_dui.value.replace(/ /g, '') === '') {
			reg_dui.value = "";
			reg_dui.focus();
			reg_dui.style.border = "1px solid red";
			reg_dui.setAttribute("placeholder","Ingrese su correo");
			return false;
		}else{
			reg_dui.style.border = "1px solid darkgreen";
			reg_dui.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (!expDUI.test(reg_dui.value)) {
			reg_dui.value = "";
			reg_dui.focus();
			reg_dui.style.border = "1px solid red";
			reg_dui.setAttribute("placeholder","Formato incorrecto");
			return false;
		}else{
			reg_dui.style.border = "1px solid darkgreen";
			reg_dui.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (reg_nit.value === "" || reg_nit.value.replace(/ /g, '') === '') {
			reg_nit.value = "";
			reg_nit.focus();
			reg_nit.style.border = "1px solid red";
			reg_nit.setAttribute("placeholder","Ingrese su correo");
			return false;
		}else{
			reg_nit.style.border = "1px solid darkgreen";
			reg_nit.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (!expNIT.test(reg_nit.value)) {
			reg_nit.value = "";
			reg_nit.focus();
			reg_nit.style.border = "1px solid red";
			reg_nit.setAttribute("placeholder","Formato incorrecto");
			return false;
		}else{
			reg_nit.style.border = "1px solid darkgreen";
			reg_nit.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (reg_cel.value === "" || reg_cel.value.replace(/ /g, '') === '') {
			reg_cel.value = "";
			reg_cel.focus();
			reg_cel.style.border = "1px solid red";
			reg_cel.setAttribute("placeholder","Ingrese su correo");
			return false;
		}else{
			reg_cel.style.border = "1px solid darkgreen";
			reg_cel.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (!expCel.test(reg_cel.value)) {
			reg_cel.value = "";
			reg_cel.focus();
			reg_cel.style.border = "1px solid red";
			reg_cel.setAttribute("placeholder","Formato incorrecto");
			return false;
		}else{
			reg_date.style.border = "1px solid darkgreen";
			reg_date.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (reg_date.value === "" || reg_date.value.replace(/ /g, '') === '') {
			reg_date.value = "";
			reg_date.focus();
			reg_date.style.border = "1px solid red";
			alert("Ingrese una fecha");
			return false;
		}else{
			reg_date.style.border = "1px solid darkgreen";
		}
		if (Date.parse(reg_date.value) > today) {
			reg_date.value = "";
			reg_date.focus();
			reg_date.style.border = "1px solid red";
			alert("Ingrese una fecha válida");
			return false;
		}else{
			reg_date.style.border = "1px solid darkgreen";
		}
		usuario[r].nombre = reg_nombre.value;
        usuario[r].apellidos = reg_apellido.value;
        usuario[r].mail = reg_email.value;
        usuario[r].pass = reg_pass.value;
        usuario[r].direccion = reg_dir.value;
        usuario[r].pregunta = reg_preguntas.value;
        usuario[r].respuesta = reg_resp.value;
        usuario[r].dui = reg_dui.value;
        usuario[r].nit = reg_nit.value;
        usuario[r].celular = reg_cel.value;
        usuario[r].fech_nacimiento = reg_date.value;
        usuario[r].sesion = true;
        usuario[r].primera_vez = true;
        alert("Registro Exitoso!");
        reg_nombre.value = "";
	    reg_apellido.value = "";
	    reg_email.value = "";
	    reg_pass.value = "";
	    reg_pass2.value = "";
	    reg_dir.value = "";
	    reg_preguntas.value = "";
	    reg_resp.value = "";
	    reg_dui.value = "";
	    reg_nit.value = "";
	    reg_cel.value = "";
	    reg_date.value = "";
	    localStorage.removeItem('usuario');
	    localStorage.setItem('usuario', JSON.stringify(usuario));
        r++;
        document.getElementById("modal_registro").style.left = "-100%";
		document.getElementById("modal_registro").style.opacity = "0";
        inicio_sesion();
	}
					/*VALIDACION*/
	/*-------------------REGISTRO-----------------------------*/

	document.getElementById("boton_form").addEventListener("click", val_login);
	function val_login(){

		var log_email = document.getElementById("log_email");
		var log_pass = document.getElementById("log_pass");
		var expEM = /\w+@\w+\.+[a-z]/;

		if (log_email.value === "" || log_email.value.replace(/ /g, '') === '') {
			log_email.value = "";
			log_email.focus();
			log_email.style.border = "1px solid red";
			log_email.setAttribute("placeholder","Ingrese su correo");
			return false;
		}else{
			log_email.style.border = "1px solid darkgreen";
			log_email.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (!expEM.test(log_email.value)) {
			log_email.value = "";
			log_email.focus();
			log_email.style.border = "1px solid red";
			log_email.setAttribute("placeholder","Formato incorrecto");
			return false;
		}else{
			log_email.style.border = "1px solid darkgreen";
			log_email.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (log_pass.value === "" || log_pass.value.replace(/ /g, '') === '') {
			log_pass.value = "";
			log_pass.focus();
			log_pass.style.border = "1px solid red";
			log_pass.setAttribute("placeholder","Ingrese la contraseña");
			return false;
		}else{
			log_pass.style.border = "1px solid darkgreen";
			log_pass.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
			var nMay = 0, nMin = 0, nNum = 0, nSim = 0;
			var tx = log_pass.value;
			var t1 = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
			var t2 = "abcdefghijklmnñopqrstuvwxyz"
			var t3 = "0123456789"
			var t4 = "|°¬!#$%&/()=?¡¿'´+*¨{}[]-.,;:_^`~"
			for (i=0;i<tx.length;i++) {
				if ( t1.indexOf(tx.charAt(i)) != -1 ) {nMay++;}
				if ( t2.indexOf(tx.charAt(i)) != -1 ) {nMin++;}
				if ( t3.indexOf(tx.charAt(i)) != -1 ) {nNum++;}
				if ( t4.indexOf(tx.charAt(i)) != -1 ) {nSim++;}
			}
		}
		if ( nMay<=0 || nMin<=0 || nNum<=0 || nSim<=0 ) {
			log_pass.value = "";
			log_pass.focus();
			log_pass.style.border = "1px solid red";
			log_pass.setAttribute("placeholder","Formato Incorrecto");
			alert("Debe ingresar al menus una letra mayusculas\nuna minuscula, un simbolo y un digito");
			return false;
		}
		else {
			log_pass.style.border = "1px solid darkgreen";
			log_pass.setAttribute("placeholder","No lo haga compa ( ͡° ͜ʖ ͡°)");
		}
		if (log_pass.value.length < 8) {
			log_pass.value = "";
			log_pass.focus();
			log_pass.style.border = "1px solid red";
			log_pass.setAttribute("placeholder","Minimo 8 caracteres");
			return false;
		}else{
			log_pass.style.border = "1px solid darkgreen";
			log_pass.setAttribute("placeholder","***********");
		}
		if (log_email.value != "") {
			var bandera=false;
			for (var i = 0; i < r; i++) {
				if(usuario[i].mail === log_email.value){
					var z = i;
					var password = usuario[i].pass;
					bandera=true;
		        }
			}
			if(bandera===false){
		        log_email.value = "";
				log_email.focus();
				alert("No existe este correo")
				log_pass.value = "";
				log_email.setAttribute("placeholder","Usuario Incorrecto");
		        return false;
		        }else{
				log_email.style.border = "1px solid darkgreen";
				log_email.setAttribute("placeholder","example@example.com");
				}	
		}
		if (log_pass != "") {
			var bandera2=false;
			for (var j = z; j < r; j++) {
				if (usuario[j].pass === log_pass.value) {
					alert(i);
					usuario[j].sesion = true;
					alert(i);
					bandera2 = true;
					inicio_sesion();
					localStorage.removeItem('usuario');
		    		localStorage.setItem('usuario', JSON.stringify(usuario));
				}
			}
			if(bandera2=false){
				log_pass.value = "";
				log_pass.focus();
				log_pass.style.border = "1px solid red";
				log_pass.setAttribute("placeholder","Contraseña Incorrecta");
				return false;
			}else{
				log_pass.style.border = "1px solid darkgreen";
				log_pass.setAttribute("placeholder","*********");
			}
		}
	}

	/*-------------------REGISTRO-----------------------------*/

	/*--------------------------CUENTAS------------------------*/

	document.getElementById("nueva_cuentaahorro").addEventListener("click", new_cuentaahorro, false);
	document.getElementById("nueva_tarjetacredito").addEventListener("click", nueva_tarjetacredito, false);

	function nueva_tarjetacredito(){
		var nombre = document.getElementById("TCnombre");
		var numero = document.getElementById("TCnumero");
		var saldo = document.getElementById("TCsaldo");
		var interes = document.getElementById("TCinteres");
		var vencimiento = document.getElementById("TCvencimiento");
		nombre.value.trim();
		numero.value.trim();
		saldo.value.trim();
		interes.value.trim();
		var expTar = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
		if (nombre.value.length > 0) {
                nombre.style.border = "1px solid darkgreen";
				nombre.setAttribute("placeholder","Banco Example");
				if (numero.value.length > 0) {
					if (!expTar.test(numero.value)) {
						numero.value = ""
						numero.style.border = "1px solid red";
			        	numero.setAttribute("placeholder","Formato Incorrecto");
			        	numero.focus();
					}else{
						numero.style.border = "1px solid darkgreen";
					    numero.setAttribute("placeholder","XXXXXXXXXXX");
					    if (saldo.value.length > 0) {
					    	if (isNaN(saldo.value)) {
					    		saldo.value = ""
					    		saldo.style.border = "1px solid red";
			        		    saldo.setAttribute("placeholder","Caracteres Invalidos");
			        		    saldo.focus();
					    	}else{
					    		if (saldo.value > 0) {
					    			saldo.style.border = "1px solid darkgreen";
					                saldo.setAttribute("placeholder","00.00");
					    			if (interes.value.length > 0) {
					    				if (isNaN(interes.value)) {
					    					interes.value = ""
					    		    		interes.style.border = "1px solid red";
			        		        		interes.setAttribute("placeholder","Formato Incorrecto");
			        		        		interes.focus();
					    				}else{
					    					if (interes.value > 0 && interes.value < 100) {
					    						interes.style.border = "1px solid darkgreen";
					                            interes.setAttribute("placeholder","XXXXXXXXXXX");
					    						var today = new Date();
					    						vencimiento.value.trim();
					    						if (vencimiento.value.length > 0) {
					    							if (Date.parse(vencimiento.value) < today) {
														vencimiento.value = "";
														vencimiento.focus();
														vencimiento.style.border = "1px solid red";
														alert("Ingrese una fecha válida");
														return false;
												    }else{
														vencimiento.style.border = "1px solid darkgreen";
						            			    	alert("Tarjeta de credito registrada exitosamente!");
						            			    	for (var i = 0; i < r; i++) {
						            			    		if (usuario[i].sesion === true) {
						            			    			usuario[i].nombre_tarjetacredito[usuario[i].tcr] = nombre.value;
						            			    			usuario[i].numero_tarjetacredito[usuario[i].tcr] = numero.value;
						            			    			usuario[i].saldo_tarjetacredito[usuario[i].tcr] = saldo.value;
						            			    			usuario[i].interes_tarjetacredito[usuario[i].tcr] = interes.value;
						            			    			usuario[i].vencimiento_tarjetacredito[usuario[i].tcr] = vencimiento.value;
						            			    			usuario[i].tcr += 1;
						            			    			nombre.value = "";
						            			    			numero.value = "";
						            			    			saldo.value = "";
						            			    			interes.value = "";
						            			    			vencimiento.value = "";
						            			    			nombre.style.border = "1px solid gray";
			        		        			                nombre.setAttribute("placeholder","Banco Example");
			        		        			                numero.style.border = "1px solid gray";
			        		        			                numero.setAttribute("placeholder","XXXX XXXXX XXXX");
			        		        			                saldo.style.border = "1px solid gray";
			        		        			                saldo.setAttribute("placeholder","00.00");
			        		        			                interes.style.border = "1px solid gray";
			        		        			                interes.setAttribute("placeholder","XXXXX");
			        		        			                vencimiento.style.border = "1px solid gray";
			        		        			                var div_cuentas = "<div class='contFORallPrint'>\n"
																for (var u = 0; u < usuario[i].tcr; u++) {
																	div_cuentas += "<div class='contFORallPrintPPAL' id='idCn"+ eval(u+1) +"'>\n";
																	div_cuentas += "<h6 class='CAth'>\nBanco: " + usuario[i].nombre_tarjetacredito[u] + "\n</h6>\n</tr>\n";
																	div_cuentas += "<p class='CAtd'>\n# de tarjeta: " + usuario[i].numero_tarjetacredito[u] + "\n</p>\n";
																	div_cuentas += "<p class='CAtd'>\nSaldo actual: $" + usuario[i].saldo_tarjetacredito[u] + "</p>\n";
																	div_cuentas += "<p class='CAtd'>\nInteres: %" + usuario[i].interes_tarjetacredito[u] + "</p>\n";
																	div_cuentas += "<p class='CAtdlast'>\nVence el: " + usuario[i].vencimiento_tarjetacredito[u] + "</p>\n";
																	div_cuentas += "</div>\n"
																}
																div_cuentas += "</div>\n"
																document.getElementById("tarjetas_exist").innerHTML = "";
																document.getElementById("tarjetas_exist").innerHTML = div_cuentas;
																SeeAllInfoUser();
			        		        			                localStorage.removeItem('usuario');
	    														localStorage.setItem('usuario', JSON.stringify(usuario));
	    														return 0;
						            			    		}
						            			    	}
												    }
					    						}else{
					    							vencimiento.value = "";
													vencimiento.focus();
													vencimiento.style.border = "1px solid red";
													alert("Ingrese una fecha válida");
					    						}
					    					}else{
					    						interes.value = ""
					    		    			interes.style.border = "1px solid red";
			        		        			interes.setAttribute("placeholder","Formato Incorrecto");
			        		        			interes.focus();
					    					}
					    				}
					    			}else{
					    				interes.value = ""
					    		    	interes.style.border = "1px solid red";
			        		        	interes.setAttribute("placeholder","Introduzca el interes anual");
			        		        	interes.focus();
					    			}
					    		}else{
					    			saldo.value = ""
					    		    saldo.style.border = "1px solid red";
			        		        saldo.setAttribute("placeholder","Formato incorrecto");
			        		        saldo.focus();
					    		}
					    	}
					    }else{
					    	saldo.style.border = "1px solid red";
			        		saldo.setAttribute("placeholder","Introduzca el saldo actual");
			        		saldo.focus();
					    }
					}
				}else{
					numero.style.border = "1px solid red";
			        numero.setAttribute("placeholder","Introduzca el # de cuenta");
			        numero.focus();
				}
		}else{
			nombre.style.border = "1px solid red";
			nombre.setAttribute("placeholder","Introduzca el nombre del banco");
			nombre.focus();
		}
	}
    /*--------------------------CUENTAS------------------------*/

    /*-----------------------------INGRESOS PERIODICOS-----------------------------*/
    document.getElementById("nuevo_ingreso").addEventListener("click", select_ingresosperiodicos)
    function select_ingresosperiodicos(){
    	var nombre = document.getElementById("nombre_ingresoP");
    	var tipo = document.getElementById("tipo_ingreso").selectedIndex;
    	var tipo2 = document.getElementById("tipo_ingreso");
    	var saldo = document.getElementById("IPerio_saldo");
    	var fecha = document.getElementById("IPerio_vencimiento");
        var radio = document.getElementsByName("typeFormPage");
        var forma_pago2 = document.getElementById("countsFTP");
        var forma = 0;
        var today = new Date();
        nombre.value.trim();
        saldo.value.trim();
    	//Condicion para obtener el radio button seleccionado
    	for (var i = 0; i <radio.length; i++) {
    		if (radio[i].checked) {
    			forma = i
    			break;
    		}
    	}
    	if (forma === 0) {
    		forma = "Efectivo";
    	}else{
    		forma = "Cuenta de Ahorros"
    	}
    	//Validacion de Campos

    	if (nombre.value.length > 0) {
    		nombre.style.border = "1px solid darkgreen";
			nombre.setAttribute("placeholder","Ejemplo: Sueldo de Trabajo");
    	}else{
    		nombre.style.border = "1px solid red";
			nombre.setAttribute("placeholder","Introduzca un Nombre");
			nombre.focus();
			return false;
    	}

    	if (tipo == "0" || tipo == null) {
    		alert("Debes seleccionar el tipo de ingreso.");
    		tipo2.style.border = "1px solid red";
    		return false;
    	}else{
    		tipo2.style.border = "1px solid darkgreen";
    		tipo2.focus();
    	}

    	if (saldo.value.length > 0) {
    		if (isNaN(saldo.value)) {
    			saldo.value = "";
    			saldo.style.border = "1px solid red";
				saldo.setAttribute("placeholder","Caracteres invalidos");
				saldo.focus();
				return 0;
    		}else{
    			if (saldo.value > 0) {
    				saldo.style.border = "1px solid darkgreen";
			        saldo.setAttribute("placeholder","00.00");
    			}else{
    				saldo.value = "";
    				saldo.style.border = "1px solid red";
					saldo.setAttribute("placeholder","Ingrese un saldo mayor a $0");
					saldo.focus();
					return 0;
    			}
    		}
    	}else{
    		saldo.value = "";
    		saldo.style.border = "1px solid red";
			saldo.setAttribute("placeholder","Introduzca el saldo de pago");
			saldo.focus();
			return 0;
    	}

    	if (fecha.value === "" || fecha.value.replace(/ /g, '') === '') {
    		fecha.value = "";
			fecha.focus();
			fecha.style.border = "1px solid red";
			alert("Ingrese la fecha");
			return false;
    	}else{
			fecha.style.border = "1px solid darkgreen";
		}
		
		//Determinando numero de cuenta seleccionada
		var selec_cuenta = 0;
		for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			selec_cuenta = usuario[i].numero_cuentabanc[forma_pago2.value];
	        } 
    	}
    	var aux = "";
    	if (tipo === 1) {
    				aux = "Sueldo";
    			}else{
    				aux = "Remesa";
    	}

		//Asignacion de Valores
		
		for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			usuario[i].nombre_ingresosperiodicos[usuario[i].ipc] = nombre.value;
    			usuario[i].tipo_ingresosperiodicos[usuario[i].ipc] = aux;
    			usuario[i].sueldo_ingresosperiodicos[usuario[i].ipc] = saldo.value;
    			usuario[i].formapago_ingresosperiodicos[usuario[i].ipc] = forma;
    			usuario[i].cuenta_ingresosperiodicos[usuario[i].ipc] = selec_cuenta;
    			usuario[i].fecha_ingresosperiodicos[usuario[i].ipc] = fecha.value;
    			if (forma === "Efectivo") {
    			usuario[i].historial_ingresosperiodicos[usuario[i].hist_index] = "Registro de ingreso: " + nombre.value + ", saldo de $" + saldo.value + ", tipo " + aux + ", forma de pago: " + forma + ", cancelado cada " + fecha.value + ".";
	        	}else{
	        	usuario[i].historial_ingresosperiodicos[usuario[i].hist_index] = "Registro de ingreso: " + nombre.value + ", saldo de $" + saldo.value + ", tipo " + aux + ", forma de pago: Cuenta de ahorros número " + selec_cuenta + ", cancelado cada " + fecha.value + ".";	
	        	}
	        	usuario[i].ipc += 1;
	        	usuario[i].hist_index += 1;
	        } 
    	}
    	nombre.value = "";
    	saldo.value = "";
    	tipo.value = "";
    	fecha.value = "";
    	alert("Ingreso registrado exitosamente!");
    	mostrar_nombresIP();
    	mostrar_historialIP();
    	mostrar_sueldos();
    	mostrar_remesas();
    	
    	localStorage.removeItem('usuario');
	    localStorage.setItem('usuario', JSON.stringify(usuario));
    }

    function mostrar_cuentas(){
    	
    	var options = "";
    	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			for (var u = 0; u <  usuario[i].cr; u++) {
    				options += "<option value='" + u + "'>" + usuario[i].numero_cuentabanc[u] + "</option>\n";
    			
    			}
    		}
    	}

    	document.getElementById("countsFTP").innerHTML = "";
    	document.getElementById("countsFTP").innerHTML = options;
    	document.getElementById("countsFTPm").innerHTML = "";
    	document.getElementById("countsFTPm").innerHTML = options;
    	document.getElementById("c_add_OI").innerHTML = "";
    	document.getElementById("c_add_OI"). innerHTML = options;
    }

    function mostrar_nombresIP(){
    	var options = "";
    	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			for (var u = 0; u <  usuario[i].ipc; u++) {
    				options += "<option value='" + u + "'>" + usuario[i].nombre_ingresosperiodicos[u] + "</option>\n";
    			
    			}
    		}
    	}

    	document.getElementById("nombre_modificar").innerHTML = "";
    	document.getElementById("nombre_modificar").innerHTML = options;
    }

    function mostrar_historialIP(){
    	document.getElementById("ingreH");
    	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			if (usuario[i].ipc > 0) {
    				var contenido = "";
    				for (var u = 0; u < usuario[i].hist_index; u++) {
    					contenido += "<p class='historial_IP'>" + usuario[i].historial_ingresosperiodicos[u] + "</p><br><br>"
    				}
    				document.getElementById("ingreH").innerHTML = "";
    				document.getElementById("ingreH").innerHTML = contenido;
    			}else{
    				document.getElementById("ingreH").innerHTML = "<p>No existe ningún registro.</p>";
    			}
    		}
    	}
    }

    function mostrar_sueldos(){
    	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			if (usuario[i].ipc > 0) {
    				var contenido = "";
    				for (var u = 0; u < usuario[i].ipc; u++) {
    					if (usuario[i].tipo_ingresosperiodicos[u] === "Sueldo") {
    						contenido += "<p class='titulo_tablaremesas'>Nombre: " + usuario[i].nombre_ingresosperiodicos[u] + "</p>"
    						contenido += "<table class='tabla_remesas'>\n";
    						contenido += "<tr><td>Tipo</td>\n<td>" + usuario[i].tipo_ingresosperiodicos[u] + "</td>\n</tr>";
    						contenido += "<tr><td>Saldo</td>\n<td>"+ usuario[i].sueldo_ingresosperiodicos[u] + "</td>\n</tr>";
    						contenido += "<tr><td>Forma de Pago</td>\n<td>"+ usuario[i].formapago_ingresosperiodicos[u] + "</td>\n</tr>";
    						if (usuario[i].formapago_ingresosperiodicos[u] === "Cuenta de Ahorros") {
    							contenido += "<tr><td>Cuenta de Ahorros</td>\n<td>"+ usuario[i].cuenta_ingresosperiodicos[u] + "</td>\n</tr>";
    						}
    						contenido += "<tr><td>Fecha de Pago</td>\n<td>"+ usuario[i].fecha_ingresosperiodicos[u] + "</td>\n</tr>";
    						contenido += "</table><br>"
    					}
    				}
    				document.getElementById("ingrePs").innerHTML = "";
    				document.getElementById("ingrePs").innerHTML = contenido;
    			}else{
    				document.getElementById("ingrePs").innerHTML = "<p>No existe ningún registro.</p>";
    			}
    		}
    	}
    }

    function mostrar_remesas(){
    	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			if (usuario[i].ipc > 0) {
    				var contenido = "";
    				for (var u = 0; u < usuario[i].ipc; u++) {
    					if (usuario[i].tipo_ingresosperiodicos[u] === "Remesa") {
    						contenido += "<p class='titulo_tablaremesas'>Nombre: " + usuario[i].nombre_ingresosperiodicos[u] + "</p>"
    						contenido += "<table class='tabla_remesas'>\n";
    						contenido += "<tr><td class='td_IP'>Tipo</td>\n<td>" + usuario[i].tipo_ingresosperiodicos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Saldo</td>\n<td>"+ usuario[i].sueldo_ingresosperiodicos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Forma de Pago</td>\n<td>"+ usuario[i].formapago_ingresosperiodicos[u] + "</td>\n</tr>";
    						if (usuario[i].formapago_ingresosperiodicos[u] === "Cuenta de Ahorros") {
    							contenido += "<tr><td class='td_IP'>Cuenta de Ahorros</td>\n<td>"+ usuario[i].cuenta_ingresosperiodicos[u] + "</td>\n</tr>";
    						}
    						contenido += "<tr class='last_IP'><td class='td_IP'>Fecha de Pago</td>\n<td>"+ usuario[i].fecha_ingresosperiodicos[u] + "</td>\n</tr>";
    						contenido += "</table><br>"
    					}
    				}
    				document.getElementById("ingrePr").innerHTML = "";
    				document.getElementById("ingrePr").innerHTML = contenido;
    			}else{
    				document.getElementById("ingrePr").innerHTML = "<p>No existe ningún registro.</p>";
    			}
    		}
    	}
    }

    document.getElementById("modificar_IP").addEventListener("click", modificar_ingresosperiodicos);

    function modificar_ingresosperiodicos(){
    	var nombre = document.getElementById("nombre_modificar").selectedIndex;
    	var tipo = document.getElementById("tipo_ingresom").selectedIndex;
    	var tipo2 = document.getElementById("tipo_ingresom");
    	var saldo = document.getElementById("TCsaldom");
    	var fecha = document.getElementById("TCvencimientom");
        var radio = document.getElementsByName("typeFormPagem");
        var forma_pago2 = document.getElementById("countsFTPm");
        var forma = 0;
        var today = new Date();
        var index = 0;
        
        saldo.value.trim();
    	//Condicion para obtener el radio button seleccionado
    	for (var i = 0; i <radio.length; i++) {
    		if (radio[i].checked) {
    			forma = i
    			break;
    		}
    	}
    	if (forma === 0) {
    		forma = "Efectivo";
    	}else{
    		forma = "Cuenta de Ahorros"
    	}
    	//Validacion de Campos

    	if (tipo == "0" || tipo == null) {
    		alert("Debes seleccionar el tipo de ingreso.");
    		tipo2.style.border = "1px solid red";
    		return false;
    	}else{
    		tipo2.style.border = "1px solid darkgreen";
    		tipo2.focus();
    	}

    	if (saldo.value.length > 0) {
    		if (isNaN(saldo.value)) {
    			saldo.value = "";
    			saldo.style.border = "1px solid red";
				saldo.setAttribute("placeholder","Caracteres invalidos");
				saldo.focus();
				return 0;
    		}else{
    			if (saldo.value > 0) {
    				saldo.style.border = "1px solid darkgreen";
			        saldo.setAttribute("placeholder","00.00");
    			}else{
    				saldo.value = "";
    				saldo.style.border = "1px solid red";
					saldo.setAttribute("placeholder","Ingrese un saldo mayor a $0");
					saldo.focus();
					return 0;
    			}
    		}
    	}else{
    		saldo.value = "";
    		saldo.style.border = "1px solid red";
			saldo.setAttribute("placeholder","Introduzca el saldo de pago");
			saldo.focus();
			return 0;
    	}
    	if (fecha.value === "" || fecha.value.replace(/ /g, '') === '') {
    		fecha.value = "";
			fecha.focus();
			fecha.style.border = "1px solid red";
			alert("Ingrese la fecha");
			return false;
    	}else{
			fecha.style.border = "1px solid darkgreen";
		}
		
		//Determinando numero de cuenta seleccionada
		var selec_cuenta = 0;
		for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			selec_cuenta = usuario[i].numero_cuentabanc[forma_pago2.value];
	        } 
    	}
    	var aux = "";
    	if (tipo === 1) {
    				aux = "Sueldo";
    			}else{
    				aux = "Remesa";
    	}

		//Asignacion de Valores
		


		for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {

    			var nom_aux = usuario[i].nombre_ingresosperiodicos[nombre];

    			usuario[i].tipo_ingresosperiodicos[nombre] = aux;
    			usuario[i].sueldo_ingresosperiodicos[nombre] = saldo.value;
    			usuario[i].formapago_ingresosperiodicos[nombre] = forma;
    			usuario[i].cuenta_ingresosperiodicos[nombre] = selec_cuenta;
    			usuario[i].fecha_ingresosperiodicos[nombre] = fecha.value;
    			if (forma === "Efectivo") {
    			usuario[i].historial_ingresosperiodicos[usuario[i].hist_index] = "Registro modificado: " + nom_aux + ", saldo de $" + saldo.value + ", tipo " + aux + ", forma de pago: " + forma + ", cancelado cada " + fecha.value + ".";
	        	}else{
	        	usuario[i].historial_ingresosperiodicos[usuario[i].hist_index] = "Registro modificado: " + nom_aux + ", saldo de $" + saldo.value + ", tipo " + aux + ", forma de pago: Cuenta de ahorros número " + selec_cuenta + ", cancelado cada " + fecha.value + ".";	
	        	}
	        	usuario[i].hist_index += 1;
	        } 
    	}
    	saldo.value = "";
    	tipo.value = "";
    	fecha.value = "";
    	alert("Ingreso modificado exitosamente!");
    	mostrar_historialIP();
    	mostrar_sueldos();
    	mostrar_remesas();
    	mostrar_nombresIP();
    	
    	localStorage.removeItem('usuario');
	    localStorage.setItem('usuario', JSON.stringify(usuario));
    }
    /*-----------------------------INGRESOS PERIODICOS-----------------------------*/

    /*------------------------------OTROS INGRESOS---------------------------------*/

    document.getElementById("agregar_OI").addEventListener("click", agregar_otroingreso);

    function agregar_otroingreso(){
    	var motivo = document.getElementById("motivo_OI");
    	var monto = document.getElementById("monto_OI");
    	var fecha = document.getElementById("fecha_OI");
    	var cuenta = document.getElementById("c_add_OI");

    	motivo.value.trim();
    	monto.value.trim();
    	fecha.value.trim();

    	if (motivo.value.length > 0) {
    		motivo.style.border = "1px solid darkgreen";
			motivo.setAttribute("placeholder","Ejemplo: Venta de Garage");
    	}else{
    		motivo.value = "";
    		motivo.focus();
    		motivo.style.border = "1px solid red";
			motivo.setAttribute("placeholder","Escribe un motivo del ingreso.");
			return 0;
    	}

    	if (monto.value.length > 0) {
    		if (isNaN(monto.value)) {
    			monto.value = "";
    			monto.focus();
    			monto.style.border = "1px solid red";
				monto.setAttribute("placeholder","Formato incorrecto.");
			return 0;
    		}else{
    			if (monto.value > 0) {
    				monto.style.border = "1px solid darkgreen";
			        monto.setAttribute("placeholder","00.00");
    			}else{
    				monto.value = "";
    				monto.focus();
    				monto.style.border = "1px solid red";
					monto.setAttribute("placeholder","El monto debe ser mayor a $0.");
					return 0;
    			}
    		}
    	}else{
    		monto.value = "";
    		monto.focus();
    		monto.style.border = "1px solid red";
			monto.setAttribute("placeholder","Escribe el monto del ingreso.");
			return 0;
    	}

    	if (fecha.value === "" || fecha.value.replace(/ /g, '') === '') {
    		fecha.value = "";
			fecha.focus();
			fecha.style.border = "1px solid red";
			alert("Ingrese la fecha");
			return false;
    	}else{
			fecha.style.border = "1px solid darkgreen";
		}

		for (var i = 0; i < r; i++) {
			if (usuario[i].sesion === true) {
				usuario[i].motivo_otrosingresos[usuario[i].oic] = motivo.value;
				usuario[i].monto_otrosingresos[usuario[i].oic] = monto.value;
				usuario[i].fecha_otrosingresos[usuario[i].oic] = fecha.value;
				usuario[i].cuenta_otrosingresos[usuario[i].oic] = usuario[i].numero_cuentabanc[cuenta.value];
				usuario[i].oic += 1;
				alert("Ingreso registrado exitosamente!")
				mostrando_otrosingresos();
			}
		}
		localStorage.removeItem('usuario');
	    localStorage.setItem('usuario', JSON.stringify(usuario));

    }

    function mostrando_otrosingresos(){
    	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			if (usuario[i].oic > 0) {
    				var contenido = "";
    				for (var u = 0; u < usuario[i].oic; u++) {
    					
    						contenido += "<p class='titulo_tablaremesas'>Motivo: " + usuario[i].motivo_otrosingresos[u] + "</p>"
    						contenido += "<table class='tabla_remesas'>\n";
    						contenido += "<tr><td class='td_IP'>Monto</td>\n<td>" + usuario[i].monto_otrosingresos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Cuenta de ahorro</td>\n<td>"+ usuario[i].cuenta_otrosingresos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Fecha de Pago</td>\n<td>"+ usuario[i].fecha_otrosingresos[u] + "</td>\n</tr>";
    						contenido += "</table><br>"
    					
    				}
    				document.getElementById("ViewO").innerHTML = "";
    				document.getElementById("ViewO").innerHTML = contenido;
    			}else{
    				document.getElementById("ViewO").innerHTML = "<p>No existe ningún registro.</p>";
    			}
    		}
    	}
    }
    /*------------------------------OTROS INGRESOS---------------------------------*/

    /*------------------------------PRESTAMOS--------------------------------------*/
    document.getElementById("agregar_prestamo").addEventListener("click", nuevo_prestamo);

    function nuevo_prestamo(){
    	var banco = document.getElementById("banco_prestamo");
    	var numero = document.getElementById("numero_prestamo");
    	var monto = document.getElementById("monto_prestamo");
    	var meses = document.getElementById("meses_prestamo");
    	var interes = document.getElementById("interes_prestamo");
    	var cuotascanceladas = document.getElementById("cuotascanceladas_prestamo");
    	var cuota = document.getElementById("cuota_prestamo");
    	var fecha = document.getElementById("fecha_prestamo");

    	banco.value.trim();
    	numero.value.trim();
    	monto.value.trim();
    	meses.value.trim();
    	interes.value.trim();
    	cuotascanceladas.value.trim();
    	cuota.value.trim();
    	fecha.value.trim();

    	if (banco.value.length > 0) {
    		banco.style.border = "1px solid darkgreen";
			banco.setAttribute("placeholder","Ejemplo: Banco Agricola.");
    	}else{
    		banco.value = "";
    		banco.focus();
    		banco.style.border = "1px solid red";
			banco.setAttribute("placeholder","Escribe el nombre del banco.");
			return 0;
    	}

    	if (numero.value.length > 0) {
    		if (isNaN(numero.value)) {
    			numero.value = "";
    			numero.focus();
    			numero.style.border = "1px solid red";
				numero.setAttribute("placeholder","Formato incorrecto.");
			return 0;
    		}else{
    			if (numero.value > 0) {
    				numero.style.border = "1px solid darkgreen";
			        numero.setAttribute("placeholder","00.00");
    			}else{
    				numero.value = "";
    				numero.focus();
    				numero.style.border = "1px solid red";
					numero.setAttribute("placeholder","El numero debe ser mayor a 0.");
					return 0;
    			}
    		}
    	}else{
    		numero.value = "";
    		numero.focus();
    		numero.style.border = "1px solid red";
			numero.setAttribute("placeholder","Escribe el numero del prestamo.");
			return 0;
    	}

    	if (monto.value.length > 0) {
    		if (isNaN(monto.value)) {
    			monto.value = "";
    			monto.focus();
    			monto.style.border = "1px solid red";
				monto.setAttribute("placeholder","Formato incorrecto.");
			return 0;
    		}else{
    			if (monto.value > 0) {
    				monto.style.border = "1px solid darkgreen";
			        monto.setAttribute("placeholder","00.00");
    			}else{
    				monto.value = "";
    				monto.focus();
    				monto.style.border = "1px solid red";
					monto.setAttribute("placeholder","El monto debe ser mayor a $0.");
					return 0;
    			}
    		}
    	}else{
    		monto.value = "";
    		monto.focus();
    		monto.style.border = "1px solid red";
			monto.setAttribute("placeholder","Escribe el monto del prestamo.");
			return 0;
    	}

    	if (meses.value.length > 0) {
    		if (isNaN(meses.value)) {
    			meses.value = "";
    			meses.focus();
    			meses.style.border = "1px solid red";
				meses.setAttribute("placeholder","Formato incorrecto.");
			return 0;
    		}else{
    			if (meses.value > 0) {
    				meses.style.border = "1px solid darkgreen";
			        meses.setAttribute("placeholder","00");
    			}else{
    				meses.value = "";
    				meses.focus();
    				meses.style.border = "1px solid red";
					meses.setAttribute("placeholder","Debes de escribir un valor superior a 0.");
					return 0;
    			}
    		}
    	}else{
    		meses.value = "";
    		meses.focus();
    		meses.style.border = "1px solid red";
			meses.setAttribute("placeholder","Escribe la cantidad de meses.");
			return 0;
    	}

    	if (interes.value.length > 0) {
    		if (isNaN(interes.value)) {
    			interes.value = "";
    			interes.focus();
    			interes.style.border = "1px solid red";
				interes.setAttribute("placeholder","Formato incorrecto.");
			return 0;
    		}else{
    			if (interes.value > 0 && interes.value < 100) {
    				interes.style.border = "1px solid darkgreen";
			        interes.setAttribute("placeholder","00");
    			}else{
    				interes.value = "";
    				interes.focus();
    				interes.style.border = "1px solid red";
					interes.setAttribute("placeholder","Formato incorrecto.");
					return 0;
    			}
    		}
    	}else{
    		interes.value = "";
    		interes.focus();
    		interes.style.border = "1px solid red";
			interes.setAttribute("placeholder","Escribe el porcentaje de interes.");
			return 0;
    	}

    	if (cuotascanceladas.value.length > 0) {
    		if (isNaN(cuotascanceladas.value)) {
    			cuotascanceladas.value = "";
    			cuotascanceladas.focus();
    			cuotascanceladas.style.border = "1px solid red";
				cuotascanceladas.setAttribute("placeholder","Formato incorrecto.");
			return 0;
    		}else{
    			if (cuotascanceladas.value > 0) {
    				cuotascanceladas.style.border = "1px solid darkgreen";
			        cuotascanceladas.setAttribute("placeholder","00");
    			}else{
    				cuotascanceladas.value = "";
    				cuotascanceladas.focus();
    				cuotascanceladas.style.border = "1px solid red";
					cuotascanceladas.setAttribute("placeholder","Pagos inexistentes.");
					return 0;
    			}
    		}
    	}else{
    		cuotascanceladas.value = "";
    		cuotascanceladas.focus();
    		cuotascanceladas.style.border = "1px solid red";
			cuotascanceladas.setAttribute("placeholder","Escribe las cuotas canceladas.");
			return 0;
    	}
    	if (cuota.value.length > 0) {
    		if (isNaN(cuota.value)) {
    			cuota.value = "";
    			cuota.focus();
    			cuota.style.border = "1px solid red";
				cuota.setAttribute("placeholder","Formato incorrecto.");
			return 0;
    		}else{
    			if (cuota.value > 0) {
    				cuota.style.border = "1px solid darkgreen";
			        cuota.setAttribute("placeholder","00.00");
    			}else{
    				cuota.value = "";
    				cuota.focus();
    				cuota.style.border = "1px solid red";
					cuota.setAttribute("placeholder","La cuota debe ser mayor a $0.");
					return 0;
    			}
    		}
    	}else{
    		cuota.value = "";
    		cuota.focus();
    		cuota.style.border = "1px solid red";
			cuota.setAttribute("placeholder","Escribe la cuota del prestamo.");
			return 0;
    	}

    	if (fecha.value === "" || fecha.value.replace(/ /g, '') === '') {
    		fecha.value = "";
			fecha.focus();
			fecha.style.border = "1px solid red";
			alert("Ingrese la fecha");
			return false;
    	}else{
			fecha.style.border = "1px solid darkgreen";
		}

		for (var i = 0; i < r; i++) {
			if (usuario[i].sesion === true) {
			
				var aux = interes.value / 100;
				var int = parseFloat(aux) * parseFloat(cuota.value);

				var cancelado = parseFloat(cuota.value) + int;
				cancelado = cancelado * parseFloat(cuotascanceladas.value);

				aux = aux * monto.value;
				aux = parseFloat(aux) + parseFloat(monto.value);
				cancelado = aux - cancelado;

				usuario[i].banco_prestamos[usuario[i].pc] = banco.value;
				usuario[i].numero_prestamos[usuario[i].pc] = numero.value;
				usuario[i].monto_prestamos[usuario[i].pc] = monto.value;
				usuario[i].meses_prestamos[usuario[i].pc] = meses.value;
				usuario[i].interes_prestamos[usuario[i].pc] = interes.value;
				usuario[i].total_prestamos[usuario[i].pc] = aux;
				usuario[i].cuotascanceladas_prestamos[usuario[i].pc] = cuotascanceladas.value;
				usuario[i].cuota_prestamos[usuario[i].pc] = cuota.value;
				usuario[i].saldo_prestamos[usuario[i].pc] = cancelado;
				usuario[i].vencimiento_prestamos[usuario[i].pc] = fecha.value;
				usuario[i].pc += 1;

				aux = 0;
				int = 0;
				cancelado = 0;
				alert("Prestamo registrado exitosamente!");
				mostrando_prestamos()
			}
		}
		localStorage.removeItem('usuario');
	    localStorage.setItem('usuario', JSON.stringify(usuario));
		
    }

    function mostrando_prestamos(){
    	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			if (usuario[i].pc > 0) {
    				var contenido = "";
    				for (var u = 0; u < usuario[i].pc; u++) {
    					
    						contenido += "<p class='titulo_tablaremesas'>Prestamo: " + usuario[i].banco_prestamos[u] + "</p>"
    						contenido += "<table class='tabla_remesas'>\n";
    						contenido += "<tr><td class='td_IP'>No. de prestamo</td>\n<td>" + usuario[i].numero_prestamos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Monto de prestamo</td>\n<td>$"+ usuario[i].monto_prestamos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Tiempo</td>\n<td>"+ usuario[i].meses_prestamos[u] + " meses</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Interes anual</td>\n<td>"+ usuario[i].interes_prestamos[u] + "%</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Monto a cancelar</td>\n<td>$"+ usuario[i].total_prestamos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Cuotas canceladas</td>\n<td>"+ usuario[i].cuotascanceladas_prestamos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Cuota mensual</td>\n<td>"+ usuario[i].cuota_prestamos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Saldo</td>\n<td>$"+ usuario[i].saldo_prestamos[u] + "</td>\n</tr>";
    						contenido += "<tr><td class='td_IP'>Fecha de vencimiento</td>\n<td>"+ usuario[i].vencimiento_prestamos[u] + "</td>\n</tr>";
    						contenido += "</table><br>"
    					
    				}
    				document.getElementById("mostrar_prestamos").innerHTML = "";
    				document.getElementById("mostrar_prestamos").innerHTML = contenido;
    				document.getElementById("VapFGsP").innerHTML = "";
    				document.getElementById("VapFGsP").innerHTML = contenido;
    			}else{
    				document.getElementById("mostrar_prestamos").innerHTML = "<p>No existe ningún registro.</p>";
    				document.getElementById("VapFGsP").innerHTML = "<p>No existe ningún registro.</p>";
    			}
    		}
    	}
    }
    /*------------------------------PRESTAMOS--------------------------------------*/
    SeeAllInfoUser();
	inicio_sesion();

	/*----------------MENU-----------------*/
	if(document.getElementById("opt_m_u1").checked){
		document.getElementById("cont-menu-Cuenta").style.opacity = "1";
		document.getElementById("cont-menu-Cuenta").style.right = "0";
	}

	document.getElementById("label_menu_opt1").addEventListener("click", opc1);
	document.getElementById("label_menu_opt2").addEventListener("click", opc2);
	document.getElementById("label_menu_opt3").addEventListener("click", opc3);
	document.getElementById("label_menu_opt4").addEventListener("click", opc4);
	document.getElementById("label_menu_opt5").addEventListener("click", opc5);
	document.getElementById("label_menu_opt6").addEventListener("click", opc6);
	document.getElementById("label_menu_opt7").addEventListener("click", opc7);
	document.getElementById("label_menu_opt8").addEventListener("click", opc8);
	
	function opc1(){
		document.getElementById("cont-menu-Cuenta").style.right = "0";
		document.getElementById("cont-menu-Cuenta").style.opacity = "1";

		document.getElementById("cont-menu-IngrePerio").style.right = "100%";
		document.getElementById("cont-menu-IngrePerio").style.opacity = "0";
		document.getElementById("cont-menu-OtroPerio").style.right = "100%";
		document.getElementById("cont-menu-OtroPerio").style.opacity = "0";
		document.getElementById("cont-menu-Prestamo").style.right = "100%";
		document.getElementById("cont-menu-Prestamo").style.opacity = "0";
		document.getElementById("cont-menu-GastoPerio").style.right = "100%";
		document.getElementById("cont-menu-GastoPerio").style.opacity = "0";
		document.getElementById("cont-menu-Gasto").style.right = "100%";
		document.getElementById("cont-menu-Gasto").style.opacity = "0";
		document.getElementById("cont-menu-Config").style.right = "100%";
		document.getElementById("cont-menu-Config").style.opacity = "0";
		document.getElementById("cont-menu-Estadis").style.right = "100%";
		document.getElementById("cont-menu-Estadis").style.opacity = "0";

	}
	function opc2(){
		document.getElementById("cont-menu-IngrePerio").style.right = "0";
		document.getElementById("cont-menu-IngrePerio").style.opacity = "1";

		document.getElementById("cont-menu-Cuenta").style.right = "100%";
		document.getElementById("cont-menu-Cuenta").style.opacity = "0";
		document.getElementById("cont-menu-OtroPerio").style.right = "100%";
		document.getElementById("cont-menu-OtroPerio").style.opacity = "0";
		document.getElementById("cont-menu-Prestamo").style.right = "100%";
		document.getElementById("cont-menu-Prestamo").style.opacity = "0";
		document.getElementById("cont-menu-GastoPerio").style.right = "100%";
		document.getElementById("cont-menu-GastoPerio").style.opacity = "0";
		document.getElementById("cont-menu-Gasto").style.right = "100%";
		document.getElementById("cont-menu-Gasto").style.opacity = "0";
		document.getElementById("cont-menu-Config").style.right = "100%";
		document.getElementById("cont-menu-Config").style.opacity = "0";
		document.getElementById("cont-menu-Estadis").style.right = "100%";
		document.getElementById("cont-menu-Estadis").style.opacity = "0";

	}
	function opc3(){
		document.getElementById("cont-menu-OtroPerio").style.right = "0";
		document.getElementById("cont-menu-OtroPerio").style.opacity = "1";

		document.getElementById("cont-menu-Cuenta").style.right = "100%";
		document.getElementById("cont-menu-Cuenta").style.opacity = "0";
		document.getElementById("cont-menu-IngrePerio").style.right = "100%";
		document.getElementById("cont-menu-IngrePerio").style.opacity = "0";
		document.getElementById("cont-menu-Prestamo").style.right = "100%";
		document.getElementById("cont-menu-Prestamo").style.opacity = "0";
		document.getElementById("cont-menu-GastoPerio").style.right = "100%";
		document.getElementById("cont-menu-GastoPerio").style.opacity = "0";
		document.getElementById("cont-menu-Gasto").style.right = "100%";
		document.getElementById("cont-menu-Gasto").style.opacity = "0";
		document.getElementById("cont-menu-Config").style.right = "100%";
		document.getElementById("cont-menu-Config").style.opacity = "0";
		document.getElementById("cont-menu-Estadis").style.right = "100%";
		document.getElementById("cont-menu-Estadis").style.opacity = "0";

	}
	function opc4(){
		document.getElementById("cont-menu-Prestamo").style.right = "0";
		document.getElementById("cont-menu-Prestamo").style.opacity = "1";

		document.getElementById("cont-menu-Cuenta").style.right = "100%";
		document.getElementById("cont-menu-Cuenta").style.opacity = "0";
		document.getElementById("cont-menu-OtroPerio").style.right = "100%";
		document.getElementById("cont-menu-OtroPerio").style.opacity = "0";
		document.getElementById("cont-menu-IngrePerio").style.right = "100%";
		document.getElementById("cont-menu-IngrePerio").style.opacity = "0";
		document.getElementById("cont-menu-GastoPerio").style.right = "100%";
		document.getElementById("cont-menu-GastoPerio").style.opacity = "0";
		document.getElementById("cont-menu-Gasto").style.right = "100%";
		document.getElementById("cont-menu-Gasto").style.opacity = "0";
		document.getElementById("cont-menu-Config").style.right = "100%";
		document.getElementById("cont-menu-Config").style.opacity = "0";
		document.getElementById("cont-menu-Estadis").style.right = "100%";
		document.getElementById("cont-menu-Estadis").style.opacity = "0";

	}
	function opc5(){
		document.getElementById("cont-menu-GastoPerio").style.right = "0";
		document.getElementById("cont-menu-GastoPerio").style.opacity = "1";

		document.getElementById("cont-menu-Cuenta").style.right = "100%";
		document.getElementById("cont-menu-Cuenta").style.opacity = "0";
		document.getElementById("cont-menu-OtroPerio").style.right = "100%";
		document.getElementById("cont-menu-OtroPerio").style.opacity = "0";
		document.getElementById("cont-menu-Prestamo").style.right = "100%";
		document.getElementById("cont-menu-Prestamo").style.opacity = "0";
		document.getElementById("cont-menu-IngrePerio").style.right = "100%";
		document.getElementById("cont-menu-IngrePerio").style.opacity = "0";
		document.getElementById("cont-menu-Gasto").style.right = "100%";
		document.getElementById("cont-menu-Gasto").style.opacity = "0";
		document.getElementById("cont-menu-Config").style.right = "100%";
		document.getElementById("cont-menu-Config").style.opacity = "0";
		document.getElementById("cont-menu-Estadis").style.right = "100%";
		document.getElementById("cont-menu-Estadis").style.opacity = "0";

	}
	function opc6(){
		document.getElementById("cont-menu-Gasto").style.right = "0";
		document.getElementById("cont-menu-Gasto").style.opacity = "1";

		document.getElementById("cont-menu-Cuenta").style.right = "100%";
		document.getElementById("cont-menu-Cuenta").style.opacity = "0";
		document.getElementById("cont-menu-OtroPerio").style.right = "100%";
		document.getElementById("cont-menu-OtroPerio").style.opacity = "0";
		document.getElementById("cont-menu-Prestamo").style.right = "100%";
		document.getElementById("cont-menu-Prestamo").style.opacity = "0";
		document.getElementById("cont-menu-GastoPerio").style.right = "100%";
		document.getElementById("cont-menu-GastoPerio").style.opacity = "0";
		document.getElementById("cont-menu-IngrePerio").style.right = "100%";
		document.getElementById("cont-menu-IngrePerio").style.opacity = "0";
		document.getElementById("cont-menu-Config").style.right = "100%";
		document.getElementById("cont-menu-Config").style.opacity = "0";
		document.getElementById("cont-menu-Estadis").style.right = "100%";
		document.getElementById("cont-menu-Estadis").style.opacity = "0";

	}
	function opc7(){
		document.getElementById("cont-menu-Config").style.right = "0";
		document.getElementById("cont-menu-Config").style.opacity = "1";

		document.getElementById("cont-menu-Cuenta").style.right = "100%";
		document.getElementById("cont-menu-Cuenta").style.opacity = "0";
		document.getElementById("cont-menu-OtroPerio").style.right = "100%";
		document.getElementById("cont-menu-OtroPerio").style.opacity = "0";
		document.getElementById("cont-menu-Prestamo").style.right = "100%";
		document.getElementById("cont-menu-Prestamo").style.opacity = "0";
		document.getElementById("cont-menu-GastoPerio").style.right = "100%";
		document.getElementById("cont-menu-GastoPerio").style.opacity = "0";
		document.getElementById("cont-menu-Gasto").style.right = "100%";
		document.getElementById("cont-menu-Gasto").style.opacity = "0";
		document.getElementById("cont-menu-IngrePerio").style.right = "100%";
		document.getElementById("cont-menu-IngrePerio").style.opacity = "0";
		document.getElementById("cont-menu-Estadis").style.right = "100%";
		document.getElementById("cont-menu-Estadis").style.opacity = "0";
		ComparativoBalance();

	}
	function opc8(){
		document.getElementById("cont-menu-Estadis").style.right = "0";
		document.getElementById("cont-menu-Estadis").style.opacity = "1";

		document.getElementById("cont-menu-Cuenta").style.right = "100%";
		document.getElementById("cont-menu-Cuenta").style.opacity = "0";
		document.getElementById("cont-menu-OtroPerio").style.right = "100%";
		document.getElementById("cont-menu-OtroPerio").style.opacity = "0";
		document.getElementById("cont-menu-Prestamo").style.right = "100%";
		document.getElementById("cont-menu-Prestamo").style.opacity = "0";
		document.getElementById("cont-menu-GastoPerio").style.right = "100%";
		document.getElementById("cont-menu-GastoPerio").style.opacity = "0";
		document.getElementById("cont-menu-Gasto").style.right = "100%";
		document.getElementById("cont-menu-Gasto").style.opacity = "0";
		document.getElementById("cont-menu-Config").style.right = "100%";
		document.getElementById("cont-menu-Config").style.opacity = "0";
		document.getElementById("cont-menu-IngrePerio").style.right = "100%";
		document.getElementById("cont-menu-IngrePerio").style.opacity = "0";

		graficarGM();

	}

	/*----------------MENU-----------------*/

	/*----------------Otras Funciones-----------------*/

	document.getElementById("lblfR1").addEventListener("click", function(){
		document.getElementById("cblbl2").checked = false;
		document.getElementById("cblbl3").checked = false;
	})
	document.getElementById("lblfR2").addEventListener("click", function(){
		document.getElementById("cblbl1").checked = false;
		document.getElementById("cblbl3").checked = false;
	})
	document.getElementById("lblfR3").addEventListener("click", function(){
		document.getElementById("cblbl1").checked = false;
		document.getElementById("cblbl2").checked = false;
	})

	document.getElementById("lblFmif1").addEventListener("click", function(){
		if (document.getElementById("cbMR1").checked === false) {
			document.getElementById("contpl2_1").style.height = 'auto';
			document.getElementById("contpl2_1").style.overflow = 'auto';
			document.getElementById("cbMR1").checked === true;
		}else{
			document.getElementById("contpl2_1").style.height = '0px';
			document.getElementById("contpl2_1").style.overflow = 'hidden';
		}
		
	})
	document.getElementById("lblFmif2").addEventListener("click", function(){
		if (document.getElementById("cbMR2").checked === false) {
			document.getElementById("contpl2_2").style.height = 'auto';
			document.getElementById("contpl2_2").style.overflow = 'auto';
			document.getElementById("cbMR2").checked === true;
		}else{
			document.getElementById("contpl2_2").style.height = '0px';
			document.getElementById("contpl2_2").style.overflow = 'hidden';
		}
		
	})
	document.getElementById("lblFmif3").addEventListener("click", function(){
		if (document.getElementById("cbMR3").checked === false) {
			document.getElementById("contpl2_3").style.height = 'auto';
			document.getElementById("contpl2_3").style.overflow = 'auto';
			document.getElementById("cbMR3").checked === true;
		}else{
			document.getElementById("contpl2_3").style.height = '0px';
			document.getElementById("contpl2_3").style.overflow = 'hidden';
		}
		
	})
	document.getElementById("lblFmif4").addEventListener("click", function(){
		if (document.getElementById("cbMR4").checked === false) {
			document.getElementById("contpl2_4").style.height = 'auto';
			document.getElementById("contpl2_4").style.overflow = 'auto';
			document.getElementById("cbMR4").checked === true;
		}else{
			document.getElementById("contpl2_4").style.height = '0px';
			document.getElementById("contpl2_4").style.overflow = 'hidden';
		}
		
	})

	/*----------------Otras Funciones-----------------*/

	/*----------------Ingresos Periódicos-----------------*/

	document.getElementById("tFormPage1").addEventListener("click", function(){
		var selecsito = document.getElementById("countsFTP");

		selecsito.style.width = "0%";
		selecsito.style.maxWidth = "0px";
		selecsito.style.padding = "0px";
		selecsito.style.paddingBottom = "0px";
	})
	document.getElementById("tFormPage2").addEventListener("click", function(){
		var selecsito = document.getElementById("countsFTP");

		selecsito.style.width = "100%";
		selecsito.style.maxWidth = "200px";
		selecsito.style.padding = "5px";
		selecsito.style.paddingBottom = "10px";
	})
	document.getElementById("tFormPage3").addEventListener("click", function(){
		var selecsito = document.getElementById("countsFTPm");

		selecsito.style.width = "0%";
		selecsito.style.maxWidth = "0px";
		selecsito.style.padding = "0px";
		selecsito.style.paddingBottom = "0px";
	})
	document.getElementById("tFormPage4").addEventListener("click", function(){
		var selecsito = document.getElementById("countsFTPm");

		selecsito.style.width = "100%";
		selecsito.style.maxWidth = "200px";
		selecsito.style.padding = "5px";
		selecsito.style.paddingBottom = "10px";
	})

	/*----------------Ingresos Periódicos-----------------*/


/*--------------------------GASTOS PERIÓDICOS--------------*/

document.getElementById("add_fGObutton").addEventListener("click", addGastosPeriodic);
function addGastosPeriodic(){
	var nombre = document.getElementById("nameForGP");
	var monto = document.getElementById("montoForGP");
	var date = document.getElementById("dateForGP");
	var today = new Date();
	var expDEC = /\d+(\.\d{1,2})?/;
	var selecFG = document.getElementById("selectForGP");
	var selecFG2 = document.getElementById("selectForGP").selectedIndex;
	
	if (nombre.value === "" || nombre.value.replace(/ /g, '') === '') {
		nombre.setAttribute("placeholder","Ingrese el Nombre");
		nombre.style.border = "1px solid red";
		nombre.focus();
		return false;
	}else{
		nombre.setAttribute("placeholder","XX");
		nombre.style.border = "1px solid darkgreen";
	}
	if (monto.value === "" || monto.value.replace(/ /g, '') === '') {
		monto.setAttribute("placeholder","Ingrese el Monto");
		monto.style.border = "1px solid red";
		monto.value="";
		monto.focus();
		return false;
	}else{
		monto.setAttribute("placeholder","00.00");
		monto.style.border = "1px solid darkgreen";
	}
	if (!expDEC.test(monto.value)) {
		monto.setAttribute("placeholder","Ingrese números");
		monto.style.border = "1px solid red";
		monto.value="";
		monto.focus();
		return false;
	}else{
		monto.setAttribute("placeholder","00.00");
		monto.style.border = "1px solid darkgreen";
	}
	if (date.value === "" || date.value.replace(/ /g, '') === '') {
		alert("Ingrese la fecha de vencimiento")
		date.style.border = "1px solid red";
		date.vale="";
		date.focus();
		return false;
	}else{
		date.style.border = "1px solid darkgreen";
	}
	if (Date.parse(date.value) < today) {
		alert("Ingrese una fecha válida")
		date.style.border = "1px solid red";
		date.value="";
		date.focus();
		return false;
	}else{
		date.style.border = "1px solid darkgreen";
	}

	if (selecFG.value == "0" || selecFG.value == null) {
    	alert("Debes seleccionar el tipo de ingreso.");
    	selecFG.style.border = "1px solid red";
   		return false;
   	}else{
	 	selecFG.style.border = "1px solid darkgreen";
	  	selecFG.focus();
   	}
   	var selectedFGN = selecFG.options[selecFG.selectedIndex].text;
   	
   	for (var i = 0; i < r; i++) {
			if (usuario[i].sesion === true) {
				
				usuario[i].nombregastop_gastosp[usuario[i].cgp] = nombre.value;
				usuario[i].montogastop_gastosp[usuario[i].cgp] = monto.value;
				usuario[i].fechagastop_gastosp[usuario[i].cgp] = date.value;
				usuario[i].tipogastop_gastosp[usuario[i].cgp] = selectedFGN;
				usuario[i].intipogastop_gastosp[usuario[i].cgp] = selecFG.value;
				
				
				alert("Gasto registrado exitosamente!");

				//Almacenando el valor del historial.
				var his = "";

				his += "<div class='viewFgnANDgp'>"
    			his += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[usuario[i].cgp] + "</p>"
    			his += "<table>\n";
    			his += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[usuario[i].cgp] + "</td>\n</tr>";
    			his += "<tr><th>Categoría</th>\n<td>"+ usuario[i].tipogastop_gastosp[usuario[i].cgp] + "</td>\n</tr>";
    			his += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[usuario[i].cgp] + "</td>\n</tr>";
    			his += "</table>";
    			his += "</div>";

    			usuario[i].historial_gastosp += his;

    			usuario[i].intervalo_gastosp[usuario[i].cgp] = diasmesanios(date.value);
    			alert(usuario[i].intervalo_gastosp[usuario[i].cgp])
    			usuario[i].cgp += 1;

				mostrando_HistGastosP();
				SeeAllInfoUser();

				
				nombre.value = "";
				monto.value = "";
				date.value = "";
				selecFG.value = "";
			}
			//Mostrando los gastos periódicos
    			if (usuario[i].cgp > 0) {
    				document.getElementById("VhisFGsP").innerHTML = "";
    				document.getElementById("VhisFGsP").innerHTML = usuario[i].historial_gastosp;
    			}else{
    				document.getElementById("VhisFGsP").innerHTML = "No existen registros.";
    				//Mostrando los gastos periódicos
    			
    			}
    			
		}
		localStorage.removeItem('usuario');
	    localStorage.setItem('usuario', JSON.stringify(usuario));
}
document.getElementById("send_modificarGP").addEventListener("click", modificando_GastosP);
function modificando_GastosP(){
	var indice = document.getElementById("mostrar_gastos");

	var nombre = document.getElementById("nombre_GPm");
				var monto = document.getElementById("monto_GPm");
				var selectedFGN = selectForGPm.options[selectForGPm.selectedIndex].text;
				var fecha = document.getElementById("dateForGPm");
				var tipo = document.getElementById("selectForGPm");
				nombre.value.trim();
				monto.value.trim();

				if (nombre.value.length > 0) {
					nombre.setAttribute("placeholder","Ejemplo: Renta de la casa.");
					nombre.style.border = "1px solid darkgreen";
				}else{
					nombre.setAttribute("placeholder","Ingrese el nombre del gasto.");
					nombre.style.border = "1px solid red";
					nombre.value="";
					nombre.focus();
					return 0;
				}

				if (monto.value.length > 0) {
    				if (isNaN(monto.value)) {
    					monto.value = "";
    					monto.focus();
    					monto.style.border = "1px solid red";
						monto.setAttribute("placeholder","Formato incorrecto.");
					return 0;
    				}else{
    					if (monto.value > 0) {
    						monto.style.border = "1px solid darkgreen";
					        monto.setAttribute("placeholder","00.00");
    					}else{
    						monto.value = "";
    						monto.focus();
    						monto.style.border = "1px solid red";
							monto.setAttribute("placeholder","El monto debe ser mayor a $0.");
							return 0;
    					}
    				}
    			}else{
    				monto.value = "";
    				monto.focus();
    				monto.style.border = "1px solid red";
					monto.setAttribute("placeholder","Escribe el monto del gasto.");
					return 0;
    			}

    			if (selectedFGN.length === 0) {
    				alert("Debes elegir el tipo de dato.");
    				return 0;
    			}

    			if (fecha.value === "" || fecha.value.replace(/ /g, '') === '') {
    				fecha.value = "";
					fecha.focus();
					fecha.style.border = "1px solid red";
					alert("Ingrese la fecha");
					return false;
    			}else{
					fecha.style.border = "1px solid darkgreen";
				}		
    			
	for (var i = 0; i < r; i++) {
		if (usuario[i].sesion === true) {

				usuario[i].nombregastop_gastosp[indice.value] = nombre.value;
				usuario[i].montogastop_gastosp[indice.value] = monto.value;
				usuario[i].fechagastop_gastosp[indice.value] = fecha.value;
				usuario[i].tipogastop_gastosp[indice.value] = selectedFGN;
				usuario[i].intipogastop_gastosp[indice.value] = tipo.value;
				
				alert("Gasto modificado exitosamente!");

				//Almacenando el valor del historial.
				var his = "";

				his += "<div class='viewFgnANDgp'>"
    			his += "<p>(Modificado)Nombre Gasto: " + usuario[i].nombregastop_gastosp[indice.value] + "</p>"
    			his += "<table>\n";
    			his += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[indice.value] + "</td>\n</tr>";
    			his += "<tr><th>Categoría</th>\n<td>"+ usuario[i].tipogastop_gastosp[indice.value] + "</td>\n</tr>";
    			his += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[indice.value] + "</td>\n</tr>";
    			his += "</table>";
    			his += "</div>";

    			usuario[i].historial_gastosp += his;

    			usuario[i].intervalo_gastosp[indice.value] = diasmesanios(fecha.value);

		        mostrando_HistGastosP();
		        SeeAllInfoUser();
				nombre.value = "";
				monto.value = "";
				fecha.value = "";
				tipo.value = "";
		}	
			//Mostrando los gastos periódicos
    	if (usuario[i].cgp > 0) {
    				document.getElementById("VhisFGsP").innerHTML = "";
    				document.getElementById("VhisFGsP").innerHTML = usuario[i].historial_gastosp;
    			}else{
    				document.getElementById("VhisFGsP").innerHTML = "No existen registros.";
    				//Mostrando los gastos periódicos
    			
    			}
    	
    }
        localStorage.removeItem('usuario');
	    localStorage.setItem('usuario', JSON.stringify(usuario));
	
}
document.getElementById("eliminar_gastosp").addEventListener("click", eliminar_gastosP);
function eliminar_gastosP(){
	var indice = document.getElementById("mostrar_gastos2");

	for (var i = 0; i < r; i++) {
		if (usuario[i].sesion === true) {

				var his = "";

				his += "<div class='viewFgnANDgp'>"
    			his += "<p>(Eliminado)Nombre Gasto: " + usuario[i].nombregastop_gastosp[indice.value] + "</p>"
    			his += "</div>";

    			usuario[i].historial_gastosp += his;

				usuario[i].nombregastop_gastosp[indice.value] = "";
				usuario[i].montogastop_gastosp[indice.value] = "";
				usuario[i].fechagastop_gastosp[indice.value] = "";
				usuario[i].tipogastop_gastosp[indice.value] = "";
				usuario[i].intipogastop_gastosp[indice.value] = "";
				usuario[i].intervalo_gastosp[indice.value] = "";

				usuario[i].eliminado_gastosp = true;

				alert("Gasto periodico eliminado.");
				mostrando_HistGastosP();
		        SeeAllInfoUser();
		}
		if (usuario[i].cgp > 0) {
    				document.getElementById("VhisFGsP").innerHTML = "";
    				document.getElementById("VhisFGsP").innerHTML = usuario[i].historial_gastosp;
    			}else{
    				document.getElementById("VhisFGsP").innerHTML = "No existen registros.";
    				//Mostrando los gastos periódicos
    			
    			}
	}
	    localStorage.removeItem('usuario');
	    localStorage.setItem('usuario', JSON.stringify(usuario));

}

function diasmesanios(fecha){

	var dias = "";
	var meses = "";
	var anios = "";


	for (var o = 0; o <= 9; o++) {
		if (o >= 0 && o < 4) {
			anios += String(fecha.charAt(o));
		}else if(o >= 5 && o < 7){
			meses += String(fecha.charAt(o));
		}else if (o >= 8) {
			dias += String(fecha.charAt(o));
		}
	}
 	var aux = new Date()

	var f2 = dias + "/" + meses +"/"+ anios;

	var f1 = String(aux.getDate()) +"/"+ String(parseInt(aux.getMonth()) + 1) +"/"+ String(aux.getFullYear());

	var aFecha1 = f1.split('/'); 
 	var aFecha2 = f2.split('/'); 
 	var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]); 
 	var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]); 
 	var dif = fFecha2 - fFecha1;
 	var intervalo = Math.floor(dif / (1000 * 60 * 60 * 24)); 
 	return intervalo;


}

function mostrar_alertas(){

	var diamax = document.getElementById("NewCDfA");
 	for (var i = 0; i < r; i++) {
 		if (usuario[i].sesion === true) {
 			if (usuario[i].configDias > 0) {
 				if (usuario[i].cgp > 0) {
 					var mensaje = "Se acerca la fecha de pago de: ";
 					for (var j = 0; j < usuario[i].cgp; j++) {
 						if (usuario[i].intervalo_gastosp[j] < diamax.value) {
 							mensaje += String(usuario[i].nombregastop_gastosp[j]) + ", ";
 						}
 					}
 					mensaje += "para mas información, abra el apartado de Gastos Periódicos";
 					alert(mensaje)
 				}
 			}
 		}
 	}

}


function mostrando_HistGastosP(){
	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			if (usuario[i].cgp > 0) {
    				var contenido1 = "";
    				var contenido2 = "";
    				var contenido3 = "";
    				var contenido4 = "";
    				var contenido5 = "";
    				var contenido6 = "";
    				var contenido7 = "";
    				var contenido8 = "";
    				for (var u = 0; u < usuario[i].cgp; u++) {
    					if (usuario[i].tipogastop_gastosp[u] === "Celular") {
    						if (usuario[i].eliminado_gastosp === false) {
    							contenido1 += "<div class='viewFgnANDgp'>"
    							contenido1 += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[u] + "</p>"
    							contenido1 += "<table>\n";
    							contenido1 += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[u] + "</td>\n</tr>";
    							contenido1 += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[u] + "</td>\n</tr>";
    							contenido1 += "</table>";
    							contenido1 += "</div>"
    						}else{
    							contenido1 += "<p>No hay registros.</p>"
    						}
    					}else{
    						contenido1 += "<p>No hay registros.</p>"
    					}
    					if (usuario[i].tipogastop_gastosp[u] === "Luz") {
    						if (usuario[i].eliminado_gastosp === false) {
    							contenido2 += "<div class='viewFgnANDgp'>"
    							contenido2 += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[u] + "</p>"
    							contenido2 += "<table>\n";
    							contenido2 += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[u] + "</td>\n</tr>";
    							contenido2 += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[u] + "</td>\n</tr>";
    							contenido2 += "</table>";
    							contenido2 += "</div>"
    						}else{
    							contenido2 += "<p>No hay registros.</p>"
    						}
    					}else{
    						contenido2 += "<p>No hay registros.</p>"
    					}
    					if (usuario[i].tipogastop_gastosp[u] === "Agua") {
    						if (usuario[i].eliminado_gastosp === false) {
    							contenido3 += "<div class='viewFgnANDgp'>"
    							contenido3 += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[u] + "</p>"
    							contenido3 += "<table>\n";
    							contenido3 += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[u] + "</td>\n</tr>";
    							contenido3 += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[u] + "</td>\n</tr>";
    							contenido3 += "</table>";
    							contenido3 += "</div>"
    						}else{
    							contenido3 += "<p>No hay registros.</p>"
    						}
    					}else{
    						contenido3 += "<p>No hay registros.</p>"
    					}
    					if (usuario[i].tipogastop_gastosp[u] === "Casa/Alquiler") {
    						if (usuario[i].eliminado_gastosp === false) {
    							contenido4 += "<div class='viewFgnANDgp'>"
    							contenido4 += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[u] + "</p>"
    							contenido4 += "<table>\n";
    							contenido4 += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[u] + "</td>\n</tr>";
    							contenido4 += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[u] + "</td>\n</tr>";
    							contenido4 += "</table>";
    							contenido4 += "</div>"
    						}else{
    							contenido4 += "<p>No hay registros.</p>"
    						}
    					}else{
    						contenido4 += "<p>No hay registros.</p>"
    					}
    					if (usuario[i].tipogastop_gastosp[u] === "Cable") {
    						if (usuario[i].eliminado_gastosp === false) {
    							contenido5 += "<div class='viewFgnANDgp'>"
    							contenido5 += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[u] + "</p>"
    							contenido5 += "<table>\n";
    							contenido5 += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[u] + "</td>\n</tr>";
    							contenido5 += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[u] + "</td>\n</tr>";
    							contenido5 += "</table>";
    							contenido5 += "</div>"
    						}else{
    							contenido5 += "<p>No hay registros.</p>"
    						}
    					}else{
    						contenido5 += "<p>No hay registros.</p>"
    					}
    					if (usuario[i].tipogastop_gastosp[u] === "Internet") {
    						if (usuario[i].eliminado_gastosp === false) {
    							contenido6 += "<div class='viewFgnANDgp'>"
    							contenido6 += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[u] + "</p>"
    							contenido6 += "<table>\n";
    							contenido6 += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[u] + "</td>\n</tr>";
    							contenido6 += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[u] + "</td>\n</tr>";
    							contenido6 += "</table>";
    							contenido6 += "</div>"
    						}else{
    							contenido6 += "<p>No hay registros.</p>"
    						}
    					}else{
    						contenido6 += "<p>No hay registros.</p>"
    					}
    					if (usuario[i].tipogastop_gastosp[u] === "Educación") {
    						if (usuario[i].eliminado_gastosp === false) {
    							contenido7 += "<div class='viewFgnANDgp'>"
    							contenido7 += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[u] + "</p>"
    							contenido7 += "<table>\n";
    							contenido7 += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[u] + "</td>\n</tr>";
    							contenido7 += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[u] + "</td>\n</tr>";
    							contenido7 += "</table>";
    							contenido7 += "</div>"
    						}else{
    							contenido7 += "<p>No hay registros.</p>"
    						}
    					}else{
    						contenido7 += "<p>No hay registros.</p>"
    					}
    					if (usuario[i].tipogastop_gastosp[u] === "Otros") {
    						if (usuario[i].eliminado_gastosp === false) {
    							contenido8 += "<div class='viewFgnANDgp'>"
    							contenido8 += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[u] + "</p>"
    							contenido8 += "<table>\n";
    							contenido8 += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[u] + "</td>\n</tr>";
    							contenido8 += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[u] + "</td>\n</tr>";
    							contenido8 += "</table>";
    							contenido8 += "</div>"
    						}else{
    							contenido8 += "<p>No hay registros.</p>"
    						}
    					}else{
    						contenido8 += "<p>No hay registros.</p>"
    					}
    				}
    				document.getElementById("mCGP1").innerHTML = "";
    				document.getElementById("mCGP1").innerHTML = contenido1;
    				document.getElementById("mCGP2").innerHTML = "";
    				document.getElementById("mCGP2").innerHTML = contenido2;
    				document.getElementById("mCGP3").innerHTML = "";
    				document.getElementById("mCGP3").innerHTML = contenido3;
    				document.getElementById("mCGP4").innerHTML = "";
    				document.getElementById("mCGP4").innerHTML = contenido4;
    				document.getElementById("mCGP5").innerHTML = "";
    				document.getElementById("mCGP5").innerHTML = contenido5;
    				document.getElementById("mCGP6").innerHTML = "";
    				document.getElementById("mCGP6").innerHTML = contenido6;
    				document.getElementById("mCGP7").innerHTML = "";
    				document.getElementById("mCGP7").innerHTML = contenido7;
    				document.getElementById("mc_OGP1").innerHTML = "";
    				document.getElementById("mc_OGP1").innerHTML = contenido8;
    			}else{
    				document.getElementById("mCGP1").innerHTML = "No existen registros.";
    				document.getElementById("mCGP2").innerHTML = "No existen registros.";
    				document.getElementById("mCGP3").innerHTML = "No existen registros.";
    				document.getElementById("mCGP4").innerHTML = "No existen registros.";
    				document.getElementById("mCGP5").innerHTML = "No existen registros.";
    				document.getElementById("mCGP6").innerHTML = "No existen registros.";
    				document.getElementById("mCGP7").innerHTML = "No existen registros.";
    				document.getElementById("mc_OGP1").innerHTML = "No existen registros.";
    			}
    		}
    	}
}



/*--------------------------GASTOS PERIÓDICOS--------------*/


/*--------------------GASTOS-----------------------------*/
document.getElementById("addGN").addEventListener("click", agregarGastosNormales);
function agregarGastosNormales(){
	var nombre = document.getElementById("FnGN");
	var monto = document.getElementById("FmGN");
	var date = document.getElementById("FdGn");
	var selecFG = document.getElementById("cfGastnP");
	var selecFG2 = document.getElementById("cfGastnP").selectedIndex;
	var expDEC = /\d+(\.\d{1,2})?/;
	var today = new Date();

	if (nombre.value === "" || nombre.value.replace(/ /g, '') === '') {
		nombre.setAttribute("placeholder","Ingrese el Nombre");
		nombre.style.border = "1px solid red";
		nombre.focus();
		return false;
	}else{
		nombre.setAttribute("placeholder","XX");
		nombre.style.border = "1px solid darkgreen";
	}
	if (monto.value === "" || monto.value.replace(/ /g, '') === '') {
		monto.setAttribute("placeholder","Ingrese el Monto");
		monto.style.border = "1px solid red";
		monto.value="";
		monto.focus();
		return false;
	}else{
		monto.setAttribute("placeholder","00.00");
		monto.style.border = "1px solid darkgreen";
	}
	if (!expDEC.test(monto.value)) {
		monto.setAttribute("placeholder","Ingrese números");
		monto.style.border = "1px solid red";
		monto.value="";
		monto.focus();
		return false;
	}else{
		monto.setAttribute("placeholder","00.00");
		monto.style.border = "1px solid darkgreen";
	}
	if (date.value === "" || date.value.replace(/ /g, '') === '') {
		alert("Ingrese la fecha de vencimiento")
		date.style.border = "1px solid red";
		date.vale="";
		date.focus();
		return false;
	}else{
		date.style.border = "1px solid darkgreen";
	}
	if (Date.parse(date.value) < today) {
		alert("Ingrese una fecha válida")
		date.style.border = "1px solid red";
		date.value="";
		date.focus();
		return false;
	}else{
		date.style.border = "1px solid darkgreen";
	}
	if (selecFG.value == "0" || selecFG.value == null) {
    	alert("Debes seleccionar el tipo de ingreso.");
    	selecFG.style.border = "1px solid red";
   		return false;
   	}else{
	 	selecFG.style.border = "1px solid darkgreen";
	  	selecFG.focus();
   	}
   	var selectedFGN = selecFG.options[selecFG.selectedIndex].text;
   	if (nombre.value != ""){
   	for (var i = 0; i < r; i++) {
			if (usuario[i].sesion === true) {

				usuario[i].nombregasto_gastos[usuario[i].cgn] = nombre.value;
				usuario[i].montogasto_gastos[usuario[i].cgn] = monto.value;
				usuario[i].fechagasto_gastos[usuario[i].cgn] = date.value;
				usuario[i].tipogasto_gastos[usuario[i].cgn] = selectedFGN;
				usuario[i].categoriagasto_gastos[usuario[i].cgn] = selecFG.value;
				usuario[i].cgn += 1;

				alert("Gasto registrado exitosamente!");
				mostrando_HistGastosN();
			}
			//Mostrando los gastos normales
    			if (usuario[i].cgn > 0) {
    				var contGn = "";
    				for (var gn = 0; gn < usuario[i].cgn; gn++) {
    						contGn += "<div class='viewFgnANDgp'>"
    						contGn += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[gn] + "</p>"
    						contGn += "<table>\n";
    						contGn += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogasto_gastos[gn] + "</td>\n</tr>";
    						contGn += "<tr><th>Categoría</th>\n<td>"+ usuario[i].tipogasto_gastos[gn] + "</td>\n</tr>";
    						contGn += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagasto_gastos[gn] + "</td>\n</tr>";
    						contGn += "</table>";
    						contGn += "</div>"
    				}
    				document.getElementById("GastosNorH").innerHTML = "";
    				document.getElementById("GastosNorH").innerHTML = contGn;
    			}else{
    				document.getElementById("GastosNorH").innerHTML = "No existen registros.";
    			}
    			//Mostrando los gastos normales
    			nombre.value = "";
				monto.value = "";
				date.value = "";
				selecFG.value = "";
		}
	}
		localStorage.removeItem('usuario');
	    localStorage.setItem('usuario', JSON.stringify(usuario));

}
function mostrando_HistGastosN(){
	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {
    			if (usuario[i].cgn > 0) {
    				var contenido1 = "";
    				var contenido2 = "";
    				var contenido3 = "";
    				var contenido4 = "";
    				var contenido5 = "";
    				var contenido6 = "";
    				var contenido7 = "";
    				var contenido8 = "";
    				var contenido9 = "";
    				var contenido10 = "";
    				var contenido11 = "";
    				for (var u = 0; u < usuario[i].cgn; u++) {
    					if (usuario[i].tipogasto_gastos[u] === "Supermercado") {
    						contenido1 += "<div class='viewFgnANDgp'>"
    						contenido1 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido1 += "<table>\n";
    						contenido1 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido1 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido1 += "</table>";
    						contenido1 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Cine") {
    						contenido2 += "<div class='viewFgnANDgp'>"
    						contenido2 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido2 += "<table>\n";
    						contenido2 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido2 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido2 += "</table>";
    						contenido2 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Discoteca") {
    						contenido3 += "<div class='viewFgnANDgp'>"
    						contenido3 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido3 += "<table>\n";
    						contenido3 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido3 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido3 += "</table>";
    						contenido3 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Teatro") {
    						contenido4 += "<div class='viewFgnANDgp'>"
    						contenido4 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido4 += "<table>\n";
    						contenido4 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido4 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido4 += "</table>";
    						contenido4 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Ropa") {
    						contenido5 += "<div class='viewFgnANDgp'>"
    						contenido5 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido5 += "<table>\n";
    						contenido5 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido5 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido5 += "</table>";
    						contenido5 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Restaurante") {
    						contenido6 += "<div class='viewFgnANDgp'>"
    						contenido6 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido6 += "<table>\n";
    						contenido6 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido6 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido6 += "</table>";
    						contenido6 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Tecnología") {
    						contenido7 += "<div class='viewFgnANDgp'>"
    						contenido7 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido7 += "<table>\n";
    						contenido7 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido7 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido7 += "</table>";
    						contenido7 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Mascota") {
    						contenido8 += "<div class='viewFgnANDgp'>"
    						contenido8 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido8 += "<table>\n";
    						contenido8 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido8 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido8 += "</table>";
    						contenido8 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Gasolina") {
    						contenido9 += "<div class='viewFgnANDgp'>"
    						contenido9 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido9 += "<table>\n";
    						contenido9 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido9 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido9 += "</table>";
    						contenido9 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Reparaciones") {
    						contenido10 += "<div class='viewFgnANDgp'>"
    						contenido10 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido10 += "<table>\n";
    						contenido10 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido10 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido10 += "</table>";
    						contenido10 += "</div>"
    					}
    					if (usuario[i].tipogasto_gastos[u] === "Otros") {
    						contenido11 += "<div class='viewFgnANDgp'>"
    						contenido11 += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[u] + "</p>"
    						contenido11 += "<table>\n";
    						contenido11 += "<tr><td>Monto a Pagar</td>\n<td>$" + usuario[i].montogasto_gastos[u] + "</td>\n</tr>";
    						contenido11 += "<tr><td>Vence</td>\n<td>"+ usuario[i].fechagasto_gastos[u] + "</td>\n</tr>";
    						contenido11 += "</table>";
    						contenido11 += "</div>"
    					}
    				}
    				document.getElementById("mCG1").innerHTML = "";
    				document.getElementById("mCG1").innerHTML = contenido1;
    				document.getElementById("mCG2").innerHTML = "";
    				document.getElementById("mCG2").innerHTML = contenido2;
    				document.getElementById("mCG3").innerHTML = "";
    				document.getElementById("mCG3").innerHTML = contenido3;
    				document.getElementById("mCG4").innerHTML = "";
    				document.getElementById("mCG4").innerHTML = contenido4;
    				document.getElementById("mCG5").innerHTML = "";
    				document.getElementById("mCG5").innerHTML = contenido5;
    				document.getElementById("mCG6").innerHTML = "";
    				document.getElementById("mCG6").innerHTML = contenido6;
    				document.getElementById("mCG7").innerHTML = "";
    				document.getElementById("mCG7").innerHTML = contenido7;
    				document.getElementById("mCG8").innerHTML = "";
    				document.getElementById("mCG8").innerHTML = contenido8;
    				document.getElementById("mCG9").innerHTML = "";
    				document.getElementById("mCG9").innerHTML = contenido9;
    				document.getElementById("mCG10").innerHTML = "";
    				document.getElementById("mCG10").innerHTML = contenido10;
    				document.getElementById("mCG11").innerHTML = "";
    				document.getElementById("mCG11").innerHTML = contenido11;
    			}else{
    				document.getElementById("mCG1").innerHTML = "No existen registros.";
    				document.getElementById("mCG2").innerHTML = "No existen registros.";
    				document.getElementById("mCG3").innerHTML = "No existen registros.";
    				document.getElementById("mCG4").innerHTML = "No existen registros.";
    				document.getElementById("mCG5").innerHTML = "No existen registros.";
    				document.getElementById("mCG6").innerHTML = "No existen registros.";
    				document.getElementById("mCG7").innerHTML = "No existen registros.";
    				document.getElementById("mCG8").innerHTML = "No existen registros.";
    				document.getElementById("mCG9").innerHTML = "No existen registros.";
    				document.getElementById("mCG10").innerHTML = "No existen registros.";
    				document.getElementById("mCG11").innerHTML = "No existen registros.";
    			}
    		}
    	}
}

/*--------------------GASTOS-----------------------------*/

/*-----------------Conguraciones Generales-------------*/
document.getElementById("modfBalMin").addEventListener("click", ChangeBalMin);
function ChangeBalMin(){
	var balanceMin = document.getElementById("balanceMin");
	var expDEC = /\d+(\.\d{1,2})?/;

	if (balanceMin.value === "" || balanceMin.value.replace(/ /g, '') === '') {
		balanceMin.setAttribute("placeholder","Ingrese el Balance Mínimo");
		balanceMin.style.border = "1px solid red";
		balanceMin.focus();
		return false;
	}else{
		balanceMin.setAttribute("placeholder","00.00");
		balanceMin.style.border = "1px solid darkgreen";
	}
	if (!expDEC.test(balanceMin.value)) {
		balanceMin.setAttribute("placeholder","Ingrese el Balance Mínimo");
		balanceMin.style.border = "1px solid red";
		balanceMin.value = "";
		balanceMin.focus();
		return false;
	}else{
		balanceMin.setAttribute("placeholder","00.00");
		balanceMin.style.border = "1px solid darkgreen";
	}
	if (balanceMin.value != "") {
			for (var i = 0; i < r; i++) {
				if (usuario[i].sesion === true) {
					var balanceGen = parseFloat(usuario[i].balance_general);
					if (parseFloat(balanceMin.value) > balanceGen) {
						alert("El Balance Mínimo no puede ser mayor que el Balance General");
						balanceMin.style.border = "1px solid red";
						balanceMin.value = "";
						balanceMin.focus();
						return false;
					}else{
						balanceMin.setAttribute("placeholder","00.00");
						balanceMin.style.border = "1px solid darkgreen";
					}
					usuario[i].balance_minimo = balanceMin.value;
					balanceMin.value = "";
					alert("Balance mínimo registrado exitosamente!");
					document.getElementById("ShowbalanceMin").innerHTML = "$"+ usuario[i].balance_minimo;
					ComparativoBalance();
				}
			}
			
			localStorage.removeItem('usuario');
			localStorage.setItem('usuario', JSON.stringify(usuario));
			
		};
}
document.getElementById("configAlerts").addEventListener("click",configAlerts);
function configAlerts(){
	var alertita = document.getElementById("NewCDfA");
	if (alertita.value === "" || alertita.value.replace(/ /g, '') === '') {
		alertita.setAttribute("placeholder","Ingrese los días");
		alertita.style.border = "1px solid red";
		alertita.focus();
		return false;
	}else{
		alertita.setAttribute("placeholder","00");
		alertita.style.border = "1px solid darkgreen";
	}
	if (isNaN(alertita.value)) {
		alertita.setAttribute("placeholder","Ingrese números");
		alertita.style.border = "1px solid red";
		alertita.value = "";
		alertita.focus();
		return false;
	}else{
		alertita.setAttribute("placeholder","00");
		alertita.style.border = "1px solid darkgreen";
	}
	if (alertita.value != "") {
			for (var i = 0; i < r; i++) {
				if (usuario[i].sesion === true) {

					usuario[i].configDias = alertita.value;
					alertita.value = "";
					alert("Alertas configuradas exitosamente!");
					mostrar_alertas();
					document.getElementById("dAofCFG").value = usuario[i].configDias;
					ComparativoBalance();
				}
			}
			
			localStorage.removeItem('usuario');
			localStorage.setItem('usuario', JSON.stringify(usuario));
			
		};
}
/*------------------------Configuraciones Generales------------------*/

/*------------------------Otras Cosas------------------*/
function BalanceGeneral(){
	for (var i = 0; i < r; i++) {
		if (usuario[i].sesion === true) {
			var btotal = usuario[i].balance_general;
			document.getElementById("balance_mio").innerHTML = "$"+btotal;
			document.getElementById("ShowbalanceGen").innerHTML = "$"+btotal;
		}
	}
}
function ComparativoBalance(){
	for (var i = 0; i < r; i++) {
		if (usuario[i].sesion === true) {
			var bG = parseFloat(usuario[i].balance_general);
			var bM = parseFloat(usuario[i].balance_minimo);
			var excelent;
			var fine;
			var good;
			var soso;
			var bad;
			var dead;
			var showBG = document.getElementById("ShowbalanceGen");
			var cero = 0.00;

			excelent = parseFloat(bM)*0.80;
			var rexcelent = excelent + parseFloat(bM);
			fine = parseFloat(bM)*0.50;
			var rfine = fine + parseFloat(bM);
			good = parseFloat(bM)*0.25;
			var rgood = good + parseFloat(bM);
			soso = parseFloat(bM)*0.15;
			var rsoso = soso + parseFloat(bM);
			bad = parseFloat(bM)*0.05;
			var rbad = bad + parseFloat(bM);
			dead = parseFloat(bM)*0.00;
			var rdead = dead + parseFloat(bM);
			
			if (bG === cero) {
				showBG.style.color = "darkred";
				showBG.setAttribute("title","Precaución V")
				alert("Ya no tiene dinero");
			}
			if (bG < rdead) {
				showBG.style.color = "darkred";
				showBG.setAttribute("title","Precaución IV")
				alert("Su Balance General es menor al Balance Mínimo");
			}
			if (bG === rdead) {
				showBG.style.color = "darkred";
				showBG.setAttribute("title","Precaución III")
				alert("Su Balance General es igual al Balance Mínimo");
			}
			if (bG > rdead) {
				showBG.style.color = "darkred";
				showBG.setAttribute("title","Precaución II")
			}
			if (parseFloat(bG) > parseFloat(rbad)) {
				showBG.style.color = "red";
				showBG.setAttribute("title","Precaución I");
			}
			if (parseFloat(bG) > parseFloat(rsoso)) {
				showBG.style.color = "orange";
				showBG.setAttribute("title","Precaución I");
			}
			if (parseFloat(bG) > parseFloat(rgood)) {
				showBG.style.color = "yellow";
				showBG.setAttribute("title","Bueno");
			}
			if (parseFloat(bG) > parseFloat(rfine)) {
				showBG.style.color = "green";
				showBG.setAttribute("title","Muy Bueno");
			}
			if (parseFloat(bG) >= parseFloat(rexcelent)) {
				showBG.style.color = "darkgreen";
				showBG.setAttribute("title","Excelente");
			}
		}
	}
}

function SeeAllInfoUser(){

	for (var i = 0; i < r; i++) {
    		if (usuario[i].sesion === true) {

    			//Mostrando cuentas de ahorro
    			if (usuario[i].cr > 0) {

    				var div_cuentas = "<div class='cont_tuscuentasdeahorro'>\n"
					for (var s = 0; s < usuario[i].cr; s++) {
						div_cuentas += "<div class='tuscuentasdeahorro' id='idCn"+ eval(s+1) +"'>\n";
						div_cuentas += "<h6 class='CAth'>\nBanco: " + usuario[i].nombre_cuentabanc[s] + "\n</h6>\n</tr>\n";
						div_cuentas += "<p class='CAtd'>\n# de cuenta: " + usuario[i].numero_cuentabanc[s] + "\n</p>\n";
						div_cuentas += "<p class='CAtdlast'>\nSaldo actual: $" + usuario[i].saldo_cuentabanc[s] + "</p>\n";
						div_cuentas += "</div>\n"
					}
					div_cuentas += "</div>\n"
					document.getElementById("cuentas_exist").innerHTML = "";
					document.getElementById("cuentas_exist").innerHTML = div_cuentas;
    			}else{
    				document.getElementById("cuentas_exist").innerHTML = "<p>No existe ningún registro.</p>";
    			}
    			//Mostrando cuentas de ahorro

    			//Mostrando tarjetas de crédito
    			if (usuario[i].tcr > 0) {
    				var div_tarjetas = "<div class='contFORallPrint'>\n"
					for (var a = 0; a < usuario[i].tcr; a++) {
						div_tarjetas += "<div class='contFORallPrintPPAL' id='idCn"+ eval(a+1) +"'>\n";
						div_tarjetas += "<h6 class='CAth'>\nBanco: " + usuario[i].nombre_tarjetacredito[a] + "\n</h6>\n</tr>\n";
						div_tarjetas += "<p class='CAtd'>\n# de tarjeta: " + usuario[i].numero_tarjetacredito[a] + "\n</p>\n";
						div_tarjetas += "<p class='CAtd'>\nSaldo actual: $" + usuario[i].saldo_tarjetacredito[a] + "</p>\n";
						div_tarjetas += "<p class='CAtd'>\nInteres: %" + usuario[i].interes_tarjetacredito[a] + "</p>\n";
						div_tarjetas += "<p class='CAtdlast'>\nVence el: " + usuario[i].vencimiento_tarjetacredito[a] + "</p>\n";
						div_tarjetas += "</div>\n";
						}
					div_tarjetas += "</div>\n";
					document.getElementById("tarjetas_exist").innerHTML = "";
					document.getElementById("tarjetas_exist").innerHTML = div_tarjetas;
					document.getElementById("VtcFGsP").innerHTML = "";
					document.getElementById("VtcFGsP").innerHTML = div_tarjetas;
    			}else{
    				document.getElementById("tarjetas_exist").innerHTML = "<p>No existe ningún registro.</p>";
    				document.getElementById("VtcFGsP").innerHTML = "<p>No existe ningún registro.</p>";
    			}
    			//Mostrando tarjetas de crédito

    			//Mostrando blanace minimo
    			if (usuario[i].balance_minimo > 0) {
    				document.getElementById("ShowbalanceMin").innerHTML = "$"+usuario[i].balance_minimo;
    			}else{
    				document.getElementById("ShowbalanceMin").innerHTML = "$"+usuario[i].balance_minimo;
    			}
    			//Mostrando blanace minimo

    			//Mostrando días de las alertas
    			if (usuario[i].configDias > 0) {
    				document.getElementById("dAofCFG").value = usuario[i].configDias;
    			}else{
    				document.getElementById("dAofCFG").value = usuario[i].configDias;
    			}
    			//Mostrando días de las alertas

    			//Mostrando los gastos normales
    			if (usuario[i].cgn > 0) {
    				var contGn = "";
    				for (var gn = 0; gn < usuario[i].cgn; gn++) {
    						contGn += "<div class='viewFgnANDgp'>"
    						contGn += "<p>Nombre Gasto: " + usuario[i].nombregasto_gastos[gn] + "</p>"
    						contGn += "<table>\n";
    						contGn += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogasto_gastos[gn] + "</td>\n</tr>";
    						contGn += "<tr><th>Categoría</th>\n<td>"+ usuario[i].tipogasto_gastos[gn] + "</td>\n</tr>";
    						contGn += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagasto_gastos[gn] + "</td>\n</tr>";
    						contGn += "</table>";
    						contGn += "</div>"
    				}
    				document.getElementById("GastosNorH").innerHTML = "";
    				document.getElementById("GastosNorH").innerHTML = contGn;
    			}else{
    				document.getElementById("GastosNorH").innerHTML = "No existen registros.";
    			}
    			//Mostrando los gastos normales

    			//Mostrando historial de gastos por categoria
    			mostrando_HistGastosN();
    			//Mostrando historial de gastos por categoria

    			//Mostrando los gastos periódicos
    			if (usuario[i].cgp > 0) {
    				var contGp = "";
    				var nomreg = "";
    				for (var gp = 0; gp < usuario[i].cgp; gp++) {
    						contGp += "<div class='viewFgnANDgp'>"
    						contGp += "<p>Nombre Gasto: " + usuario[i].nombregastop_gastosp[gp] + "</p>"
    						contGp += "<table>\n";
    						contGp += "<tr><th>Monto a Pagar</th>\n<td>$" + usuario[i].montogastop_gastosp[gp] + "</td>\n</tr>";
    						contGp += "<tr><th>Categoría</th>\n<td>"+ usuario[i].tipogastop_gastosp[gp] + "</td>\n</tr>";
    						contGp += "<tr><th>Vence</th>\n<td>"+ usuario[i].fechagastop_gastosp[gp] + "</td>\n</tr>";
    						contGp += "</table>";
    						contGp += "</div>";

    						nomreg += "<option value='" + gp + "'>" + usuario[i].nombregastop_gastosp[gp] + "</option>\n";
    				}
    				document.getElementById("VhisFGsP").innerHTML = "";
    				document.getElementById("VhisFGsP").innerHTML = contGp;
    				document.getElementById("mostrar_gastos").innerHTML = "";
    				document.getElementById("mostrar_gastos").innerHTML = nomreg;
    				document.getElementById("mostrar_gastos2").innerHTML = "";
    				document.getElementById("mostrar_gastos2").innerHTML = nomreg;
    				document.getElementById("cblbl2").disabled = false;
    				document.getElementById("cblbl3").disabled = false;
    			}else{
    				document.getElementById("VhisFGsP").innerHTML = "No existen registros.";
    				document.getElementById("cblbl2").disabled = true;
    				document.getElementById("cblbl3").disabled = true;
    			}
    			//Mostrando los gastos periódicos
				
				//Mostrando historial de gastos periódicos por tipo de pago
    			mostrando_HistGastosP();
    			//Mostrando historial de gastos periódicos por tipo de pago

    		}
    	}
}



/*------------------------ESTADISTICAS-------------------*/
function graficarGM(){
	var today = new Date();
	var date = document.getElementById("dateForViwE1");
	if (date.value === "") {
		for (var i = 0; i < r; i++) {
			if (usuario[i].sesion === true) {

				if (usuario[i].cr > 0) {
				var tot1=0;
				for (var j = 0; j < usuario[i].cr; j++) {
					tot1 += "+"+usuario[i].saldo_cuentabanc[j];
				}
				var total = tot1;
				var bTotal = eval(total);
				tot1 = bTotal.toFixed(2);
				}

				if (usuario[i].ipc > 0) {
				var tot2=0;
				for (var k = 0; k < usuario[i].ipc; k++) {
					tot2 += "+"+usuario[i].sueldo_ingresosperiodicos[k];
				}
				var total2 = tot2;
				var bTotal2 = eval(total2);
				tot2 = bTotal2.toFixed(2);
				}

				if (usuario[i].oic > 0) {
				var tot3=0;
				for (var l = 0; l < usuario[i].ipc; l++) {
					tot3 += "+"+usuario[i].monto_otrosingresos[l];
				}
				var total3 = tot3;
				var bTotal3 = eval(total3);
				tot3 = bTotal3.toFixed(2);
				}

				var totalD = tot1+tot2+tot3;
				var totalE = totalD;
				var cien = 100;

				if (usuario[i].cr > 0) {
					var contGraf = "<div class='jolaGHTI'>";
					contGraf += "<p>Cuentas Bancarias</p>";
				for (var m = 0; m < usuario[i].cr; m++) {
					var saldo1 = parseFloat(usuario[i].saldo_cuentabanc[m]);
					var widGraff = (saldo1*cien)/tot1;
					contGraf += "<div class='contJolaGHI'>";
					contGraf += "<div class='grafiquitaHermosa'>";
					contGraf += "<div style='height:"+widGraff.toFixed(2)+"%;'></div>"
					contGraf += "</div>";
					contGraf += "<div class='contgrafiquitahermosa'>";
					contGraf += "<p>"+widGraff.toFixed(2)+"%</p>";
					contGraf += "<p>"+usuario[i].nombre_cuentabanc[m]+"</p>";
					contGraf += "<p>$"+saldo1+"</p>";
					contGraf += "</div>";
					contGraf += "</div>";
				}
				contGraf += "</div>";
				}

				if (usuario[i].ipc > 0) {
					contGraf += "<div class='jolaGHTI'>";
					contGraf += "<p>Ingresos Periódicos</p>";
				for (var n = 0; n < usuario[i].cr; n++) {
					var saldo2 = parseFloat(usuario[i].sueldo_ingresosperiodicos[n]);
					var widGraff2 = (saldo2*cien)/tot2;
					contGraf += "<div class='contJolaGHI'>";
					contGraf += "<div class='grafiquitaHermosa'>";
					contGraf += "<div style='height:"+widGraff2.toFixed(2)+"%;'></div>"
					contGraf += "</div>";
					contGraf += "<div class='contgrafiquitahermosa'>";
					contGraf += "<p>"+widGraff2.toFixed(2)+"%</p>";
					contGraf += "<p>"+usuario[i].nombre_ingresosperiodicos[n]+"</p>";
					contGraf += "<p>$"+saldo2+"</p>";
					contGraf += "</div>";
					contGraf += "</div>";
				}
				contGraf += "</div>";
				}

				if (usuario[i].oic > 0) {
					contGraf += "<div class='jolaGHTI'>";
					contGraf += "<p>Otros Ingresos</p>";
				for (var o = 0; o < usuario[i].cr; o++) {
					var saldo3 = parseFloat(usuario[i].monto_otrosingresos[o]);
					var widGraff2 = (saldo3*cien)/tot3;
					contGraf += "<div class='contJolaGHI'>";
					contGraf += "<div class='grafiquitaHermosa'>";
					contGraf += "<div style='height:"+widGraff2.toFixed(2)+"%;'></div>"
					contGraf += "</div>";
					contGraf += "<div class='contgrafiquitahermosa'>";
					contGraf += "<p>"+widGraff2.toFixed(2)+"%</p>";
					contGraf += "<p>"+usuario[i].motivo_otrosingresos[o]+"</p>";
					contGraf += "<p>$"+saldo3+"</p>";
					contGraf += "</div>";
					contGraf += "</div>"
				}
				contGraf += "</div>";
				}
				var respTOtal = parseFloat(totalE).toFixed(2);
				var contGrafii = "<p class='pForGm'>Total $"+respTOtal+"</p>"	
				document.getElementById("VwcontEs1").innerHTML = contGraf;
				document.getElementById("VwcontEs1Tot").innerHTML =  contGrafii;
				
			}
	}
}else{
	alert("No ingrese fechas mayores a las de hoy");
	return false;
	date.focus();
}

}
}

window.onload = FuncPpal;

