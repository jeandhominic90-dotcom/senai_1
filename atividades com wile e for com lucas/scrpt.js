// atividades com wilhe

// 1) Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes.

function Senha() {
    let senha = prompt("Digite a sua senha:");
    let confirmaSenha = prompt("Digite a senha novamente:");

    while (senha !== confirmaSenha) {
        resultado.innerHTML = "As senhas não conferem. Tente novamente.";
        senha = prompt("Digite a sua senha:");
        confirmaSenha = prompt("Digite a senha novamente:");
    }

    resultado.innerHTML = "Senha cadastrada com sucesso!";
}

//2) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!” Desafio: Mostrar ao final quantas frutas a salada tem."

function salada_frutas() {
    let fruta = "";
    let contadorFrutas = 0;

    while (fruta.toLowerCase() !== "cereja") {
        fruta = prompt("Qual fruta adicionar? (Digite 'cereja' para finalizar)");

        if (fruta.toLowerCase() !== "cereja") {
            contadorFrutas++;
        }
    }

    resultado.innerHTML = "Sua salada de frutas está pronta!\nTotal de frutas adicionadas : " + contadorFrutas;
}

// 3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 100 de HP. Faça um programa no qual o usuário possa digitar valores de dano até a torre ser destruída. Quando o HP acabar, mostrar a mensagem "Torre destruída". (Desafio: Mostrar o HP do castelo atualizado a cada rodada. Ao final mostrar "Jogo encerrado, com X rodadas!").

function torre_dano() {
    let hp = 100;
    let rodadas = 0;

    while (hp > 0) {
        let dano = Number(prompt(`HP atual do castelo: ${hp}. Digite o valor do dano:`));

        if (dano && dano > 0) {
            hp -= dano;
            rodadas++;

            if (hp < 0) {
                hp = 0;
            }
        } else {
            resultado.innerHTML = "Digite um valor de dano válido!";
        }
    }

    resultado.innerHTML = `Torre destruída!\nJogo encerrado, com ${rodadas} rodadas!`;
}

// atividades com for 

//4) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

let resultado = document.getElementById('resultado')


function idades() {
    let nomeDigitado
    let idadeDigitada
    let soma_idades = 0;
    let maiorIdade = 0
    let maiorNome = ""


    for (i = 0; i < 5; i++) {
        nomeDigitado = prompt(`Digite um nome:`);
        idadeDigitada = Number(prompt(`Digite uma idade: `));
        soma_idades = soma_idades + idadeDigitada;

        if (idadeDigitada > maiorIdade) {

            maiorIdade = idadeDigitada
            maiorNome = nomeDigitado

        }

    }

    alert("media das idades: " + soma_idades / 5 + "\nMaior idade: " + maiorIdade + "\nnome do Maior: " + maiorNome)
}

//5) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).
function jogo_cartas() {
    let jogador_1
    let jogador_2
    let soma_1 = 0
    let soma_2 = 0
    let carta

    jogador_1 = prompt("Digite o nome do jogador 1: ")
    jogador_2 = prompt("Digite o nome do jogador 2: ")

    for (let i = 1; i <= 5; i++) {
        carta = Number((prompt("vez do jogador 1 : digite o valor da carta {i} (entre 1 , 13)")))
        carta = Number((prompt("vez do jogador 2 : digite o valor da carta {i} (entre 1 , 13)")))

        if ((carta) || carta < 1 || carta > 13 && (carta) || carta < 1 || carta > 13) {
            carta = Number((prompt("carta invalida! jogador 1, digite novamente a carta {i} (entre 1 ,13:carta invalida! jogador 2, digite novamente a carta {i} (entre 1 ,13:")))

            soma_1 += carta
            soma_2 += carta
        }
    }

    if (soma_1 > soma_2) {
        alert("o Jogo acabou!\nvencedor: jogador 1 com  a soma_1 " + soma_1)
    } else if (soma_2 > soma_1) {
        alert("o Jogo acabou!\nvencedor: jogador 2  com a soma_2 " + soma_2)
    } else {
        alert("O jogo enpatou!")
    }
}

//6) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.
function multa() {
    let qtdMultas = parseInt(prompt("Quantas multas deseja cadastrar?"));
    let totalValor = 0;
    let totalPontos = 0;

    for (let i = 1; i <= qtdMultas; i++) {
        let valor = Number(prompt(`Digite o valor em reais da multa ${i}:`));
        let pontos = Number(prompt(`Digite os pontos perdidos na carteira para a multa ${i}:`))
        totalValor += valor;
        totalPontos += pontos;
    }

    let statusCnh = totalPontos >= 21 ? "Você está irregular" : "Você está regular";

    resultado.innerHTML = `Total das multas: R$ ${totalValor.toFixed(2)} \nTotal de pontos: ${totalPontos}\nStatus: ${statusCnh}`;
}







