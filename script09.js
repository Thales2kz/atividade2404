
function converterTempo() {
  const horas = parseFloat(document.getElementById("horas").value);

  if (isNaN(horas) || horas < 0) {
    document.getElementById("resultado").textContent = "Por favor, insira um número válido de horas.";
    return;
  }

  const minutos = horas * 60;
  const segundos = minutos * 60;

  document.getElementById("resultado").textContent = `${horas} horas equivalem a ${minutos} minutos ou ${segundos} segundos.`;
}
