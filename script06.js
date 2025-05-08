function calcularFatorial() {
  const numero = parseInt(document.getElementById("numero").value);
  let resultado = 1;

  if (isNaN(numero) || numero < 0) {
    document.getElementById("resultado").textContent = "Por favor, insira um número válido (não negativo).";
    return;
  }


  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  document.getElementById("resultado").textContent = `O fatorial de ${numero} é: ${resultado}`;
}