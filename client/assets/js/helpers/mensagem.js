
/* Arquivo responsável por manipular a mensagem para o usuário */

function mensagem(texto, tipo){
    
  let localMensagem = document.querySelector('#mensagem');
  localMensagem.innerHTML = texto;

  switch(tipo){
    case 'success':
      localMensagem.className = 'alert alert-success m-2';
      break;
    case 'warning':
      localMensagem.classList = 'alert alert-warning m-2';
      break;
    case 'danger':
      localMensagem.classList = 'alert alert-danger m-2';
      break;
    case 'info':
      localMensagem.classList = 'alert alert-info m-2';
      break;
    case 'hidden':
      localMensagem.classList = 'nao-mostrar';
  }

  // Esperando 3 segundos para ocultar a mensagem
  setTimeout(function(){
    localMensagem.classList = 'nao-mostrar';
  }, 3000);
}