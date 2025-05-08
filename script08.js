function limparCPF(cpf) {
    return cpf.replace(/[^\d]+/g, '');
  }

  function calcularDigito(cpf, peso) {
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf[i]) * peso[i];
      peso--;
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }

  function validarCPF() {
    const cpf = limparCPF(document.getElementById("cpf").value);

    if (cpf.length !== 11 || /(\d)\1{10}/.test(cpf)) {
      document.getElementById("resultado").textContent = "CPF inválido!";
      return;
    }

    const peso1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const peso2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    const digito1 = calcularDigito(cpf, peso1);
    const digito2 = calcularDigito(cpf, peso2);

    if (parseInt(cpf[9]) === digito1 && parseInt(cpf[10]) === digito2) {
      document.getElementById("resultado").textContent = "CPF válido!";
    } else {
      document.getElementById("resultado").textContent = "CPF inválido!";
    }
  }