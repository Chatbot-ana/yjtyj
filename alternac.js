
document.addEventListener('DOMContentLoaded', function() { // ao carregar a pagina faca
  var botao = document.getElementsByClassName('botao1')[0];
  var botao2 = document.getElementsByClassName('botao2')[1];
  var add = document.getElementById('add');
  var alternarC = true;
  console.log('oii')
  
  function alternar() {
    console.log('oii')
    if (alternarC) {
      add.style.display = 'block';
      botao.style.width = '250px';
      botao.value = 'Sair da seção';
      alternarC = false;
    } else {
      add.style.display = 'none';
      botao.value = 'Entrar na seção (chat no lado direito)';
      botao.style.width = '420px';
      alternarC = true;
      recarregarPagina();
    }
  }

  botao.addEventListener('click', function() {
    alternar();
  });

  function recarregarPagina() {
    location.reload();
  }

  const audioLink = document.querySelector('.audio');
  const audioFrame = document.getElementById('audio');

  audioLink.addEventListener('click', function(event) {
    event.preventDefault();

    if (audioFrame.style.display === 'none') {
      audioFrame.style.display = 'block';
      botao.style.display = 'none'; // Esconde o botão
    } else {
      audioFrame.style.display = 'none';
      botao.style.display = 'block'; // Mostra o botão novamente
    }
  });
});