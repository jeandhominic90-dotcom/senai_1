// 1. 
function criarDiasSemana() {
    const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    document.getElementById('listaProdutos').innerHTML = `<p>[${dias.map(d => `'${d}'`).join(', ')}]</p>`;
}

// 2. 
function inverterDiasSemana() {
    const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    dias.reverse();
    document.getElementById('listaProdutos').innerHTML = `<p>[${dias.map(d => `'${d}'`).join(', ')}]</p>`;
}

// 3. 
function adicionarFeriadoSemana() {
    const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    dias.push('Feriado');
    document.getElementById('listaProdutos').innerHTML = `<p>[${dias.map(d => `'${d}'`).join(', ')}]</p>`;
}

// 4. 
function removerUltimoDiaSemana() {
    const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo', 'Feriado'];
    dias.pop();
    document.getElementById('listaProdutos').innerHTML = `<p>[${dias.map(d => `'${d}'`).join(', ')}]</p>`;
}

// 5. 
function criarNumerosPares() {
    const pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    document.getElementById('listaProdutos').innerHTML = `<p>[${pares.join(', ')}]</p>`;
}

// 6. 
function substituirTerceiroPar() {
    const pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    pares[2] = 12; 
    document.getElementById('listaProdutos').innerHTML = `<p>[${pares.join(', ')}]</p>`;
}

// 7.
function adicionarMorango() {
    const frutas = ['banana', 'maçã', 'uva'];
    frutas.push('morango');
    document.getElementById('listaProdutos').innerHTML = `<p>[${frutas.map(f => `'${f}'`).join(', ')}]</p>`;
}

// 8. 
function removerSegundaFruta() {
    const frutas = ['banana', 'maçã', 'uva', 'morango'];
    frutas.splice(1, 1); // Remove 1 item no índice 1 (segundo item)
    document.getElementById('listaProdutos').innerHTML = `<p>[${frutas.map(f => `'${f}'`).join(', ')}]</p>`;
}

// 9. 
function criarTresAmigos() {
    const amigos = ['Aline', 'valentina', 'alonso'];
    document.getElementById('listaProdutos').innerHTML = `<p>[${amigos.map(a => `'${a}'`).join(', ')}]</p>`;
}

// 10. 
function concatenarMaisAmigos() {
    const amigos = ['Aline', 'valentina', 'alonso'];
    const maisAmigos = ['jose miguel', 'rodrigo', 'leonor'];
    const todosAmigos = amigos.concat(maisAmigos);
    document.getElementById('listaProdutos').innerHTML = `<p>[${todosAmigos.map(a => `'${a}'`).join(', ')}]</p>`;
}

// 11. 
function criarIdadesAmigos() {
    const idadesAmigos = [32, 25, 28, 38, 57, 28];
    document.getElementById('listaProdutos').innerHTML = `<p>[${idadesAmigos.join(', ')}]</p>`;
}

// 12. 
function somarDuasIdades() {
    const idadesAmigos = [32, 25, 28, 38, 57, 28];
    const soma = idadesAmigos[0] + idadesAmigos[1];
    document.getElementById('listaProdutos').innerHTML = `<p>Resultado: ${soma}</p>`;
}

// 13. 
function calcularMediaIdades() {
    const idadesAmigos = [32, 25, 28, 38, 57, 28];
    let soma = 0;
    for (let i = 0; i < idadesAmigos.length; i++) {
        soma += idadesAmigos[i];
    }
    const media = soma / idadesAmigos.length;
    document.getElementById('listaProdutos').innerHTML = `<p>Resultado: ${media.toFixed(4)}</p>`;
}

// 14. 
function criarCompras() {
    const listaCompras = ['cerveja', 'maça', 'Leite'];
    document.getElementById('listaProdutos').innerHTML = `<p>[${listaCompras.map(c => `'${c}'`).join(', ')}]</p>`;
}

// 15. 
function adicionarItensCompras() {
    const listaCompras = ['cerveja', 'maça', 'Leite'];
    listaCompras.push('pão','Ovos', 'Arroz');
    document.getElementById('listaProdutos').innerHTML = `<p>[${listaCompras.map(c => `'${c}'`).join(', ')}]</p>`;
}

// 16.
function removerTerceiroItemCompras() {
    const listaCompras = ['cerveja', 'maça', 'Leite', 'Ovos', 'Arroz' , 'pão'];
    listaCompras.splice(2, 1); // Remove o índice 2 ('Leite')
    document.getElementById('listaProdutos').innerHTML = `<p>[${listaCompras.map(c => `'${c}'`).join(', ')}]</p>`;
}

// 17. 
function verificarPaoCompras() {
    const listaCompras = ['Maçãs', 'Pão', 'Ovos', 'Arroz'];
    const temPao = listaCompras.includes('Pão');
    document.getElementById('listaProdutos').innerHTML = `<p>Resultado: ${temPao}</p>`;
}

// 18. 
function criarImparesLoop() {
    const impares = [];
    for (let i = 1; impares.length < 5; i += 2) {
        impares.push(i);
    }
    document.getElementById('listaProdutos').innerHTML = `<p>[${impares.join(', ')}]</p>`;
}

// 19. 
function multiplicarPorDois() {
    const original = [3, 6, 9];
    const resultado = [];
    for (let i = 0; i < original.length; i++) {
        resultado.push(original[i] * 2);
    }
    document.getElementById('listaProdutos').innerHTML = `<p>[${resultado.join(', ')}]</p>`; // transforma uma array em uma unica string. unindo os elementos com uma vírgula
}

// 20. 
function criarFraseCidades() {
    const cidades = ['argentina', 'Londres', 'miami',];
    const frase = `Eu adoraria visitar ${cidades[0]} e ${cidades[2]}.`;
    document.getElementById('listaProdutos').innerHTML = `<p>${frase}</p>`;
}