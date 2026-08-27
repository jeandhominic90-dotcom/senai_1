programa
{
	funcao inicio()
	{
		 // dados  - variaveis
		inteiro n
		real chance

	//ler os dados
		escreva("Digite o número de vezes que o candidato usou o celular: ")
		leia(n)

		 //procesar/calcular
		chance = (0.1 / (1 + 500 * n)) * 100

		// apresentar os resultado
		escreva("A chance de aprovação do candidato é de: ", chance, "%")
	}
}
