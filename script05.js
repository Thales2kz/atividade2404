const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("tentativa").value);
  const mensagem = document.getElementById("mensagem");
  tentativas++;

  if (isNaN(palpite) || palpite < 1 || palpite > 10) {
    mensagem.textContent = "Digite um número válido entre 1 e 10.";
    return;
  }

  if (palpite === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou o número (${numeroSecreto}) em ${tentativas} tentativa(s)! 🎉`;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "Tente um número MAIOR.";
  } else {
    mensagem.textContent = "Tente um número MENOR.";
  }
}