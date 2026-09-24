// atividades com wilhe

// 1) Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes.

function Senha() {
    let senha = prompt("Digite a sua senha:");
    let confirmaSenha = prompt("Digite a senha novamente:");

    while (senha !== confirmaSenha) {
        alert("As senhas não conferem. Tente novamente.");
        senha = prompt("Digite a sua senha:");
        confirmaSenha = prompt("Digite a senha novamente:");
    }

    alert("Senha cadastrada com sucesso!");
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

    alert("Sua salada de frutas está pronta!\nTotal de frutas adicionadas : " + contadorFrutas);
}

// 3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 100 de HP. Faça um programa no qual o usuário possa digitar valores de dano até a torre ser destruída. Quando o HP acabar, mostrar a mensagem "Torre destruída". (Desafio: Mostrar o HP do castelo atualizado a cada rodada. Ao final mostrar "Jogo encerrado, com X rodadas!").

function torre_dano() {
    let hp = 100;
    let rodadas = 0;

    while (hp > 0) {
        let dano = parseInt(prompt(`HP atual do castelo: ${hp}. Digite o valor do dano:`));

        if (dano && dano > 0) {
            hp -= dano;
            rodadas++;

            if (hp < 0) {
                hp = 0;
            }
        } else {
            alert("Digite um valor de dano válido!");
        }
    }

    alert(`Torre destruída!\nJogo encerrado, com ${rodadas} rodadas!`);
}

// atividades com for 

//4) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)
function idades() {
    let somaidades = 0;
    let maiorIdade = -1;
    let nome_Mais_Velho = "";

    for (let i = 1; i <= 5; i++) {
        let nome = prompt(`Digite o nome da  pessoa:`);
        let idade = Number(prompt(`Digite a idade da pessoa`));

        somaidades += idade;

        if (idade > maiorIdade) {
            maiorIdade = idade;
            nome_Mais_Velho = nome;
        }
    }

    let media = somaidades / 5;

    alert(`Média de idade: ${media}\nMaior idade: ${maiorIdade}\nPessoa mais velha: ${nome_Mais_Velho}`);
}

//5) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).
function jogo_cartas() {
    let jogador1 = prompt("Digite o nome do Jogador 1:");
    let jogador2 = prompt("Digite o nome do Jogador 2:");

    let soma1 = 0;
    let soma2 = 0;

    // Vez do Jogador 1
    for (let i = 1; i <= 5; i++) {
        let carta = Number(prompt(`Vez de ${jogador1}: Digite o valor da carta ${i} (entre 1 e 13):`));

        while ((carta) || carta < 1 || carta > 13) {
            carta = Number(prompt(`Carta inválida! ${jogador1}, digite novamente a carta ${i} (entre 1 e 13):`));
        }

        soma1 += carta;
    }

    // Vez do Jogador 2
    for (let i = 1; i <= 5; i++) {
        let carta = Number(prompt(`Vez de ${jogador2}: Digite o valor da carta ${i} (entre 1 e 13):`));

        while ((carta) || carta < 1 || carta > 13) {
            carta = Number(prompt(`Carta inválida! ${jogador2}, digite novamente a carta ${i} (entre 1 e 13):`));
        }

        soma2 += carta;
    }

    // Resultado final
    if (soma1 > soma2) {
        alert(`O jogo acabou!\nVencedor: ${jogador1} com a soma ${soma1}`);
    } else if (soma2 > soma1) {
        alert(`O jogo acabou!\nVencedor: ${jogador2} com a soma ${soma2}`);
    } else {
        alert("O jogo empatou!");
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

    alert(`Total das multas: R$ ${totalValor.toFixed(2)}\nTotal de pontos: ${totalPontos}\nStatus: ${statusCnh}`);
}







