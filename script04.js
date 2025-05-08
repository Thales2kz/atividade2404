function somarPares() {
    const limite = parseInt(document.getElementById("limite").value);
    let soma = 0;

    if (isNaN(limite) || limite < 1) {
      document.getElementById("resultado").textContent = "Por favor, digite um número válido maior que 0.";
      return;
    }

    for (let i = 2; i <= limite; i += 2) {
      soma += i;
    }

    document.getElementById("resultado").textContent = "Soma dos pares: " + soma;
  }