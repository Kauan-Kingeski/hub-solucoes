let pessoas = [];

document.getElementById("pessoasForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // Adiciona a pessoa à lista
    pessoas.push({ altura, peso });

    // Atualiza a tabela de pessoas
    atualizarTabela();

    // Calcula e exibe a média de altura e peso
    const mediaAltura = (pessoas.reduce((acc, pessoa) => acc + pessoa.altura, 0) / pessoas.length).toFixed(2);
    const mediaPeso = (pessoas.reduce((acc, pessoa) => acc + pessoa.peso, 0) / pessoas.length).toFixed(2);

    const resultado = document.getElementById("resultado");
    resultado.style.display = 'block';
    resultado.innerHTML = `Média de altura: ${mediaAltura} m<br>Média de peso: ${mediaPeso} kg`;

    // Limpa os campos do formulário
    document.getElementById("pessoasForm").reset();
});

function atualizarTabela() {
    const tabelaBody = document.querySelector("#tabelaPessoas tbody");
    tabelaBody.innerHTML = ''; // Limpa o conteúdo da tabela

    // Adiciona cada pessoa à tabela
    pessoas.forEach((pessoa, index) => {
        const row = document.createElement("tr");

        const colNumero = document.createElement("td");
        colNumero.textContent = index + 1;

        const colAltura = document.createElement("td");
        colAltura.textContent = pessoa.altura.toFixed(2);

        const colPeso = document.createElement("td");
        colPeso.textContent = pessoa.peso.toFixed(2);

        row.appendChild(colNumero);
        row.appendChild(colAltura);
        row.appendChild(colPeso);

        tabelaBody.appendChild(row);
    });
}
