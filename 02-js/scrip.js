function verificar_Liberacao_Jaulas(){
  // O sistema de liberação de jaulas funciona com base em dois critérios de segurança: o número de visitantes na área precisa ser **zero** e o horário precisa estar **fora do expediente de visitação** (antes das 8h ou depois das 18h). A liberação automática só deve ocorrer se **ambas** as condições forem verdadeiras.Durante um teste de rotina, alguns funcionários relataram que as jaulas estavam sendo abertas fora do horário correto, colocando todos em risco. Denis Nery encarregou Junin de revisar esse trecho da lógica com atenção.

  // infos e variaveis
  let visitantesNaArea
  let horaAtual

  // leitura de dados
  visitantesNaArea = Number(prompt("Digite o número de visitantes na área:"))
  horaAtual = Number(prompt("Digite a hora atual (0 a 23):"))

  // processamento e saida 
  if (visitantesNaArea == 0 && horaAtual) {
        alert("Liberação autorizada. Abrindo jaula.")
    } else {
        alert("Liberação negada. Área em uso ou fora do horário permitido.")
    }

}


function verificar_Acesso_Comando(){
  // enetdimento
  // Denis Nery é especialista no desenvolvimento de softwares para parques. A maioria dos parques possui um Centro de Comando que controla os principais sistemas de segurança. Apenas funcionários com autorização especial podem acessá-lo. Para ter a autorização especial, o funcionário precisa estar com o crachá válido e a digital reconhecida. Caso o crachá não esteja válido ou a digital falhar, o acesso deve ser negado imediatamente. 

    // Infos e variáveis
    let crachaValido;
    let digitalReconhecida;
    
    // Leitura de dados (Padronizando para minúsculas)
    crachaValido = prompt("Crachá está válido?").
    digitalReconhecida = prompt("Digital reconhecida? ")

    // Processamento e saída
    if (crachaValido == "sim" && digitalReconhecida == "sim") {
        alert("Acesso permitido.");
    } else {
        alert("Acesso negado.");
    }
}

function verificar_Transporte(){
  // entedimento
  //O parque tem um sistema de transporte que liga as principais estações. O uso do transporte depende de duas variáveis: se há **manutenção ativa** e se o **nível de emergência do parque** está alto. O transporte **só pode funcionar se não estiver em manutenção e não houver emergência** Recentemente, um grupo de visitantes ficou preso durante uma simulação de evacuação porque o sistema ativou o transporte mesmo com manutenção marcada. O objetivo agora é confirmar a lógica do controle de transporte.

  //  infos e variaveis
  let emManutencao
  let emergenciaAtiva

  // leitura de dados
   manutencaoInput = prompt("Está em manutenção? (sim/nao)")
   emergenciaInput = prompt("Emergência ativa? (sim/nao)")

  //  processamento e saida
  if (!emManutencao && !emergenciaAtiva) {
        alert("Transporte liberado para uso.")
    } else {
        alert("Transporte indisponível por motivo de segurança.")
    }

}


function verificar_EntradaPalco(){
  // entendimento 
 // Sarumano, o mago ilusionista da periferia, se apresenta em festas infantis e eventos corporativos. Para entrar no palco principal e realizar seu número, ele precisa que o sistema de som esteja funcionando e que o figurino esteja completo (incluindo o chapéu que vive sendo esquecido no ônibus). Se uma dessas condições falhar, ele precisa improvisar no salão de entrada com truques menores.

// Infos e variáveis
let somFuncionando;
let figurinoCompleto;

// leitura de dados
somFuncionando = prompt("O som está funcionando? (sim/nao)")
figurinoCompleto = prompt("O figurino está completo? (sim/nao)")

// Processamento e saída
if (somFuncionando == "sim" && figurinoCompleto === "sim") {
    alert("Palco liberado para Sarumano! Luzes, câmera, ilusão!");
} else if (somFuncionando == "nao" && figurinoCompleto == "sim") {
    alert("Sem som. Realizar apresentação alternativa no salão.");
} else if (somFuncionando == "sim" && figurinoCompleto == "nao") {
    alert("Faltando parte do figurino. Te vira no improviso!");
} else {
    alert("Apresentação cancelada. Hora da mágica de desaparecer...");
}
}


function verificar_Viagem() {
  // entedimento
  // Sarumano depende de transporte público e de sua boa disposição física para chegar aos eventos. Ele só pode aceitar eventos distantes se não estiver gripado e se o tempo de viagem for menor que 45 minutos. Em outros casos, ele cancela para evitar perrengues que o deixem ainda mais desanimado.

  // info e vairiaveis
  let estagripado
  let tempoViage

  // leitura de dados
  estagripado = prompt("Está gripado? (sim/nao)").toLowerCase()
  tempoViage = parseInt(prompt("Digite o tempo de viagem em minutos:"))

  // processamento e saida
  if (estagripado == 'nao' && tempoViage < 45) {
    alert("Viagem autorizada. Rumo ao show!")
  } else {
    alert("Deslocamento inviável. Melhor recusar este evento.")
  }
}



function verificar_Fumaca() {
  // entendimento
  //Em uma festa recente, a fumaça disparou enquanto uma criança de dois anos brincava perto do palco, o que gerou pânico e um pedido formal de desculpas. Agora, Sarumano quer um script de verificação mais seguro.

  // infor e variaveis 
  let criancasPequenas
  let velocidadeVento

  // leitura de dados
  criancasPequenas = prompt("Digite a quantidade de crianças pequenas próximas:")
  velocidadeVento = parseFloat(prompt("Digite a velocidade do vento (m/s):"))

  // processamento e saida
  if (criancasPequenas == 0 && velocidadeVento >= 0.5) {
    alert("Fumaça liberada. Que comecem os mistérios!")
  } else {
    alert("Fumaça bloqueada. Aguardar condições ideais.")
  }
}


function teste_recrutamento() {
  // entendimento 
  // O Capitão Ganso costuma entrevistar pessoalmente os aspirantes a marujos. Os critérios principais são: a pessoa precisa saber nadar e ter mais de 16 anos. Em algumas ocasiões especiais, se o candidato tiver carta de recomendação de outro pirata, o capitão aceita mesmo sem saber nadar, desde que tenha ao menos 14 anos.

  // infos e variaveis
  let sabeNadar
  let idade
  let temRecomendacao

  // leuitura de dados
  sabeNadar = prompt("sabe nadar ?")
  idade = Number(prompt("Digite sua idade:"))
  temRecomendacao = prompt("tem recomendação?")

  // processamento e saída
  if (sabeNadar == "sim" && idade >= 16) {
    alert("Aprovado para o navio!")
  } else if (temRecomendacao == "sim" && idade >= 14) {
    alert("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
  } else {
    alert("Reprovado. Volte quando estiver mais preparado para o mar")
  }
}






function controle_Tripulacao() {
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
  if (numeroMarujos >= 10 && qtd_comida >= 1.5) {
    alert("Provisões suficientes. Rumo ao horizonte!")
  } else {
    alert("Algo está errado. Posseidom não quer ninguém no mar hoje.")
  }

}



function verifica_votacao() {
  //Peça ao usuário para inserir sua idade e verifique se ele é elegível para votar (idade mínima de 16 anos)
  let idade

  idade = Number(prompt("Digite sua idade"))

  if (idade >= 16) {
    alert("você pode votar")
  } else {
    alert("você não pode votar")
  }
}


function dia_da_semana() {
  //entedimento
  // o ususario tem que inserir um numero de 1 a 7 e mostar o dia da semana correspondente

  // infor/variaveis
  let numero

  // ler os dados
  numero = Number(prompt("Digita o dia da semana:"))

  //processamento
  //saida
  if (numero == 1) {
    alert("Domingo")
  } else if (numero == 2) {
    alert("Segunda")
  } else if (numero == 3) {
    alert("Terça")
  } else if (numero == 4) {
    alert("Quarta")
  } else if (numero == 5) {
    alert("Quinta")
  } else if (numero == 6) {
    alert("Sexta")
  } else if (numero == 7) {
    alert("Sábado")
  }

}

function verificarSenha() {
  // entedimento
  //  jean este programa pede para o usuario digitar a senha  for "abracadabra"e exiba a mensagem      secreta.
  // infos e variaveis
  // Rafael
  let senha

  // processamento
  senha = (prompt("Qual é a senha? "))
  // saida
  //felipe
  if (senha == "abracadabra") {
    prompt("meus parabens!")
  } else {
    prompt("senha incorreta.")
  }
}



function verificarMaioridade() {
  // entendimento 
  // O programa de ve ler a idade de uma pessoa se ele e maior ou mmenor
  // infos e variaveis 
  let idade
  // leitura de dados
  idade = Number(prompt("Digite sua idade"))
  // processamento
  if (idade >= 18) {
    alert("maior de idade")
  } else {
    alert("menor de idade")
  }

}


function CalclarLucroDoGanso() {
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
  lucroPercentual = (lucroReais * 100) / gastos

  //saia
  alert('Lucro: R$' + lucroReais.toFixed(2) + 'ou' + lucroPercentual + '%')
}

function CalcularPrecoDoPrompt() {
  // entedimento
  //  O programa deve cobrar 5 tokens para receber o prompt e mais 1 tokens de cada prompt enviado.

  // info variaveis
  let caracteres, total_tokens
  let custo_tokens, preco_reais

  // entra de dados
  caracteres = Number(prompt("Digite o número de caracteres do prompt:"))
  custo_tokens = Number(prompt("Digite o custo de tokens em reias: R$"))
  //processamento
  total_tokens = 5 + caracteres
  preco_reais = total_tokens * custo_tokens
  //saia
  alert("O total de tokens gastos:" + total_tokens)
  alert("O custo em reias e:" + preco_reais)

}

