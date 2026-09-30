let produtos = [];


let meuGrafico = null;

const formProduto = document.getElementById('form-produto');
const tabelaCorpo = document.querySelector('#tabela-produtos tbody');
const totalProdutosCadastrados = document.getElementById('total-produtos-cadastrados');
const totalVendasEl = document.getElementById('total-vendas');
const qtd_visitas = document.getElementById('qtd-visitas')
const qtd_nao_visitantes = document.getElementById('qtd-nao-visitantes');


formProduto.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome-produto').value;
    const descricao = document.getElementById('descricao-produto').value;
    const preco = parseFloat(document.getElementById('preco-produto').value);
    const estoque = parseInt(document.getElementById('estoque-produto').value);
    const codigo = document.getElementById('codigo-produto').value;
    const categoria = document.getElementById('categoria-produto').value;

  
    produtos.push({ nome, descricao, preco, estoque, codigo, categoria });

    atualizarTabela();
    atualizarResumo();
    atualizarGraficoDinamico();

    formProduto.reset();
});

function atualizarTabela() {
    tabelaCorpo.innerHTML = '';
    
    produtos.forEach(prod => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${prod.nome}</td>
            <td>${prod.descricao}</td>
            <td>R$ ${prod.preco.toFixed(2).replace('.', ',')}</td>
            <td>${prod.estoque}</td>
            <td>${prod.codigo}</td>
        `;
        tabelaCorpo.appendChild(linha);
    });
}

function atualizarResumo() {
    const totalQtd = produtos.reduce((acc, prod) => acc + prod.estoque, 0);
    const totalValor = produtos.reduce((acc, prod) => acc + (prod.preco * prod.estoque), 0);

    totalProdutosCadastrados.innerHTML = `<strong>Total de produtos:</strong> ${totalQtd}`;
    totalVendasEl.innerHTML = `<strong>Total vendido:</strong> R$ ${totalValor.toFixed(2).replace('.', ',')}`;
}


function calcularTotaisPorCategoria() {
    let totais = {
        radical: 0,
        familia: 0,
        comida: 0,
        personagens: 0,
        zoologico: 0,
        museu: 0 
    };

    produtos.forEach(prod => {
        if (totais[prod.categoria] !== undefined) {
            totais[prod.categoria] += prod.estoque;
        }
    });

    return [
        totais.radical,
        totais.familia,
        totais.comida,
        totais.personagens,
        totais.zoologico,
        totais.museu
    ];
}


function atualizarGraficoDinamico() {
    const dadosCategorias = calcularTotaisPorCategoria();

   
    document.getElementById('num-radical').innerText = dadosCategorias[0];
    document.getElementById('num-familia').innerText = dadosCategorias[1];
    document.getElementById('num-comida').innerText = dadosCategorias[2];
    document.getElementById('num-personagens').innerText = dadosCategorias[3];
    document.getElementById('num-zoologico').innerText = dadosCategorias[4];
    document.getElementById('num-museu').innerText = dadosCategorias[5];

    if (meuGrafico) {
    
        meuGrafico.data.datasets[0].data = dadosCategorias;
        meuGrafico.update();
    } else {
   
        const ctx = document.getElementById('donutChart').getContext('2d');
        meuGrafico = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Radicais', 'Família', 'Comida', 'Personagens', 'Zoológico' , 'museu'],
                datasets: [{
                    data: dadosCategorias,
                    backgroundColor: [
                        '#e74c3c', // Radicais
                        '#3498db', // Família
                        '#f1c40f', // Comida
                        '#9b59b6', // Personagens
                        '#2ecc71' , // Zoológico
                        '#f36608' //  museu

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}


window.addEventListener('DOMContentLoaded', () => {
    atualizarGraficoDinamico();
});