// 123 == 123 Verdadeiro
// 123 == "123" Verdadeiro
// 123 === "123" Falso

// === estitamente igual (verifica o dade de tipo)


// números -> variaveis
// usuario -> digitar -> entarada de dados (prompt)
// calcule -> processamento / logica(operadores, codicionais, etc)
//mostre na  tela -> saida de dados (alert/ html na div, nun input console)

// javascript -> case sensitive
// "C" é diferente "c"
// "cereja" é diferente "Cereja"


// camelCase -> VidaCastelo fase dois
// pascalCase -> VidaCastelo fase dois
// snake_Case -> Vida_Castelo_fase_dois
// kebad_Case -> Vida_Castelo_fase_dois
// lazycase -> Vida castelo fase dois
// Sceamcase -> VIDA CASTELO  FASE DOIS


// hp --  diminuir 1 é  igual a isso hp = hp - 1 hp-= 1
// hp ++ aumentar 1 é  igual a isso hp = hp + 1 hp+= 1

// diminuir ouro número diferente de 1  hp = hp - dano  hp = hp - 2
// diminuir ouro número diferente de 1  hp = hp + dano  hp = hp + 9

// Hpcastelo = Hpcastelo - (-10)

// 10 + 10 = + 20
// -10 + 10 = 0
// -10 - 20 = + 30

// 1) crie um programa que solicite a senha de um usiario e depois , peça para digitar novamente até que as duas senhas forem iguais.

function senha() {
    let senhadigitada
    let senharepete

    senhadigitada = prompt("Digite uma senha: ")

    while (senhadigitada != senharepete) {

        senharepete = prompt("Digite novamente a senha:")
    }

    alert("Ok,  acesso confirmado")
}

// 2) fazer um programa no qual o usuario deve montar uma salada de fruta com uma cereja no final. deve ser perguntado em sequencia "qual fruta adicionar?". quando for adicionado  a cereja, mostar as frase "salada de fruta esta pronta!" Desafio : mostar ao final quantas frutas tem na salada de fruta."

function salada_frutas() {
    let frutadigitada
    let contagemFrutas = 0

    while (frutadigitada != "cereja") {
        frutadigitada = prompt("Qual fruta você quer adicionar")
        contagemFrutas++
    }
    alert("sua salada de frutas está pronta")
    alert("O tatal de fruatas é" + contagemFrutas)
}

// em um jogo de tower defense, o castelo (torre) tem um total de 100 de Hp. faça um programa no qual o usuario possa digitar valores de dano até a torre se destruida. quando o Hp acabar, mostar a mensagem "Torre destruada" (Desafio : mostrar o Hp do castelo aualizado a cada rodada. ao final mostrar "jogo encerrado," com X rodadas!).

function torre_dano() {
    let Hpcastelo = 100
    let valorDano
    let rodadas =  0

    while (Hpcastelo > 0) {

        valorDano = Number(prompt("Digite o valor do dano:  "))
        Hpcastelo = Hpcastelo - valorDano
        rodadas ++

        if (Hpcastelo > 0) {

            alert("Vida atualizada: " + Hpcastelo)
        }

    }

    alert("castelo destrido! \n Número de rodadas : " + rodadas)
}

function idade(){
let nome
let idade



    
}

function jogo_carta(){

}

function multa(){

}


