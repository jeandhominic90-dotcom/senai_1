programa {
  funcao inicio() {
    // dados  - variaveis
    inteiro vitorias, enpates, pontos 
    cadeia time 

    // receber valor para estes dados
    escreva("Nome do time: ")
    leia(time)
    escreva("Digite o número de vitorias:")
    leia(vitorias)
     escreva("Digite o número de enpates:")
    leia(enpates)
    // procesamento
    pontos = vitorias*3 + enpates
    // apresentação dos resultados - saida
    // escreva("seu time tem " + pontos + "pontos")
    escreva(time + ": " + pontos)
    gremio
  }
}
