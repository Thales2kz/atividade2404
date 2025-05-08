function classificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);
    let classificacao = "";

    if (isNaN(idade) || idade < 0) {
      classificacao = "Por favor, insira uma idade válida.";
    } else if (idade <= 12) {
      classificacao = "Criança";
    } else if (idade <= 17) {
      classificacao = "Adolescente";
    } else if (idade <= 59) {
      classificacao = "Adulto";
    } else {
      classificacao = "Idoso";
    }

    document.getElementById("resultado").textContent = "Classificação: " + classificacao;
  }