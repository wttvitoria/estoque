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
document.addEventListener('DOMContentLoaded', function() {
    // ... seu código JavaScript existente ...

    // Simulação de dados do estoque (serão substituídos por dados do backend)
    const totalProdutosElement = document.getElementById('total-produtos');
    const produtosEmEstoqueElement = document.getElementById('produtos-em-estoque');
    const estoqueBaixoElement = document.getElementById('estoque-baixo');

    // Simulação de dados
    const totalProdutosSimulado = 185;
    const produtosEmEstoqueSimulado = 152;
    const estoqueBaixoSimulado = 8;

    totalProdutosElement.textContent = totalProdutosSimulado;
    produtosEmEstoqueElement.textContent = produtosEmEstoqueSimulado;
    estoqueBaixoElement.textContent = estoqueBaixoSimulado;
});
document.addEventListener('DOMContentLoaded', function() {
    // ... seu código JavaScript existente ...

    const temaSeletor = document.getElementById('tema');
    const body = document.body;
    const container = document.querySelector('.container');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const table = document.querySelector('table');
    const form = document.querySelector('form');
    const detalhesProduto = document.getElementById('detalhes-produto');
    const galeriaLogos = document.getElementById('galeria-logos');
    const logoContainers = document.querySelectorAll('.logo-container');
    const resumoEstoque = document.getElementById('resumo-estoque');
    const resumoItemsH3 = document.querySelectorAll('#resumo-estoque h3');
    const resumoItemsP = document.querySelectorAll('#resumo-estoque p');
    const filtrosBusca = document.querySelector('.filtros-busca');
    const filtrosBuscaLabel = document.querySelectorAll('.filtros-busca label');
    const filtrosBuscaInputSelect = document.querySelectorAll('.filtros-busca input[type="text"], .filtros-busca select');


    // Função para aplicar o tema
    function aplicarTema(tema) {
        body.className = tema === 'escuro' ? 'tema-escuro' : '';
        if (container) container.className = `container ${tema === 'escuro' ? 'tema-escuro' : ''}`;
        if (header) header.className = tema === 'escuro' ? 'tema-escuro' : '';
        if (nav) nav.className = tema === 'escuro' ? 'tema-escuro' : '';
        if (main) main.className = `main ${tema === 'escuro' ? 'tema-escuro' : ''}`;
        if (table) table.className = `table ${tema === 'escuro' ? 'tema-escuro' : ''}`;
        if (form) form.className = `form ${tema === 'escuro' ? 'tema-escuro' : ''}`;
        if (detalhesProduto) detalhesProduto.className = ` ${tema === 'escuro' ? 'tema-escuro' : ''}`;
        if (galeriaLogos) galeriaLogos.className = ` ${tema === 'escuro' ? 'tema-escuro' : ''}`;
        logoContainers.forEach(lc => lc.className = `logo-container ${tema === 'escuro' ? 'tema-escuro' : ''}`);
        if (resumoEstoque) resumoEstoque.className = ` ${tema === 'escuro' ? 'tema-escuro' : ''}`;
        resumoItemsH3.forEach(h3 => h3.className = ` ${tema === 'escuro' ? 'tema-escuro' : ''}`);
        resumoItemsP.forEach(p => p.className = ` ${tema === 'escuro' ? 'tema-escuro' : ''}`);
        if (filtrosBusca) filtrosBusca.className = `filtros-busca ${tema === 'escuro' ? 'tema-escuro' : ''}`;
        filtrosBuscaLabel.forEach(label => label.className = ` ${tema === 'escuro' ? 'tema-escuro' : ''}`);
        filtrosBuscaInputSelect.forEach(inputSelect => inputSelect.className = ` ${tema === 'escuro' ? 'tema-escuro' : ''}`);


        localStorage.setItem('temaPreferido', tema);
    }

    // Carregar tema preferido ao carregar a página
    const temaSalvo = localStorage.getItem('temaPreferido');
    if (temaSalvo) {
        temaSeletor.value = temaSalvo;
        aplicarTema(temaSalvo);
    }

    // Evento de mudança no seletor de tema
    temaSeletor.addEventListener('change', function() {
        aplicarTema(this.value);
    });
});