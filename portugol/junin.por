programa {
  funcao inicio() {
    // dados e variaveis
    real salrio_mensal
    real dias_trabalhados
    real dia_trabalhado
    //ler os dados
    escreva("Digite o salário semanal:")
    leia(salrio_mensal)
    escreva("Digites os dias trabalhados:")
    leia(dias_trabalhados)
    //procesar/calcular
    dia_trabalhado = salrio_mensal / dias_trabalhados
    // apresentar os resultado
    escreva("o Junin vai receber por dias trabalhados R$" + dia_trabalhado + " por dias trabalhados")
  }
}
