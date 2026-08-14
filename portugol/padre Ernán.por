programa {
  funcao inicio() {
     // dados e variaveis
    real custo_mensais_igreja , quanto_foi_recebido_doacoes
    real quanto_falta
    //ler os dados
    escreva("quais foi so custos mensais da igreja: R$")
    leia(custo_mensais_igreja)
    escreva("digite quanto foi recibido doações: R$")
    leia(quanto_foi_recebido_doacoes)
    //procesar/calcular
    quanto_falta = custo_mensais_igreja - quanto_foi_recebido_doacoes
    // apresentar os resultado
    escreva("quanto falta para pagar o custos mensal e : R$ " + quanto_falta )
  }
}
