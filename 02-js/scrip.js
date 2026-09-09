function calcular_Telles_Transportes() {
  // entedimento
  // O programa lê o peso medido na balança (PBT medido), a tara e a capacidade de carga (L) do caminhão.
  // Calcula o peso líquido da carga e verifica se os limites de carga e PBT foram ultrapassados.

  // info e variavesi
  let pbtMedido, taraPlaqueta, cargaPlaqueta, pbtPlaqueta, pesoLiquidoCarga

  // entrada de dados
  pbtMedido = Number(prompt("Digite o peso total informado na balança (kg):"))
  taraPlaqueta = Number(prompt("Digite a TARA (peso do caminhão vazio) informada na plaqueta (kg):"))
  cargaPlaqueta = Number(prompt("Digite a CARGA LÍQUIDA MÁXIMA (L) informada na plaqueta (kg):"))

  // processamento
  pbtPlaqueta = taraPlaqueta + cargaPlaqueta
  pesoLiquidoCarga = pbtMedido - taraPlaqueta

  // Saida
  alert("Peso Líquido da Carga: " + pesoLiquidoCarga + " kg\n" +
    "Peso Bruto Total Medido: " + pbtMedido + " kg")

  // Verificação dos limites
  if (pesoLiquidoCarga > cargaPlaqueta && pbtMedido > pbtPlaqueta) {
    alert("Atenção: Ambos os limites foram ultrapassados! Peso Líquido (L) e Peso Bruto Total (PBT).")
  } else if (pesoLiquidoCarga > cargaPlaqueta) {
    alert("Atenção: O limite de Peso Líquido (L) da carga foi ultrapassado!")
  } else if (pbtMedido > pbtPlaqueta) {
    alert("Atenção: O limite de Peso Bruto Total (PBT) foi ultrapassado!")
  } else {
    alert("Veículo liberado! Todos os pesos estão dentro dos limites permitidos.")
  }
}



function calcular_Gael_Jares() {
  // entedimento
  // O programa calcula o lucro da temporada de vendas de jarés do Gael baseado na quantidade de caminhões
  // e compara o número de caminhões desta temporada com o da temporada passada.

  // info e variavesi
  let caminhoesAtuais, caminhoesPassados
  let totalJares, faturamentoJares, custoFrete, lucroTotal

  // entrada de dados
  caminhoesAtuais = Number(prompt("Digite o número de caminhões utilizados NESTA temporada:"))
  caminhoesPassados = Number(prompt("Digite o número de caminhões utilizados na TEMPORADA PASSADA:"))

  // processamento
  totalJares = caminhoesAtuais * 50
  faturamentoJares = totalJares * 90
  custoFrete = caminhoesAtuais * 450
  lucroTotal = faturamentoJares - custoFrete

  // Saida
  alert("Lucro da temporada de vendas: R$ " + lucroTotal.toFixed(2))

  if (caminhoesAtuais > caminhoesPassados) {
    alert("A quantidade de caminhões AUMENTOU em relação à temporada passada!")
  } else if (caminhoesAtuais < caminhoesPassados) {
    alert("A quantidade de caminhões DIMINUIU em relação à temporada passada.")
  } else {
    alert("A quantidade de caminhões SE MANTEVE igual à temporada passada.")
  }
}


function calcular_Peba_Campeonato() {
  // entedimento
  // O programa lê vitórias, empates e derrotas do time para calcular o total de pontos e seu aproveitamento.
  // Verifica se o aproveitamento é superior a 70% para classificar como candidato ao título.

  // info e variavesi
  let vitorias, empates, derrotas
  let totalPontos, totalJogos, pontosPossiveis, aproveitamento

  // entrada de dados
  vitorias = Number(prompt("Digite o número de vitórias do time:"))
  empates = Number(prompt("Digite o número de empates do time:"))
  derrotas = Number(prompt("Digite o número de derrotas do time:"))

  // processamento
  totalPontos = (vitorias * 3) + (empates * 1)
  totalJogos = vitorias + empates + derrotas
  pontosPossiveis = totalJogos * 3

  aproveitamento = (totalPontos / pontosPossiveis) * 100

  // Saida
  alert("Total de Pontos: " + totalPontos + "\nAproveitamento: " + aproveitamento.toFixed(1) + "%")

  if (aproveitamento >= 70) {
    alert("Este time tem mais de 70% de aproveitamento e é um forte CANDIDATO AO TÍTULO!")
  } else {
    alert("Este time não atingiu os 70% de aproveitamento necessários para ser considerado favorito ao título.")
  }
}

function calcular_Junin_Salario() {
  // entedimento
  // O programa calcula o valor que o Junin ganha por dia e por semana (escala 5x2),
  // e também a porcentagem que seus projetos freelancers representam na sua renda total.

  // info e variavesi
  let salarioMensal, diasTrabalhados, rendaFreela
  let salarioDiario, salarioSemanal, rendaTotal, porcentagemFreela

  // entrada de dados
  salarioMensal = Number(prompt("Digite o salário mensal do trabalho principal (R$):"))
  diasTrabalhados = Number(prompt("Digite a quantidade de dias trabalhados no mês:"))
  rendaFreela = Number(prompt("Digite o ganho mensal com projetos por fora / freelas (R$):"))

  // processamento
  salarioDiario = salarioMensal / diasTrabalhados
  salarioSemanal = salarioDiario * 5 // considerando escala 5x2 (5 dias na semana)

  rendaTotal = salarioMensal + rendaFreela
  porcentagemFreela = (rendaFreela / rendaTotal) * 100

  // Saida
  alert("Valor recebido por dia trabalhado: R$ " + salarioDiario.toFixed(2) + "\n" +
    "Salário semanal estimado (escala 5x2): R$ " + salarioSemanal.toFixed(2) + "\n" +
    "Projetos Freela representam " + porcentagemFreela.toFixed(2) + "% da sua renda total.")
}


function calcular_Capitao_Ganso() {
  // entedimento
  // O programa calcula o lucro total em reais e a porcentagem de lucro em relação aos custos do Capitão Ganso,
  // identificando qual fonte gerou mais faturamento (ingressos ou itens).

  // info e variavesi
  let custosSuprimentos, faturamentoIngressos, faturamentoItens
  let faturamentoTotal, lucroReais, lucroPercentual

  // entrada de dados
  custosSuprimentos = Number(prompt("Digite o gasto com suprimentos e mercadorias (R$):"))
  faturamentoIngressos = Number(prompt("Digite o faturamento com ingressos (R$):"))
  faturamentoItens = Number(prompt("Digite o faturamento com itens (R$):"))

  // processamento
  faturamentoTotal = faturamentoIngressos + faturamentoItens
  lucroReais = faturamentoTotal - custosSuprimentos
  lucroPercentual = (lucroReais / custosSuprimentos) * 100

  // Saida
  alert("Lucro Obtido: R$ " + lucroReais.toFixed(2) + "\nLucro Percentual: " + lucroPercentual.toFixed(2) + "%")

  if (faturamentoIngressos > faturamentoItens) {
    alert("Capitão, você faturou mais com a venda de INGRESSOS!")
  } else if (faturamentoItens > faturamentoIngressos) {
    alert("Capitão, você faturou mais com a venda de ÍTENS!")
  } else {
    alert("Capitão, o faturamento entre ingressos e itens foi igual!")
  }
}

function calcular_Padre_Ernan_Buco() {
  // entedimento
  // O programa lê os custos mensais da igreja e quanto foi arrecadado no dia.
  // Calcula quanto falta para cobrir o custo total e emite um alerta se a meta não for atingida.

  // info e variavesi
  let custosMensais, arrecadacaoDia, valorRestante

  // entrada de dados
  custosMensais = Number(prompt("Digite o valor dos custos mensais da igreja (R$):"))
  arrecadacaoDia = Number(prompt("Digite o valor recebido de doações/dízimos hoje (R$):"))

  // processamento
  if (arrecadacaoDia >= custosMensais) {
    alert("Parabéns Padre! Os custos mensais já foram totalmente pagos!")
  } else {
    valorRestante = custosMensais - arrecadacaoDia
    // Saida
    alert("Faltam R$ " + valorRestante.toFixed(2) + " para pagar completamente os custos mensais.")
    alert("Lembrete ao Padre: Favor lembrar as pessoas na missa sobre a importância de contribuir!")
  }
}



function calcular_Kowalski_Relatorios() {
  // entedimento
  // O programa calcula métricas detalhadas dos relatórios de PF e PJ criados no mês pelo Kowalski
  // e valida se o tipo de relatório com melhor média de valor também possui a maior quantidade.

  // info e variavesi
  let relatoriosPF = 40, relatoriosPJ = 33
  let tempoPF = 12, tempoPJ = 42
  let valorPF = 2350, valorPJ = 8900

  let totalRelatorios, totalTempo, totalValor
  let mediaValorPF, mediaValorPJ
  let mediaTempoPF, mediaTempoPJ

  // processamento
  totalRelatorios = relatoriosPF + relatoriosPJ
  totalTempo = tempoPF + tempoPJ
  totalValor = valorPF + valorPJ

  mediaValorPF = valorPF / relatoriosPF
  mediaValorPJ = valorPJ / relatoriosPJ

  mediaTempoPF = tempoPF / relatoriosPF
  mediaTempoPJ = tempoPJ / relatoriosPJ

  // Saida
  alert("--- RELATÓRIO DO KOWALSKI ---\n" +
    "Total de Relatórios: " + totalRelatorios + "\n" +
    "Tempo Total Trabalhado: " + totalTempo + " horas\n" +
    "Valor Total Recebido: R$ " + totalValor.toFixed(2) + "\n\n" +
    "Média por Relatório PF:\n" +
    " - Valor: R$ " + mediaValorPF.toFixed(2) + " | Tempo: " + mediaTempoPF.toFixed(2) + " hrs\n\n" +
    "Média por Relatório PJ:\n" +
    " - Valor: R$ " + mediaValorPJ.toFixed(2) + " | Tempo: " + mediaTempoPJ.toFixed(2) + " hrs")

  // Validação da Refatoração
  if (mediaValorPJ > mediaValorPF && relatoriosPJ > relatoriosPF) {
    alert("Kowalski está investindo onde dá mais retorno! PJ tem maior média e maior quantidade.")
  } else if (mediaValorPF > mediaValorPJ && relatoriosPF > relatoriosPJ) {
    alert("Kowalski está investindo onde dá mais retorno! PF tem maior média e maior quantidade.")
  } else {
    alert("Atenção: Kowalski NÃO está priorizando a produção do relatório de maior retorno médio!")
  }

}


function calcular_Trajeto_Pomar() {
  // entedimento
  // O programa lê o estoque inicial e o final de laranjas, calcula quantas foram vendidas
  // e exibe um alerta caso o estoque final seja zero.

  // info e variavesi
  let estoqueInicial, estoqueFinal, laranjasVendidas

  // entrada de dados
  estoqueInicial = Number(prompt("Digite a quantidade inicial de laranjas:"))
  estoqueFinal = Number(prompt("Digite a quantidade final de laranjas:"))

  // processamento
  laranjasVendidas = estoqueInicial - estoqueFinal

  // Saida
  alert("Quantidade de laranjas vendidas no dia: " + laranjasVendidas)

  if (estoqueFinal === 0) {
    alert("Aviso: O dia terminou sem laranjas para vender! O estoque deve ser maior no próximo dia.")
  }
}

function calcular_Guilherme_Portoes() {
  // entedimento
  // O programa lê as quantidades de devs CLT, estagiários e PJ, calcula o total de colaboradores
  // e valida se a quantidade de CLT representa pelo menos 50% do total da força de trabalho.

  // info e variavesi
  let clt, estagiarios, pj, totalDevs, porcentagemClt

  // entrada de dados
  clt = Number(prompt("Digite a quantidade de devs CLT:"))
  estagiarios = Number(prompt("Digite a quantidade de estagiários:"))
  pj = Number(prompt("Digite a quantidade de devs PJ:"))

  // processamento
  totalDevs = clt + estagiarios + pj
  porcentagemClt = (clt / totalDevs) * 100

  // Saida
  alert("Total de devs na equipe: " + totalDevs)

  if (porcentagemClt >= 50) {
    alert("A regra da empresa foi cumprida! (" + porcentagemClt.toFixed(1) + "% da equipe é CLT)")
  } else {
    alert("Atenção: A regra interna não foi cumprida! Menos de 50% da equipe é CLT (" + porcentagemClt.toFixed(1) + "%).")
  }
}

function calcular_Pe_Pequeno() {
  // entedimento
  // O programa deve ler a quantidade de pares trocados e o preço por par.
  // Valida se a quantidade e o preço são maiores que zero e limita a 100 pares por loja.

  // info e variavesi
  let precoPar, qtdPares, totalValeTroca

  // entrada de dados
  qtdPares = Number(prompt("Digite a quantidade de pares trocados:"))
  precoPar = Number(prompt("Digite o preço de cada par de calçado (R$):"))

  // processamento
  if (qtdPares <= 0 || precoPar <= 0) {
    alert("Erro: A quantidade e o preço devem ser maiores que zero!")
  } else if (qtdPares > 100) {
    alert("Atenção: O limite por loja é de 100 pares. Favor entrar em contato diretamente com a fábrica.")
  } else {
    totalValeTroca = qtdPares * precoPar
    // Saida
    alert("O valor total do vale trocas é: R$ " + totalValeTroca.toFixed(2))
  }
}


function calcular_Faturamento_Dona_Bete() {
  // entedimento
  // O programa deve ler o faturamento bruto, as despesas do dia e a meta de lucro da Dona Bete.
  // Em seguida, calcula o lucro líquido e verifica se a meta foi atingida ou quanto faltou.

  // info e variavesi
  let faturamentoBruto, premiacoes, presentes, comissoes, metaLucro
  let totalDespesas, lucroLiquido, diferenca

  // entrada de dados
  faturamentoBruto = Number(prompt("Digite o faturamento bruto do dia (R$):"))
  premiacoes = Number(prompt("Digite o valor pago em premiações (R$):"))
  presentes = Number(prompt("Digite o valor gasto em presentes/agrados (R$):"))
  comissoes = Number(prompt("Digite o valor pago em comissões (R$):"))
  metaLucro = Number(prompt("Digite a meta de lucro para hoje (R$):"))

  // processamento
  totalDespesas = premiacoes + presentes + comissoes
  lucroLiquido = faturamentoBruto - totalDespesas

  // Saida
  alert("Lucro líquido obtido: R$ " + lucroLiquido.toFixed(2))

  if (lucroLiquido >= metaLucro) {
    alert("Parabéns! A meta de lucro foi atingida!")
  } else {
    diferenca = metaLucro - lucroLiquido
    alert("A meta não foi atingida. Faltaram R$ " + diferenca.toFixed(2) + " para alcançar a meta.")
  }
}




function calcular_Compra_Macas() {
  // entedimento
  // O programa deve ler a quantidade de maçãs compradas e calcular o total da compra baseado na quantidade

  // info e variavesi
  let qtd_macas, preco_maca, totalpagar

  // entrada de dados
  qtd_macas = Number(prompt("Digite a quantidade de maçãs que vai comprar:"))

  // processamento
  if (qtd_macas < 12) {
    preco_maca = 0.30
  } else {
    preco_maca = 0.25
  }

  totalpagar = qtd_macas * preco_maca

  // Saida
  alert("Total a pagar: R$ " + totalpagar.toFixed(2))
}



function calcular_numero_De_Diarias() {
  // entedimento 
  // O programa deve ler o número de dias que vai ficar no albergue e presentar  o valor final da compoosição. O  valor da diaria depende de quantos dis ficou. tem desconto  e multa.

  // info e variavesi
  let qtd_dias, valorDiaria
  let totalBruto, descontos10, descontop15, totalpagar
  let multa = 150

  // entrada de dados
  qtd_dias = Number(prompt("Digite a quantidade de dias que vai ficar:"))

  // processamento
  if (qtd_dias <= 5) {
    valorDiaria = 100
  } else if (qtd_dias <= 10) {
    valorDiaria = 90
  } else {
    valorDiaria = 80
  }

  totalBruto = qtd_dias * valorDiaria
  descontos10 = totalBruto * 10 / 100
  descontop15 = totalBruto * 15 / 100
  totalpagar = totalBruto - (descontos10 + descontop15) + multa

  // saida
  alert("Total a pagar: R$ " + totalpagar)
}



function verificar_Liberacao_Jaulas() {
  //entendimento
  // O sistema de jaulas funciona com base em dois critérios de segurança: o número de visitantes na área precisa ser zero e o horário precisa estar fora do expediente de visitação (antes das 8h ou depois das 18h).

  // infos e variaveis
  let visitantesNaArea, HoraAtual

  // entrada de dados
  visitantesNaArea = Number("Digite quantos visistantem tem na area:")
  HoraAtual = Number("Digite qual é o Horario atual? (0 a 23)")

  //processamento e saida
  if (visitantesNaArea == 0 && (HoraAtual < 8 || hora > 18)) {
    alert("Liberação autorizada. Abrindo jaula.")
  } else {
    alert("Liberação negada. Área em uso ou fora do horário permitido.")
  }

}

function verificar_Acesso_Comando() {
  // enetdimento
  // verifacar se o usuario tem crachá valida e a digital cadastada para poder liberar o aceso ao centro de comando

  // infos e variaveis
  let crachavalido, digitalReconhecida
  // entrada de dodos
  crachavalido = confirm("Tem crachá valido")
  digitalReconhecida = confirm("Tem digilat reconhecida")
  console.log(crachavalido)
  // processamento e saida
  if (crachavalido == true && digitalReconhecida == true) {
    alert("Acesso liberado")
  } else {
    alert("acesso invalido")
  }


}

function verificar_Transporte() {
  // entedimento
  // O sistema de transporte que liga as principais estações. O uso do transporte depende de duas variáveis: se há manutenção ativa e se o nível de emergência do parque está alto. O transporte só pode funcionar se não estiver em manutenção e não houver emergência.

  //  infos e variaveis
  let emManutencao
  let emergenciaAtiva

  // leitura de dados
  manutencaoInput = prompt("Está em manutenção?")
  emergenciaInput = prompt("Emergência ativa? ")

  //  processamento e saida
  if (!emManutencao && emergenciaAtiva) {
    alert("Transporte liberado para uso.")
  } else {
    alert("Transporte indisponível por motivo de segurança.")
  }

}


function verificar_EntradaPalco() {
  // entendimento 
  //o mago ilusionista da periferia, se apresenta em festas infantis e eventos corporativos. Para entrar no palco principal e realizar seu número, ele precisa que o sistema de som esteja funcionando e que o figurino esteja completo (incluindo o chapéu que vive sendo esquecido no ônibus).

  // Infos e variáveis
  let somFuncionando;
  let figurinoCompleto;

  // leitura de dados
  somFuncionando = prompt("O som está funcionando? ")
  figurinoCompleto = prompt("O figurino está completo? ")

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
  estagripado = confirm("Está gripado? ")
  tempoViage = Number(prompt("Digite o tempo de viagem em minutos:"))

  // processamento e saida
  if (estagripado == true && tempoViage < 45) {
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
  criancasPequenas = prompt("Digite a quantidade de crianças:")
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

