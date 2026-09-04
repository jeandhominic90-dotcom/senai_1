function controle_Tripulacao(){
  // entedimento
  //O Capitão Ganso, lenda viva das águas de Canasvieiras, precisa organizar o estoque de provisões de sua escuna antes de zarpar. Seus cálculos consideram a quantidade de marujos e a quantidade de comida necessária para o dia.

  // infos e variaveis
  let numeroMarujos
  let qtd_comida

  // lei tura de dados
  numeroMarujos = Number(prompt("Digite o numero de marujos:"))
  qtd_comida = Number(prompt("Digite a quantidade de comida em Kg:"))

  //processamento
  // saida
  if(numeroMarujos >= 10 && qtd_comida >= 1.5 ){
    alert("Provisões suficientes. Rumo ao horizonte!")
  }else{
    alert("Algo está errado. Posseidom não quer ninguém no mar hoje.")
  }

}



function verifica_votacao(){
  //Peça ao usuário para inserir sua idade e verifique se ele é elegível para votar (idade mínima de 16 anos)
  let idade

  idade = Number(prompt("Digite sua idade"))

  if(idade >= 16){
    alert("você pode votar")
  }else{
    alert("você não pode votar")
  }
}


function dia_da_semana(){
    //entedimento
    // o ususario tem que inserir um numero de 1 a 7 e mostar o dia da semana correspondente
    
    // infor/variaveis
    let numero

    // ler os dados
    numero = Number(prompt("Digita o dia da semana:"))

    //processamento
    //saida
    if(numero == 1){
        alert("Domingo")
       }else if(numero == 2){
        alert("Segunda")
       }else if(numero == 3){
        alert("Terça")
       }else if (numero == 4){
        alert("Quarta")
       }else if(numero == 5){
        alert("Quinta")
       }else if (numero == 6){
        alert("Sexta")
       }else if(numero == 7){
        alert("Sábado")
       }
      
}

function verificarSenha(){
    // entedimento
    //  jean este programa pede para o usuario digitar a senha  for "abracadabra"e exiba a mensagem      secreta.
// infos e variaveis
    // Rafael
    let senha

    // processamento
    senha = (prompt("Qual é a senha? "))
    // saida
      //felipe
      if(senha == "abracadabra"){
        prompt("meus parabens!")
      }else{
        prompt("senha incorreta.")
      }
}



function verificarMaioridade(){
// entendimento 
        // O programa de ve ler a idade de uma pessoa se ele e maior ou mmenor
// infos e variaveis 
    let idade 
// leitura de dados
  idade =  Number(prompt("Digite sua idade"))
// processamento
if(idade >= 18){
     alert("maior de idade")
}else{
    alert("menor de idade")
}

}
    

function CalclarLucroDoGanso(){
    // entedimento
    // o progama deve ler gasto, faturamento em ingresos e faturamento 
    // loja e calcular o lucro em reias e o
    // lucro percentual.

    // info variaveis
    let gastos, faturamentoIngresso, faturamentoLoga
    let lucroReais, lucroPercentual
    
    // entra de dados
    gastos = Number(prompt("Digite o gasto de hoje:"))
        // gastos = Number('100')
        //gasttos = 100
    faturamentoIngresso = Number(prompt("Digite o faturamento de ingressos:"))
    faturamentoLoga = Number(prompt("Digite o faturamento na loja de items:"))
    
    //processamento
    let fatramentoTotal = faturamentoIngresso + faturamentoLoga
    lucroReais = fatramentoTotal - gastos

    // gastos -- 100%
    // lucroReais -- X% (lucroPercentaul)
    // gastos*lucropercentual = lucroReai*100
    lucroPercentual = (lucroReais*100)/gastos

    //saia
    alert('Lucro: R$' + lucroReais.toFixed(2) + 'ou' + lucroPercentual + '%')
}

function CalcularPrecoDoPrompt(){
 // entedimento
//  O programa deve cobrar 5 tokens para receber o prompt e mais 1 tokens de cada prompt enviado.

 // info variaveis
 let caracteres, total_tokens
 let custo_tokens, preco_reais

 // entra de dados
  caracteres = Number(prompt("Digite o número de caracteres do prompt:" ))
  custo_tokens = Number(prompt("Digite o custo de tokens em reias: R$"))
 //processamento
 total_tokens = 5 + caracteres
 preco_reais = total_tokens * custo_tokens
 //saia
 alert("O total de tokens gastos:" + total_tokens)
 alert("O custo em reias e:" + preco_reais)

}
    
