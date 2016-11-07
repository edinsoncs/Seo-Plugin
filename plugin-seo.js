(function(){
	var welcome = 'Bienvenido Javascript Native'

	function getElement(find){
		return document.querySelectorAll(find);
	}

	function showElement(show){
		var show = getElement('h1');
		var showText;
		if(show) {
			showText = show[0].innerText;
		}
		else {
			scanError('Usted no contiene un h1 en su HTML'); 
		}
		//Escaneando texto
		scan(showText);
	}
	function scan(textoSeo){
		function scanWelcome(t){
			alert(t);
		}
		scanWelcome(welcome);
		function scanLength(txt){
			setTimeout(function(){
				alert('Seo Scaneando...');
			}, 500);
			function showText(titleH1){
				alert('Su h1 es: ' + titleH1);
			}
			setTimeout(function(){
				showText(textoSeo)
			}, 1000);
		}
		scanLength(welcome);

		setTimeout(function(){
			verify(textoSeo);
		}, 1500);
	}
	showElement();
	function scanError(err){
		alert(err);
	}
	function verify(text) {
		alert('verificando.');
		if(text.length > 5){
			verifySuccess(text);
			verifyTip(text, 'En Hora Buena');

		} 
		else {
			verifyError(text);
		}
	}
	function verifySuccess(data){
		alert('La extension de caracteres es muy bueno');

	}
	function verifyError(err){
		alert('Problemas... su seo es malisimo' + err);
	}

	function verifyTip(text, sld){
		alert(sld);
	
	}




})();