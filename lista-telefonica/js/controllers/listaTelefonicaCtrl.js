angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){

	$scope.app = "Lista Telefônica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function(){
		contatosAPI.getContatos().success(function(data, status){
			$scope.contatos = data;
		}).error(function(data){
			$scope.message = "Aconteceu um problema: "+ data;
		});
	};

	var carregarOperadoras = function(){
		operadorasAPI.getOperadoras().success(function(data, status){
			$scope.operadoras = data;
		});
	};

	$scope.adicionarContato = function (contato) {

		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato(contato).success(function(data){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
	carregarOperadoras();
});