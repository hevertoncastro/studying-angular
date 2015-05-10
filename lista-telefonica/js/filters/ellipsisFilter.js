angular.module("listaTelefonica").filter("ellipsis", function(){

	return function(input){
		var output = input.substring(0,2) + "...";
		return output;
	};

});