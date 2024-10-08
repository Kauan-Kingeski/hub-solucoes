document.getElementById("financiamentoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const valorBem = parseFloat(document.getElementById("valor-bem").value);
    const prazo = parseInt(document.getElementById("prazo").value);
    const taxa = parseFloat(document.getElementById("taxa").value) / 100;

    const valorParcela = (valorBem * (taxa * Math.pow(1 + taxa, prazo)) / (Math.pow(1 + taxa, prazo) - 1)).toFixed(2);
    const totalPago = (valorParcela * prazo).toFixed(2);

    const resultado = document.getElementById("resultado");
    resultado.style.display = 'block';
    resultado.innerHTML = `A parcela mensal será: R$ ${valorParcela}<br>Total pago após ${prazo} meses: R$ ${totalPago}`;
});
