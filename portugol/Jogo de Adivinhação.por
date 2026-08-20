programa {
  inclua biblioteca Util --> u
  funcao inicio() {
		inteiro valor_sorteado, numero_digitado

		valor_sorteado = u.sorteia(1, 10)
			escreva("Digite o numero sorteado:")
      leia(numero_digitado)
      se(numero_digitado == valor_sorteado ){
        escreva("você acertou")
      }senao{
        escreva("você errou ")
      }
      
