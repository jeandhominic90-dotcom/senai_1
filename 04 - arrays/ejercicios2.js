function criar_vetor_50(){
    let numeros = [];
    for(let i = 0; i < 50; i++){
        let n = Math.floor(Math.random() * 201) - 100;
        numeros.push(n);
    }
    
   
    let divResultado = document.getElementById("listaProdutos");
    
    
    divResultado.innerHTML = `[ ${numeros.join(", ")} ]`;
}

// Chama a função ao carregar a página
criar_vetor_50();

function criar_tratar_vetor(){
    let numeros = [];
    
    
    for(let i = 0; i < 50; i++){
        let n = Math.floor(Math.random() * 201) - 100;
        numeros.push(n);
    }
    
  
    console.log("Vetor original:", [...numeros]);


    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] < 0) {
            numeros[i] = 0;
        }
    }

    let divResultado = document.getElementById("listaProdutos");
    divResultado.innerHTML = `<strong>Vetor sem números negativos:</strong><br><br> [ ${numeros.join(", ")} ]`;
}

// Chama a função ao carregar a página
criar_tratar_vetor();


function criar_e_filtrar_vetor() {
    let numeros = [];
    
   
    for(let i = 0; i < 50; i++){
        let n = Math.floor(Math.random() * 201) - 100;
        numeros.push(n);
    }

    
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] < 0) {
            numeros[i] = 0;
        }
    }

   
    let apenasDiferentesDeZero = numeros.filter(n => n !== 0);

    
    let divResultado = document.getElementById("listaProdutos");
    divResultado.innerHTML = `
        <strong>Vetor completo (com zeros):</strong><br>
        [ ${numeros.join(", ")} ]<br><br>
        <strong>Apenas os elementos que não são '0' (${apenasDiferentesDeZero.length} itens):</strong><br>
        [ ${apenasDiferentesDeZero.join(", ")} ]
    `;
}

// Chama a função ao carregar a página
criar_e_filtrar_vetor();


function inverter_vetor() {
    
    let vetor1 = [];
    for (let i = 0; i < 10; i++) {
        vetor1.push(i + 1); 
    }

    
    let vetor2 = [];

    
    for (let i = 0; i < 10; i++) {
     
        vetor2[i] = vetor1[10 - 1 - i];
    }

    // Exibindo no console para conferir
    console.log("Vetor 1 (Original):", vetor1);
    console.log("Vetor 2 (Invertido):", vetor2);

    // Se quiser mostrar na página HTML:
    let divResultado = document.getElementById("listaProdutos");
    if (divResultado) {
        divResultado.innerHTML = `
            <strong>Vetor 1:</strong> [ ${vetor1.join(", ")} ]<br><br>
            <strong>Vetor 2 (Inverso):</strong> [ ${vetor2.join(", ")} ]
        `;
    }
}

// Executa a função
inverter_vetor();

function capturar_Numeros_Pares() {
    let vetorPares = [];
    let i = 0;

  
    while (i < 4) {
        let entrada = prompt(`Digite o ${i + 1}º número par:`);
        let numero = Number(entrada);

        if (!isNaN(numero) && numero % 2 === 0) {
            vetorPares.push(numero);
            i++; 
        } else {
            alert("⚠️ Opa! O oreiasseca digitou um número ímpar (ou valor inválido). Digite apenas números pares!");
        }
    }

  
    console.log("Vetor de pares final:", vetorPares);

   
    let divResultado = document.getElementById("listaProdutos");
    if (divResultado) {
        divResultado.innerHTML = `
            <strong>Vetor com 4 números pares cadastrados com sucesso:</strong><br><br>
            [ ${vetorPares.join(", ")} ]
        `;
    }
}

// Executa a função
capturar_Numeros_Pares();


// 1. Função auxiliar global para pedir e validar o índice
function pedir_indice(nomeVariavel) {
    let indice;
    while (true) {
        let entrada = prompt(`Digite um número inteiro para ${nomeVariavel} (entre 0 e 24):`);
        indice = Number(entrada);

       
        if (!isNaN(indice) && Number.isInteger(indice) && indice >= 0 && indice <= 24) {
            break; 
        } else {
            alert("⚠️ Opa! Valor inválido. Digite apenas um número inteiro entre 0 e 24.");
        }
    }
    return indice;
}

// 2. Função principal que processa o vetor e os índices
function processar_Vetor_E_Indices() {
    let vetor = [];
    for (let i = 0; i < 25; i++) {
        let n = Math.floor(Math.random() * 101);
        vetor.push(n);
    }

    // Solicita n1 e n2 usando a função auxiliar global
    let n1 = pedir_indice("n1");
    let n2 = pedir_indice("n2");

    let valor1 = vetor[n1];
    let valor2 = vetor[n2];
    let soma = valor1 + valor2;

    // Exibe no console
    console.log("Vetor completo:", vetor);
    console.log(`Posição n1 (${n1}): ${valor1}`);
    console.log(`Posição n2 (${n2}): ${valor2}`);
    console.log(`Soma: ${soma}`);

   
    let divResultado = document.getElementById("listaProdutos");
    if (divResultado) {
        divResultado.innerHTML = `
            <strong>Vetor Completo (25 posições):</strong><br>
            [ ${vetor.join(", ")} ]<br><br>
            <strong>Índices escolhidos:</strong><br>
            • n1 = ${n1} (Valor no vetor: <strong>${valor1}</strong>)<br>
            • n2 = ${n2} (Valor no vetor: <strong>${valor2}</strong>)<br><br>
            <strong>Soma dos valores (${valor1} + ${valor2}):</strong> <span style="color: green; font-size: 18px;">${soma}</span>
        `;
    }
}

function pedir_indice_2(nomeVariavel2) {
    let indice;
    while (true) {
        let entrada = prompt(`Digite um número inteiro para ${nomeVariavel2} (entre 0 e 24):`);
        indice = Number(entrada);

        if (!isNaN(indice) && Number.isInteger(indice) && indice >= 0 && indice <= 24) {
            break; 
        } else {
            alert("⚠️ Opa! Valor inválido. Digite apenas um número inteiro entre 0 e 24.");
        }
    }
    return indice;
}

// Função principal que processa o vetor, os índices, a soma e a busca
function processar_Vetor_E_Indices_2() {
    let vetor = [];
    for (let i = 0; i < 25; i++) {
        let n = Math.floor(Math.random() * 101);
        vetor.push(n);
    }

    // Solicita n1 e n2
    let n1 = pedir_indice_2("n1");
    let n2 = pedir_indice_2("n2");

    let valor1 = vetor[n1];
    let valor2 = vetor[n2];
    let soma = valor1 + valor2;

    let entradaBusca = prompt("Digite um valor para buscar no vetor:");
    let valorBusca = Number(entradaBusca);
    
    let encontrado = vetor.includes(valorBusca);
    let mensagemBusca = "";

    if (encontrado) {
        
        let primeiraPosicao = vetor.indexOf(valorBusca);
        mensagemBusca = `✅ O valor <strong>${valorBusca}</strong> está <strong>presente</strong> no vetor (encontrado na posição ${primeiraPosicao}).`;
    } else {
        mensagemBusca = `❌ O valor <strong>${valorBusca}</strong> <strong>NÃO está presente</strong> no vetor.`;
    }
    

    // Exibe no console
    console.log("Vetor completo:", vetor);
    console.log(`Busca pelo valor ${valorBusca}:`, encontrado);

    // Exibe na página HTML
    let divResultado = document.getElementById("listaProdutos");
    if (divResultado) {
        divResultado.innerHTML = `
            <strong>Vetor Completo (25 posições):</strong><br>
            [ ${vetor.join(", ")} ]<br><br>
            <strong>Índices escolhidos:</strong><br>
            • n1 = ${n1} (Valor: <strong>${valor1}</strong>)<br>
            • n2 = ${n2} (Valor: <strong>${valor2}</strong>)<br>
            <strong>Soma:</strong> ${soma}<br><br>
            <strong>Resultado da Busca:</strong><br>
            ${mensagemBusca}
        `;
    }
}

function simular_Genetica_Familia() {
    let pai = [];
    let mae = [];
    let filho = [];

    // 1. 
    for (let i = 0; i < 50; i++) {
        pai.push(Math.floor(Math.random() * 101));
        mae.push(Math.floor(Math.random() * 101));
    }

    // 2. 
    for (let i = 0; i < 50; i++) {
        if (i % 2 === 0) {
            // Índice par: herda características do Pai
            filho.push(pai[i]);
        } else {
            
            filho.push(mae[i]);
        }
    }

    // 3. Exibe no console para conferência
    console.log("Pai:", pai);
    console.log("Mãe:", mae);
    console.log("Filho:", filho);

    let divResultado = document.getElementById("listaProdutos");
    if (divResultado) {
        divResultado.innerHTML = `
            <h3>🧬 Árvore Genealógica (Vetores de 50 Posições)</h3>
            <p><strong>Pai:</strong> [ ${pai.join(", ")} ]</p>
            <p><strong>Mãe:</strong> [ ${mae.join(", ")} ]</p>
            <hr>
            <p><strong>Filho (Pares do Pai / Ímpares da Mãe):</strong> [ ${filho.join(", ")} ]</p>
        `;
    }
}

// Executa a função ao carregar a página
simular_Genetica_Familia();

function analisar_Clima_Junho() {
    let minimas = [];
    let maximas = [];
    let medias = [];
    
    let maiorMediaGeral = -Infinity;
    let diaMaiorMedia = 0;
    let regraIlluminatiValida = true;
    
    let relatorioHTML = "";

    
    for (let i = 0; i < 30; i++) {
        let dia = i + 1;

      
        let v1 = Math.floor(Math.random() * 24) + 12; 
        let v2 = Math.floor(Math.random() * 24) + 12;

       
        let min = Math.min(v1, v2);
        let max = Math.max(v1, v2);

        minimas.push(min);
        maximas.push(max);

        let mediaDia = (min + max) / 2;
        medias.push(mediaDia);
 
        if (mediaDia > maiorMediaGeral) {
            maiorMediaGeral = mediaDia;
            diaMaiorMedia = dia;
        }

    
        let atendeRegra = max <= (2 * min);
        if (!atendeRegra) {
            regraIlluminatiValida = false;
        }

        // Montando o relatório diário
        relatorioHTML += `Dia ${dia} de Junho ➔ Mín: ${min}°C | Máx: ${max}°C | <strong>Média: ${mediaDia.toFixed(1)}°C</strong><br>`;
    }

    // Veredito final da Regra Illuminati (DLC 3)
    let vereditoIlluminati = regraIlluminatiValida 
        ? "✅ O clã illuminati tem razão! Em **todos** os dias do mês, a temperatura máxima foi menor ou igual ao dobro da mínima." 
        : "❌ Os Illuminati erraram! Pelo menos em um dia a máxima ultrapassou o dobro da mínima.";

    // Exibindo no console
    console.log("Mínimas:", minimas);
    console.log("Máximas:", maximas);
    console.log(`Maior média registrada no mês: Dia ${diaMaiorMedia} com ${maiorMediaGeral.toFixed(1)}°C`);

    // Exibindo na página HTML de forma organizada
    let divResultado = document.getElementById("resultado");
    if (divResultado) {
        divResultado.innerHTML = `
            <h3>📅 Relatório Meteorológico de Junho (30 Dias)</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; max-height: 250px; overflow-y: auto; border: 1px solid #ddd;">
                ${relatorioHTML}
            </div>
            <hr>
            <h3>🏆 DLC 2: O Pico do Calor do Mês</h3>
            <p>A maior temperatura média registrada foi de <strong>${maiorMediaGeral.toFixed(1)}°C</strong>, ocorrida no <strong>dia ${diaMaiorMedia} de Junho</strong>.</p>
            <hr>
            <h3>🔺 DLC 3: Veredito da Regra de Von Fahrenkelvin</h3>
            <p>${vereditoIlluminati}</p>
        `;
    }
}

// Executa a função
analisar_Clima_Junho();


function verificarSegredoMundial(vetor) {
   
    if (!vetor || !Array.isArray(vetor)) {
        vetor = [];
        for (let i = 0; i < 10; i++) {
            vetor.push(Math.floor(Math.random() * 100));
        }
    }

    // Abordagem segura usando Set para verificar duplicatas
    let conjuntoUnico = new Set(vetor);
    
    let mensagem = "";
    if (conjuntoUnico.size !== vetor.length) {
        console.warn("🚨 ALERTA VERMELHO! Foram encontrados valores duplicados! As pizzas de carne com catupiry estão em perigo!");
        mensagem = `🚨 <strong>ALERTA!</strong> Vetor: [ ${vetor.join(", ")} ]<br>Foram encontrados valores duplicados! As pizzas estão em perigo!`;
    } else {
        console.log("✅ Missão cumprida! O vetor é 100% único. A Terra está salva!");
        mensagem = `✅ <strong>Missão cumprida!</strong> Vetor: [ ${vetor.join(", ")} ]<br>Nenhum valor duplicado. A Terra e as pizzas estão salvas!`;
    }

    // Exibe na página HTML caso exista a div de resultado
    let divResultado = document.getElementById("listaProdutos");
    if (divResultado) {
        divResultado.innerHTML = mensagem;
    }
}

function montarVetorResultante() {
    // 1. Criando os 3 vetores de 9 posições (exemplo preenchido com aleatórios)
    let v1 = [];
    let v2 = [];
    let v3 = [];

    for (let i = 0; i < 9; i++) {
        v1.push(Math.floor(Math.random() * 100));
        v2.push(Math.floor(Math.random() * 100));
        v3.push(Math.floor(Math.random() * 100));
    }

    let vR = [];

    
    for (let i = 0; i < 3; i++) {
        vR.push(v1[i]);
    }

    
    for (let i = 3; i < 6; i++) {
        vR.push(v2[i]);
    }

   
    for (let i = 6; i < 9; i++) {
        vR.push(v3[i]);
    }

    // Exibindo no console
    console.log("v1:", v1);
    console.log("v2:", v2);
    console.log("v3:", v3);
    console.log("vR (Resultante):", vR);

    // 5. Exibindo na página HTML de forma organizada
    let divResultado = document.getElementById("listaProdutos");
    if (divResultado) {
        divResultado.innerHTML = `
            <strong>v1:</strong> [ ${v1.join(", ")} ]<br>
            <strong>v2:</strong> [ ${v2.join(", ")} ]<br>
            <strong>v3:</strong> [ ${v3.join(", ")} ]<br><br>
            <strong>vR (Resultante):</strong> <span style="color: blue;">[ ${vR.join(", ")} ]</span>
        `;
    }
}

// Executa a função
montarVetorResultante();