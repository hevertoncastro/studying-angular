// //criação manual
// var pedro = {
// 	nome: "Pedro",
// 	idade: 27
// };

// console.log(pedro);

// //Factory function
// var criarPessoa = function(nome, idade){
// 	return {
// 		nome: nome,
// 		idade: idade
// 	};
// };

// var maria = criarPessoa("Maria", 46);
// console.log(maria);

// //Construct function
// var Pessoa = function(nome, idade){
// 	this.nome = nome;
// 	this.idade = idade;
// };

// var carlos = new Pessoa("Carlos", 25);
// console.log(carlos);


// var serial = String.fromCharCode(130);
// console.log(serial);

// var serial = Math.floor(1,99);
// console.log(serial);

var serial = Math.random() * 64;
console.log(serial +" / "+ Math.floor(serial));