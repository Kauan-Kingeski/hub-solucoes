let funcionarios = [];

document.getElementById("funcionariosForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const salario = parseFloat(document.getElementById("salario").value);
    const horasExtra = parseInt(document.getElementById("horas-extra").value);
    const insalubridade = parseFloat(document.getElementById("insalubridade").value);
    const periculosidade = parseFloat(document.getElementById("periculosidade").value);

    // Adiciona o funcionário à lista
    funcionarios.push({ salario, horasExtra, insalubridade, periculosidade });

    // Atualiza a tabela de funcionários
    atualizarTabelaFuncionarios();

    // Limpa os campos do formulário
    document.getElementById("funcionariosForm").reset();
});

function atualizarTabelaFuncionarios() {
    const tabelaBody = document.querySelector("#tabelaFuncionarios tbody");
    tabelaBody.innerHTML = ''; // Limpa o conteúdo da tabela

    // Adiciona cada funcionário à tabela
    funcionarios.forEach((funcionario, index) => {
        const row = document.createElement("tr");

        const colNumero = document.createElement("td");
        colNumero.textContent = index + 1;

        const colSalario = document.createElement("td");
        colSalario.textContent = funcionario.salario.toFixed(2);

        const colHorasExtra = document.createElement("td");
        colHorasExtra.textContent = funcionario.horasExtra;

        const colInsalubridade = document.createElement("td");
        colInsalubridade.textContent = funcionario.insalubridade.toFixed(2);

        const colPericulosidade = document.createElement("td");
        colPericulosidade.textContent = funcionario.periculosidade.toFixed(2);

        row.appendChild(colNumero);
        row.appendChild(colSalario);
        row.appendChild(colHorasExtra);
        row.appendChild(colInsalubridade);
        row.appendChild(colPericulosidade);

        tabelaBody.appendChild(row);
    });
}
