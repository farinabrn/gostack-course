function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (idade > 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

checaIdade(16)
  .then(function() {
    console.log("Maior que 18");  
  })
  .catch(function() {
    console.log("Menor que 18");
  });