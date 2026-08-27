programa
{
	funcao inicio()
	{
		inteiro shows, total_bombas
		real preco_unitario, custo_total

		escreva("Informe a quantidade de shows marcados: ")
		leia(shows)

		escreva("Informe o preço unitário da bomba de fumaça: R$ ")
		leia(preco_unitario)

		total_bombas = shows * 7
		custo_total = total_bombas * preco_unitario

		escreva("Total de bombas de fumaça necessárias: ", total_bombas)
		escreva("Dinheiro necessário para comprar: R$ ", custo_total, "")
	}
}
