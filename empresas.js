let empresas = [];

document.getElementById("empresasForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeEmpresa = document.getElementById("nomeEmpresa").value;
    const site = document.getElementById("site").value;
    const instagram = document.getElementById("instagram").value;

    // Adiciona a empresa à lista
    empresas.push({ nomeEmpresa, site, instagram });

    // Atualiza a tabela de empresas
    atualizarTabelaEmpresas();

    // Limpa os campos do formulário
    document.getElementById("empresasForm").reset();
});

function atualizarTabelaEmpresas() {
    const tabelaBody = document.querySelector("#tabelaEmpresas tbody");
    tabelaBody.innerHTML = ''; // Limpa o conteúdo da tabela

    // Adiciona cada empresa à tabela
    empresas.forEach((empresa, index) => {
        const row = document.createElement("tr");

        const colNumero = document.createElement("td");
        colNumero.textContent = index + 1;

        const colNome = document.createElement("td");
        colNome.textContent = empresa.nomeEmpresa;

        // Gera o link para o site
        const colSite = document.createElement("td");
        const linkSite = document.createElement("a");
        linkSite.href = empresa.site;
        linkSite.textContent = "Acessar Site";
        linkSite.target = "_blank";
        colSite.appendChild(linkSite);

        // Gera o link para o Instagram
        const colInstagram = document.createElement("td");
        const linkInstagram = document.createElement("a");
        linkInstagram.href = empresa.instagram;
        linkInstagram.textContent = "Instagram";
        linkInstagram.target = "_blank";
        colInstagram.appendChild(linkInstagram);

        row.appendChild(colNumero);
        row.appendChild(colNome);
        row.appendChild(colSite);
        row.appendChild(colInstagram);

        tabelaBody.appendChild(row);
    });
}
