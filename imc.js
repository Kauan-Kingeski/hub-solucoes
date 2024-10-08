document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const imc = (peso / (altura * altura)).toFixed(2);

    const resultado = document.getElementById("resultado");
    resultado.style.display = 'block';  // Exibe o resultado

    if (imc < 18.5) {
        resultado.innerHTML = `Seu IMC é: ${imc} - Abaixo do peso`;
        resultado.classList.remove('alerta');
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML = `Seu IMC é: ${imc} - Peso normal`;
        resultado.classList.remove('alerta');
    } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML = `Seu IMC é: ${imc} - Sobrepeso`;
        resultado.classList.add('alerta');
    } else {
        resultado.innerHTML = `Seu IMC é: ${imc} - Obesidade`;
        resultado.classList.add('alerta');
    }
});
