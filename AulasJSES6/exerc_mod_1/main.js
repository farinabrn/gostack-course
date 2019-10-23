// // Exerc 7
// const nome = 'Diego';
// const idade = 23;
// const usuario = {
//   nome,
//   idade,
//   cidade: 'Rio do Sul',
// };
// console.log(usuario);

// Exerc 6
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`);

// Exerc 5
// // 5.1
// const arr = [1, 2, 3, 4, 5, 6];
// var [x, ...y] = arr;
// console.log(x);
// console.log(y);
// function soma(...params) {
//   return params.reduce((acc, curr) => acc + curr);
// }
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3
// // 5.2
// const usuario = {
//   nome: 'Diego',
//   idade: 23,
//   endereco: {
//     cidade: 'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//   }
// };
// var usuario2 = {...usuario, nome: 'Gabriel'};
// var usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};
// console.log(usuario2, usuario3);

// Exerc 4
// // 4.1
// const empresa = {
//   nome: 'Rocketseat',
//   endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//   }
// };
// var { nome, endereco: { cidade, estado }} = empresa;
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC
// // 4.2
// function mostraInfo({nome, idade}) {
//   // return `${usuario.nome} tem ${usuario.idade} anos.`;
//   return `${nome} tem ${idade} anos.`;
// }
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// Exerc 3
// // 3.1
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.map(item => item + 10));
// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = usuario => usuario.idade;
// console.log(mostraIdade(usuario));
// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
// 3.4
// const promise = () => new Promise((resolve, reject) => resolve());
// console.log(promise);

// // Exerc 2
// const usuarios = [
//   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//  ];
// // Exerc 2.1
// var arrIdade = usuarios.map(item => item.idade);
// console.log(arrIdade);
// // Exerc 2.2
// var arrMaior = usuarios.filter(item => item.idade > 18 && item.empresa === 'Rocketseat');
// console.log(arrMaior);
// // Exerc 2.3
// var arrEmpresa = usuarios.find(item => item.empresa === 'Google');
// console.log(arrEmpresa);
// // Exerc 2.4
// var arrResult = usuarios.map(function(item) {
//   item.idade = item.idade * 2;
//   return item;
// });
// var arrFinal = arrResult.filter(item => item.idade <= 50);
// console.log(arrFinal);
// var arrResult = usuarios
//   .map(item => ({...item, idade: item.idade * 2}))
//   .filter(item => item.idade <= 50);
// console.log(arrResult);

// // Exerc 1
// class Usuario {
//   constructor(email, senha) {
//     this.email = email;
//     this.senha = senha;
//   }
//
//   isAdmin() {
//     return this.admin === true;
//   }
// }

// class Admin extends Usuario {
//   constructor(email, senha) {
//     super(email, senha);
//     this.admin = true;
//   }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');

// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true