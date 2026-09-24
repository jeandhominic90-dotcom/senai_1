const btnCdastrar = document.getElementById('btnCadastrar');
const nomeProdutoInput = document.querySelector('input[placeholder="Nome do produto ou bilhete"]');
const descricaoInput = document.querySelector('input[placeholder="Descrição ou peso"]');
const precoInput = document.querySelector('input[placeholder="Preço unitário"]');
const quantidadeInput = document.getElementById('quantidadeInput');
const codigoInput = document.querySelector('input[placeholder="Código do produto"]');
const categoriaInput = document.getElementById('categoriaInput');
const totalProdutos = document.getElementById('totalProdutos');
const tabelaCorpo = document.getElementById('tabelaCorpo');

let somatorioTotal = 0;
let valorTotalGeral = 0;


const ctx = document.getElementById('graficoRosca').getContext('2d');
const graficoRosca = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Radicais', 'Família', 'Comida', 'Personagens', 'Zoológico'],
        datasets: [{
            data: [10, 15, 8, 12, 20], // Valores de exemplo para o círculo aparecer logo!
            backgroundColor: ['#e74c3c', '#3498db', '#f1c40f', '#9b59b6', '#2ecc71']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 8,
                    font: { size: 8 }
                }
            }
        }
    }
});

btnCdastrar.addEventListener('click', function() {
    let quantidade = parseInt(quantidadeInput.value);
    let nome = nomeProdutoInput.value;
    let descricao = descricaoInput.value;
    let preco = parseFloat(precoInput.value);
    let codigo = codigoInput.value;
    let categoriaIndex = parseInt(categoriaInput.value);

    if (!isNaN(quantidade) && quantidade > 0 && nome !== "" && !isNaN(preco)) {
        somatorioTotal += quantidade;
        let subtotal = preco * quantidade;
        valorTotalGeral += subtotal;

        // Atualiza o painel de resumo
        totalProdutos.innerHTML = `
            <strong>Total de pessoas/itens:</strong> ${somatorioTotal} <br>
            <strong>Valor Total:</strong> R$ ${valorTotalGeral.toFixed(2)}
        `;

        // Atualiza o gráfico de rosca na categoria correta (0 a 4)
        graficoRosca.data.datasets[0].data[categoriaIndex] += quantidade;
        graficoRosca.update();

        // Insere a linha na tabela
        let novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${descricao}</td>
            <td>R$ ${preco.toFixed(2)}</td>
            <td>${quantidade}</td>
            <td>${codigo}</td>
        `;
        
        tabelaCorpo.appendChild(novaLinha);

        // Limpa os inputs
        nomeProdutoInput.value = '';
        descricaoInput.value = '';
        precoInput.value = '';
        quantidadeInput.value = '';
        codigoInput.value = '';
    } else {
        alert("Por favor, preencha todos os campos corretamente!");
    }
});