programa
{
	funcao inicio()
	{
		real suprimentos, faturamento_ingressos, faturamento_itens
		real faturamento_total, lucro_reais, lucro_percentual

		escreva("Informe os gastos com suprimentos e mercadorias: R$ ")
		leia(suprimentos)

		escreva("Informe o faturamento com ingressos: R$ ")
		leia(faturamento_ingressos)

		escreva("Informe o faturamento com vendas de itens: R$ ")
		leia(faturamento_itens)

		faturamento_total = faturamento_ingressos + faturamento_itens
		lucro_reais = faturamento_total - suprimentos
		
		// Cálculo da porcentagem de lucro sobre os custos/investimento
		lucro_percentual = (lucro_reais / suprimentos) * 100

		escreva("Lucro em Reais: R$ ", lucro_reais)
		escreva("Lucro Percentual: ", lucro_percentual, "%")
	}
}
