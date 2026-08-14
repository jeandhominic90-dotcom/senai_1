programa
{
	funcao inicio()
	{
		// dados  - variaveis
		real peso, distancia, volume, frete

		// ler dados
		escreva("Digite o peso (em kg): ")
		leia(peso)

		escreva("Digite a distância (em km): ")
		leia(distancia)

		escreva("Digite o volume (em m³): ")
		leia(volume)

		//procesar/calcular
		frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

		
	  // apresentar os resultado
		escreva("\nO preço total do frete é: R$ ", frete)
	}
}
