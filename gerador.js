document.getElementById("gerarDezenas").addEventListener("click", function() {
    const dezenas = [];

    while (dezenas.length < 6) {
        const numero = Math.floor(Math.random() * 60) + 1;
        if (!dezenas.includes(numero)) {
            dezenas.push(numero);
        }
    }

    dezenas.sort((a, b) => a - b);

    const resultado = document.getElementById("resultado");
    resultado.style.display = 'block';
    resultado.innerHTML = `As dezenas geradas são: ${dezenas.join(', ')}`;
});
