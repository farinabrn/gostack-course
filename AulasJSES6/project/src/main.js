// Module 4
import api from './api';

class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando...'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();
    
    const repoInput = this.inputEl.value;
    
    if(repoInput.length === 0) {
      return;
    }

    let repoSearch = this.repositories.find(elem => {
      return elem.repoInput === repoInput;
    })

    if (repoSearch != undefined) {
      alert('Repositorio já adicionado!');
      this.inputEl.value = '';
      return;
    }
    
    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);
      const { name, description, html_url, owner: { avatar_url } } = response.data;
  
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
        repoInput,
      });
  
      this.inputEl.value = '';
      this.render();

    } catch (err) {
      console.log(err);
      alert('O repositorio não existe');
    }

    this.setLoading(false);
  }

  removeRepo (repoName) {
    let repoSearch = this.repositories.find(elem => {
      return elem.repoInput === repoName;
    });

    this.repositories.splice(this.repositories.indexOf(repoSearch), 1);

    this.render();
  }

  render() {
    this.listEl.innerHTML = '';
    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));
      
      let deleteEl = document.createElement('a');
      deleteEl.appendChild(document.createTextNode('Remover'));
      deleteEl.setAttribute('href', '#');
      deleteEl.onclick = () => { this.removeRepo(repo.repoInput) };

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);
      listItemEl.appendChild(deleteEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();
// Module 3
// import axios from 'axios';
// class Api {
//   static async getUserInfo(username) {
//     try {
//       const response = await axios.get(`https://api.github.com/users/${username}`);
//       console.log(response);
//     } catch (err) {
//       console.warn('Erro na API');
//     }
//   }
// }
// Api.getUserInfo('farinabrn');
// Api.getUserInfo('farinabrnasdfadsf');

// const minhaPromise = () => new Promise((resolve, reject) => {
//   setTimeout(() => { resolve('Ok') }, 2000);
// });
// minhaPromise().then(response => {...})
// async function executaPromise() {
//   // const response = await minhaPromise();
//   // console.log(response);
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());

//   // minhaPromise().then(response => {
//   //   console.log(response);
//   //   minhaPromise().then(response => {
//   //     console.log(response);
//   //     minhaPromise().then(response => {
//   //       console.log(response);
//   //     });    
//   //   });  
//   // });
// }
// executaPromise();
// executaPromise().then();
// const executaPromise = async () => {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// }
// executaPromise();

// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//   })

// Module 2
// alert('Testiculo testudo');
// import * as funcoes from './funcoes';
// import somaFunc from './soma';
// console.log(funcoes);
// console.log(funcoes.soma(1, 2));
// console.log(funcoes.sub(4, 2));

// Module 1

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