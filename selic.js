document.getElementById("selicForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const valor = parseFloat(document.getElementById("valor").value);
    const prazo = parseInt(document.getElementById("prazo").value);
    const taxa = parseFloat(document.getElementById("taxa").value) / 100;

    const rendimento = (valor * Math.pow(1 + taxa / 12, prazo)).toFixed(2);

    const resultado = document.getElementById("resultado");
    resultado.style.display = 'block';
    resultado.innerHTML = `O rendimento após ${prazo} meses será: R$ ${rendimento}`;
});
