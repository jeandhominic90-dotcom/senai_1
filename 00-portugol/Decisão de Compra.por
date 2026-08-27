programa {
  funcao inicio() {
     // infos e dados
     real saldo, produto
     // entrada de dados
     escreva("Digite o valor do produto: ")
     leia(produto)
     escreva("Digite o valor do sando da conta: ")
     leia(saldo)
     //processamento
     se(saldo >= produto){
      escreva("Valor disponivel para comprar ")
      se (saldo == produto){
        escreva(" , você não tem  mais dinheiro na conta!")
      }
     }senao {
      escreva("Valor maior que o saldo da conta")
     }
     //saida
  }
}
