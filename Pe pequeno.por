programa {
  funcao inicio() {
    // dados - variaveis
    inteiro qtd_Par 
    real preco, valor_troca
    // entradas-leituras
    escreva("Digite a quantida de  par:")
    leia(qtd_Par)
    escreva("Digite cual é o preço por par: R$")
    leia(preco)
    // processamento
    valor_troca = preco * qtd_Par
    // saidas
    escreva("vai recebr por pagar: R$" + valor_troca)
  }
}
