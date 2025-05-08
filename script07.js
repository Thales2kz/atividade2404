function isPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function exibirNumerosPrimos() {
  const inicio = parseInt(document.getElementById("inicio").value);
  const fim = parseInt(document.getElementById("fim").value);
  let primos = [];

  if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
    document.getElementById("resultado").textContent = "Por favor, insira valores válidos e com o início menor que o final.";
    return;
  }

  for (let i = inicio; i <= fim; i++) {
    if (isPrimo(i)) {
      primos.push(i);
    }
  }

  if (primos.length > 0) {
    document.getElementById("resultado").textContent = "Números primos entre " + inicio + " e " + fim + ": " + primos.join(", ");
  } else {
    document.getElementById("resultado").textContent = "Não há números primos entre " + inicio + " e " + fim + ".";
  }
}