// const nome = 'Bruno';
// const idade = 28;
// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
// const usuario = {
//   nome,
//   idade,
//   empresa: 'Undefined',
// }
// console.log(usuario);
// SPREAD
// const usuario1 = {
//   nome: 'Bruno',
//   idade: 28,
//   empresa: 'Undefined'
// };
// const usuario2 = { ...usuario1, nome: 'Jose' };
// console.log(usuario2);
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// REST
// function soma(a, b, ...params) {
//   return params;
// }
// function soma(...params) {
//   return params.reduce((total, next)=> total + next);
// }
// function soma(a, b, c) {
//   return a + b + c;
// }
// console.log(soma(1,3,4,5,5,7));
// const arr = [1, 2, 3, 4];
// const [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// const usuario = {
//   nome: 'Bruno',
//   idade: 28,
//   empresa: 'Undefined'
// };
// const {nome, ...resto} = usuario;
// console.log(nome);
// console.log(resto);
// const usuario = {
//   nome: 'Bruno',
//   idade: 28,
//   empresa: 'Undefined',
//   endereco: {
//     cidade: 'Limeira',
//     estado: 'SP',
//   },
// };
// console.log(usuario);
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
// const { nome, idade, endereco: { cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// function mostraNome({ nome, idade }) {
//   console.log(nome, idade);
// }
// mostraNome(usuario);
// const soma = (a = 3, b = 6) => a + b;
// function soma(a = 3, b = 6) {
//   return a + b;
// }
// console.log(soma(1));
// console.log(soma());
// const arr = [1, 3, 4, 5, 6];
// const newArr = arr.map(item => item * 2);
// console.log(newArr);
// const teste = () => {
//   return 'teste';
// }
// const teste = () => [1, 2, 3];
// const teste = () => 'askdjfasdflj';
// const teste = () => ({ nome : 'tome lee'});
// console.log(teste());
// const arr = [1, 3, 4, 5, 8, 10];
// const newArr = arr.map(function(item, index){
//   return item + index;
// });
// console.log(newArr);
// const sum = arr.reduce(function(total, next) {
//   return total + next;
// })
// console.log(sum);
// const filter = arr.filter(function(item){
//   return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function(item) {
//   return item === 2;
// });
// console.log(find);
// function teste(x) {
//   let y = 2;
//   if (x > 5) {
//     let y = 4;
//     console.log(x, y);
//   }
// }
// teste(10);
// const usuario = { nome: 'Diego' }; 
// ===> Mutação de objeto  = trabalha com o mesmo formato do objeto mas altera
// valores dentro do objeto ou vetor
// usuario.nome = 'Cleiton';
// console.log(usuario);
// class Matematica {
//   static soma(a, b) {
//     return a + b;
//   }
// }
// console.log(Matematica.soma(1, 2));
// class List {
//   constructor() {
//     this.data = [];
//   }
//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }
// class TodoList extends List{
//   constructor() {
//     super();
//     this.usuario = 'Bruno'
//   }
//   mostraUsuario() {
//     console.log(this.usuario);
//   }
// }
// var MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//   MinhaLista.add('Novo todo');
// }
// MinhaLista.mostraUsuario();
"use strict";
