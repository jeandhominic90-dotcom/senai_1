programa {
  funcao inicio() {
    // infos e vairiaves
    real peso ,distancia,volume
    real frete
     // ler os dados
     escreva("Peso: ")
     leia(peso)
     se(peso > 0){
        // continua
      escreva("Distancia: ")
      leia(distancia)
  
      se(distancia > 0){
      escreva("volume: ")
    leia(volume)
    se(volume > 0){
      //continua
      // processar
     frete=15+(2*peso)+(0.05*distancia)+(10*volume)
     //saida
     escreva("Valor do frete: R$" + frete)
    }senao{
      escreva("Volume invalido")
    }
     }senao{
      escreva("Distancia invalido")
     }
     }senao{
      escreva("Peso invalido")
     }
     
  }
}
