let nomeu = document.getElementById("nome-usuario");
let rock =  window.localStorage.getItem('curtidaRock');
let logado = false;
window.onload = initPage;
function initPage(){
	let nomeu = document.getElementById("nome-usuario");
	let nomePag = document.getElementById("nome-pagina");

	if(window.localStorage.getItem('usuarioLogado') == null || window.localStorage.getItem('usuarioLogado') == "null"){
		logado = false;
	} else {
		usuarioLogado = window.localStorage.getItem('usuarioLogado');
		logado = true;
		//nomeu.innerHTML = "Meu perfil (" + usuarioLogado + ")";
	}

	qnt = window.localStorage.getItem('qnt');

	if(qnt != null){
		drawChart();
	}
