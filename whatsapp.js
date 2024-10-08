let pessoas = [];

document.getElementById("pessoasForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const celular = document.getElementById("celular").value;

    // Adiciona a pessoa à lista
    pessoas.push({ nome, celular });

    // Atualiza a tabela de pessoas
    atualizarTabelaPessoas();

    // Limpa os campos do formulário
    document.getElementById("pessoasForm").reset();
});

function atualizarTabelaPessoas() {
    const tabelaBody = document.querySelector("#tabelaPessoas tbody");
    tabelaBody.innerHTML = ''; // Limpa o conteúdo da tabela

    // Adiciona cada pessoa à tabela
    pessoas.forEach((pessoa, index) => {
        const row = document.createElement("tr");

        const colNumero = document.createElement("td");
        colNumero.textContent = index + 1;

        const colNome = document.createElement("td");
        colNome.textContent = pessoa.nome;

        const colCelular = document.createElement("td");
        const linkWhatsapp = document.createElement("a");
        linkWhatsapp.href = `https://wa.me/55${pessoa.celular}`;
        linkWhatsapp.textContent = `WhatsApp de ${pessoa.nome}`;
        linkWhatsapp.target = "_blank";
        colCelular.appendChild(linkWhatsapp);

        row.appendChild(colNumero);
        row.appendChild(colNome);
        row.appendChild(colCelular);

        tabelaBody.appendChild(row);
    });
}
