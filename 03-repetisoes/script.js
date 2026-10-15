

// let contagem = 0
// while(contagem < 3){
//     alert(contagem)
//     contagem++
// }

// // let i = 0
// let qtd = 0
// let total = 0 
// let produto = -1
// while(produto != 0){
//     // produto = Number(prompt("Digite o preço do " + "produto"))
//     produto = Number(prompt("Digite o preço do " + (qtd+1) +  " o produto\n(0 para parar)"))
//     if(produto != 0) 
//     // total = total + produto
//     qtd ++
//     total += produto
//     // i++ 
// }
// alert('total total:' + total + '\nQuantidade:' + qtd)

function contagem() {
    let resultadoElemento = document.getElementById('resultados');
    let outro = "";

    for (let i = 10; i <= 1000; i++) {

        if ((i >= 10 && i <= 500) || (i >= 900 && i <= 1000)) {
            if (outro === "") {
                outro = i;
            } else {
                outro = outro + ", " + i;
            }
        }
    }


    resultadoElemento.innerHTML = outro;
}


let resultados = document.getElementById('atividades');

function ejercicio1() {
    resultados.innerHTML = 'parte 1, eje1 <br>';
    let i = 0;
    while (i < 10) {
        i++;
        let quadrado = i * i;
        console.log(i + ': ' + quadrado);
        resultados.innerHTML += i + ': ' + quadrado + '<br>';
    }
}

function ejercicio2() {
    resultados.innerHTML = 'parte 1, eje2 <br>';
    let i = 10;
    while (i >= 0) {
        resultados.innerHTML += i + '<br>';
        i--;
    }
}

function ejercicio3() {
    resultados.innerHTML = 'parte 1, eje3 <br>';
    let soma = 0;
    let i = 1;
    while (i <= 100) {
        soma += i;
        i++;
    }
    resultados.innerHTML += soma;
}

function ejercicio4() {
    resultados.innerHTML = 'parte 1, eje4 <br>';
    let i = 1;
    while (i <= 10) {
        let tabuada = i * 5;
        resultados.innerHTML += '5 X ' + i + ' = ' + tabuada + '<br>';
        i++;
    }
}

function ejercicio5() {
    let numero = Number(prompt("Digite o número para ver a tabuada:"));
    resultados.innerHTML = 'parte 1, eje5 <br>';
    let i = 1;

    while (i <= 10) {
        let tabuada = i * numero;
        resultados.innerHTML += numero + ' X ' + i + ' = ' + tabuada + '<br>';
        i++;
    }
}

function ejercicio6() {
    resultados.innerHTML = 'parte 1, eje6 <br>';
    let i = 1;

    while (i <= 20) {
        if (i % 2 !== 0) {
            resultados.innerHTML += i + '<br>';
        }
        i++;
    }
}

function ejercicio7() {
    resultados.innerHTML = 'parte 1, eje7 <br>';

    resultados.innerHTML += '<b>Crescente:</b><br>';
    let i = 1;
    while (i <= 10) {
        resultados.innerHTML += i + ' ';
        i++;
    }

    resultados.innerHTML += '<br><br>';

    resultados.innerHTML += '<b>Decrescente:</b><br>';
    let j = 10;
    while (j >= 1) {
        resultados.innerHTML += j + ' ';
        j--;
    }
}

function ejercicio8() {
    let numero = Number(prompt("Digite um número para calcular o fatorial:"));
    resultados.innerHTML = 'parte 1, eje8 <br>';

    let fatorial = 1;
    let i = numero;

    while (i > 1) {
        fatorial *= i;
        i--;
    }

    resultados.innerHTML += 'O fatorial é: ' + fatorial;
}

function ejercicio9() {
    resultados.innerHTML = 'parte 1, eje9 <br>';
    let i = 1;

    while (i <= 100) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultados.innerHTML += 'FizzBuzz<br>';
        } else if (i % 3 === 0) {
            resultados.innerHTML += 'Fizz<br>';
        } else if (i % 5 === 0) {
            resultados.innerHTML += 'Buzz<br>';
        } else {
            resultados.innerHTML += i + '<br>';
        }
        i++;
    }
}

function ejercicio10() {
    resultados.innerHTML = 'parte 1, eje10 <br>';
    let i = 1;
    let soma = 0;

    while (i <= 10) {
        soma += 1 / i;
        i++;
    }

    resultados.innerHTML += 'O valor total da série é: ' + soma.toFixed(2);
}

function ejercicio11() {
    let limite = parseInt(prompt("Digite um número limite:"));
    resultados.innerHTML = 'parte 1, eje11 <br>';

    let i = 1;
    let pares = 0;
    let impares = 0;

    while (i <= limite) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
        i++;
    }

    resultados.innerHTML += 'Total de pares: ' + pares + '<br>';
    resultados.innerHTML += 'Total de ímpares: ' + impares;
}

function ejercicio12() {
    let lista = [15, 8, 42, 4, 23, 16];
    resultados.innerHTML = 'parte 1, eje12 <br>';

    let i = 0;
    let maior = lista[0];
    let menor = lista[0];

    while (i < lista.length) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
        i++;
    }

    resultados.innerHTML += 'Lista: ' + lista.join(', ') + '<br>';
    resultados.innerHTML += 'Maior valor: ' + maior + '<br>';
    resultados.innerHTML += 'Menor valor: ' + menor;
}

function ejercicio13() {
    let lista = [10, 20, 30, 40, 50];
    resultados.innerHTML = 'parte 1, eje13 <br>';

    let i = 0;
    let soma = 0;

    while (i < lista.length) {
        soma += lista[i];
        i++;
    }

    let media = soma / lista.length;
    resultados.innerHTML += 'Lista: ' + lista.join(', ') + '<br>';
    resultados.innerHTML += 'A média é: ' + media;
}

function ejercicio14() {
    let numero = parseInt(prompt("Digite um número para verificar se é primo:"));
    resultados.innerHTML = 'parte 1, eje14 <br>';

    let i = 1;
    let divisores = 0;

    while (i <= numero) {
        if (numero % i === 0) {
            divisores++;
        }
        i++;
    }

    if (divisores === 2) {
        resultados.innerHTML += numero + ' é um número primo!';
    } else {
        resultados.innerHTML += numero + ' NÃO é um número primo.';
    }
}

function ejercicio15() {
    resultados.innerHTML = 'parte 1, eje15 <br>';
    let num = 1;

    while (num <= 50) {
        let divisores = 0;
        let i = 1;

        while (i <= num) {
            if (num % i === 0) {
                divisores++;
            }
            i++;
        }

        if (divisores === 2) {
            resultados.innerHTML += num + ' ';
        }
        num++;
    }
}


function eje1() {
    resultado.innerHTML = ''
    resultado.innerHTML = 'parte 2, eje1 <br>';
    let palavra = prompt("Digite uma palavra")
    let n = Number(prompt("Quantas vezes ?"))
    for (let i = 0; i < n; i++) {
        resultado.innerHTML += `<p>${palavra}</p>`
    }
}

function eje2() {
    resultado.innerHTML = ''
    resultado.innerHTML = 'parte 2, eje2 <br>';
    let soma = 0
    let n = Number(prompt("Digite um numero"))
    for (let i = 2; i <= n; i++) {
        if (i % 2 == 0) {
            soma += i
            console.log(i);

        }

    }

    resultado.innerHTML = soma
}
function eje3() {
    let item = 'vazio';
    resultado.innerHTML = '';

    while (item !== '0') {
        item = prompt('Digite um item para a lista (ou 0 para sair):');


        if (item !== '0' && item !== null) {
            resultado.innerHTML += `<p>${item}</p>`;
        }
    }
}
function eje4() {
    resultado.innerHTML = '';
    let n = Number(prompt("Digite um numero"));


    for (let i = n; i >= 1; i--) {
        resultado.innerHTML += `<p>${i}</p>`;
    }
}

function eje5() {
    resultado.innerHTML = '';


    for (let i = 1; i <= 5; i++) {
        let linha = '';


        for (let j = 1; j <= i; j++) {
            linha += '*';
        }


        resultado.innerHTML += `<p>${linha}</p>`;
    }
}

function eje6() {
    resultado.innerHTML = '';


    let numeroSecreto = Math.ceil(Math.random() * 100);
    let tentativas = 0;
    let palpite = 0;

    resultado.innerHTML += `<p>Jogo iniciado! Tente adivinhar o número entre 1 e 100.</p>`;

    while (palpite !== numeroSecreto) {
        let entrada = prompt('Digite o seu palpite (entre 1 e 100):');

        if (entrada === null) {
            resultado.innerHTML += `<p>Jogo cancelado.</p>`;
            return;
        }

        palpite = Number(entrada);
        tentativas++;

        if (palpite === numeroSecreto) {
            resultado.innerHTML += `<p><strong>Parabéns!</strong> Você acertou o número ${numeroSecreto} em <strong>${tentativas}</strong> tentativa(s).</p>`;
        } else if (palpite > numeroSecreto) {
            resultado.innerHTML += `<p>Palpite ${palpite}: Muito alto! Tente um número menor.</p>`;
        } else if (palpite < numeroSecreto) {
            resultado.innerHTML += `<p>Palpite ${palpite}: Muito baixo! Tente um número maior.</p>`;
        } else {
            resultado.innerHTML += `<p>Por favor, digite um número válido.</p>`;
            tentativas--;
        }
    }
}

function eje7() {
    resultado.innerHTML = '';

    // Pede a largura e a altura ao usuário
    let largura = Number(prompt("Digite a largura do quadro:"));
    let altura = Number(prompt("Digite a altura do quadro:"));

    // Validação básica para garantir que os valores são válidos
    if (isNaN(largura) || isNaN(altura) || largura <= 0 || altura <= 0) {
        resultado.innerHTML = `<p>Por favor, insira números válidos maiores que zero.</p>`;
        return;
    }

    // Loop externo para controlar as linhas (altura)
    for (let i = 1; i <= altura; i++) {
        let linha = '';

        // Loop interno para controlar os caracteres em cada linha (largura)
        for (let j = 1; j <= largura; j++) {
            linha += '#';
        }

        // Exibe cada linha construída no elemento de resultado com fonte monoespaçada para alinhar direitinho
        resultado.innerHTML += `<p style="font-family: monospace; letter-spacing: 2px;">${linha}</p>`;
    }
}





