programa {
  funcao inicio() {
   // infos e vairiaves
  inteiro numero_1
  inteiro numero_2
   // ler os dados
   escreva("Digite o primero número: ")
   leia(numero_1)
   escreva("Digite o segundo número: ")
   leia(numero_2)
  //processamento
  se (numero_1 > numero_2){
   escreva("" + numero_1 + " é maior que: " + numero_2)
 
  }senao se(numero_2 > numero_1) {
    escreva("" + numero_2 + " é maior que: " + numero_1)
  }senao{
    escreva("Os números são iguais ")
  }

  }
}
