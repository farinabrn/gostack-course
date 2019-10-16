var userInput = document.querySelector('div#app input');
var listElement = document.querySelector('div#app ul');

function buscarRepos() {
  if (!userInput.value) {
    alert('Digite o nome do usuario');
    return;
  }

  axios.get('https://api.github.com/users/' + userInput.value + '/repos')
    .then(function(response) {
      feedList(response.data);
    })
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