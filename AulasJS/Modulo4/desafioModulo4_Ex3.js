var userInput = document.querySelector('div#app input');
var listElement = document.querySelector('div#app ul');

function buscarRepos() {
  if (!userInput.value) {
    alert('Digite o nome do usuario');
    return;
  }

  showMessage('Carregando...');

  axios.get('https://api.github.com/users/' + userInput.value + '/repos')
    .then(function(response) {
      feedList(response.data);
    })
    .catch(function(error) {
      showMessage('Erro! ' + error);
    });
}

function feedList(repos) {
  listElement.innerHTML = '';

  for (repo of repos) {
    var repoName = document.createTextNode(repo.name);
    var repoElement = document.createElement('li');
    repoElement.appendChild(repoName);
    listElement.appendChild(repoElement);
  }
}

function showMessage(message) {
  listElement.innerHTML = '';
  var chargingText = document.createTextNode(message);
  var chargingElement = document.createElement('li');
  chargingElement.appendChild(chargingText);
  listElement.appendChild(chargingElement);
}