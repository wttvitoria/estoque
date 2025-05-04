document.addEventListener('DOMContentLoaded', function() {
    const buscaInput = document.getElementById('busca-produto');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const listaDeProdutosTbody = document.getElementById('lista-de-produtos');
    const produtosSimulados = [
        { id: 123, codigo: 'ABC-001', nome: 'Produto Exemplo 1', quantidade: 10, precoVenda: 25.00, categoria: 'eletronicos' },
        { id: 456, codigo: 'DEF-002', nome: 'Produto Exemplo 2', quantidade: 5, precoVenda: 50.00, categoria: 'alimentos' },
        { id: 789, codigo: 'GHI-003', nome: 'Outro Produto Eletrônico', quantidade: 20, precoVenda: 100.00, categoria: 'eletronicos' },
        { id: 101, codigo: 'JKL-004', nome: 'Item Alimentício Teste', quantidade: 15, precoVenda: 10.00, categoria: 'alimentos' },
        { id: 202, codigo: 'MNO-005', nome: 'Vestuário Básico', quantidade: 30, precoVenda: 30.00, categoria: 'vestuario' }
    ];

    function exibirProdutos(produtos) {
        listaDeProdutosTbody.innerHTML = '';
        produtos.forEach(produto => {
            const row = listaDeProdutosTbody.insertRow();
            row.innerHTML = `
                <td data-label="Código">${produto.codigo}</td>
                <td data-label="Nome">${produto.nome}</td>
                <td data-label="Quantidade">${produto.quantidade}</td>
                <td data-label="Preço de Venda">R$ ${produto.precoVenda.toFixed(2)}</td>
                <td data-label="Ações"><button>Editar</button> <button>Excluir</button></td>
            `;
        });
    }

    function filtrarProdutos() {
        const termoBusca = buscaInput.value.toLowerCase();
        const categoriaSelecionada = filtroCategoria.value;

        const produtosFiltrados = produtosSimulados.filter(produto => {
            const buscaMatch = produto.nome.toLowerCase().includes(termoBusca) || produto.codigo.toLowerCase().includes(termoBusca);
            const categoriaMatch = categoriaSelecionada === '' || produto.categoria === categoriaSelecionada;
            return buscaMatch && categoriaMatch;
        });

        exibirProdutos(produtosFiltrados);
    }

    buscaInput.addEventListener('input', filtrarProdutos);
    filtroCategoria.addEventListener('change', filtrarProdutos);

    // Exibir todos os produtos inicialmente
    exibirProdutos(produtosSimulados);
});